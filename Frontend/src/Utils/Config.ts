class Config {
    public devGroupsUrl = 'http://localhost:3001/api/dev-groups/';
    public appointmentsByDevGroupUrl = 'http://localhost:3001/api/appointments-by-dev-group/';
    public appointmentsUrl = 'http://localhost:3001/api/appointments/';
}

const appConfig = new Config(); // Singleton

export default appConfig;
