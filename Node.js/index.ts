import { Bot as ViberBot, Events as BotEvents} from "viber-bot";
import { Message } from "viber-bot"
const TextMessage = Message.Text;
import express from "express";
const app = express();

if (!process.env.BOT_ACCOUNT_TOKEN) {
  console.log("Could not find bot account token key.");
}
if (!process.env.EXPOSE_URL) {
  console.log("Could not find exposing url");
}

const bot = new ViberBot({
  //authToken: process.env.BOT_ACCOUNT_TOKEN,
  authToken: "viber_bot_token",
  name: "chat_name",
  avatar: "avatar_address",
});

let roomname;
let username;
let profile_pic;
let country_origin;
let language_origin;

bot.on(BotEvents.CONVERSATION_STARTED, (response) => {
  response.send(
    new TextMessage(
      `Hi there ${response.userProfile.name}. I am ${bot.name}! I will receive your messages.`
    )
  );
});

bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
  response.send(new TextMessage(`Message received.`));
  roomname = response.userProfile?.id;
  username = response.userProfile?.name;
  profile_pic = response.userProfile?.avatar;
  country_origin = response.userProfile?.country;
  language_origin = response.userProfile?.language;
  console.log(roomname);
});

const middleware = bot.middleware();

const port = process.env.PORT || 9000;

app.use("/viber/webhook", middleware);

// console.log(middleware);

// app.use('/viber/webhook', function(req, res, next) {
//     console.log(URL);
//     middleware(res, req, next);
// });

app.listen(port, () => {
  console.log(`Application running on port: ${port}`);
  bot.setWebhook(`${process.env.EXPOSE_URL}/viber/webhook`).catch((error) => {
    console.log("Can not set webhook on following server. Is it running?");
    console.error(error);
  });
});
