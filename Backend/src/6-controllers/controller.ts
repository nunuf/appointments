import express, { Request, Response, NextFunction } from 'express';
import AppointmentModel from '../4-models/appointment-model';
import logic from '../5-logic/logic';

const router = express.Router(); // Capital R

// GET http://localhost:3001/api/dev-groups
router.get("/dev-groups", async (request: Request, response: Response, next: NextFunction) => {
  try {
    const devGroups = await logic.getAllDevGroups();
    response.json(devGroups);
  }
  catch (err: any) {
    next(err);
  }
});

// GET http://localhost:3001/api/appointments-by-dev-group/:devGroupId
router.get("/appointments-by-dev-group/:devGroupId", async (request: Request, response: Response, next: NextFunction) => {
  try {
    const devGroupId = +request.params.devGroupId;
    const appointments = await logic.getAllAppointmentsByDevGroup(devGroupId);
    response.json(appointments);
  }
  catch (err: any) {
    next(err);
  }
});

// POST http://localhost:3001/api/appointments
router.post("/appointments", async (request: Request, response: Response, next: NextFunction) => {
  try {
    const appointment = new AppointmentModel(request.body);
    const addedAppointment = await logic.addAppointment(appointment);
    response.status(201).json(addedAppointment);
  }
  catch (err: any) {
    next(err);
  }
});

export default router;