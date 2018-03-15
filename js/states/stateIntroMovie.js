var StateIntroMovie = {

    preload: function () {
        
        
    }

    , create: function () {
 
        this.craftBackground1 = game.add.sprite(0, 0, 'VideoBackGround');
        this.craftBackground1.height = this.game.height;
        this.craftBackground1.width = this.game.width;
        
        
        video1 = game.add.video('Intro');
        video1.play(true); 
        video1.addToWorld(game.width/2, game.height/2, 0.5, 0.5, 0.6,0.6); 

          
        /*this.btnStart = gameButtons.addButton("skip",game.width, 0, this.startGame, this);
        this.btnStart.scale.setTo(scaleRatio,scaleRatio);
        this.btnStart.x = game.width-this.btnStart.height;
        this.btnStart.y = this.btnStart.height;
        this.btnStart.anchor.set(0.5, 0.5);*/
        
        if(this.game.device.desktop == false){ 
        this.Play = gameButtons.addButton("play", game.width/2, game.height/2, this.StartVideoMobile, this);
        //this.Play.scale.setTo(scaleRatio,scaleRatio);
        this.Play.anchor.set(0.5, 0.5);
        }
            else
            {
            game.time.events.add(video1.duration*1000, function() {video1.stop();game.state.start("StateMain");});
            }
        
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
        game.state.start("StateMain");  
    }, 
    
    StartVideoMobile: function () {   
        this.Play.alpha = 0; 
        game.time.events.add(video1.duration*1000, function() {
                            video1.stop();
                            game.state.start("StateMain"); 
                            });
    }, 
    
    ToLandingPage: function()
    {
        game.state.start("StateTitle");   
    }, 
    
    update: function () {
        //this.tester.rotation += 0.1;
    }

}