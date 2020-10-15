"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const typeorm_1 = require("typeorm");
class CreateUsers1594754428843 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()",
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                    isUnique: true,
                },
                {
                    name: "password",
                    type: "varchar",
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
        await queryRunner.dropTable("users");
    }
}
exports.default = CreateUsers1594754428843;
