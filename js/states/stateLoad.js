var StateLoad = {

    preload: function () {

        this.time.advacedTiming = true;
        
        var video1;
        game.load.video('Intro', 'Videos/The_Nine_Inch_Nails_in_Twin_Peaks.mp4');
        game.load.video('Extro', 'Videos/Pray_For_Mojo.mp4');
        game.load.video('Episode', 'Videos/The_Nine_Inch_Nails_in_Twin_Peaks.mp4');
        
        //Leaf
        game.load.image('MagLenz', 'images/Leaf/alphaMaskState.png');      
        //Load Stickers and body
        game.load.image('Whiskers', 'images/Leaf/LeafWiskers.png');
        game.load.image('Nose', 'images/Leaf/LeafNose.png');
        game.load.image('Body', 'images/Leaf/LeafBody.png');
        game.load.image('Ears', 'images/Leaf/LeafEars.png');
        game.load.image('Eyes', 'images/Leaf/LeafEyes.png');
        //Load Background images and stickers for leaf
        game.load.image('craft_Backgroung', 'images/backgrounds/Background_1.jpg');
        game.load.image('placing_Backgroung', 'images/backgrounds/Background_2.PNG');
        //Animations
        game.load.spritesheet('mummy', 'images/SpriteSheets/metalslug_mummy37x45.png', 37, 45, 18);
        //Loading Variables      
        var empty = game.add.image(0, 0, "loadingEmpty");
        var full = game.add.image(0, 0, "loadingFull");

        center(empty);
        full.anchor.set(0, 0.5);
        full.x = game.world.centerX - empty.width / 2;
        full.y = empty.y;

        game.load.setPreloadSprite(full);

        //PRELOAD EVERYTHING HERE
        game.load.spritesheet("buttons", "images/ui/buttons-red.png", 265, 75);
        game.load.spritesheet("soundButtons", "images/ui/soundButtons-blue.png", 44, 44, 4);
        game.load.spritesheet("creativeButtons", "images/ui/CreativeButtons.png", 140, 160, 7);
        game.load.audio("backgroundMusic", "audio/background/piano.mp3");
        game.load.audio("elephant", "audio/sfx/elephant.mp3");

        
        //Leaf Stickers
        game.load.spritesheet("StickerLeaf1", "images/ui/StickerButtons-White.png", 44, 44, 5);

    },

    create: function () {
        //game.state.start("StateIntroMovie");
        
        
        
        game.state.start("StateMainLeaf");
    },

    update: function () {
        
    }

}