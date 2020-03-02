var speed = 10 // the box will move by 10 pixels on every step
var direction = 1; // 1 moves in the positive direction; -1 vice versa

var boxElement = document.getElementById('plyr');
var player = document.getElementById('image')
var boxLeftPos = boxElement.offsetLeft
var boxTopPos = boxElement.offsetTop
document.getElementById("input-output").innerText = 'X: '+boxTopPos+' Y: '+boxLeftPos+' Key: N/A'
document.addEventListener('keydown', e => {
    
    (e.which == 38 && boxTopPos >= -5 ? playerMove(-2,'-0px -120px') : '');  //up
    (e.which == 40 && boxTopPos <= 265 ? playerMove(2,'-00px -00px') : '');  //down
    (e.which == 37 && boxLeftPos >= -1 ? playerMove(-1,'-0px -65px') : '');  //left
    (e.which == 39 && boxLeftPos <= 417 ? playerMove(1,'-0px -65px') : '');  //right

    document.getElementById("input-output").innerText = 'X: '+boxTopPos+' Y: '+boxLeftPos+' Key: '+e.which
    //console.log('X: ',boxTopPos, 'Y: ',boxLeftPos, 'Key:', e.which)
})

function playerMove(orientation, position) {
    if (orientation == 1 || orientation == -1) {
    boxLeftPos += 30*orientation;
    boxElement.style.left = (boxLeftPos) + 'px';
    player.style.objectPosition = position
    player.style.webkitTransform =`scaleX(${orientation})`
    player.style.transform = `scaleX(${orientation})`
    }
    if (orientation == 2 || orientation == -2){
    boxTopPos += 30*orientation/2;
    boxElement.style.top = (boxTopPos) + 'px';
    player.style.objectPosition = position
    }
    return
}
