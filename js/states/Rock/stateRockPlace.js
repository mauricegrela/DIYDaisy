var StateRockPlace = {

    preload: function () {
        
        game.load.image('Body', testArray[0]);
        game.load.image('Sticker1', testArray[1]);
        game.load.image('Sticker2', testArray[2]);
        game.load.image('Sticker3', testArray[3]);
        game.load.image('Sticker4', testArray[4]);
        game.load.image('Sticker4', testArray[5]);
        game.load.image('Sticker4', testArray[6]);
        game.load.image('Sticker4', testArray[7]);
        game.load.image('Sticker4', testArray[8]);

        

    }

    , create: function () {
        
        var GameCenter_x = game.width/2;
        var GameCenter_y = game.height/3;
        
        /*var titleText = game.add.text(game.world.centerX, game.world.centerY - 100, "GAME TITLE");
        titleText.fill = "#ffffff";
        titleText.anchor.set(0.5, 0.5);*/
        this.btnStart = gameButtons.addButton("skip", GameCenter_x, GameCenter_y, this.startGame, this);
        this.btnStart.anchor.set(0.5, 0.5)
        //video1 = game.add.video('Intro');
        //video1.play(true); 
        //video1.addToWorld(game.world.centerX, game.world.centerY-100, 0.5, 0.5, 1, 1); 
        
        this.Body = game.add.sprite(GameCenter_x, GameCenter_y, 'Body');
        this.Body.alpha = testArrayAlpha[0];
        this.Body.tint = testArrayColor[0];
        
        this.Sticker1 = game.add.sprite(Xpos_ArrayAlpha[1], Ypos_ArrayAlpha[1], 'Sticker1');
        this.Sticker1.alpha = testArrayAlpha[1];
        this.Sticker1.tint = testArrayColor[1];
        
        this.Sticker2 = game.add.sprite(Xpos_ArrayAlpha[2], Ypos_ArrayAlpha[2], 'Sticker2');
        this.Sticker2.alpha = testArrayAlpha[2];
        this.Sticker2.tint = testArrayColor[2];
        
        this.Sticker3 = game.add.sprite(Xpos_ArrayAlpha[3], Ypos_ArrayAlpha[3], 'Sticker3');
        this.Sticker3.alpha = testArrayAlpha[3];
        this.Sticker3.tint = testArrayColor[3];
        
        this.Sticker4 = game.add.sprite(Xpos_ArrayAlpha[4], Ypos_ArrayAlpha[4], 'Sticker4');
        this.Sticker4.alpha = testArrayAlpha[4];
        this.Sticker4.tint = testArrayColor[4];

        this.Sticker5 = game.add.sprite(Xpos_ArrayAlpha[4], Ypos_ArrayAlpha[4], 'Sticker5');
        this.Sticker5.alpha = testArrayAlpha[4];
        this.Sticker5.tint = testArrayColor[4];

        this.Sticker6 = game.add.sprite(Xpos_ArrayAlpha[4], Ypos_ArrayAlpha[4], 'Sticker6');
        this.Sticker6.alpha = testArrayAlpha[4];
        this.Sticker6.tint = testArrayColor[4];

        this.Sticker7 = game.add.sprite(Xpos_ArrayAlpha[4], Ypos_ArrayAlpha[4], 'Sticker7');
        this.Sticker7.alpha = testArrayAlpha[4];
        this.Sticker7.tint = testArrayColor[4];

        this.Sticker8 = game.add.sprite(Xpos_ArrayAlpha[4], Ypos_ArrayAlpha[4], 'Sticker8');
        this.Sticker8.alpha = testArrayAlpha[4];
        this.Sticker8.tint = testArrayColor[4];
        
    }
    , startGame: function () {     
        game.state.start("StateCharacterSelect");
        //video1.stop();
    }
    , update: function () {

    }

}