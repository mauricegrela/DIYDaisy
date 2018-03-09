var StateEpisode = {

    preload: function () {

    }

    , create: function () 
    {  
        this.craftBackground = game.add.sprite(0, 0, 'VideoBackGround');
        this.craftBackground.height = this.game.height;
        this.craftBackground.width = this.game.width;

        video1 = game.add.video("Episode");
        video1.play(true); 
        video1.addToWorld(game.width/2, game.height/2, 0.5, 0.5, scaleRatio/1.2,scaleRatio/1.2); 

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
        
        //Back button
        /*this.BackButton = game.add.sprite( this.game.width, 0, 'creativeButtons');
        this.BackButton.frame = 2;
        this.BackButton.anchor.x = 0.5;
        this.BackButton.anchor.y = 0.5;
        this.BackButton.x =this.game.width-this.BackButton.width;
        this.BackButton.y = this.BackButton.height;
        this.BackButton.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.BackButton.events.onInputOver.add(this.startGame, this.BackButton);   
        this.BackButton.scale.setTo((ButtonScale/1.5),(ButtonScale/1.5));*/
   
        this.Logo = game.add.sprite(0,0, 'daisylogo');
        this.Logo.scale.setTo(scaleRatio,scaleRatio);
        this.Logo.inputEnabled = true;
        this.Logo.anchor.set(0);
        this.Logo.x =  this.Logo.width/4;
        this.Logo.y =  this.Logo.height/2;
        this.Logo.events.onInputOver.add(this.ToLandingPage, this.Logo); 
    },
    
    
    startGame: function () {  
        video1.stop();
        game.state.start("StateDirectory");
        //
    }, 
    
    StartVideoMobile: function () {   
    this.Play.alpha = 0;
    game.time.events.add(video1.duration*1000, function() {video1.stop();game.state.start("StateDirectory");}); 
    },
    
    ToLandingPage: function()
    {
    game.state.start("StateTitle");   
    }, 
    
    update: function () {

    }

}