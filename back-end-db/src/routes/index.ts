import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './auth.sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

// routes.get('/appointments', (request, response) => {
//   const { provider, date } = request.body;

//   const appointments = {
//     provider,
//     date,
//   };

//   return response.json(appointments);
// });

// routes.post('/appointments', (request, response) => {
//   const { provider, date } = request.body;

//   const appointment = {
//     provider,
//     date,
//   };

//   return response.json(appointment);
// });

// routes.post('/users', (request, response) => {
//   const { name, email } = request.body;

//   const user = {
//     name,
//     email,
//   };

//   return response.json(user);
// });

export default routes;
