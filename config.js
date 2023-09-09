/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;c7xyFRbD#3dVHsksO0WJNVNa9Yl_S4WOm9QePfIdDyicot2VTJJU' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://heshan_bot_user:OH0eZ0Zwi3OmZxUkzNpRI9IXdTQNxjwN@dpg-cjtkufnhdsdc73calke0-a.frankfurt-postgres.render.com/heshan_bot'



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94767438882'

global.OWNER_NAME = 'Heshan'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'true' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'ǫᴜᴇᴇɴ ɴɪʟᴜ'
 
global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@Heshan 😇' //sticker

global.FOOTER = 'King Heshan 2023'

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'Heshan_X  © 2023' // Caption

global.ALIVELOGO = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.freeiconspng.com%2Fuploads%2Fwhatsapp-black-logo-icon--24.png&tbnid=9AJTdErL3yMznM&vet=12ahUKEwiTqau0zpyBAxW1yKACHedeBf4QMygCegUIARCfAQ..i&imgrefurl=https%3A%2F%2Fwww.freeiconspng.com%2Fimg%2F3953&docid=GDThtm49bYf7OM&w=512&h=512&q=whatsapp%20black&client=ms-android-samsung-gj-rev1&ved=2ahUKEwiTqau0zpyBAxW1yKACHedeBf4QMygCegUIARCfAQ' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'default' // Set Alive Message

global.MAX_SIZE = '400' // Bot Uloading Max size 

global.ANTI_BAD = 'true' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = 'false' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/CjrsqEmuNrd45EAsdRM4XI' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'false' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: Unknown" //ur yt chanel name
global.socialm = "GitHub: Unknown" //ur github or insta name
global.location = "Srilanka, colombo" //ur location

