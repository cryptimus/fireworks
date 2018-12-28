var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})


var colorarray = ['#f7336e','#ffffff', '#5bd5f7','#FF355E','#FF6037','#CCFF00','#66FF66','#50BFE6','#FF00CC'];
let pi = Math.PI;
let g = {
    fx : 0,
    fy : 0.2
}

let wind = {
    fx : 0,
    fy : -0.15
}

let firework_arr = [];



function animate(){
    requestAnimationFrame(animate);
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    if(Math.random()>0.9){
        firework_arr.push(new fireworks());
    }
    

    for(let i=firework_arr.length-1 ; i>=0 ; i--){

        if(!firework_arr[i].done()){
            firework_arr[i].update();
            firework_arr[i].draw();
        }
        else{
            firework_arr.splice(i,1);
        }
        
        
    }   
    
}
animate();