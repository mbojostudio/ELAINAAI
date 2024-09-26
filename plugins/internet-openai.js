//Follow https://whatsapp.com/channel/0029VaF8RYn9WtC16ecZws0H
//Note : Sumber daripada di hapus mending tambahin 😂
import fetch from 'node-fetch';
let handler = async (m, { conn, command, text }) => {

    if (!text) throw `Textnya mana? Contoh:\n.${command} Apa arti ai?`;	
  let apii = await fetch(`https://widipe.com/gpt4?text=${text}`)
  let res = await apii.json()
  conn.reply(m.chat, `
 *[ CHAT GPT ]*
 
${res.result}
`.trim(), m)
}
handler.command = handler.help = ['ai','openai','gpt'];
handler.tags = ['tools'];
handler.premium = false;
export default handler;
