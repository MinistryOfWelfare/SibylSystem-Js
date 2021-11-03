const fetch = require("node-fetch")

let token;

class PyschoPass {
  constructor(options){

        token = options.token;

    }

// example cheaktoken
// const { PyschoPass }  =  require("sibysystem");

// const Sibyl  =  new  PyschoPass({token: "1915921298:lHN6O6fpbWiXrqLvlEHTDWrNxfZDtZfVBf7DC_DQZ4bCsrw_R1jVzUXAQc3nRFTR"});

// Sibyl.cheaktoken().then(console.log)

  async cheaktoken() {


    let json = await fetch(`https://psychopass.animekaizoku.com/checkToken?token=${encodeURIComponent(token)}`)

    let sibyl = await json.json()

    return sibyl

  }

// example createtoken
// const { PyschoPass }  =  require("sibysystem");

// const Sibyl  =  new  PyschoPass({token: "1915921298:lHN6O6fpbWiXrqLvlEHTDWrNxfZDtZfVBf7DC_DQZ4bCsrw_R1jVzUXAQc3nRFTR"});

// Sibyl.createtoken("userid", "permission").then(console.log)

async createtoken(userid, permission) {


  if(!userid) {

      throw new Error("Please Enter Telegram User Id")

    }

    let json = await fetch(`https://psychopass.animekaizoku.com/createToken?token=${encodeURIComponent(token)}&user-id=${encodeURIComponent(userid)}&permission=${encodeURIComponent(permission)}`)

    let sibyl = await json.json()

    return sibyl.result

  }

// example changePerm
// const { PyschoPass }  =  require("sibysystem");

// const Sibyl  =  new  PyschoPass({token: "1915921298:lHN6O6fpbWiXrqLvlEHTDWrNxfZDtZfVBf7DC_DQZ4bCsrw_R1jVzUXAQc3nRFTR"});

// Sibyl.changePerm("userid", "permission).then(console.log)

async changePerm(userid, permission) {


  if(!userid) {

      throw new Error("Please Enter Telegram User Id")

    }

    let json = await fetch(`https://psychopass.animekaizoku.com/changePerm?token=${encodeURIComponent(token)}&user-id=${encodeURIComponent(userid)}&permission=${encodeURIComponent(permission)}`)

    let sibyl = await json.json()

    return sibyl

  }

// example addBan
// const { PyschoPass }  =  require("sibysystem");

// const Sibyl  =  new  PyschoPass({token: "1915921298:lHN6O6fpbWiXrqLvlEHTDWrNxfZDtZfVBf7DC_DQZ4bCsrw_R1jVzUXAQc3nRFTR"});

// Sibyl.addBan("userid", "reason, "message", "source").then(console.log)

async addBan(userid, reason, message, source) {


  if(!userid) {

      throw new Error("Please Enter Telegram User Id")

    }

  if(!reason) {

      throw new Error("Please Explain Reason")

    }

 if(!source) {

      throw new Error("Please Explain Source Link")

    }

    let json = await fetch(`https://psychopass.animekaizoku.com/addBan?token=${encodeURIComponent(token)}&user-id=${encodeURIComponent(userid)}&reason=${encodeURIComponent(reason)}&message=${encodeURIComponent(message)}&source=${encodeURIComponent(source)}`)

    let sibyl = await json.json()

    return sibyl.result

  }

// example removeBan
// const { PyschoPass }  =  require("sibysystem");

// const Sibyl  =  new  PyschoPass({token: "1915921298:lHN6O6fpbWiXrqLvlEHTDWrNxfZDtZfVBf7DC_DQZ4bCsrw_R1jVzUXAQc3nRFTR"});

// Sibyl.removeBan("userid").then(console.log)

async removeBan(userid) {


  if(!userid) {

      throw new Error("Please Enter Telegram User Id")

    }

    let json = await fetch(`https://psychopass.animekaizoku.com/removeBan?token=${encodeURIComponent(token)}&user-id=${encodeURIComponent(userid)}`)

    let sibyl = await json.json()

    return sibyl

  }

// example getInfo
// const { PyschoPass }  =  require("sibysystem");

// const Sibyl  =  new  PyschoPass({token: "1915921298:lHN6O6fpbWiXrqLvlEHTDWrNxfZDtZfVBf7DC_DQZ4bCsrw_R1jVzUXAQc3nRFTR"});

// Sibyl.getInfo("userid").then(console.log)

async getInfo(userid) {


  if(!userid) {

      throw new Error("Please Enter Telegram User Id")

    }

    let json = await fetch(`https://psychopass.animekaizoku.com/getInfo?token=${encodeURIComponent(token)}&user-id=${encodeURIComponent(userid)}`)

    let sibyl = await json.json()

    return sibyl.result

  }

// example reportUser
// const { PyschoPass }  =  require("sibysystem");

// const Sibyl  =  new  PyschoPass({token: "1915921298:lHN6O6fpbWiXrqLvlEHTDWrNxfZDtZfVBf7DC_DQZ4bCsrw_R1jVzUXAQc3nRFTR"});

// Sibyl.reportUser("userid", "reason", "message", "source").then(console.log)

async reportUser(userid, reason, message, source) {


  if(!userid) {

      throw new Error("Please Enter Telegram User Id")

    }

  if(!reason) {

      throw new Error("Please Explain Reason")

    }

    let json = await fetch(`https://psychopass.animekaizoku.com/reportUser?token=${encodeURIComponent(token)}&user-id=${encodeURIComponent(userid)}&reason=${encodeURIComponent(reason)}&message=${encodeURIComponent(message)}`)

    let sibyl = await json.json()

    return sibyl

  }


}



module.exports = PyschoPass
