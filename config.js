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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT SUHAIL_19_14_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDYxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA0LFxuICAgICAgICA1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMjA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NCxcbiAgICAgICAgNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNixcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkzLFxuICAgICAgICA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxODksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTExLFxuICAgICAgICA5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU5LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDgyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgODQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjExLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQzLFxuICAgICAgICAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVUF5a1Y1czlaNUVoUHU4YlVvam9WVU1rUHpTN3cwNWlYQno4aCszdW9XWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMU5EQl90NlZTeUtUMEVhMS1YODlYZ1wiLFxuICBcInBob25lSWRcIjogXCI5YWZjNzYxMy04ODExLTRiNTAtOTVjYy1lNDgxNTBlYjNiODRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgODcsXG4gICAgICAxOTIsXG4gICAgICAzMixcbiAgICAgIDcxLFxuICAgICAgMTQ0LFxuICAgICAgMzAsXG4gICAgICAyMjYsXG4gICAgICA4NixcbiAgICAgIDE4NyxcbiAgICAgIDExNSxcbiAgICAgIDEwNixcbiAgICAgIDczLFxuICAgICAgNixcbiAgICAgIDgxLFxuICAgICAgOTksXG4gICAgICAxMzgsXG4gICAgICAxNDMsXG4gICAgICAxNzAsXG4gICAgICAxOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgsXG4gICAgICA5MixcbiAgICAgIDExMCxcbiAgICAgIDM0LFxuICAgICAgMjE5LFxuICAgICAgMjMsXG4gICAgICAxMzEsXG4gICAgICA0MyxcbiAgICAgIDEwMSxcbiAgICAgIDI0NixcbiAgICAgIDI0MCxcbiAgICAgIDE5LFxuICAgICAgOSxcbiAgICAgIDIzNyxcbiAgICAgIDIzLFxuICAgICAgNTgsXG4gICAgICA0LFxuICAgICAgMixcbiAgICAgIDI0LFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0xLUkEyOUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI0MjA1MzI4NjYxODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTQ0NzczOTk1Mjc0ODY6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLvoIrqp4HwnZmV8J2ZgPCdmYnwnZmE8J2VvvCdkJPwnZmQIPCWo5jwnZGA8J2Qt+qngu+gilwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01DYzZjd0dFSmpndExVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ2FvSzMrTkZLbDlsS0tFN0poZzdJM1prQlZDQUdYMlozaUJYMFg3QmJGaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5eUNDZXlyZHFNaHBjaFUrdHNPRzVuUDJhbC9WdlNqSDFzN2ZoQWR1WWM3Ri9YWXhPZ2p6ODdBQkVlRGxtVndGUXRQYlVtNHRNb252Z0dVdXZqY0lEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjeG93SEZlUGp3RlFDS216MW5WNmNkQm43ZzNqNVBibVVtWitKR0NJNWlYS0VtS1NtdjRhbDRqZ2lDVnV0YXdWejEzMFQzVTR4WXpqaHpPL01xdmlDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNDIwNTMyODY2MTg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2MjYwNzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLYklcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtiSS5qc29uIjogIntcImtleURhdGFcIjpcIml1eDJnUGxsWGxkL29UQlYxT1pXeExQa0VTT1VxcFlYcjF0SkNJUjk0T2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc3MTcyMDI1NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNjI2MDc2ODc0XCJ9Igp9your SESSION_ID 


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
