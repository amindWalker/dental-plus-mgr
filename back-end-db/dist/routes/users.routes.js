"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const upload_1 = __importDefault(require("../config/upload"));
const CreateUserService_1 = __importDefault(require("../services/CreateUserService"));
const ChangeUserAvatarService_1 = __importDefault(require("../services/ChangeUserAvatarService"));
const ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
const usersRouter = express_1.Router();
const upload = multer_1.default(upload_1.default);
usersRouter.post('/', async (request, response) => {
    try {
        const { name, email, password } = request.body;
        const createUser = new CreateUserService_1.default();
        const user = await createUser.execute({
            name,
            email,
            password,
        });
        delete user.password;
        return response.json(user);
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
usersRouter.patch('/avatar', ensureAuthenticated_1.default, upload.single('avatar'), async (request, response) => {
    try {
        const changeUserAvatar = new ChangeUserAvatarService_1.default();
        const user = await changeUserAvatar.execute({
            //@ts-ignore
            user_id: request.user.id,
            avatarFilename: request.file.filename,
        });
        delete user.password;
        return response.json({ user });
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
exports.default = usersRouter;
