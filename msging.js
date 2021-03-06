key=""; j=0 //console.log('\033[1A'+text) replaces above input by text.length
let specifics=require('./specifics.js')

var {senderColour, userColour, messageColour, systemColour}=specifics
var sound=''; if(specifics.sound){sound='\x07'}

var fetch=require('node-fetch');
var readline=require('readline');
var url="https://msging.paultaylor2.repl.co/";
//receive messages
(async()=>{
  var options={
    method:'POST',
    headers:{'receive':'true','key':key}
  }
  while(true){try{
    if(options.headers.key!=key){j=0} //if in new server
    options.headers.key=key
    let x=await fetch(url,options)
    let text=await x.text()
    if(text){
      text=text.split('\n')
      for(var l=j;l<text.length;l++){console.log(sound+senderColour+"ANONYMOUS: "+messageColour+text[l]+'\x1b[0m')} //new messages
      j=text.length
    }}catch(err){}
  }
})()
//join groups/send messages
console.log(systemColour+"\nQuick, light communication. Use keys to be in groups. If no more users in a group, group gets deleted"+'\x1b[0m')
console.log(systemColour+"\nPut '\\' at the start of your text THEN a group key to join a group\nPut '\\\\' to create a new group\n"+'\x1b[0m')
var rl=readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
  historySize: 50,
  tabSize: 2,
  prompt: ''
})
rl.on('close',function(){process.exit(0)})
function errorMsg(err){return console.log(systemColour+"ACTION FAILED: Please Check Your Internet Connection"+'\x1b[0m')}
var i=0
var options1={
  method:'POST',
  headers:{'gc':'true'}
}
var options2={
  method:'POST',
  headers:{'pw':key,'inp':""}
}
async function makeGroup(){
  let x=await fetch(url,options1)
  let text=await x.text()
  console.log(systemColour+`\nGroup key Created\nYour current group key is: ${text}`+'\x1b[0m')
  key=text
}
async function firstTime(line){
  if(line[0]=="\\"){
    if(line[1]=="\\"){return await makeGroup()}
    console.log(systemColour+`\nGroup key joined\nDO NOTE: THE SERVER WON'T TELL IF KEY WAS CORRECT\nYour current group key(MAYBE) is: ${line.substr(1)}`+'\x1b[0m')
    key=line.substr(1)
  }
}
async function shareText(line){
  options2.headers.inp=line
  options2.headers.pw=key
  let x=await fetch(url,options2)
  let text=await x.text()
}
rl.on('line',async(line)=>{i++
  console.log('\033[1A'+userColour+line+'\x1b[0m')
  if(i==1){try{return await firstTime(line)}catch(err){return errorMsg()}}
  if(line[0]=="\\"){try{
    if(line[1]=="\\"){try{return await makeGroup()}catch(err){return errorMsg()}}
    console.log(systemColour+`\nGroup key joined\nDO NOTE: THE SERVER WONT TELL IF KEY WAS CORRECT\nYour current group key(MAYBE) is: ${line.substr(1)}`+'\x1b[0m')
    key=line.substr(1)
  }catch(err){errorMsg()}}
  else{try{await shareText(line)}catch(err){errorMsg()}}
})






