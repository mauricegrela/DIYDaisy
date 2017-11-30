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
        
        game.load.image('Mobile_1', 'images/Mobile/Mobile_1.png');
        game.load.image('Mobile_2', 'images/Mobile/Mobile_2.png');
        game.load.image('Mobile_3', 'images/Mobile/Mobile_3.png');
        game.load.image('Mobile_4', 'images/Mobile/Mobile_4.png');
        game.load.image('Mobile_5', 'images/Mobile/Mobile_5.png');
        game.load.image('Mobile_6', 'images/Mobile/Mobile_6.png');
        game.load.image('Mobile_7', 'images/Mobile/Mobile_7.png');
        game.load.image('Mobile_8', 'images/Mobile/Mobile_8.png');
        game.load.image('Mobile_9', 'images/Mobile/Mobile_9.png');
        game.load.image('Mobile_10', 'images/Mobile/Mobile_10.png');
        game.load.image('Mobile_11', 'images/Mobile/Mobile_11.png');
        game.load.image('Mobile_12', 'images/Mobile/Mobile_12.png'); 
        game.load.image('Mobile_13', 'images/Mobile/Mobile_13.png');
        game.load.image('Mobile_14', 'images/Mobile/Mobile_14.png');
        game.load.image('Mobile_15', 'images/Mobile/Mobile_15.png');
        game.load.image('Mobile_16', 'images/Mobile/Mobile_16.png');
        game.load.image('Mobile_17', 'images/Mobile/Mobile_17.png');
        game.load.image('Mobile_18', 'images/Mobile/Mobile_18.png'); 
        game.load.image('Mobile_19', 'images/Mobile/Mobile_19.png');
        game.load.image('Mobile_20', 'images/Mobile/Mobile_20.png');
        game.load.image('Mobile_21', 'images/Mobile/Mobile_21.png');
        game.load.image('Mobile_22', 'images/Mobile/Mobile_22.png');
        game.load.image('Mobile_23', 'images/Mobile/Mobile_23.png');
        game.load.image('Mobile_24', 'images/Mobile/Mobile_24.png');
        
        game.load.spritesheet("Mobile_stickers", "images/ui/Mobile_stickers.png", 365, 250, 24);
        
////////////////
////Pinecones////
////////////////    
        //game.load.image('MagLenz',     'images/Pinecone/alphaMaskState.png');      
        //Load Stickers and body
        game.load.image('PineconeBody', 'images/Pinecone/PineconeBody.png');
        //Clothing 
        game.load.image('PineconeClothing_1', 'images/Pinecone/PineconeClothing_1.png');
        game.load.image('PineconeClothing_2', 'images/Pinecone/PineconeClothing_2.png');
        game.load.image('PineconeClothing_3', 'images/Pinecone/PineconeClothing_3.png');      
        game.load.image('PineconeClothing_4', 'images/Pinecone/PineconeClothing_4.png');
        //Eyes 
        game.load.image('PineconeEyes_1', 'images/Pinecone/PineconeEyes_1.png');     
        game.load.image('PineconeEyes_2', 'images/Pinecone/PineconeEyes_2.png'); 
        game.load.image('PineconeEyes_3', 'images/Pinecone/PineconeEyes_3.png'); 
        game.load.image('PineconeEyes_4', 'images/Pinecone/PineconeEyes_4.png');  
        //Feet
        game.load.image('PineconeFeet_1', 'images/Pinecone/PineconeFeet_1.png');     
        game.load.image('PineconeFeet_2', 'images/Pinecone/PineconeFeet_2.png'); 
        game.load.image('PineconeFeet_3', 'images/Pinecone/PineconeFeet_3.png'); 
        game.load.image('PineconeFeet_4', 'images/Pinecone/PineconeFeet_4.png');    
        //Feet
        game.load.image('PineconeGlasses_1', 'images/Pinecone/PineconeGlasses_1.png');     
        game.load.image('PineconeGlasses_2', 'images/Pinecone/PineconeGlasses_2.png'); 
        game.load.image('PineconeGlasses_3', 'images/Pinecone/PineconeGlasses_3.png'); 
        game.load.image('PineconeGlasses_4', 'images/Pinecone/PineconeGlasses_4.png'); 
        //Head gear
        game.load.image('PineconeHeadgear_1', 'images/Pinecone/PineconeHeadgear_1.png');     
        game.load.image('PineconeHeadgear_2', 'images/Pinecone/PineconeHeadgear_2.png'); 
        game.load.image('PineconeHeadgear_3', 'images/Pinecone/PineconeHeadgear_3.png'); 
        game.load.image('PineconeHeadgear_4', 'images/Pinecone/PineconeHeadgear_4.png');
        //Wings
        game.load.image('PineconeWings_1', 'images/Pinecone/PineconeWings_1.png');     
        game.load.image('PineconeWings_2', 'images/Pinecone/PineconeWings_2.png'); 
        game.load.image('PineconeWings_3', 'images/Pinecone/PineconeWings_3.png'); 
        game.load.image('PineconeWings_4', 'images/Pinecone/PineconeWings_4.png');
        game.load.spritesheet("Pinecone_Stickers", "images/ui/Pinecone_stickers.png", 365, 250, 24);
        
