var StateEpisode = {

    preload: function () {

    }

    , create: function () {   
       
        video1 = game.add.video("Episode");
        video1.play(true); 
        video1.addToWorld(game.width/2, game.height/2, 0.5, 0.5, 1, 1); 
        //video1.stop();
        
        this.btnStart = gameButtons.addButton("skip",game.width/2, game.height/2+video1.height, this.startGame, this);
        this.btnStart.anchor.set(0.5, 0.5);
        this.btnStart.y = game.height-this.btnStart.height;
        
        if(this.game.device.desktop == false){ 
        this.Play = gameButtons.addButton("play", game.width/2, game.height/2, this.StartVideoMobile, this);
        this.Play.anchor.set(0.5, 0.5);
        }
    ExtroMenu = game.add.group();
    this.PlaceModeButton = gameButtons.addButton("skip", 300, 100, this.PlaceCreation, this);//Save File
                   
    },
    
    
    startGame: function () {  
        video1.stop();
        game.state.start("StateDirectory");
        //
    }, 
    
    StartVideoMobile: function () {   
    this.Play.alpha = 0;      
    },
    
    update: function () {

    }

}