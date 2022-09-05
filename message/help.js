const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

exports.allmenu = (ucapanWaktu, sender, mundur, ownerName, botName, jam, tanggal, runtime, pushname, prefix) => {
	return `${ucapanWaktu}

*ROAD TO NEW YEARS*
 ${mundur}

*INFO-BOT*
👑 Creator : ${ownerName}
🤖 Bot Name : ${botName}
⏰ Time : ${jam}
📆 Date : ${tanggal}
⏳ Runtime :
 ${runtime(process.uptime())}
${readmore}
*MAIN MENU*
 › ${prefix}menu
 › ${prefix}statistic
 › ${prefix}runtime
 › ${prefix}speed
 › ${prefix}owner
 › ${prefix}donate
 › ${prefix}rentalbot

*TOOLS MENU*
 › ${prefix}sticker
 › ${prefix}stickerwm
 › ${prefix}toimg
 › ${prefix}tovideo
 › ${prefix}toaudio
 › ${prefix}attp
 › ${prefix}nulis
 › ${prefix}upload
 › ${prefix}listbahasa
 › ${prefix}translate

*STORE MENU*
 › ${prefix}list
 › ${prefix}addlist
 › ${prefix}dellist
 › ${prefix}update
 › ${prefix}resetlist
 › ${prefix}jeda

*KALKULATOR*
 › ${prefix}tambah
 › ${prefix}kurang
 › ${prefix}kali
 › ${prefix}bagi

*PROSES & DONE*
 › proses
 › done
 › ${prefix}setproses
 › ${prefix}changeproses
 › ${prefix}delsetproses
 › ${prefix}setdone
 › ${prefix}changedone
 › ${prefix}delsetdone

*OPEN & CLOSE*
 › ${prefix}open
 › ${prefix}close
 › ${prefix}setopen
 › ${prefix}changeopen
 › ${prefix}delsetopen
 › ${prefix}setclose
 › ${prefix}changeclose
 › ${prefix}delsetclose

*STALKER MENU*
 › ${prefix}ffid
 › ${prefix}mlid
 › ${prefix}pubgid
 › ${prefix}higgsid
 › ${prefix}codmid
 › ${prefix}pbid
 › ${prefix}aovid
 › ${prefix}sausageid
 › ${prefix}zepetoid

*GROUP MENU*
 › ${prefix}welcome
 › ${prefix}left
 › ${prefix}setwelcome
 › ${prefix}changewelcome
 › ${prefix}delsetwelcome
 › ${prefix}setleft
 › ${prefix}changeleft
 › ${prefix}delsetleft
 › ${prefix}linkgroup
 › ${prefix}setppgroup
 › ${prefix}setnamegroup
 › ${prefix}setdescription
 › ${prefix}antilink
 › ${prefix}antiwame
 › ${prefix}add
 › ${prefix}kick
 › ${prefix}promote
 › ${prefix}demote
 › ${prefix}revoke
 › ${prefix}hidetag
 › ${prefix}delete
 › ${prefix}checksewa

*BAILEYS*
 › ${prefix}towame
 › ${prefix}quoted
 › ${prefix}fakehidetag
 › ${prefix}react
 › ${prefix}inspect
 › ${prefix}setcmd
 › ${prefix}delcmd

*OWNER MENU*
 › ${prefix}exif
 › ${prefix}join
 › ${prefix}leave
 › ${prefix}self
 › ${prefix}public
 › ${prefix}setprefix
 › ${prefix}setppbot
 › ${prefix}broadcast
 › ${prefix}bcsewa
 › ${prefix}addsewa
 › ${prefix}delsewa
 › ${prefix}listsewa`
}

exports.donate = (pushname, ownerNumber) => {
    return`Hai ${pushname}👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi ke:
🏧 0895379169488 (OVO/Dana/GoPay)

Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
wa.me/${ownerNumber.split("@")[0]} (Owner)`
}

exports.sewaBot = (prefix) => {
    return`*PRICE LIST SEWABOT*

IDR : 5.000
EXPIRED : WEEKLY

IDR : 10.000
EXPIRED : MONTHLY

Untuk Lebih Lanjut Silahkan Klik Dibawah`
}
