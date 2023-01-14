import axios from 'axios';
import AppointmentModel from '../Models/AppointmentModel';
import DevGroupModel from '../Models/DevGroupModel';
import appConfig from '../Utils/Config';

class AppointmentsService {
  // Get all development groups
  public async getAllDevGroups(): Promise<DevGroupModel[]> {
    const response = await axios.get<DevGroupModel[]>(appConfig.devGroupsUrl);
    const devGroups = response.data;
    return devGroups;
  }

  // Get all Appointments by development group
  public async getAppointmentsByDevGroup(devGroupId: number): Promise<AppointmentModel[]> {
    const response = await axios.get<AppointmentModel[]>(appConfig.appointmentsByDevGroupUrl + devGroupId);
    const appointments = response.data;
    return appointments;
  }

  // Add new appointment
  public async addAppointment(appointment: AppointmentModel): Promise<void> {
    await axios.post<AppointmentModel>(appConfig.appointmentsUrl, appointment);
  }
}

const appointmentsService = new AppointmentsService();

export default appointmentsService;