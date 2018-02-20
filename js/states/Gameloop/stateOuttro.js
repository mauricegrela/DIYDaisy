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
        /*var titleText = game.add.text(game.world.centerX, game.world.centerY - 100, "GAME TITLE");
        titleText.fill = "#ffffff";
        titleText.anchor.set(0.5, 0.5);*/

        
        video1 = game.add.video(ExtroVideoRef[game.rnd.integerInRange(0, 4)]);
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