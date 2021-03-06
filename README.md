# msging
quick messaging, randomly generated room codes, users with the same group code SHARE messages

## Message Sharing
There is no signing up, no form of identity, how this works means *none of that* is **NEEDED**
<br>The only entity is **GROUP** where *instances* are **group codes**
<br>Users can send text *to* and receive text *from* a specific group code
<br>Therefore, all users **SHARING** the same group code can **SHARE TEXT**

## How to Use
*node path/to/msging.js* loads the program
<br>You can edit *specifics.json* to customise stuff like the output colours and IF/NO sound
<br>When running, you can type `\` followed by a group code/key to join a group
<br>The server **won't tell** you if the group code was a valid one(if you send messages and nothing is getting **SHARED**, the group code is invalid)
<br>Or you can type `\\` to make a new group(*Naturally, the group code **GIVEN** in this case would be valid*)

## specifics.json usage
The colours are ascii codes for colour, there are some example colour codes in *colours.json*
<br>Change up the values in *specifics.json* to edit the display when next you're running this
<br>As for the sound part, make it `true` for a default system sound to happen every time there are new messages
