var Entities = []
var mobName = ['Rando','Meganom','Krackle','Jonathan']
var mobType = ['goblin','sheep','bear','lion','duck']
var mobStats = [1,2,3,4,5,6,7,8,9,10]
class Entity {
    constructor(name, type, stats){
        this.name = name
        this.type = type
        this.stats = stats 
        //[hth,atk,mag]
    }
}
for (var i=0; i<10;i++) {
    Entities.push(buildMobs())
}
Entities.forEach( (mobs)=> {
    console.log(mobs.name, mobs.type, ...mobs.stats)
}
)
function buildMobs() {
    return new Entity (mobName[randomize(mobName)], 
    mobType[randomize(mobType)],
    [randomize(mobStats),randomize(mobStats),randomize(mobStats)] )
}
function randomize(x) {
    return Math.floor(Math.random() * x.length);
}


// mob actions
//console.log(mapH) // apparently you can share vars accross .js files
{/* <div class="mob1" id="mob_1"><img id="mob1_image" src="goblin.png" alt="" ></div> */}

var mobBoxElement = document.getElementById('mob_1');
var mob1 = document.getElementById('mob1_image')
var mobBoxLeftPos = mobBoxElement.offsetLeft
var mobBoxTopPos = mobBoxElement.offsetTop
var mobOr;
var udMobSprite = ['-400px -130px','-400px -0px']

document.getElementById("input-output2").innerText = 'mX: '+mobBoxTopPos+' mY: '+mobBoxLeftPos+' mKey: N/A'

function modifyMobSprite(mobOr, mobPos, mobAttack) {
    // Walk
    if ((mobOr == 1 || mobOr == -1) && mobAttack == 0) {
    mobBoxLeftPos += 30*mobOr;
    mobBoxElement.style.left = (mobBoxLeftPos) + 'px';
    mob1.style.objectPosition = mobPos
    flipMobImg(mobOr)
    restMobL_R(mobOr,'-400px -190px' )
    }
    if ((mobOr == 2 || mobOr == -2) && mobAttack == 0){
    mobBoxTopPos += 30*mobOr/2;
    mobBoxElement.style.top = (mobBoxTopPos) + 'px';
    mob1.style.objectPosition = mobPos
    restMobU_D(mobOr, udMobSprite)
    }
    // Punch
    if ((mobOr == 1 || mobOr == -1) && mobAttack == 1) {
        mob1.style.objectPosition = mobPos
        flipMobImg(mobOr)
        restMobL_R(mobOr*-1, '-400px -190px')
    }
    if ((mobOr == 2 || mobOr == -2) && mobAttack == 1) {
        mob1.style.objectPosition = mobPos
        restMobU_D(mobOr*-1, udMobSprite)
    }
    setMobActivity() // timed mob activity
}
function flipMobImg(mobOr) {
    mob1.style.webkitTransform =`scaleX(${mobOr})`
    mob1.style.transform = `scaleX(${mobOr})`
}
function restMobL_R(mobOr, mobSprite) {
    mobOr = mobOr * -1
    mobSprite = mobSprite
    setTimeout( ()=>{
        mob1.style.objectPosition = mobSprite
        flipMobImg(mobOr)
    },200)
}
function restMobU_D(mobOr) {
    if (mobOr == 2) {
        setTimeout( ()=>{ mob1.style.objectPosition = udMobSprite[1]},300)
    }
    if (mobOr == -2) {
        setTimeout( ()=>{ mob1.style.objectPosition = udMobSprite[0]},300)
    }
}

var mobMoves = ['up','down','left','right']
var mobAction = -0;

function mobActivity() {
    (mobAction == 'up' && mobBoxTopPos >= -5    ? modifyMobSprite(-2,'-0px -120px',0) : '');  //Walk U
    (mobAction == 'down' && mobBoxTopPos <= mapH  ? modifyMobSprite(2 ,'-00px -00px',0) : '');  //Walk D
    (mobAction == 'left' && mobBoxLeftPos >= 9   ? modifyMobSprite(-1,'-0px -65px' ,0) : '');  //Walk L
    (mobAction == 'right' && mobBoxLeftPos <= mapW ? modifyMobSprite(1 ,'-0px -65px' ,0) : '');  //Walk R
    
    (mobAction == 87 ? modifyMobSprite(2 ,'-530px -130px',1) : '');  //Punch U
    (mobAction == 83 ? modifyMobSprite(-2,'-530px -0px'  ,1) : ''); //Punch D
    (mobAction == 65 ? modifyMobSprite(1 ,'-530px -190px',1) : '');  //Punch R
    (mobAction == 68 ? modifyMobSprite(-1,'-530px -190px',1) : ''); //Punch L
    document.getElementById("input-output2").innerText = 'mX: '+mobBoxTopPos+' mY: '+mobBoxLeftPos+' mKey: N/A'
}

function setMobActivity() {
    setTimeout(()=> { console.log('activity proc')
        mobAction = mobMoves[randomize(mobMoves)]
        mobActivity()
    },2000)
}


