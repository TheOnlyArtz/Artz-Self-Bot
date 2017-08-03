exports.run = (client, message, args) => {

  message.channel.send("**BISSSSHES IM SMOKING**").then(async (msg) => {
    setTimeout(() => {
    msg.edit('🚬');
    }, 500);
    setTimeout(() => {
        msg.edit('🚬 ☁ ');
    }, 1000);
    setTimeout(() => {
        msg.edit('🚬 ☁☁ ');
    }, 1500);
    setTimeout(() => {
        msg.edit('🚬 ☁☁☁ ');
    }, 2000);
    setTimeout(() => {
        msg.edit('🚬 ☁☁');
    }, 2500);
    setTimeout(() => {
        msg.edit('🚬 ☁');
    }, 3000);
    setTimeout(() => {
        msg.edit('🚬 ');
    }, 3500);
    setTimeout(() => {
        msg.edit(`Finished smoking`);
    }, 4000);
  })

};
module.exports.help = {
  category : 'fun',
  name: "smoke",
  description: 'Smoke weed everyday :dab:'
}
