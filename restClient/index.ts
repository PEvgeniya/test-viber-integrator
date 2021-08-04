import { TextMessage, ImageMessage, StickerMessage, VideoMessage, FileMessage } from './types';
import ViberRestClient from './restClient';

async function test() {
    const client = new ViberRestClient( 'token', 'https://chatapi.viber.com');
    const textMessage: TextMessage = {
        receiver: 'id of reciever',
        sender: {
            name: 'Test cat bot'
        },
        type: 'text',
        text: 'This message has been sent as a test'
    }

    const imageMessage: ImageMessage = {
        receiver: 'id of reciever',
        sender: {
            name: 'Test cat bot'
        },
        type: 'picture',
        
        media: "https://i.ytimg.com/vi/Pcsvgv0jbYQ/maxresdefault.jpg"
        
    }

    const stickerMessage: StickerMessage = {
        receiver: 'id of reciever',
        sender: {
            name: 'Test cat bot'
        },
        type: 'sticker',
        
        sticker_id: "40131"
        
    }

    const videoMessage: VideoMessage = {
        receiver: 'id of reciever',
        sender: {
            name: 'Test cat bot'
        },
        type: "video",
        media: "https://cold.strm.yandex.net/vh-bsvideo-converted/vod-content/11723862938596180444_169_360p.mp4?sid=9c07176913e0cae9fc4b02aaf48251a579d2edcdcea0cc55283e2ee9191776dd&vsid=8a02471e9554959d77dd8dba198186ef1839fabdd137xWEBx6877x1622749248&noredir=1&lid=102",
        size: 10000
    }

    const fileMessage: FileMessage = {
        receiver: 'id of reciever',
        sender: {
            name: 'Test cat bot'
        },
        type: 'file',
        file_name: "for_Cat_owners.pdf",
        media: 'https://www.bawbawshire.vic.gov.au/files/sharedassets/public/compliance/documents/cats/are-you-a-cat-owner.pdf',
        size: 1677722,
        

    }

    const response = await client.sendMessage(imageMessage);
    console.log(response);

    const userInfo = {
        id: "id of reciever",
    }

    const info = await client.getUserDetails(userInfo);
    console.log(info);
  }
  
  test();
