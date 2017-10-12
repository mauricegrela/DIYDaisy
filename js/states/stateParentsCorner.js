var StateParentsCorner = {

    preload: function () {
        
        //game.load.image('Whiskers', testArray[0]);
        
        
    }

    , create: function () {
        
        var titleText = game.add.text(game.world.centerX, game.world.centerY - 100, "Parents Corner");
        titleText.fill = "#ffffff";
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