$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    //set all platforms after 39 back to 1.5
createPlatform(500, 0, 20, 290, "#77cdf2");
createPlatform(1350, 400, 50, 50, "#77cdf2");
createPlatform(0, 230, 270, 10, "black");
createPlatform(320, 230, 200, 10, "#black");
createPlatform(200, 700, 1.5, 10, "#77cdf2");
createPlatform(350, 700, 1.5, 10, "#77cdf2");
createPlatform(500, 700, 1.5, 10, "#77cdf2");
createPlatform(758, 605, 1.5, 10, "#77cdf2");
createPlatform(1000, 500, 1.5, 10, "#77cdf2");
createPlatform(730, 430, 1.5, 10, "#77cdf2");
createPlatform(1100, 600, 1.5, 10, "#77cdf2");
//createPlatform(1010, 490, 50, 67, "#A1D6EC"); use if needed
createPlatform(1150, 490, 1.5, 10, "#77cdf2")
createPlatform(1250, 369, 5, 200, "#A1D6EC");
createPlatform(1150, 370, 1.5, 10, "#77cdf2")
    // TODO 3 - Create Collectables
createCollectable("diamond", 1150, 170, 0.5, 0.7);
createCollectable("diamond", 1350, 340, 0.5, 0.7);
createCollectable("diamond", 500, 340, 0.5, 0.7);

    
    // TODO 4 - Create Cannons

createCannon("right", 800, 0);
createCannon("top", 850, 960);
createCannon("top", 1350, 800);
createCannon("right", 750, 990);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
