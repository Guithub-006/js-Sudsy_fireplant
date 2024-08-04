function setup() {
    createCanvas(1000, 1000);
    background("grey");
  }
  
  function draw() {
    stroke("orange")
    fill("crimson")
    
    //console.log(mouseIsPressed)
    if(mouseIsPressed){
    rect(mouseX, mouseY, 30, 30)
    } 
  }