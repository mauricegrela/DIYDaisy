var StateIntroMovie = {

    preload: function () {
        
        
    }

    , create: function () {
        

        
        /*var titleText = game.add.text(game.world.centerX, game.world.centerY - 100, "GAME TITLE");
        titleText.fill = "#ffffff";
        titleText.anchor.set(0.5, 0.5);*/
        this.btnStart = gameButtons.addButton("skip", game.world.centerX, 600, this.startGame, this);
        this.btnStart.anchor.set(0.5, 0.5)
        video1 = game.add.video('Intro');
        video1.play(true); 
        video1.addToWorld(game.world.centerX, game.world.centerY-200, 0.5, 0.5, 0.5, 0.5); 
        
                
        /*
        this.tester = game.add.sprite(0, 0, game.cache.getBitmapData(this.DrawnSprite));''
        */
        
        
    }
    , startGame: function () {   
        video1.stop();
        game.state.start("StateMain");
        
    }
    , update: function () {
        //this.tester.rotation += 0.1;
    }

}