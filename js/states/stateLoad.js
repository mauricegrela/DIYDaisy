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
        
        //Pinecones
         game.load.image('MagLenz', 'images/Leaf/alphaMaskState.png');      
        //Load Stickers and body
        game.load.image('PineconeBody', 'images/Pinecone/PineconeBody.png');     
        game.load.image('PineconeFeet_1', 'images/Pinecone/PineconeFeet_1.png');
        game.load.image('PineconeFeet_2', 'images/Pinecone/PineconeFeet_2.png');      
        game.load.image('PineconeMouth_1', 'images/Pinecone/PineconeMouth_1.png');
        game.load.image('PineconeMouth_2', 'images/Pinecone/PineconeMouth_2.png');      
        game.load.image('PineconeWings_1', 'images/Pinecone/PineconeWings_1.png');
        game.load.image('PineconeWings_2', 'images/Pinecone/PineconeWings_2.png');         
        game.load.image('PineconeEyes_1', 'images/Pinecone/PineconeEyes_1.png'); 
        game.load.image('PineconeEyes_2', 'images/Pinecone/PineconeEyes_2.png');  
        game.load.spritesheet("Pinecone_Stickers", "images/ui/Pinecone_stickers.png", 44, 44, 8);
        //Rock
        
        game.load.image('MagLenz', 'images/Leaf/alphaMaskState.png');      
        //Load Stickers and body
        game.load.image('RockBody', 'images/Rock/RockBody.png');     
        game.load.image('RockAntenae_1', 'images/Rock/RockAntenae_1.png');
        game.load.image('RockAntenae_2', 'images/Rock/RockAntenae_2.png');      
        game.load.image('RockFace_1', 'images/Rock/RockFace_1.png');
        game.load.image('RockFace_2', 'images/Rock/RockFace_2.png');      
        game.load.image('RockFeet_1', 'images/Rock/RockFeet_1.png');
        game.load.image('RockFeet_2', 'images/Rock/RockFeet_2.png');         
        game.load.image('RockWings_1', 'images/Rock/RockWings_1.png'); 
        game.load.image('RockWings_2', 'images/Rock/RockWings_2.png');  
        game.load.spritesheet("Rock_Stickers", "images/ui/Rock_stickers.png", 44, 44, 8);
        
        
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



    },

    create: function () {
        game.state.start("StateIntroMovie");
        //game.state.start("StateRockMain");
    },

    update: function () {
        
    }

}