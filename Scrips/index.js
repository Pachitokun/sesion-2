const express = require("express")
const cors = require("cors")
const host = '127.0.0.1'
const port = 3000

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

    actualizarPosicion(x, y) {
        this.x = x
        this.y = y
    }
    
}

class mokepon {
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
    const mokepon = new mokepon(name)

    
    const playerIndex = players.findIndex((player) => playerid === player.id)
    
    if(playerIndex >= 0) {
        players[playerIndex].actualizarPosicion(x, y)
    }


    console.log(players)
    console.log(playerid)
    res.end()
})

app.post("/mokepon/:playerid/posicion", (req, res) => {
    const playerid = req.params.playerid || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const playerIndex = players.findIndex((player) => playerid === player.id)

    if(playerIndex >= 0) {
        players[playerIndex].asignarMokepon(mokepon)
    }
    res.end()
})

app.listen(port, host, () => {
    console.log("servidor funcionando correctamente")
})