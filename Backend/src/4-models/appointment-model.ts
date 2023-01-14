class AppointmentModel {
  public appointmentId: number;
  public devGroupId: number;
  public start: Date;
  public end: Date;
  public description: string;
  public room: string;

  public constructor(appointment: AppointmentModel) {
    this.appointmentId = appointment.appointmentId;
    this.devGroupId = appointment.devGroupId;
    this.start = appointment.start;
    this.end = appointment.end;
    this.description = appointment.description;
    this.room = appointment.room;
  }
} 

export default AppointmentModel;