const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: France_King,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function FLASH_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_France_King = France_King({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                browser: Browsers.macOS('Chrome')
             });
             if(!Pair_Code_By_France_King.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_France_King.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_France_King.ev.on('creds.update', saveCreds)
            Pair_Code_By_France_King.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(50000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(8000);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id, { text: ''+ b64data });
               let AUDIO_URL = "https://files.catbox.moe/hhw2a6.mp3"; // New audio URL
               let img = "https://files.catbox.moe/cvd9sb.jpg";
               let FLASH_MD_TEXT = `

Just welc *kasongo?!*
*(website 1)*
https://njabulo-onlinebw.vercel.app/
*(website 2)*
https://hoo.be/njabulo.onlinebw

> ✆︎Pσɯҽɾҽԃ Ⴆყ NנɐႦυℓσ נႦ

`
 await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id,{
     text:FLASH_MD_TEXT,
     contextInfo: {
     externalAdReply: {
     showAdAttribution: false, // Marks as an ad
     title: "NjabuloJb onlinebw",
     body: "session ld for bot",
     thumbnailUrl: "https://files.catbox.moe/n91s69.jpeg",
     sourceUrl: "https://www.facebook.com/profile.php?id=100094314013209",
     mediaType: 1,
     renderLargerThumbnail: true,
    },
 },
},{quoted:session})
 await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id,{
     audio: { url: AUDIO_URL }, 
     mimetype: 'audio/mp4', 
     ptt: true, // Voice note form
     contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterJid: "120363399999197102@newsletter",
      newsletterName: "╭••➤®Njabulo Jb",
      serverMessageId: -1
    },
 },
},{quoted:session})

        await delay(100);
        await Pair_Code_By_France_King.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    FLASH_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service is Currently Unavailable"});
         }
        }
    }
    return await FLASH_MD_PAIR_CODE()
});
module.exports = router
