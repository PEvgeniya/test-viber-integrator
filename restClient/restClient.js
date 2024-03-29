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
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
var ViberRestClient = /** @class */ (function () {
    function ViberRestClient(token, apiUrl) {
        var _this = this;
        this.createUrl = function (endpoint) {
            return _this._apiUrl + endpoint;
        };
        this.callMethod = function (apiUrl, init) {
            var _a;
            var initWithHeaders = init !== null && init !== void 0 ? init : {};
            initWithHeaders.headers = (_a = initWithHeaders.headers) !== null && _a !== void 0 ? _a : {};
            initWithHeaders.headers["X-Viber-Auth-Token"] = _this._token;
            return node_fetch_1["default"](apiUrl, initWithHeaders);
        };
        this.sendMessage = function (message) { return __awaiter(_this, void 0, void 0, function () {
            var url, response;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = this.createUrl("/pa/send_message");
                        return [4 /*yield*/, this.callMethod(url, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(message)
                            })];
                    case 1:
                        response = _b.sent();
                        if (!(response.status === 200 || response.status === 201)) return [3 /*break*/, 3];
                        _a = {};
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, (_a.body = (_b.sent()),
                            _a.type = "success",
                            _a)];
                    case 3: return [2 /*return*/, {
                            type: "error",
                            status: response.status
                        }];
                }
            });
        }); };
        this.getUserDetails = function (user) { return __awaiter(_this, void 0, void 0, function () {
            var url, response;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = this.createUrl("/pa/get_user_details");
                        return [4 /*yield*/, this.callMethod(url, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(user)
                            })];
                    case 1:
                        response = _b.sent();
                        if (!(response.status === 200)) return [3 /*break*/, 3];
                        _a = {
                            type: "success"
                        };
                        return [4 /*yield*/, response.json(user)];
                    case 2: return [2 /*return*/, (_a.body = _b.sent(),
                            _a)];
                    case 3: return [2 /*return*/, {
                            type: "error",
                            status: response.status
                        }];
                }
            });
        }); };
        this._token = token;
        this._apiUrl = apiUrl.endsWith("/")
            ? apiUrl.slice(0, apiUrl.length - 1)
            : apiUrl;
    }
    ViberRestClient.prototype.setWebhookUrl = function (newUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.createUrl("/pa/set_webhook");
                        return [4 /*yield*/, this.callMethod(url, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({ url: newUrl !== null && newUrl !== void 0 ? newUrl : "" })
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ViberRestClient;
}());
exports["default"] = ViberRestClient;
