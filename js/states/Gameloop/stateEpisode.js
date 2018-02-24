var StateEpisode = {

    preload: function () {

    }

    , create: function () 
    {  

        this.VideoBackground = game.add.sprite(0, 0, 'VideoBackGround');

        video1 = game.add.video("Episode");
        video1.play(true); 
        video1.addToWorld(game.width/2, game.height/2, 0.5, 0.5, scaleRatio,scaleRatio); 

            if(this.game.device.desktop == false)
            { 
            this.Play = gameButtons.addButton("play", game.width/2, game.height/2, this.StartVideoMobile, this);
            this.Play.scale.setTo(scaleRatio,scaleRatio);
            this.Play.anchor.set(0.0, 0.0);
            }
    ExtroMenu = game.add.group();
    this.PlaceModeButton = gameButtons.addButton("skip",0,0,this.startGame, this);
    this.PlaceModeButton.scale.setTo(scaleRatio,scaleRatio);
    this.PlaceModeButton.x = this.PlaceModeButton.width;
    this.PlaceModeButton.y = this.PlaceModeButton.height;
    this.PlaceModeButton.anchor.set(1.0, 1.0);
   
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