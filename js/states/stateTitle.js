var StateTitle = {

    preload: function () {
        
        //game.load.image('Whiskers', testArray[0]);
            //Responsive text
        GameCenter_x = game.width/3.5;
        GameCenter_y = game.height/5; 
        
    }, 
    
    create: function () {
        //Background Working
        this.Background = game.add.sprite(0,0, 'FrontEndTile');
        this.Background.anchor.set(0.0);
        this.Background.width =game.width; 
        this.Background.height =game.height;

        this.btnStart = gameButtons.addButton("play", game.world.centerX+GameCenter_x, 
        game.world.centerY+GameCenter_y, this.startGame, this);
        
        this.btnStart = gameButtons.addButton("parents", game.world.centerX+GameCenter_x,
        (game.world.centerY+ this.btnStart.height)+GameCenter_y, this.ParentsCorner, this);
    },
    
    startGame: function () {     
    game.state.start("StateIntroMovie");
    //game.state.start("StateDirectory");
    }, 
    
    ParentsCorner: function () {
    game.state.start("StateParentsCorner");
    }, 
    
    update: function () {

    }

}