const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const players = []


class player {
    constructor(id) {
        this.id = id
    }
    asignarMokepon(mokepon) {
        this.mokepon = mokepon
    }
}

class Mokepon {
    constructor(name) {
        this.name = name
    }
}

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`
    
    const player = new player(id)
    
    players.push(player)

    res.setHeader("Access-control.allow-origin", "*")
    res.send(id)
})

app.post("/mokepon/:playerid", (req, res) => {
    const  playerid = req.params.playerid || ""
    const name = req.body.mokepon || ""
    const mokepon = new Mokepon(name)

    
    const playerIndex = players.findIndex((player) => playerid === player.id)
    
    if(playerIndex >= 0) {
        players[playerIndex].asignarMokepon(mokepon)
    }


    console.log(players)
    console.log(playerid)
    res.end()
})

app.listen(8080, () => {
    console.log("servidor funcionando correctamente")
})