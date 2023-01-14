import AppointmentModel from '../../../Models/AppointmentModel';

import './Card.css';

interface AppointmentProps {
  appointment: AppointmentModel;
}

const Card: React.FC<AppointmentProps> = ({ appointment }): JSX.Element => {
  return (
    <div className="Card Box">
      <div><b>{appointment.devGroupName}</b></div>
      <div><b>Start:</b> {new Date(appointment.start).toLocaleString()}</div>
      <div><b>End:</b> {new Date(appointment.end).toLocaleString()}</div>
      <div><b>Duration:</b> {appointment.duration} minutes</div>
      <div className='Description'><b>Description:</b> {appointment.description}</div>
      <div><b>Location:</b> {appointment.room}</div>
    </div>
  );
};

export default Card;
