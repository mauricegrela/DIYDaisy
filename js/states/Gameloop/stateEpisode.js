var StateEpisode = {

    preload: function () {
    this.BackButtonSFX = game.add.audio("BackButton");
    }

    , create: function () 
    {  
        this.craftBackground = game.add.sprite(0, 0, 'VideoBackGround');
        this.craftBackground.height = this.game.height;
        this.craftBackground.width = this.game.width;

        video1 = game.add.video(selectedVideo);
        video1.play(true); 
        video1.addToWorld(game.width/2, game.height/2, 0.5, 0.5, 0.6,0.6);

            if(this.game.device.desktop == false)
            { 
            this.Play = gameButtons.addButton("play", game.width/2, game.height/2, this.StartVideoMobile, this);
            this.Play.scale.setTo(scaleRatio,scaleRatio);
            this.Play.anchor.set(0.0, 0.0);
            }
                else
                {
                game.time.events.add(video1.duration*1000, function() {video1.stop();game.state.start("StateDirectory");});
                }
        
        ExtroMenu = game.add.group();
        
        this.BackToCraftButton = gameButtons.addGenericButton("0", 0,0 , this.backToCrafting, this,"creativeButtons",2); 
        this.BackToCraftButton.anchor.x = 1;
        this.BackToCraftButton.anchor.y = 0;
        this.BackToCraftButton.x =  game.width;
        this.BackToCraftButton.y = 0;
        this.BackToCraftButton.scale.setTo(0.8,0.8);
        //NonCharacterBackgroundGroup.add(this.BackToCraftButton);
   
        this.Logo = game.add.sprite(0,0, 'daisylogo');
        this.Logo.scale.setTo(scaleRatio,scaleRatio);
        this.Logo.inputEnabled = true;
        this.Logo.anchor.set(0,0.4);
        this.Logo.x =  this.Logo.width/4;
        this.Logo.y =  this.Logo.height/2;
        this.Logo.events.onInputDown.add(this.ToLandingPage, this.Logo); 
    },
    
    
    backToCrafting: function () {  
        video1.stop();
        game.sound.stopAll();
        
        this.BackButtonSFX.play();
        game.state.start("StateParentsCorner");
        //
    }, 
    
    StartVideoMobile: function () {   
    this.Play.alpha = 0;
    game.time.events.add(video1.duration*1000, function() {video1.stop();game.state.start("StateDirectory");}); 
    },
    
    ToLandingPage: function()
    {
    video1.stop();
    game.sound.stopAll();
    game.state.start("StateTitle");   
    }, 
    
    update: function () {

    }

}