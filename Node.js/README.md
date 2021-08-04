Run ngrok http 9000
When successed:

        ngrok by @inconshreveable                                                                                                                             (Ctrl+C to quit)

        Session Status                online
        Session Expires               1 hour, 42 minutes
        Version                       2.3.40
        Region                        United States (us)
        Web Interface                 http://127.0.0.1:4040
        Forwarding                    http://9721757186cc.ngrok.io -> http://localhost:9000
        Forwarding                    https://9721757186cc.ngrok.io -> http://localhost:9000

If it's launched set to run application successfully by issuing following command:
BOT_ACCOUNT_TOKEN=[auth.token]\* EXPOSE_URL=[https://9721757186cc.ngrok.io] node index.js

\*viber-bot token