////////////////
//////Rock//////
////////////////           
        //game.load.image('MagLenz', 'images/Pinecone/alphaMaskState.png');      
        //Load Stickers and body
        game.load.image('RockBody', 'images/Rock/RockBody.png');     
        game.load.image('RockBase_1', 'images/Rock/RockBase_1.png');
        game.load.image('RockBase_2', 'images/Rock/RockBase_2.png');      
        game.load.image('RockBase_3', 'images/Rock/RockBase_3.png');
        game.load.image('RockBase_4', 'images/Rock/RockBase_4.png'); 
                        
        game.load.image('RockFace_1', 'images/Rock/RockFace_1.png');
        game.load.image('RockFace_2', 'images/Rock/RockFace_2.png');
        game.load.image('RockFace_3', 'images/Rock/RockFace_3.png');
        game.load.image('RockFace_4', 'images/Rock/RockFace_4.png');
         
        game.load.image('RockHeadgear_1', 'images/Rock/RockHeadgear_1.png');
        game.load.image('RockHeadgear_2', 'images/Rock/RockHeadgear_2.png');
        game.load.image('RockHeadgear_3', 'images/Rock/RockHeadgear_3.png');
        game.load.image('RockHeadgear_4', 'images/Rock/RockHeadgear_4.png');
                
        game.load.image('RockWings_1', 'images/Rock/RockWings_1.png');
        game.load.image('RockWings_2', 'images/Rock/RockWings_2.png');
        game.load.image('RockWings_3', 'images/Rock/RockWings_3.png');
        game.load.image('RockWings_4', 'images/Rock/RockWings_4.png');
        
        game.load.image('RockFeet_1', 'images/Rock/RockFeet_1.png');
        game.load.image('RockFeet_2', 'images/Rock/RockFeet_3.png');
        game.load.image('RockFeet_3', 'images/Rock/RockFeet_2.png');
        game.load.image('RockFeet_4', 'images/Rock/RockFeet_4.png');
       
        game.load.image('RockClothing_1', 'images/Rock/RockClothing_1.png');
        game.load.image('RockClothing_2', 'images/Rock/RockClothing_2.png');
        game.load.image('RockClothing_3', 'images/Rock/RockClothing_3.png');
        game.load.image('RockClothing_4', 'images/Rock/RockClothing_4.png');
        
        game.load.spritesheet("Rock_Stickers_1", "images/ui/Rock_stickers.png", 365, 250, 24);

        
                //Object Tab
        game.load.image('PaintDot', 'images/ui/PaintDropTest.png');
        
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
        game.load.spritesheet("CaroselArrows", "images/ui/sticker-arrows.png", 92, 95, 2);     
        
          //Sticker Tab
        game.load.image('TabButton', 'images/ui/StickerCollisionBox.png');
        
        //Placement Background
        game.load.image('placing_Backgroung', 'images/backgrounds/Background_2.PNG');
        
        //Paint Brush Sprite
        //game.load.spritesheet('PaintBrush', 'images/backgrounds/paintbrush-sprite.png', 409, 549, 3);
        
        //JarAnim Sprite
        //game.load.spritesheet('PencilJar', 'images/backgrounds/jar-sprite.png', 500, 750, 2);
        
        
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
///////////////////////////
////First Sticker Group////
///////////////////////////
        ImageAssetArray[1]='PineconeEyes_1';
        ImageAssetArray[2]='PineconeEyes_2'; 
        ImageAssetArray[3]='PineconeEyes_3';
        ImageAssetArray[4]='PineconeEyes_4';
///////////////////////////
////Second Sticker Group///
///////////////////////////
        ImageAssetArray[5]='PineconeGlasses_1';
        ImageAssetArray[6]='PineconeGlasses_2';
        ImageAssetArray[7]='PineconeGlasses_3';
        ImageAssetArray[8]='PineconeGlasses_4';
///////////////////////////
////Third Sticker Group////
///////////////////////////
        ImageAssetArray[9]='PineconeHeadgear_1';
        ImageAssetArray[10]='PineconeHeadgear_2';
        ImageAssetArray[11]='PineconeHeadgear_3';
        ImageAssetArray[12]='PineconeHeadgear_4';
///////////////////////////
////Fourth Sticker Group///
///////////////////////////
        ImageAssetArray[13]='PineconeWings_1';
        ImageAssetArray[14]='PineconeWings_2';
        ImageAssetArray[15]='PineconeWings_3';  
        ImageAssetArray[16]='PineconeWings_4';
///////////////////////////
////Fifth Sticker Group////
///////////////////////////
        ImageAssetArray[17]='PineconeClothing_1';
        ImageAssetArray[18]='PineconeClothing_2';
        ImageAssetArray[19]='PineconeClothing_3';
        ImageAssetArray[20]='PineconeClothing_4';
///////////////////////////
////Sixth Sticker Group////
///////////////////////////
        ImageAssetArray[21]='PineconeFeet_1';
        ImageAssetArray[22]='PineconeFeet_2';
        ImageAssetArray[23]='PineconeFeet_3';
        ImageAssetArray[24]='PineconeFeet_4';

        StickerAssigner_set1 = "Pinecone_Stickers";
        //StickerAssigner_set2 = "Rock_Stickers_2";
        game.state.start("StateTitle");
        //game.state.start("StateCharacterSelect");
        //game.state.start("StateRockMain");
    },

    update: function () {
        
    }

}