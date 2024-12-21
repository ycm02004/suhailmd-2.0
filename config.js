const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237676447543";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_20_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTksXG4gICAgICAgIDYxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExLFxuICAgICAgICAxNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM5LFxuICAgICAgICA5MixcbiAgICAgICAgOTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgODAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQwLFxuICAgICAgICA2NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICA4NixcbiAgICAgICAgMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDkxLFxuICAgICAgICA0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDY2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDg3LFxuICAgICAgICA1NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM3LFxuICAgICAgICA4NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiajJXUGlyK0lWcHpjT2dOcGdVSDFBK0xjakRPeU9zKzU4ciswVUNBMzVlST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM1EtZ2FURFpSUHVPUGpPOFRBcmJxQVwiLFxuICBcInBob25lSWRcIjogXCI2ZjMxOGRhMi0yMzJhLTQ0YjEtODk4Ni1kNTgyZDI3MjYwNjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDgsXG4gICAgICA2NixcbiAgICAgIDc4LFxuICAgICAgOCxcbiAgICAgIDAsXG4gICAgICAyMTAsXG4gICAgICAzMyxcbiAgICAgIDMzLFxuICAgICAgMTM2LFxuICAgICAgMTc4LFxuICAgICAgMTksXG4gICAgICAxNSxcbiAgICAgIDIwMixcbiAgICAgIDIzNyxcbiAgICAgIDE2MSxcbiAgICAgIDIxNSxcbiAgICAgIDIyOSxcbiAgICAgIDE2OCxcbiAgICAgIDExMixcbiAgICAgIDExMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzAsXG4gICAgICAxNDEsXG4gICAgICAyNTIsXG4gICAgICA4OCxcbiAgICAgIDE4MixcbiAgICAgIDYxLFxuICAgICAgMjM2LFxuICAgICAgMjM0LFxuICAgICAgNzUsXG4gICAgICAxNTgsXG4gICAgICAxOTYsXG4gICAgICA5NixcbiAgICAgIDExMyxcbiAgICAgIDIxMSxcbiAgICAgIDYzLFxuICAgICAgNDIsXG4gICAgICAxOTEsXG4gICAgICA5NixcbiAgICAgIDQyLFxuICAgICAgMTEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRIVENYUFlKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2NzY0NDc1NDM6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLii4bqp4Hwk4qI8J2VrvCdlo3wnZaX8J2WjvCdlpjwnZaZ8J2WjvCdlobwnZaTIOC8hPCdmL/hrYTii4Yg8J2VsPCdlpjwnZaI8J2WhvCdlpPwnZaU8J2WlyDgvIbqp4LiiJhcIixcbiAgICBcImxpZFwiOiBcIjE3OTkyOTQwMDUwMDMzNTo0MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMU2Y0TjRHRU9tc21yc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImFWV1crc1E5SXloVUNiWDZzdnNKU1NDMU1URStRR0xsRUhGZWxadnNWM2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRzFRT0NlZ2k4K1lUQ3ZmUUUveXpMbGVFaXdKaGhvUDRuaDNObDJnSXd3RjN0ajk0cmY2UHAwT3pwemU3bEoxZVR5R0pYYkhsTHNQcEM4ZGRMVjgvRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSFZVYUJWOVBzdkwwME5Wbm1KeC9FWm9rWHZMOWQyZlg4WjNMRVdHM3B1MWdUWHBnME56RTNtMDRoN21BcFNHcHN3amdjMmZ3eE1kTUFxc3pjeE42Z3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3Njc2NDQ3NTQzOjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ3NzY0MjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOUStcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5RKy5qc29uIjogIntcImtleURhdGFcIjpcIkFQaVROYzJiWkE2WGNBTEE1NzMvcU9IOElDWDk4Q25oYmw4Z0dHMFBCcE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgwOTMyMTkwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDcyNTI2OTkyM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
