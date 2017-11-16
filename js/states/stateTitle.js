var StateTitle = {

    preload: function () {
        
        //game.load.image('Whiskers', testArray[0]);
            //Responsive text

        
    }

    , create: function () {
        
        //testArray[0,0] = 'images/Leaf/LeafEyes.png';
        
        //	This is the BitmapData we're going to be drawing to
        bmd = game.add.bitmapData(game.width, game.height);
        bmd.addToWorld();
        
        var titleText = game.add.text(game.world.centerX, game.world.centerY - 100, "DIYDAISY!");
        titleText.fill = "#ffffff";
        titleText.anchor.set(0.5, 0.5);

        this.btnStart = gameButtons.addButton("play", game.world.centerX, game.world.centerY, this.startGame, this);
        titleText.anchor.set(0.5, 0.5);
        
        
       // video1 = game.add.video('Intro');
        //video1.play(true); 
        //video1.addToWorld();
        
        this.btnStart = gameButtons.addButton("parents", game.world.centerX, game.world.centerY+75, this.ParentsCorner, this);
        titleText.anchor.set(0.5, 0.5);
        
    }, 
    startGame: function () {
        
    game.state.start("StateIntroMovie");
    //video1.stop();
    }, 
    
    ParentsCorner: function () {
    

    game.state.start("StateParentsCorner");
    //video1.stop();
    }, 
    
    update: function () {

    }

}