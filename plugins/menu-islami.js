let handler = async (m) => {

let anu =`
*MENU ISLAMI*
─₍🍁₎❝┊ *ɪꜱʟᴀᴍɪ*
╠➺   .ᴀʟqᴜʀᴀɴ <114> <1>
╠➺   .qᴜᴏᴛᴇꜱɪꜱʟᴀᴍɪ (ⓛ)
╰─── –
─₍🍁₎❝┊ *qᴜʀᴀɴ*
╠➺   .ᴀꜱᴍᴀᴜʟʜᴜꜱɴᴀ [1-99]
╠➺   .ᴋɪꜱᴀʜɴᴀʙɪ <ɴᴀᴍᴇ> (ⓛ)
╠➺   .ꜱᴀʟᴀᴛ <ᴅᴀᴇʀᴀʜ>
╠➺   .ɴɪᴀᴛꜱʜᴏʟᴀᴛ
╠➺   .ᴀʏᴀᴛᴋᴜʀꜱɪ (ⓛ)
╰─── –
`
await m.reply(anu)
}
handler.help = ['menuislami']
handler.tags = ['info']
handler.command = /^(menuislami)$/i

export default handler