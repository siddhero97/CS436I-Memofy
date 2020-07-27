"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var passport_1 = __importDefault(require("passport"));
require("../../middlewares/passport");
var services_1 = require("./services");
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.createUserService = new services_1.CreateUserService();
        this.fetchUserService = new services_1.FetchUserService();
        this.loginUserService = new services_1.LoginUserService();
        this.router = express_1.Router();
        this.routes();
    }
    UserRoutes.prototype.routes = function () {
        this.router.post('/signup', passport_1.default.authenticate('signup', { session: false }), this.createUserService.execute);
        this.router.post('/login', this.loginUserService.execute);
        this.router.get('/profile', passport_1.default.authenticate('jwt', { session: false }), this.fetchUserService.execute);
    };
    return UserRoutes;
}());
exports.default = UserRoutes;
