"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
exports.__esModule = true;
var restClient_1 = require("./restClient");
function test() {
  return __awaiter(this, void 0, void 0, function () {
    var client,
      textMessage,
      imageMessage,
      stickerMessage,
      videoMessage,
      fileMessage,
      response,
      userInfo,
      info;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          client = new restClient_1["default"](
            "token",
            "https://chatapi.viber.com"
          );
          textMessage = {
            receiver: "id of reciever",
            sender: {
              name: "Test cat bot",
            },
            type: "text",
            text: "This message has been sent as a test",
          };
          imageMessage = {
            receiver: "id of reciever",
            sender: {
              name: "Test cat bot",
            },
            type: "picture",
            media: "https://i.ytimg.com/vi/Pcsvgv0jbYQ/maxresdefault.jpg",
          };
          stickerMessage = {
            receiver: "id of reciever",
            sender: {
              name: "Test cat bot",
            },
            type: "sticker",
            sticker_id: "40131",
          };
          videoMessage = {
            receiver: "id of reciever",
            sender: {
              name: "Test cat bot",
            },
            type: "video",
            media:
              "https://cold.strm.yandex.net/vh-bsvideo-converted/vod-content/11723862938596180444_169_360p.mp4?sid=9c07176913e0cae9fc4b02aaf48251a579d2edcdcea0cc55283e2ee9191776dd&vsid=8a02471e9554959d77dd8dba198186ef1839fabdd137xWEBx6877x1622749248&noredir=1&lid=102",
            size: 10000,
          };
          fileMessage = {
            receiver: "id of reciever",
            sender: {
              name: "Test cat bot",
            },
            type: "file",
            file_name: "for_Cat_owners.pdf",
            media:
              "https://www.bawbawshire.vic.gov.au/files/sharedassets/public/compliance/documents/cats/are-you-a-cat-owner.pdf",
            size: 1677722,
          };
          return [4 /*yield*/, client.sendMessage(imageMessage)];
        case 1:
          response = _a.sent();
          console.log(response);
          userInfo = {
            id: "id of reciever",
          };
          return [4 /*yield*/, client.getUserDetails(userInfo)];
        case 2:
          info = _a.sent();
          console.log(info);
          return [2 /*return*/];
      }
    });
  });
}
test();
