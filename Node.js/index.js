"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var viber_bot_1 = require("viber-bot");
var viber_bot_2 = require("viber-bot");
var TextMessage = viber_bot_2.Message.Text;
var express_1 = __importDefault(require("express"));
var app = express_1.default();
if (!process.env.BOT_ACCOUNT_TOKEN) {
  console.log("Could not find bot account token key.");
}
if (!process.env.EXPOSE_URL) {
  console.log("Could not find exposing url");
}
var bot = new viber_bot_1.Bot({
  //authToken: process.env.BOT_ACCOUNT_TOKEN,
  authToken: "viber_bot_token",
  name: "chat_name",
  avatar: "avatar_address",
});
var roomname;
var username;
var profile_pic;
var country_origin;
var language_origin;
bot.on(viber_bot_1.Events.CONVERSATION_STARTED, function (response) {
  response.send(
    new TextMessage(
      "Hi there " +
        response.userProfile.name +
        ". I am " +
        bot.name +
        "! I will receive your messages."
    )
  );
});
bot.on(viber_bot_1.Events.MESSAGE_RECEIVED, function (message, response) {
  var _a, _b, _c, _d, _e;
  response.send(new TextMessage("Message received."));
  roomname =
    (_a = response.userProfile) === null || _a === void 0 ? void 0 : _a.id;
  username =
    (_b = response.userProfile) === null || _b === void 0 ? void 0 : _b.name;
  profile_pic =
    (_c = response.userProfile) === null || _c === void 0 ? void 0 : _c.avatar;
  country_origin =
    (_d = response.userProfile) === null || _d === void 0 ? void 0 : _d.country;
  language_origin =
    (_e = response.userProfile) === null || _e === void 0
      ? void 0
      : _e.language;
  console.log(roomname);
});
var middleware = bot.middleware();
var port = process.env.PORT || 9000;
app.use("/viber/webhook", middleware);
// console.log(middleware);
// app.use('/viber/webhook', function(req, res, next) {
//     console.log(URL);
//     middleware(res, req, next);
// });
app.listen(port, function () {
  console.log("Application running on port: " + port);
  bot
    .setWebhook(process.env.EXPOSE_URL + "/viber/webhook")
    .catch(function (error) {
      console.log("Can not set webhook on following server. Is it running?");
      console.error(error);
    });
});
