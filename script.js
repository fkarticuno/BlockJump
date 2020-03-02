var speed = 10 // the box will move by 10 pixels on every step
var direction = 1; // 1 moves in the positive direction; -1 vice versa

var boxElement = document.getElementById('plyr');
var player = document.getElementById("image")
var boxLeftPos = boxElement.offsetLeft
var boxTopPos = boxElement.offsetTop
document.addEventListener('keydown', e => {
   
   if (e.which == 39) { //  right
    if (boxLeftPos <= 417){
        playerMove(1, '-0px -65px')     //right
        }
    }
    
    if (e.which == 37) {    // left
        if (boxLeftPos >= -1){
        playerMove(-1, '-0px -65px')   //left
        }
    }

    if (e.which == 38) {    // up
        if (boxTopPos >= -5 ) {
        playerMove(-2,'-0px -120px')    //up
        }
    }
    
    if (e.which == 40) {    //  down
        if (boxTopPos <= 265) {
        playerMove(2, '-0px -0px')    //down
        }
    }
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
    return
    }
    if (orientation == 2 || orientation == -2){
    boxTopPos += 30*orientation/2;
    boxElement.style.top = (boxTopPos) + 'px';
    player.style.objectPosition = position
    return
    }    
}


// if (e.which == 39) { //  right
//     if (boxLeftPos <= 417){
        
//         boxLeftPos += 30;
//         boxElement.style.left = (boxLeftPos + speed * direction) + 'px';
//         player.style.objectPosition = '-0px -60px'
//         player.style.webkitTransform ='scaleX(1)'
//         player.style.transform = 'scaleX(1)'
//         }
//     }
    
//     if (e.which == 37) {    // left
//         if (boxLeftPos >= -1){
        
//         boxLeftPos -= 30;
//         boxElement.style.left = (boxLeftPos + speed * direction) + 'px';
//         player.style.objectPosition = '-0px -60px'
//         player.style.webkitTransform ='scaleX(-1)'
//         player.style.transform = 'scaleX(-1)'
//         }
//     }

//     if (e.which == 38) {    // up
//         if (boxTopPos >= -5 ) {
       
//         boxTopPos -= 30;
//         boxElement.style.top = (boxTopPos + speed * direction) + 'px';
//         player.style.objectPosition = '-0px -120px'
//         }
//     }
    
//     if (e.which == 40) {    //  down
//         if (boxTopPos <= 265) {
        
//         boxTopPos += 30;
//         boxElement.style.top = (boxTopPos + speed * direction) + 'px';
//         player.style.objectPosition = '-0px -0px'
//         }
//     }
console.log('Top start:',boxTopPos)
console.log('Left start:',boxLeftPos)