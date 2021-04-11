const RPC = require("discord-rpc")
const rpc = new RPC.Client({
  transport: "ipc"
})

const buttons = [{ label: 'Invite CHILL', url: 'https://discord.com/oauth2/authorize?client_id=752812712165376083&permissions=8&scope=applications.commands%20bot' }, { label: 'Join our Server', url: 'https://discord.gg/c4RvJUCBEW' }]

async function setActivity1() {
  var start=new Date();
  start.setTime(start.getTime() + 15e3);
  var activity = {
    details: "Developer",
    state: ".help to see the commands",
    startTimestamp: new Date(),
    endTimestamp: start,
    largeImageKey: "512x512",
    largeImageText: "Chill Bot",
    smallImageKey: "512x512_green",
    smallImageText: "Chill test Bot",
    buttons: buttons,
    instance: true,
  }
  rpc.setActivity(activity);
}
async function setActivity2() {
  var start=new Date();
  start.setTime(start.getTime() + 15e3);
  var activity = {
    details: "Trying to dev some",
    state: "Puissance 4",
    startTimestamp: new Date(),
    endTimestamp: start,
    largeImageKey: "puissance4",
    largeImageText: "it's hard :/",
    buttons: buttons,
    instance: false,
  }
  rpc.clearActivity()
  rpc.setActivity(activity);
}
async function setActivity3() {
  var start=new Date();
  start.setTime(start.getTime() + 15e3);
  var activity = {
    details: "Chill Test",
    state: "In dev",
    startTimestamp: new Date(),
    endTimestamp: start,
    largeImageKey: "512x512_green",
    largeImageText: "In progress",
    buttons: buttons,
    instance: true,
  }
  rpc.clearActivity()
  rpc.setActivity(activity);
}
async function setActivity4() {
  var start=new Date();
  start.setTime(start.getTime() + 15e3);
  var activity = {
    details: "holiday",
    state: "Not working :)",
    startTimestamp: new Date(),
    endTimestamp: start,
    largeImageKey: "vac",
    largeImageText: "holidays are cool",
    buttons: buttons,

    instance: false,
  }
  rpc.clearActivity()
  rpc.setActivity(activity);
}

rpc.on('ready', () => {
  console.log('Log as ' + rpc.user.username)
  setActivity1();
  setTimeout(function(){
    setActivity2()
    setTimeout(function(){
      setActivity3()
      setTimeout(function(){
        setActivity4()
      },15e3);
    },15e3);
  },15e3);
  
  
  setInterval(() => {
    setActivity1();
  setTimeout(function(){
    setActivity2()
    setTimeout(function(){
      setActivity3()
      setTimeout(function(){
        setActivity4()
      },15e3);
    },15e3);
  },15e3);
  
  }, 60e3);
});

rpc.login({clientId: "752812712165376083"}).catch(console.error);