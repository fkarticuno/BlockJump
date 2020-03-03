var boxElement = document.getElementById('plyr');
var player = document.getElementById('image')
var boxLeftPos = boxElement.offsetLeft
var boxTopPos = boxElement.offsetTop
var orientation;
var mapH = document.getElementById('bodyer').clientHeight - 75
var mapW = document.getElementById('bodyer').clientWidth - 50
var udSprite = ['-400px -130px','-400px -0px']
document.getElementById("input-output").innerText = 'X: '+boxTopPos+' Y: '+boxLeftPos+' Key: N/A'
document.addEventListener('keydown', e => {
    // check for map resize
    mapH = document.getElementById('bodyer').clientHeight - 75;
    mapW = document.getElementById('bodyer').clientWidth - 50;
    (e.which == 38 && boxTopPos >= -5    ? modifySprite(-2,'-0px -120px',0) : '');  //Walk U
    (e.which == 40 && boxTopPos <= mapH  ? modifySprite(2 ,'-00px -00px',0) : '');  //Walk D
    (e.which == 37 && boxLeftPos >= 9   ? modifySprite(-1,'-0px -65px' ,0) : '');  //Walk L
    (e.which == 39 && boxLeftPos <= mapW ? modifySprite(1 ,'-0px -65px' ,0) : '');  //Walk R
    (e.which == 87 ? modifySprite(2 ,'-530px -130px',1) : '');  //Punch U
    (e.which == 83 ? modifySprite(-2,'-530px -0px'  ,1) : ''); //Punch D
    (e.which == 65 ? modifySprite(1 ,'-530px -190px',1) : '');  //Punch R
    (e.which == 68 ? modifySprite(-1,'-530px -190px',1) : ''); //Punch L
    (e.which == 32 ? toggleMusic() : '')
    document.getElementById("input-output").innerText = 'X: '+boxTopPos+' Y: '+boxLeftPos+' Key: '+e.which
    //console.log('X: ',boxTopPos, 'Y: ',boxLeftPos, 'Key:', e.which)
})

function modifySprite(orientation, position, attack) {
    // Walk
    if ((orientation == 1 || orientation == -1) && attack == 0) {
    boxLeftPos += 30*orientation;
    boxElement.style.left = (boxLeftPos) + 'px';
    player.style.objectPosition = position
    flipImg(orientation)
    restL_R(orientation,'-400px -190px' )
    }
    if ((orientation == 2 || orientation == -2) && attack == 0){
    boxTopPos += 30*orientation/2;
    boxElement.style.top = (boxTopPos) + 'px';
    player.style.objectPosition = position
    restU_D(orientation, udSprite)
    }
    // Punch
    if ((orientation == 1 || orientation == -1) && attack == 1) {
        player.style.objectPosition = position
        flipImg(orientation)
        restL_R(orientation*-1, '-400px -190px')
    }
    if ((orientation == 2 || orientation == -2) && attack == 1) {
        player.style.objectPosition = position
        restU_D(orientation*-1, udSprite)
    }
    return
}
function flipImg(orientation) {
    player.style.webkitTransform =`scaleX(${orientation})`
    player.style.transform = `scaleX(${orientation})`
}

function restL_R(orientation, sprite) {
    orientation = orientation * -1
    sprite = sprite
    setTimeout( ()=>{
        player.style.objectPosition = sprite
        flipImg(orientation)
    },200)
}

function restU_D(orientation) {
    if (orientation == 2) {
        setTimeout( ()=>{ player.style.objectPosition = udSprite[1]},300)
    }
    if (orientation == -2) {
        setTimeout( ()=>{ player.style.objectPosition = udSprite[0]},300)
    }
}

// Music
var bgSound1 = document.getElementById('bgSound2')
bgSound1.loop = true
function toggleMusic() {
    var curTime = bgSound1.currentTime
    if (curTime > 0) {
        bgSound1.pause()
        bgSound1.currentTime = 0
    } else {bgSound1.play()}
}