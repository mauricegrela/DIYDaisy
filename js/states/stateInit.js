var StateInit = {

    preload: function () {
        game.load.image("loadingEmpty", "images/loading/progress_none.png");
        game.load.image("loadingFull", "images/loading/progress_all.png");
        game.load.image("loadingBackground", "images/loading/Loading-Screen-bg.png");
        game.load.spritesheet('LoadscreenAnim', 'images/SpriteSheets/LOAD_SpriteSheet.png', 256, 256, 9);

        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.refresh();
        
        if (isMobile==true) 
            {
                if (useLandscape == true) 
                {
                    //game.scale.forceOrientation(true, false);
                } 
                    else 
                    {
                       // game.scale.forceOrientation(false, true);
                    }
            game.scale.enterIncorrectOrientation.add(this.wrongWay, this);
            game.scale.leaveIncorrectOrientation.add(this.rightWay, this);
            game.scale.ScaleManager = Phaser.ScaleManager.SHOW_ALL;
            }

    }
    , create: function () {        
      this.game.stage.backgroundColor = "#9dbf58";
        game.state.start("StateLoad");
    }
    , update: function () {

    }
    , rightWay: function () {
        document.getElementById(wrongTag).style.display = "none";
    }
    , wrongWay: function () {
        document.getElementById(wrongTag).style.display = "block";
    }

}