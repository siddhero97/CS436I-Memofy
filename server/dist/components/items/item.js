"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ItemSchema = new mongoose_1.Schema({
    fridgeId: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    }
});
var Item = mongoose_1.model("items", exports.ItemSchema);
exports.default = Item;
