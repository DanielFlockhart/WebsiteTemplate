var c = createCanvas(500,500);
class Agent {
    constructor(id) {
        this.id = id;
        this.x = Math.random() * c.width;
        this.y = Math.random() * c.height;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    move(x, y) {
        this.x += x;
        this.y += y;
    }
    process() {
        this.move(getDirection(), getDirection());
        this.blit();
    }
    blit () {
        if (c.getContext) {
            var context = c.getContext('2d');
            context.fillRect(this.x, this.y, 10, 10);
        }
    }
}
agents=[];
start();
function start(){
    for(var i=0;i<10;i++){
        agents.push(new Agent());
    }
}

function getDirection(){
    return Math.random() * 2 - 1;
}

var canvas = document.getElementById('canvas');

function update(){
    console.log(agents);
    agents.forEach(agent => {
        agent.process();
    });
}



setInterval(function(){ 
    update();
}, 1000/30);
