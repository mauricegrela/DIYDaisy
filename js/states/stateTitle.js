var StateTitle = {

    preload: function () {
        
        //game.load.image('Whiskers', testArray[0]);
            //Responsive text
        GameCenter_x = game.width/3.5;
        GameCenter_y = game.height/5; 
        

        
        //scaleRatio = window.devicePixelRatio ;
    }, 
    
    create: function () {
         
        this.background = this.add.image(0, 0, "FrontEndTile");
        this.background.height = this.game.height;
        this.background.width = this.game.width;
        
        
        
        //Background Working
        this.Background = game.add.sprite(0,0, 'FrontEndTile');
        this.Background.anchor.set(0.0);
        this.Background.width =game.width; 
        this.Background.height =game.height;

        this.btnStart = gameButtons.addButton("play", 
        this.game.width, 
        this.game.height,
        this.startGame, this);
        this.btnStart.anchor.setTo(0.5);
        this.btnStart.scale.setTo(scaleRatio,scaleRatio);
        
        this.btnStart.x = this.game.width - this.btnStart.width;
        this.btnStart.y = this.game.height - this.btnStart.height*2;
        
        this.btnStart = gameButtons.addButton("parents",
        this.game.width, 
        this.game.height,
        this.ParentsCorner, this);
        this.btnStart.anchor.setTo(0.5);
        this.btnStart.scale.setTo(scaleRatio,scaleRatio);
        
        this.btnStart.x = this.game.width - this.btnStart.width;
        this.btnStart.y = this.game.height - this.btnStart.height;
    },

    
    startGame: function () {     
    game.state.start("StateDirectory");
    //game.state.start("StateDirectory");
    }, 
    
    ParentsCorner: function () {
    game.state.start("StateParentsCorner");
    }, 
    
    update: function () {

    }

}