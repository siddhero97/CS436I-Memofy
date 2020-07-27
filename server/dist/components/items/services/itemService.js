"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var itemSchema = require('../../../models/itemSchema');
var uuidv4 = require('uuid').v4;
var ItemService = /** @class */ (function () {
    function ItemService() {
    }
    ItemService.prototype.getItem = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var items, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, itemSchema.find()];
                    case 1:
                        items = _a.sent();
                        return [2 /*return*/, res.json(items)];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, res.status(500).send(err_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ItemService.prototype.postItem = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var item, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        item = new itemSchema({
                            _id: uuidv4(),
                            user_id: req.body.user_id,
                            count: req.body.count,
                            name: req.body.name,
                            category: req.body.category,
                            icon: req.body.icon,
                            expiryDate: req.body.expiryDate
                        });
                        return [4 /*yield*/, item.save()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ item: 'Item created' })];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [2 /*return*/, res.status(500).json({ item: err_2 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ItemService.prototype.putItem = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, itemSchema.findOneAndUpdate({
                                _id: req.body._id
                            }, {
                                count: req.body.count
                            }, {
                                new: true
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ item: 'Item updated' })];
                    case 2:
                        err_3 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ item: err_3 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ItemService.prototype.deleteItem = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var itemDelete, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, itemSchema.deleteOne({ name: req.body.name })];
                    case 1:
                        itemDelete = _a.sent();
                        console.log(itemDelete);
                        if (itemDelete) {
                            return [2 /*return*/, res.status(200).json({ item: 'Successfully deleted' })];
                        }
                        else {
                            return [2 /*return*/, res.status(500).json({ item: 'Could not delete' })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        console.log(err_4);
                        return [2 /*return*/, res.status(500).send(err_4)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    return ItemService;
}());
exports.default = ItemService;
