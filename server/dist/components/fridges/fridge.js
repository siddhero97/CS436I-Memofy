"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FridgeSchema = void 0;
var mongoose_1 = require("mongoose");
exports.FridgeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    userIds: {
        type: [String],
        required: true
    },
    categories: {
        type: [String],
        required: true
    },
    filters: {
        type: [String],
        required: true
    }
});
var Fridge = mongoose_1.model("fridges", exports.FridgeSchema);
exports.default = Fridge;
