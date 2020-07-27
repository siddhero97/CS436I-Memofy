"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var compression_1 = __importDefault(require("compression"));
var cors_1 = __importDefault(require("cors"));
var constants_1 = require("./utils/constants");
var items_1 = require("./components/items");
var users_1 = require("./components/users");
var fridges_1 = require("./components/fridges");
var path = __importStar(require("path"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
        this.mongo();
    }
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log("API is running on port " + _this.app.get('port'));
        });
    };
    Server.prototype.config = function () {
        this.app.set('port', constants_1.PORT);
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(compression_1.default());
        this.app.use(cors_1.default());
    };
    Server.prototype.routes = function () {
        if (process.env.NODE_ENV === "production") {
            this.app.use(express_1.default.static("client/build"));
            this.app.get("*", function (req, res) {
                res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
            });
        }
        this.app.use('/users', new users_1.UserRoutes().router);
        this.app.use('/items', new items_1.ItemRoutes().router);
        this.app.use('/fridges', new fridges_1.FridgeRoutes().router);
    };
    Server.prototype.mongo = function () {
        var _this = this;
        var connection = mongoose_1.default.connection;
        connection.on('connected', function () {
            console.log('Mongo Connection Established');
        });
        connection.on('reconnected', function () {
            console.log('Mongo Connection Restablished');
        });
        connection.on('disconnected', function () {
            console.log('Mongo Connection Disconnected');
            console.log('Trying to reconnect to Mongo...');
            setTimeout(function () {
                mongoose_1.default.connect(constants_1.MONGO_URL, {
                    keepAlive: true,
                    socketTimeoutMS: 3000,
                    connectTimeoutMS: 3000,
                    useUnifiedTopology: true,
                    useNewUrlParser: true,
                });
            }, 3000);
        });
        connection.on('close', function () {
            console.log('Mongo Connection Closed');
        });
        connection.on('error', function (error) {
            console.log("Mongo Connection Error: " + error);
        });
        var run = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, mongoose_1.default.connect(constants_1.MONGO_URL, {
                            keepAlive: true,
                            useUnifiedTopology: true,
                            useNewUrlParser: true,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        run().catch(function (error) { return console.error(error); });
    };
    return Server;
}());
exports.default = Server;
