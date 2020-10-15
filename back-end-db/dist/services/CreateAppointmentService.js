"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const date_fns_1 = require("date-fns");
const typeorm_1 = require("typeorm");
const AppointmentsRepository_1 = __importDefault(require("../repositories/AppointmentsRepository"));
class CreateAppointmentService {
    // private appointmentsRepository: AppointmentsRepository
    // constructor(appointmentsRepository: AppointmentsRepository) {
    //   this.appointmentsRepository = appointmentsRepository
    // }
    async execute({ date, provider_id }) {
        const appointmentsRepository = typeorm_1.getCustomRepository(AppointmentsRepository_1.default);
        const appointmentDate = date_fns_1.startOfHour(date);
        const findAppointmentInSameDate = await appointmentsRepository.findByDate(appointmentDate);
        if (findAppointmentInSameDate) {
            throw new Error('This appointment is already booked');
        }
        const appointment = appointmentsRepository.create({
            provider_id,
            date: appointmentDate,
        });
        await appointmentsRepository.save(appointment);
        return appointment;
    }
}
exports.default = CreateAppointmentService;
