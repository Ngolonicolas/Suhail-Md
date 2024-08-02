const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT yourSUHAIL_15_08_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDMzLFxuICAgICAgICA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMTcwLFxuICAgICAgICA2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDg0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MCxcbiAgICAgICAgNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ0LFxuICAgICAgICA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDUxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDczLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNixcbiAgICAgICAgMjM4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDg2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDc3LFxuICAgICAgICA1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDg3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMixcbiAgICAgICAgMjIwLFxuICAgICAgICA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpWR1RKWUFSbGs2Y3ZQdC9HalgvQ0VEOXFwRDRPaXFncFpjS1hsMWpJRkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImd3OTVGVlFKUTJ1S1BVMGFHWUpnNFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWE5MWVhMzQtMTFjMC00OTBiLWFmYzQtZjExNDFiNTNiNDkxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NyxcbiAgICAgIDEwLFxuICAgICAgMjA1LFxuICAgICAgNzQsXG4gICAgICAyOSxcbiAgICAgIDU0LFxuICAgICAgMTA5LFxuICAgICAgMjM3LFxuICAgICAgMTQxLFxuICAgICAgOTYsXG4gICAgICAxODIsXG4gICAgICA2NSxcbiAgICAgIDkzLFxuICAgICAgMTAsXG4gICAgICAxMzUsXG4gICAgICAxMDEsXG4gICAgICAyMDEsXG4gICAgICAyMzEsXG4gICAgICAxLFxuICAgICAgMjI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNSxcbiAgICAgIDEzNSxcbiAgICAgIDIyMSxcbiAgICAgIDIwNCxcbiAgICAgIDYyLFxuICAgICAgMjIyLFxuICAgICAgMjQxLFxuICAgICAgMjExLFxuICAgICAgNjQsXG4gICAgICAxNzQsXG4gICAgICAxNTUsXG4gICAgICAyMjQsXG4gICAgICA1NyxcbiAgICAgIDEzMCxcbiAgICAgIDk1LFxuICAgICAgMTUzLFxuICAgICAgMjI2LFxuICAgICAgNDEsXG4gICAgICA3NCxcbiAgICAgIDEyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRR0RCUEg2OVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQyMDUzMjg2NTQwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM3MzI4MDY0MTM5NDc1OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi6qeB8J2ZlfCdmYDwnZmJ8J2ZhPCdlb7wnZCT8J2ZkCAyLjDqp4JcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKQ2k4TGtQRU4vc3M3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlFQzFVT2t1Vkxzb1JFdXQ3RmM2bE1TYmc4QWZUcDgzckE4dDNNdGZRV1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVUVGQXh6cDEzc2xlSGZWOWtWWXN1TmZtbjhGQUoydWlvV2tyV2VLZEhGRXArd1A4bE11RDA3SGpYem5HQ0gvbUFHdnZ3U0hUajNDSXZ5NHB3OGIranc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicmpnd0tnRnBNczdsTnpIL0sxYzV5TWI3ZUVKcUoyTXJCeW5pbmlXS0lMM1E4ZDJYUzg5eXExNkhHOWovNTVXdTgreVhmSldpV0ZnRXBBcVR3TVZpQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQyMDUzMjg2NTQwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjExMjk5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTTRyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNNHIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwdjJrbjVCbVFITUVMSGp6bmVnMjRaUU11YXQrd3lBeUZLcHFlLy8vTnQ0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxNDc5MDg4ODAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjYxMTI5OTk4OVwifSIKfQ== SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
