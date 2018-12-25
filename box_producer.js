// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

// create two boxes and a ground
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [
    Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
    Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
    Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
    Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

//Produce boxes
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

var today_msec = Date.parse(today);

if(mm == 12 && dd > 24) {
    next_yyyy = yyyy+1;
    var christmas_msec = Date.parse(next_yyyy+'-12'+'-24');
} 
else if(mm == 12 && dd <= 24) {
    var christmas_msec = Date.parse(yyyy+'-12'+'-24');
}

var msec_to_christmas = christmas_msec-today_msec;
var days_to_christmas = Math.round(msec_to_christmas/86400000)

world.add(engine.world, [Bodies.rectangle(300,0,50,50, { 
    render: {
        sprite: {
          texture: "assets/julaften.png",
          xScale: 0.4,
          yScale: 0.4
        }
      }
    })])

for(i=1; i<days_to_christmas; i++) {
    

}

console.log(msec_to_christmas);   
console.log(days_to_christmas);
