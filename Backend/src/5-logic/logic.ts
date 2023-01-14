import { OkPacket } from 'mysql';
import dal from '../2-utils/dal';
import AppointmentModel from '../4-models/appointment-model';
import DevGroupModel from '../4-models/dev-group-model';
import { ValidationErrorModel } from '../4-models/error-models';


const getAllDevGroups = async (): Promise<DevGroupModel[]> => {
  const sql = `SELECT * FROM devGroups`;
  const devGroups = await dal.execute(sql);
  return devGroups;
};

const getAllAppointmentsByDevGroup = async (devGroupId: number): Promise<AppointmentModel[]> => {
  const sql = `
    SELECT A.*, D.devGroupName, TIMESTAMPDIFF(MINUTE, start, end) AS duration
    FROM appointments AS A JOIN devGroups AS D
    ON A.devGroupId = D.devGroupId 
    WHERE A.devGroupId = ?
  `;
  const appointments = await dal.execute(sql, [devGroupId]);
  return appointments;
};

const addAppointment = async (appointment: AppointmentModel): Promise<AppointmentModel> => {
  if (await isGroupInMeeting(appointment)) {
    throw new ValidationErrorModel(`This developers group '${appointment.devGroupId}' already meet in this hours`);
  }
  const sql = `INSERT INTO appointments VALUES(DEFAULT, ?, ?, ?, ?, ?)`;
  const info: OkPacket = await dal.execute(sql, [
    appointment.devGroupId,
    appointment.start,
    appointment.end,
    appointment.description,
    appointment.room
  ]);
  appointment.appointmentId = info.insertId;
  return appointment;
};

const isGroupInMeeting = async (appointment: AppointmentModel): Promise<boolean> => {
  // Query
  const sql = `
    SELECT COUNT(*) AS count
    FROM appointments
    WHERE (devGroupId = 1 AND ((start >= ? AND start <= ?) OR (end >= ? AND end <= ?)))
	    OR (devGroupId = 1 AND ((start <= ? AND end >= appointment.start, appointment.end)));
  `;

  // Execute
  const result = await dal.execute(sql, [appointment.devGroupId, appointment.start, appointment.end, appointment.start, appointment.end, appointment.start, appointment.end]);
  
  // Check if already exists
  return result[0].count > 0;
};

export default {
  getAllDevGroups,
  getAllAppointmentsByDevGroup,
  addAppointment
};
