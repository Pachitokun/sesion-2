const express = require("express")

const app = express()

const players = []


class player {
    constructor(id) {
        this.id = id
    }
}

app.get("/join", (req, res) => {
    const id = `${Math.random()}`
    
    const player = new player(id)
    players.push(player)

    res.send(id)
    res.setHeader("Access-control.allow-origin", "*")

})

app.listen(8080, () => {
    console.log("servidor funcionando correctamente")
})