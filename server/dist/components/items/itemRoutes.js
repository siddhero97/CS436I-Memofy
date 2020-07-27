"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var services_1 = require("./services");
var BookRoutes = /** @class */ (function () {
    function BookRoutes() {
        this.createItemService = new services_1.CreateItemService();
        this.fetchItemService = new services_1.FetchItemService();
        this.deleteItemService = new services_1.DeleteItemService();
        this.updateItemService = new services_1.UpdateItemService();
        this.router = express_1.Router();
        this.routes();
    }
    BookRoutes.prototype.routes = function () {
        this.router.get('/get', this.fetchItemService.execute);
        this.router.post('/post', this.createItemService.execute);
        this.router.put('/put', this.updateItemService.execute);
        this.router.delete('/del', this.deleteItemService.execute);
    };
    return BookRoutes;
}());
exports.default = BookRoutes;
