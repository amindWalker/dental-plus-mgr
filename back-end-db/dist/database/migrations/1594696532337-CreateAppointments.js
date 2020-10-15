"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const typeorm_1 = require("typeorm");
class CreateAppointments1594696532337 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "appointments",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()",
                },
                {
                    name: "provider",
                    type: "varchar",
                },
                {
                    name: "date",
                    type: "timestamp with time zone",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("appointments");
    }
}
exports.default = CreateAppointments1594696532337;
