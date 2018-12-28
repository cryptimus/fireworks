function fireworks(){

    this.color = window.colorarray[Math.floor(Math.random()*colorarray.length)];
    this.firework = new particle(Math.random()*canvas.width, canvas.height, this.color,true);
    this.particles = [];
    this.exploded = false;
    
    
    this.done = function() {
        if (this.exploded && this.particles.length === 0) {
          return true;
        } 
        else {
          return false;
        }
    }
    
    this.draw = function() {
        if (!this.exploded) {
          this.firework.draw();
        }
        
        for (var i = 0; i < this.particles.length; i++) {
          this.particles[i].draw();
        }
    }
    

    this.explode = function(){

            if(Math.random()>0.2){
                for(let i=0 ; i<100; i++){
                    let p = new particle(this.firework.x, this.firework.y, this.color, false, false);
                    this.particles.push(p);
                }
            }
            else{

                for (var t = 0; t <= 2*pi; t += 0.065) {
                    var hx = (16 * Math.pow(Math.sin(t), 3)) * -1;
                    var hy = (13 * Math.cos(t) - 5 * Math.cos(t * 2) - 2 * Math.cos(t * 3) - Math.cos(t * 4)) * -1;
                    let p = new particle(this.firework.x+hx*2, this.firework.y+hy*2, this.color, false, true);
                    this.particles.push(p);
                }
            }
            
    }


    this.update = function(){

        if (!this.exploded) {
            this.firework.applyforce(g);
            this.firework.update();
            
            if (this.firework.vy >= 0) {
              this.exploded = true;
              this.explode();
            }
        }

      for (var i = this.particles.length - 1; i >= 0; i--) {
        this.particles[i].applyforce(g);
        this.particles[i].applyforce(wind);
        this.particles[i].update();
        
        if (this.particles[i].done()) {
          this.particles.splice(i, 1);
        }
      }

            
    }
}