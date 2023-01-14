class AppointmentModel {
  public appointmentId: number;
  public devGroupId: number;
  public start: Date;
  public end: Date;
  public description: string;
  public room: string;
  public devGroupName: string;
  public duration: string;
} 

export default AppointmentModel;