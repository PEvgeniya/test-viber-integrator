import nodeFetch, { RequestInfo, RequestInit } from "node-fetch";
import { ViberMessage, SendMessageResponse } from "./types";

export default class ViberRestClient {
  private _token: string;

  private _apiUrl: string;

  constructor(token: string, apiUrl: string) {
    this._token = token;
    this._apiUrl = apiUrl.endsWith("/")
      ? apiUrl.slice(0, apiUrl.length - 1)
      : apiUrl;
  }

  createUrl = (endpoint: string) => {
    return this._apiUrl + endpoint;
  };

  callMethod = (apiUrl: RequestInfo, init?: RequestInit) => {
    const initWithHeaders = init ?? {};
    initWithHeaders.headers = initWithHeaders.headers ?? {};
    initWithHeaders.headers["X-Viber-Auth-Token"] = this._token;
    return nodeFetch(apiUrl, initWithHeaders);
  };

  sendMessage = async (message: ViberMessage) => {
    const url = this.createUrl("/pa/send_message");
    const response = await this.callMethod(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    if (response.status === 200 || response.status === 201) {
      return {
        body: (await response.json()) as SendMessageResponse,
        type: "success",
      };
    }
    return {
      type: "error",
      status: response.status,
    };
  };

  getUserDetails = async (user) => {
    const url = this.createUrl("/pa/get_user_details");

    const response = await this.callMethod(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status === 200) {
      return {
        type: "success",
        body: await response.json(user),
      };
    }
    return {
      type: "error",
      status: response.status,
    };
  }

  async setWebhookUrl(newUrl?: string) {
    const url = this.createUrl("/pa/set_webhook");
    const response = await this.callMethod(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: newUrl ?? "" }),
    });
    return await response.json();
  }
}
