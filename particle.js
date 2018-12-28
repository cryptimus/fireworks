function particle(x,y,color,fw,heart){
    this.r = 2;
    this.x = x;
    this.y = y;
    if(!fw && !heart){
        this.vx = -5*Math.random() + 2;
        this.vy = -5*Math.random() + 2;
    }
    else if(!fw && heart){
        this.vx = 0;
        this.vy = 2;
    }
    else{
        this.vx = 0;
        this.vy = -5*Math.random() - 10;
    }
    
    this.ax = 0;
    this.ay = 0;
    this.lifespan = 1;
    this.color = color;
    
    this.done = function(){
        if (this.r < 0) {
            return true;
          }
        else {
            return false;
        }
    }
    
    this.draw = function(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * pi);
        ctx.fill();
        
    }

    this.applyforce = function(force){
        this.ax += force.fx;
        this.ay += force.fy;
    }

    this.update = function(){

        if(!fw){
            this.r -= 0.05;
        }    
            this.x += this.vx;
            this.y += this.vy;
            this.vx += this.ax;
            this.vy += this.ay;
            this.ax = 0;
            this.ay = 0;
    }
}
