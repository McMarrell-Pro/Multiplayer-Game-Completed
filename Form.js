class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.resetButton = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);

    this.input.position(displayWidth/2 - 50, displayHeight/2);
    this.button.position(displayWidth/2 - 50, displayHeight/2 +20);
    this.resetButton.position(displayWidth-120,displayHeight-120);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });
    this.resetButton.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);
    });

  }
}
