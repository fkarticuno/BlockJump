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