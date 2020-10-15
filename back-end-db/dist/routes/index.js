"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appointments_routes_1 = __importDefault(require("./appointments.routes"));
var users_routes_1 = __importDefault(require("./users.routes"));
var auth_sessions_routes_1 = __importDefault(require("./auth.sessions.routes"));
var routes = express_1.Router();
routes.use('/appointments', appointments_routes_1.default);
routes.use('/users', users_routes_1.default);
routes.use('/sessions', auth_sessions_routes_1.default);
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
exports.default = routes;
