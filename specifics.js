var colours={
  "lightgreen":"\x1b[1m\x1b[32m",
  "lightblue":"\x1b[1m\x1b[34m",
  "lightcyan":"\x1b[1m\x1b[36m",
  "lightyellow":"\x1b[1m\x1b[33m",
  "lightmagenta":"\x1b[1m\x1b[35m",
  "lightwhite":"\x1b[1m\x1b[37m",
  "lightred":"\x1b[1m\x1b[31m"
}


//change the below values to customise your display(set sound to true for sound to be played on new messages)

exports.senderColour=colours.lightgreen
exports.userColour=colours.lightwhite
exports.messageColour=colours.lightcyan
exports.systemColour=colours.lightyellow
exports.sound=false