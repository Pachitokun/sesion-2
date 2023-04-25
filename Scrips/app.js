let AttackPlayer
let AttackEnemy
let LifeisPlayer = 3
let LifeisEnemy = 3




function StartGame(){
    let ButtonLetPlayer = document.getElementById("buttonpet")
    ButtonLetPlayer.addEventListener("click", SeleccionarMascotaJugador)

    let ButtonFire = document.getElementById("buttonfire")
    ButtonFire.addEventListener("click", attackFire)
    let ButtonWater = document.getElementById("buttonwater")
    ButtonWater.addEventListener("click", attackWater)
    let ButtonEarth = document.getElementById("buttonearth")
    ButtonEarth.addEventListener("click", attackEarth)

    let ButtonReload = document.getElementById("reiniciar")
    ButtonReload.addEventListener("click", ReloadGame)

}



function SeleccionarMascotaJugador(){
    let InputCharizard = document.getElementById("charizard")
    let InputSquirtle = document.getElementById("squirtle")
    let Inputrhydon = document.getElementById('rhydon')
    let SpanPetPlayer = document.getElementById("petplayer")
    
    
    if(InputCharizard.checked) {
        SpanPetPlayer.innerHTML = 'CHARIZARD 🔥'
    } else if (InputSquirtle.checked){
        SpanPetPlayer.innerHTML = 'SQUIRTLE 🌊'
    } else if (Inputrhydon.checked){
        SpanPetPlayer.innerHTML = 'RHYDON 🌱'
    } else{
        
    }
    seleccionarmascotaenemigo()
    

}
function seleccionarmascotaenemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let SpanPetEnemy = document.getElementById('petenemy')

    if(mascotaAleatoria == 1){
        SpanPetEnemy.innerHTML = 'CHARIZARD BLACK ⚫'
    }else if (mascotaAleatoria == 2) {
        SpanPetEnemy.innerHTML = 'SQUIRTLE PAMPERS 💢'
    }else {
        SpanPetEnemy.innerHTML = 'RHYDON PHANTOM 👻'
    }
    
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function combat(){
    let spanlifeplayer = document.getElementById("lifeplayer")
    let spanlifeenemy = document.getElementById("lifeenemy")


    if(AttackEnemy == AttackPlayer){
        crearMensaje("EMPATE")
    } else if(AttackPlayer == '🔥 fire boll' && AttackEnemy =='🌪🌫 earthquake'){
        crearMensaje("GANASTE")
        LifeisEnemy--
        spanlifeenemy.innerHTML = LifeisEnemy
    } else if(AttackPlayer == '🌀 chorro de agua' && AttackEnemy == '🔥⚫ dark fire'){
        crearMensaje("GANASTE")
        LifeisEnemy--
        spanlifeenemy.innerHTML = LifeisEnemy
    } else if(AttackPlayer == '🌪 hueco' && AttackEnemy == '🌀🌫 water whirlpool'){
        crearMensaje("GANASTE")
        LifeisEnemy--
        spanlifeenemy.innerHTML = LifeisEnemy
    } else {
        crearMensaje("PERDISTE")
        LifeisPlayer--
        spanlifeplayer.innerHTML = LifeisPlayer
    }

    ReviewLives()



}
function ReviewLives(){
    if (LifeisEnemy == 0){
        alert("GANASTE")
    }else if(LifeisPlayer == 0){
        alert("PERDISTE")
    }
}


function attackFire(){
    AttackPlayer = '🔥 fire boll'
    
    AttackAleatorioEnemy()
}
function attackWater(){
    AttackPlayer = '🌀 chorro de agua'
    
    AttackAleatorioEnemy()
}
function attackEarth(){
    AttackPlayer = '🌪 hueco'
    
    AttackAleatorioEnemy()
}
function AttackAleatorioEnemy(){
    let attackaleatorio = aleatorio(1,3)
    
    
    if( attackaleatorio == 1){
        AttackEnemy = '🔥⚫ dark fire'
    } else if(attackaleatorio == 2){
        AttackEnemy = '🌀🌫 water whirlpool'
    }else {
        AttackEnemy = '🌪🌫 earthquake'
    }
    combat()

}
function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("mensaje")

    let player = document.createElement('p')
    let enemy = document.createElement('p')
    player.innerHTML = 'Tu mascota ataco con: ' + AttackPlayer 
    enemy.innerHTML = 'La mascota del enemigo ataco con:' + AttackEnemy + resultado

    sectionMensajes.appendChild(player)
    sectionMensajes.appendChild(enemy)
}
function ReloadGame(){
    location.reload()
}




















window.addEventListener("load", StartGame)