var StateTitle = {

    preload: function () {
        

        
        //game.load.image('Whiskers', testArray[0]);
            //Responsive text
        GameCenter_x = game.width/3.5;
        GameCenter_y = game.height/5; 
        

        
        //scaleRatio = window.devicePixelRatio ;
    }, 
    
    create: function () {
        this.Background = game.add.sprite(this.game.width/2,this.game.height/2, 'FrontEndTile');
        this.Background.anchor.x = 0.5;
        this.Background.anchor.y = 0.5;

        this.btnStart = gameButtons.addButton("play", 
        this.game.width, 
        this.game.height,
        this.startGame, this);
        this.btnStart.anchor.x = 1;
        this.btnStart.anchor.y =  1;
        //this.btnStart.scale.setTo(ButtonScaleAdjustment,ButtonScaleAdjustment);
        
        this.btnStart.x = this.game.width - this.btnStart.width*1.2;
        this.btnStart.y = this.game.height/2 + this.game.height/5;
        
        this.btnStart = gameButtons.addButton("parents",
        this.game.width, 
        this.game.height,
        this.ParentsCorner, this);
        this.btnStart.anchor.setTo(0.5);
        //this.btnStart.scale.setTo(ButtonScaleAdjustment,ButtonScaleAdjustment);
        this.btnStart.anchor.x = 1;
        this.btnStart.anchor.y =  1;
        this.btnStart.x = this.game.width - this.btnStart.width*1.2;
        this.btnStart.y = this.game.height/2 + this.game.height/4;
        
        
    },

    
    startGame: function () {     
    game.state.start("StateIntroMovie");
    //game.state.start("StatePlace");
    //game.state.start("StateDirectory");
    }, 
    
    ParentsCorner: function () {
    game.state.start("StateParentsCorner");
    }, 
    
    update: function () {

    }

}