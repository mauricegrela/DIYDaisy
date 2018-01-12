var StateIntroMovie = {

    preload: function () {
        
        
    }

    , create: function () {

        /*var titleText = game.add.text(game.world.centerX, game.world.centerY - 100, "GAME TITLE");
        titleText.fill = "#ffffff";
        titleText.anchor.set(0.5, 0.5);*/

        video1 = game.add.video('Intro');
        //video1.play(true); 
        video1.addToWorld(game.width/2, game.height/2, 0.5, 0.5, 1, 1); 
        //video1.stop();
        
        this.btnStart = gameButtons.addButton("skip",game.width/2, game.height-100, this.startGame, this);
        this.btnStart.anchor.set(0.5, 0);
        this.btnStart.y = game.height-this.btnStart.height;
        /*
        this.tester = game.add.sprite(0, 0, game.cache.getBitmapData(this.DrawnSprite));''
        */
        
        if(this.game.device.desktop == false){ 
        this.Play = gameButtons.addButton("play", game.width/2, game.height/2, this.StartVideoMobile, this);
        this.Play.anchor.set(0.5, 0.5);
        }
    }
    , startGame: function () {   
        video1.stop();
        game.state.start("StateMain");
        
    }, 
    
    StartVideoMobile: function () {   
        this.Play.alpha = 0;      
    }
    
    , update: function () {
        //this.tester.rotation += 0.1;
    }

}