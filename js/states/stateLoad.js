var StateLoad = {

    preload: function () {
        
this.time.advacedTiming = true; 
        
        
 
/////////////////////
///////Sound FX//////
/////////////////////   
        game.load.audio("drop",'audio/sfx/drop.mp3');
        game.load.audio("SavePromt",'audio/sfx/camera.mp3'); 
        game.load.audio("cameraSnap",'audio/sfx/camera.mp3');  
        
        //Instructions
        game.load.audio("Music",'audio/VoiceOver/Daisy_Music.mp3');
        game.load.audio("FrontEndTitle",'audio/VoiceOver/DaisyVO_001.mp3'); 
        game.load.audio("InitialInstructions",'audio/VoiceOver/DaisyVO_002.mp3'); 
        game.load.audio("TeachSaveButton",'audio/VoiceOver/DaisyVO_003.mp3'); 
        game.load.audio("SaveButtonPressed",'audio/VoiceOver/DaisyVO_004.mp3'); 
        game.load.audio("StartOverConfirm",'audio/VoiceOver/DaisyVO_005.mp3'); 
        
/////////////////////
////ParentsCorner////
/////////////////////        
        game.load.image('FrontEndTile', 'images/backgrounds/landing-page-bg.jpg');
        game.load.image('ParentsCornerBG', 'images/backgrounds/parent-corner-bg.jpg');
        
/////////////////////
/////LandingPage/////
/////////////////////        
        game.load.image('FrontEndTile', 'images/backgrounds/landing-page-bg.jpg');
        
/////////////////////
//////Directory//////
/////////////////////     
        game.load.image('DirectoryBackground', 'images/results/book.png'); 
        game.load.image('ThumbsUp', 'images/results/thumbs-up.png');
        game.load.image('ThumbsDown', 'images/results/thumbs-down.png');
////////////////
/////Videos/////
////////////////    
        var VideoBackground;
        //game.load.image('VideoBackGround', 'images/backgrounds/DragBackground.png');
        game.load.image('VideoBackGround', 'images/backgrounds/video-bg.jpg');
        

        //Load Episodes 
        game.load.video('Episode_PineCone', 'videos/PineCone_Animal/DaisyGBK_PineCon_Ani_720.mp4');
        game.load.video('Episode_Mobile', 'videos/Forest_Mobile/DaisyGBK_ForestMob_720.mp4');
        game.load.video('Episode_Rock', 'videos/Ladybug_Rock/DaisyGBK_LadyRock_720.mp4');
        game.load.video('Episode_Flower', 'videos/Flower_Petal/DaisyGBK_FlowerPetArt_720.mp4');
        game.load.video('Episode_Rainbow', 'videos/Rainbow_Wands/DaisyGBK_RainWand_720.mp4');
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
        game.load.image('Mobile_25', 'images/Mobile/Mobile_25.png');
        game.load.image('Mobile_26', 'images/Mobile/Mobile_26.png');
        game.load.image('Mobile_27', 'images/Mobile/Mobile_27.png');
        game.load.image('Mobile_28', 'images/Mobile/Mobile_28.png');
        game.load.spritesheet("Mobile_stickers", "images/ui/Mobile_stickers.png", 182, 125, 24); 
        
////////////////
////Pinecones///
////////////////    
        //game.load.image('MagLenz',     'images/Pinecone/alphaMaskState.png');      
        //Load Stickers and body
         game.load.image('PineconeBody', 'images/Pinecone/PineconeBody.png');
         game.load.image('PineconeWings_1', 'images/Pinecone/PineconeWings_1.png');     
        game.load.image('PineconeWings_2', 'images/Pinecone/PineconeWings_2.png'); 
        game.load.image('PineconeWings_3', 'images/Pinecone/PineconeWings_3.png'); 
        game.load.image('PineconeWings_4', 'images/Pinecone/PineconeWings_4.png');
        game.load.image('PineconeEyes_1', 'images/Pinecone/PineconeEyes_1.png');     
        game.load.image('PineconeEyes_2', 'images/Pinecone/PineconeEyes_2.png'); 
        game.load.image('PineconeEyes_3', 'images/Pinecone/PineconeEyes_3.png'); 
        game.load.image('PineconeEyes_4', 'images/Pinecone/PineconeEyes_4.png');  
        game.load.image('PineconeFeet_1', 'images/Pinecone/PineconeFeet_1.png');     
        game.load.image('PineconeFeet_2', 'images/Pinecone/PineconeFeet_2.png'); 
        game.load.image('PineconeFeet_3', 'images/Pinecone/PineconeFeet_3.png'); 
        game.load.image('PineconeFeet_4', 'images/Pinecone/PineconeFeet_4.png');
        game.load.image('PineconeHeadgear_1', 'images/Pinecone/PineconeHeadgear_1.png');     
        game.load.image('PineconeHeadgear_2', 'images/Pinecone/PineconeHeadgear_2.png'); 
        game.load.image('PineconeHeadgear_3', 'images/Pinecone/PineconeHeadgear_3.png'); 
        game.load.image('PineconeHeadgear_4', 'images/Pinecone/PineconeHeadgear_4.png');    
        game.load.image('PineconeClothing_1', 'images/Pinecone/PineconeClothing_1.png');
        game.load.image('PineconeClothing_2', 'images/Pinecone/PineconeClothing_2.png');
        game.load.image('PineconeClothing_3', 'images/Pinecone/PineconeClothing_3.png');    
        game.load.image('PineconeClothing_4', 'images/Pinecone/PineconeClothing_4.png');    
        game.load.spritesheet("Pinecone_Stickers", "images/ui/Pinecone_stickers.png", 182, 125, 24);
        
////////////////
///////Leaf/////
////////////////         
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
        game.load.image('RockFeet_2', 'images/Rock/RockFeet_2.png');
        game.load.image('RockFeet_3', 'images/Rock/RockFeet_3.png');
        game.load.image('RockFeet_4', 'images/Rock/RockFeet_4.png');

        game.load.spritesheet("Rock_Stickers_1", "images/ui/Rock_stickers.png", 182, 125, 20);
////////////////
///////Leaf/////
////////////////    
        game.load.image('LeafBody', 'images/Leaf/LeafBody.png');
        game.load.image('LeafWings_1', 'images/Leaf/LeafWings_1.png');
        game.load.image('LeafWings_2', 'images/Leaf/LeafWings_2.png');
        game.load.image('LeafWings_3', 'images/Leaf/LeafWings_3.png');
        game.load.image('LeafWings_4', 'images/Leaf/LeafWings_4.png');

        game.load.image('LeafFace_1', 'images/Leaf/LeafFace_1.png');
        game.load.image('LeafFace_2', 'images/Leaf/LeafFace_2.png');
        game.load.image('LeafFace_3', 'images/Leaf/LeafFace_3.png');
        game.load.image('LeafFace_4', 'images/Leaf/LeafFace_4.png');

        game.load.image('LeafHeadgear_1', 'images/Leaf/LeafHeadgear_1.png');
        game.load.image('LeafHeadgear_2', 'images/Leaf/LeafHeadgear_2.png');
        game.load.image('LeafHeadgear_3', 'images/Leaf/LeafHeadgear_3.png');
        game.load.image('LeafHeadgear_4', 'images/Leaf/LeafHeadgear_4.png');

        game.load.image('LeafClothing_1', 'images/Leaf/LeafClothing_1.png');
        game.load.image('LeafClothing_2', 'images/Leaf/LeafClothing_2.png');
        game.load.image('LeafClothing_3', 'images/Leaf/LeafClothing_3.png');
        game.load.image('LeafClothing_4', 'images/Leaf/LeafClothing_4.png');



        game.load.spritesheet("Leaf_Stickers", "images/ui/Leaf_stickers.png", 182, 125, 16);  
////////////////
///StickWand///
////////////////    
        game.load.image('StickWandBody', 'images/StickWand/StickWandBody.png');
         game.load.image('StickWandBase_1', 'images/StickWand/StickWandBase_1.png');
                game.load.image('StickWandBase_2', 'images/StickWand/StickWandBase_2.png');      
                game.load.image('StickWandBase_3', 'images/StickWand/StickWandBase_3.png');
                game.load.image('StickWandBase_4', 'images/StickWand/StickWandBase_4.png');              
                game.load.image('StickWandClothing_1', 'images/StickWand/StickWandClothing_1.png');
                game.load.image('StickWandClothing_2', 'images/StickWand/StickWandClothing_2.png');
                game.load.image('StickWandClothing_3', 'images/StickWand/StickWandClothing_3.png');
                game.load.image('StickWandClothing_4', 'images/StickWand/StickWandClothing_4.png');
                game.load.image('StickWandBase_1', 'images/StickWand/StickWandBase_1.png');
                game.load.image('StickWandBase_2', 'images/StickWand/StickWandBase_2.png');      
                game.load.image('StickWandBase_3', 'images/StickWand/StickWandBase_3.png');
                game.load.image('StickWandBase_4', 'images/StickWand/StickWandBase_4.png');
                game.load.image('StickWandFace_1', 'images/StickWand/StickWandFace_1.png');
                game.load.image('StickWandFace_2', 'images/StickWand/StickWandFace_2.png');
                game.load.image('StickWandFace_3', 'images/StickWand/StickWandFace_3.png');
                game.load.image('StickWandFace_4', 'images/StickWand/StickWandFace_4.png');
                game.load.image('StickWandFeet_1', 'images/StickWand/StickWandFeet_1.png');
                game.load.image('StickWandFeet_3', 'images/StickWand/StickWandFeet_3.png');
                game.load.image('StickWandFeet_2', 'images/StickWand/StickWandFeet_2.png');
                game.load.image('StickWandFeet_4', 'images/StickWand/StickWandFeet_4.png');
                game.load.image('StickWandHeadgear_1', 'images/StickWand/StickWandHeadgear_1.png');
                game.load.image('StickWandHeadgear_2', 'images/StickWand/StickWandHeadgear_2.png');
                game.load.image('StickWandHeadgear_3', 'images/StickWand/StickWandHeadgear_3.png');
                game.load.image('StickWandHeadgear_4', 'images/StickWand/StickWandHeadgear_4.png');

                game.load.spritesheet("StickWand_stickers", "images/ui/StickWand_stickers.png", 182, 125, 24);  
///////////////////////////
//Carosel Stickers to load/
///////////////////////////
        //Load Background images for the rock
        game.load.image('craft_Backgroung', 'images/backgrounds/Background_1.png');
        
        //Background for character movemeng 
       ///game.load.image('placement_Background', 'images/backgrounds/DragBackground.png');
        
        //Sticker Tab
        game.load.spritesheet('StickerCaroselTab', 'images/ui/diy-tabs.png', 952, 268, 3);
       
        
        //Arrows Tab
        game.load.spritesheet("CaroselArrows", "images/ui/sticker-arrows.png", 46, 47, 2);     
        
          //Sticker Tab
        game.load.image('TabButton', 'images/ui/StickerCollisionBox.png');
        
        //Placement Background
        game.load.image('placing_Backgroung1', 'images/backgrounds/Placeable/Interactive_main_BG-min.png');
        game.load.image('placing_Backgroung2', 'images/backgrounds/Placeable/Interactive_main_FOREGROUND-min.png');

        //Animations
        game.load.spritesheet('Anim1', 'images/SpriteSheets/1_Clouds_SpriteSheet.png', 256, 256, 9);
        game.load.spritesheet('Anim2', 'images/SpriteSheets/2_Dandelion_SpriteSheet.png', 256, 256, 9);
        game.load.spritesheet('Anim3', 'images/SpriteSheets/3_Squirrel_SpriteSheet.png', 256, 256, 9);
        game.load.spritesheet('Anim4', 'images/SpriteSheets/4_Donkey_SpriteSheet.png', 256, 256, 9);
        game.load.spritesheet('Anim5', 'images/SpriteSheets/5_Frog_SpriteSheet.png', 256, 256, 9);
        game.load.spritesheet('Anim6', 'images/SpriteSheets/6_Tutle_SpriteSheet.png', 256, 256, 9);
        game.load.spritesheet('Anim7', 'images/SpriteSheets/7_Bee_SpriteSheet.png', 256, 256, 9);
        game.load.spritesheet('Anim8', 'images/SpriteSheets/8_Kite_SpriteSheet.png', 256, 256, 9);
        game.load.spritesheet('Anim9', 'images/SpriteSheets/9_Light_SpriteSheet.png', 256, 256, 9);
        game.load.spritesheet('Anim10', 'images/SpriteSheets/10_Tea_SpriteSheet.png', 256, 256, 9);
        
        //Parents Cornder
        game.load.image("LeafPDF", "images/parentcorner/LeafPDF.png");
        game.load.image("MobilePDF", "images/parentcorner/MobilePDF.png");
        game.load.image("PineconePDF", "images/parentcorner/PineconePDF.png");
        game.load.image("RockPDF", "images/parentcorner/RockPDF.png");
        game.load.image("StickWandPDF", "images/parentcorner/StickWandPDF.png");
        
        //UI Assets
        
        game.load.spritesheet("buttons", "images/ui/buttons-red@2x.png", 132, 37);
        game.load.spritesheet("soundButtons", "images/ui/soundButtons-blue.png", 22, 22, 4);
        game.load.image("daisylogo", "images/ui/daisylogo.png");
        //Load Background images for the rock
        game.load.image('CloseButton', 'images/results/close-button.png');
        game.load.spritesheet("creativeButtons", "images/results/results-ui-sprite.png", 150, 128, 4);
        game.load.audio("backgroundMusic", "audio/background/piano.mp3");
        game.load.audio("elephant", "audio/sfx/elephant.mp3");  
        //Object UI
        game.load.spritesheet("Characterbuttons", "images/ui/Objects_UI.png", 120, 120);
        //Front end issue 
        game.load.image("PlayButton", "images/ui/Play-Button.png");
        game.load.image("ParentsCorner", "images/ui/info-button.png");
        game.load.image("CBCButton", "images/ui/cbc.png");
        //Placement
         game.load.image('DownloadModal', "images/results/download-modal.png");
         game.load.image('DownloadButton', "images/results/download.png");
        
        //AudioLoad
        game.load.audio("Clouds",'audio/sfx/01_Clouds_SFX.mp3');
        game.load.audio("Dandelion",'audio/sfx/02_Dandelion_SFX.mp3');
        game.load.audio("Squirrel",'audio/sfx/03_Squirrel_SFX.mp3');
        game.load.audio("Donkey",'audio/sfx/04_Donkey_SFX.mp3');
        game.load.audio("Frog",'audio/sfx/05_Frog_SFX.mp3');
        game.load.audio("Turtle",'audio/sfx/06_Turtle_SFX.mp3');
        game.load.audio("Bee",'audio/sfx/07_Bee_SFX.mp3');
        game.load.audio("Kite",'audio/sfx/08_Kite_SFX.mp3');
        game.load.audio("lights",'audio/sfx/09_lights_SFX.mp3');
        game.load.audio("tea",'audio/sfx/10_tea_SFX.mp3');
        
        //Loading screen assets
        var loadingBackground = game.add.image(0, 0, "loadingBackground");  
        loadingBackground.anchor.set(0, 0);
        loadingBackground.height = this.game.height;
        loadingBackground.width = this.game.width;  
        //loadingBackground.scale.set(scaleRatio,scaleRatio);
        //Loading Variables      
        var empty = game.add.image(0, 0, "loadingEmpty");
        var full = game.add.image(0, 0, "loadingFull");

        //center(empty);
        full.anchor.set(0, 0.5);
        full.x = this.game.width - full.width*1.35;
        full.y = this.game.height/2 + this.game.height/6;
        //center(empty);
        empty.anchor.set(0, 0.5);
        empty.x = this.game.width - full.width*1.35;
        empty.y = this.game.height/2 + this.game.height/6;

        game.load.setPreloadSprite(full);
        
        
        this.logo = this.add.sprite( full.x, full.y, 'LoadscreenAnim');
        this.logo.anchor.set(0.9,0.5);
        this.logo.x = empty.x;
        this.logo.y = empty.y-this.logo.width/3;
        //this.logo.scale.set(scaleRatio,scaleRatio);
        this.logo.animations.add('shake');
        this.logo.animations.play('shake', 15, true)
    },

    create: function () {
        game.state.start("StateTitle");
    },

    update: function () {
        
    }

}