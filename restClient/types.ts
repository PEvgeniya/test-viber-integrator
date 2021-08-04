/* eslint-disable camelcase */
export type ViberMessage = 
| TextMessage
| ImageMessage
| FileMessage
| VideoMessage
| StickerMessage

export interface BaseMessage {
  receiver: string;
  sender: {
    name: string;
    avatar?: string;
  }
  tracking_data?: string;
  min_api_version?: string;
}

export interface TextMessage extends BaseMessage {
  type: "text",
  text: string
}

export interface ImageMessage extends BaseMessage {
  type: "picture",
  text?: string,
  media: string,
  
}

export interface FileMessage extends BaseMessage {
  type: "file",
  file_name: string,
  media: string,
  size: number
}

export interface VideoMessage extends BaseMessage {
  type: "video",
  media: string,
  size: number
}

export interface StickerMessage extends BaseMessage {
  type: "sticker",
  sticker_id: string
}
export interface SendMessageResponse {
    messages: { id: string }[];
    meta: {
      api_status: string;
      version: string;
    };
}