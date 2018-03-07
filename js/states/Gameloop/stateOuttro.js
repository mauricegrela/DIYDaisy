var StateOuttro = {

    preload: function () {
    /*    
    game.load.image('Body', testArray[0]);
    game.load.image('Sticker1', testArray[1]);
    game.load.image('Sticker2', testArray[2]);
    game.load.image('Sticker3', testArray[3]);
    game.load.image('Sticker4', testArray[4]);
    game.load.image('Sticker4', testArray[5]);
    game.load.image('Sticker4', testArray[6]);
    game.load.image('Sticker4', testArray[7]);
    game.load.image('Sticker4', testArray[8]);
    */
    ExtroVideoRef[0] = 'Extro1';
        ExtroVideoRef[1] = 'Extro2';
            ExtroVideoRef[2] = 'Extro3';
                ExtroVideoRef[3] = 'Extro4';
                    ExtroVideoRef[4] = 'Extro5';
    }

    , create: function () {
        
        this.craftBackground = game.add.sprite(0, 0, 'VideoBackGround');
        this.craftBackground.height = this.game.height;
        this.craftBackground.width = this.game.width;
        
        video1 = game.add.video(ExtroVideoRef[game.rnd.integerInRange(0, 4)]);
        video1.play(true); 
        video1.addToWorld(game.width/2, game.height/2, 0.5, 0.5, scaleRatio/1.2,scaleRatio/1.2); 

        this.btnStart = gameButtons.addButton("skip",game.width/2, game.height-100, this.startGame, this);
        this.btnStart.scale.setTo(scaleRatio,scaleRatio);
        this.btnStart.x = game.width-this.btnStart.height;
        this.btnStart.y = this.btnStart.height;
        this.btnStart.anchor.set(0.5, 0.5);
        
        if(this.game.device.desktop == false)
        { 
        this.Play = gameButtons.addButton("play", game.width/2, game.height/2, this.StartVideoMobile, this);
        this.Play.scale.setTo(scaleRatio,scaleRatio);
        this.Play.anchor.set(0.5, 0.5);
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
        game.state.start("StateDirectory");
        //
    }, 
    
    StartVideoMobile: function () {   
    this.Play.alpha = 0;      
    },
        
    ToLandingPage: function()
    {
        game.state.start("StateTitle");   
    }, 
    
    update: function () {

    }
}