var StatePineconeOuttro = {

    preload: function () {
        
        game.load.image('Body', testArray[0]);
        game.load.image('Sticker1', testArray[1]);
        game.load.image('Sticker2', testArray[2]);
        game.load.image('Sticker3', testArray[3]);
        game.load.image('Sticker4', testArray[4]);

        

    }

    , create: function () {
        
        
        /*var titleText = game.add.text(game.world.centerX, game.world.centerY - 100, "GAME TITLE");
        titleText.fill = "#ffffff";
        titleText.anchor.set(0.5, 0.5);*/
        this.btnStart = gameButtons.addButton("skip", game.world.centerX, 400, this.startGame, this);
        this.btnStart.anchor.set(0.5, 0.5)
        video1 = game.add.video('Extro');
        video1.play(true); 
        video1.addToWorld(game.world.centerX, game.world.centerY-100, 0.5, 0.5, 0.5, 0.5); 
        
        
        
    }
    , startGame: function () {  
        video1.stop();
        game.state.start("StatePineconeDirectory");
        //
    }
    , update: function () {

    }

}