var StateLoad = {

    preload: function () {

        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.refresh();
        
        this.time.advacedTiming = true;
        
        var video1;
        game.load.video('Intro', 'Videos/The_Nine_Inch_Nails_in_Twin_Peaks.mp4');
        game.load.video('Extro', 'Videos/Pray_For_Mojo.mp4');
        game.load.video('Episode', 'Videos/The_Nine_Inch_Nails_in_Twin_Peaks.mp4');
////////////////
/////Mobile/////
////////////////    
        game.load.image('MobileBody', 'images/Mobile/MobileBody.png');
        game.load.spritesheet("Mobile_stickers", "images/ui/Mobile_stickers.png", 280, 200, 28);
////////////////
////Pinecones////
////////////////    
     game.load.image('MagLenz',     'images/Pinecone/alphaMaskState.png');      
        //Load Stickers and body
        game.load.image('PineconeBody', 'images/Pinecone/PineconeBody.png');
        //Clothing X
        game.load.image('Bowtie', 'images/Pinecone/PineconeClothing_1.png');
        game.load.image('skirt', 'images/Pinecone/PineconeClothing_2.png');
        //Shoes X
        game.load.image('Shoes_1', 'images/Pinecone/PineconeClothing_3.png');      
        game.load.image('Shoes_2', 'images/Pinecone/PineconeClothing_4.png');
        //Shades X
        game.load.image('Shades_1', 'images/Pinecone/PineconeClothing_5.png');      
        game.load.image('Shades_2', 'images/Pinecone/PineconeClothing_6.png');
        //Eyes X
        game.load.image('PineconeEyes_1', 'images/Pinecone/PineconeEyes_1.png');         
        game.load.image('PineconeEyes_2', 'images/Pinecone/PineconeEyes_2.png'); 
        game.load.image('PineconeEyes_3', 'images/Pinecone/PineconeEyes_3.png'); 
        game.load.image('PineconeEyes_4', 'images/Pinecone/PineconeEyes_4.png');       
        game.load.image('PineconeEyes_5', 'images/Pinecone/PineconeEyes_5.png');   
        game.load.image('PineconeEyes_4', 'images/Pinecone/PineconeEyes_4.png');       
        game.load.image('PineconeEyes_5', 'images/Pinecone/PineconeEyes_5.png'); 
        //feet X
        game.load.image('PineconeFeet_1', 'images/Pinecone/PineconeFeet_1.png');       
        game.load.image('PineconeFeet_2', 'images/Pinecone/PineconeFeet_2.png'); 
        //Hair X
        game.load.image('PineconeHair_1', 'images/Pinecone/PineconeHair_1.png'); 
        game.load.image('PineconeHair_2', 'images/Pinecone/PineconeHair_2.png');       
        game.load.image('PineconeHair_3', 'images/Pinecone/PineconeHair_3.png'); 
        //head gear X
        game.load.image('PineconeHeadGear_1', 'images/Pinecone/PineconeHeadGear_1.png'); 
        game.load.image('PineconeHeadGear_2', 'images/Pinecone/PineconeHeadGear_2.png');       
        game.load.image('PineconeHeadGear_3', 'images/Pinecone/PineconeHeadGear_3.png');
        //Noes X
        game.load.image('PineconeNose_1', 'images/Pinecone/PineconeNose_1.png'); 
        game.load.image('PineconeNose_2', 'images/Pinecone/PineconeNose_2.png');
        //head gear X
        game.load.image('PineconeWings_1', 'images/Pinecone/PineconeWings_1.png'); 
        game.load.image('PineconeWings_2', 'images/Pinecone/PineconeWings_2.png');       
        game.load.image('PineconeWings_3', 'images/Pinecone/PineconeWings_3.png');
        game.load.image('PineconeWings_4', 'images/Pinecone/PineconeWings_4.png');
        
        game.load.spritesheet("Pinecone_Stickers", "images/ui/Pinecone_stickers.png", 280, 200, 28);
        
////////////////
//////Rock//////
////////////////           
        game.load.image('MagLenz', 'images/Pinecone/alphaMaskState.png');      
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
        game.load.spritesheet("Rock_Stickers_1", "images/ui/Rock_stickers.png", 140, 100, 8);

////////////////
///SmudgStick///
////////////////    
        game.load.image('SmudgeStickBody', 'images/SmudgeStick/SmudgeStickBody.png');          
         
////////////////
///StickWand///
////////////////    
        game.load.image('StickWandBody', 'images/StickWand/StickWandBody.png');   
        
///////////////////////////
//Carosel Stickers to load/
///////////////////////////
        //Load Background images for the rock
        game.load.image('craft_Backgroung', 'images/backgrounds/Background_1.jpg');
        
        //Object Tab
        game.load.image('characterCaroselTab', 'images/ui/object-tab-active.png');
        
        //Sticker Tab
        game.load.image('StickerCaroselTab', 'images/ui/stickers-tab-active.png');
        
        //Arrows Tab
        game.load.spritesheet("CaroselArrows", "images/ui/sticker-arrows.png", 118, 44, 2);     
        
          //Sticker Tab
        game.load.image('TabButton', 'images/ui/StickerCollisionBox.png');
        
        //Placement Background
        game.load.image('placing_Backgroung', 'images/backgrounds/Background_2.PNG');
        
        //Paint Brush Sprite
        game.load.spritesheet('PaintBrush', 'images/backgrounds/paintbrush-sprite.png', 409, 549, 3);
        
        //JarAnim Sprite
        game.load.spritesheet('PencilJar', 'images/backgrounds/jar-sprite.png', 500, 750, 2);
        
        
        //Animations
        game.load.spritesheet('mummy', 'images/SpriteSheets/metalslug_mummy37x45.png', 37, 45, 18);
        
        //PRELOAD EVERYTHING HERE
        game.load.spritesheet("buttons", "images/ui/buttons-red.png", 265, 75);
        game.load.spritesheet("soundButtons", "images/ui/soundButtons-blue.png", 44, 44, 4);
        game.load.spritesheet("creativeButtons", "images/ui/CreativeButtons.png", 140, 160, 7);
        game.load.audio("backgroundMusic", "audio/background/piano.mp3");
        game.load.audio("elephant", "audio/sfx/elephant.mp3");  
        game.load.image("PaintUI", "images/ui/PaintDrop.png");
        
        //Loading Variables      
        var empty = game.add.image(0, 0, "loadingEmpty");
        var full = game.add.image(0, 0, "loadingFull");

        center(empty);
        full.anchor.set(0, 0.5);
        full.x = game.world.centerX - empty.width / 2;
        full.y = empty.y;

        game.load.setPreloadSprite(full);




    },

    create: function () {
        ImageAssetArray[0]='PineconeBody';
        PivotPoint_X[0] = 0.5;
        PivotPoint_Y[0] = 0.5;    
///////////////////////////
////First Sticker Group////
///////////////////////////
        ImageAssetArray[1]='PineconeWings_1';
        PivotPoint_X[1] = 0.5;
        PivotPoint_Y[1] = 0.5;   
        ImageAssetArray[2]='PineconeWings_2';
        PivotPoint_X[2] = 0.5;
        PivotPoint_Y[2] = 0.5;   
        ImageAssetArray[3]='PineconeWings_3';
        PivotPoint_X[3] = 0.5;
        PivotPoint_Y[3] = 0.5;   
        ImageAssetArray[4]='PineconeWings_4';
        PivotPoint_X[4] = 0.5;
        PivotPoint_Y[4] = 0.5;   
        ImageAssetArray[5]='PineconeFeet_1';
        PivotPoint_X[5] = 0.5;
        PivotPoint_Y[5] = 1;   
        ImageAssetArray[6]='PineconeFeet_2';
        PivotPoint_X[6] = 0.5;
        PivotPoint_Y[6] = 1; 
        ImageAssetArray[7]='Bowtie';
        PivotPoint_X[7] = 0.5;
        PivotPoint_Y[7] = 0.5;      
        ImageAssetArray[8]='skirt';
        PivotPoint_X[8] = 0.5;
        PivotPoint_Y[8] = 0.5;   
///////////////////////////
////Second Sticker Group///
///////////////////////////
        ImageAssetArray[9]='Shoes_1';
        PivotPoint_X[9] = 0.5;
        PivotPoint_Y[9] = 1;   
        ImageAssetArray[10]='Shoes_2';
        PivotPoint_X[10] = 0.5;
        PivotPoint_Y[10] = 1;   
        ImageAssetArray[11]='PineconeEyes_1';
        PivotPoint_X[11] = 0.5;
        PivotPoint_Y[11] = 0.3;   
        ImageAssetArray[12]='PineconeEyes_2';
        PivotPoint_X[12] = 0.5;
        PivotPoint_Y[12] = 0.3; 
        ImageAssetArray[13]='PineconeEyes_3';
        PivotPoint_X[13] = 0.5;
        PivotPoint_Y[13] = 0.3; 
        ImageAssetArray[14]='PineconeEyes_4';
        PivotPoint_X[14] = 0.5;
        PivotPoint_Y[14] = 0.3; 
        ImageAssetArray[15]='PineconeEyes_5';           
        PivotPoint_X[15] = 0.5;
        PivotPoint_Y[15] = 0.3; 
        ImageAssetArray[16]='Shades_1';
        PivotPoint_X[16] = 0.5;
        PivotPoint_Y[16] = 0.3; 
///////////////////////////
////Third Sticker Group////
///////////////////////////
        ImageAssetArray[17]='Shades_2';
        PivotPoint_X[17] = 0.5;
        PivotPoint_Y[17] = 0.3; 
        ImageAssetArray[18]='PineconeNose_2';
        PivotPoint_X[18] = 0.5;
        PivotPoint_Y[18] = 0.5;    
        ImageAssetArray[19]='PineconeNose_1';
        PivotPoint_X[19] = 0.5;
        PivotPoint_Y[19] = 0.5; 
        ImageAssetArray[20]='PineconeHair_1';
        PivotPoint_X[20] = 0.5;
        PivotPoint_Y[20] = 0.5;      
        ImageAssetArray[21]='PineconeHair_2';
        PivotPoint_X[21] = 0.5;
        PivotPoint_Y[21] = 0;   
        ImageAssetArray[22]='PineconeHair_3';
        PivotPoint_X[22] = 0.5;
        PivotPoint_Y[22] = 0;   
        ImageAssetArray[23]='PineconeHeadGear_1';
        PivotPoint_X[23] = 0.5;
        PivotPoint_Y[23] = 0;   
        ImageAssetArray[24]='PineconeHeadGear_2';
        PivotPoint_X[24] = 0.5;
        PivotPoint_Y[24] = 0;   
        ImageAssetArray[25]='PineconeHeadGear_3';
        PivotPoint_X[23] = 0.5;
        PivotPoint_Y[23] = 0;   

        StickerAssigner_set1 = "Pinecone_Stickers";
        //StickerAssigner_set2 = "Rock_Stickers_2";
        game.state.start("StateTitle");
        //game.state.start("StateCharacterSelect");
        //game.state.start("StateRockMain");
    },

    update: function () {
        
    }

}