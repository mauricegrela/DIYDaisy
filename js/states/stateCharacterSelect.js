var StateCharacterSelect = {
    //Characters select their creation here
    preload: function () {
        

    }

    , create: function () {
        
        var titleText = game.add.text(0, 0, "Character Select Screen");
        titleText.fill = "#ffffff";
        //titleText.anchor.set(0.5, 0.5);

        this.btnStart = gameButtons.addButton("start", game.world.centerX, 50, this.startGame, this);
        
        this.btnStart1 = gameButtons.addButton("start", game.world.centerX, 150, this.startGame, this);
        
        this.btnStart2 = gameButtons.addButton("start", game.world.centerX, 250, this.startGame, this);
       // video1 = game.add.video('Intro');
        //video1.play(true); 
        //video1.addToWorld();
        
    }
    , startGame: function () {
        
        game.state.start("StateMainLeaf");
        //video1.stop();
    }
    , update: function () {

    }

}