"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var services_1 = require("./services");
var FridgeRoutes = /** @class */ (function () {
    function FridgeRoutes() {
        this.createFridgeService = new services_1.CreateFridgeService();
        this.fetchFridgeService = new services_1.FetchFridgeService();
        this.deleteFridgeService = new services_1.DeleteFridgeService();
        this.router = express_1.Router();
        this.routes();
    }
    FridgeRoutes.prototype.routes = function () {
        this.router.get('/get', this.fetchFridgeService.execute);
        this.router.post('/post', this.createFridgeService.execute);
        this.router.delete('/delete', this.deleteFridgeService.execute);
    };
    return FridgeRoutes;
}());
exports.default = FridgeRoutes;
