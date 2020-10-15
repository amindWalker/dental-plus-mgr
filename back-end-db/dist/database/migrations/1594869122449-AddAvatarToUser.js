"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAvatarToUser1594869122449 = void 0;
const typeorm_1 = require("typeorm");
class AddAvatarToUser1594869122449 {
    async up(queryRunner) {
        await queryRunner.addColumn('users', new typeorm_1.TableColumn({
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn('users', 'avatar');
    }
}
exports.AddAvatarToUser1594869122449 = AddAvatarToUser1594869122449;
