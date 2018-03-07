var StateLoad = {

    preload: function () {

this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
this.game.scale.refresh();   

this.time.advacedTiming = true;       
        
/////////////////////
////ParentsCorner////
/////////////////////        
game.load.image('FrontEndTile', 'images/backgrounds/landing-page-bg.PNG');
        
/////////////////////
/////LandingPage/////
/////////////////////        
game.load.image('FrontEndTile', 'images/backgrounds/landing-page-bg.png');
        
/////////////////////
//////Directory//////
/////////////////////     
game.load.image('DirectoryBackground', 'images/results/book.png');        
        
////////////////
/////Videos/////
////////////////  
        
        var VideoBackground;
        //game.load.image('VideoBackGround', 'images/backgrounds/DragBackground.png');
        game.load.image('VideoBackGround', 'images/backgrounds/video-bg.PNG');
        
        var video1;
        game.load.video('Intro', 'videos/Intro/DaisyGBK_Intro_720.mp4');
        
        //Exptros which will pla 
        game.load.video('Extro1', 'videos/Extro/DaisyGBK_Extro1_720.mp4');
        game.load.video('Extro2', 'videos/Extro/DaisyGBK_Extro2_720.mp4');
        game.load.video('Extro3', 'videos/Extro/DaisyGBK_Extro3_720.mp4');
        game.load.video('Extro4', 'videos/Extro/DaisyGBK_Extro4_720.mp4');
        game.load.video('Extro5', 'videos/Extro/DaisyGBK_Extro5_720.mp4');

        //Default Video loaded 
        game.load.video('Episode', 'videos/PineCone_Animal/DaisyGBK_PineCon_Ani_720.mp4');


////////////////
/////Mobile/////
////////////////    
        game.load.image('MobileBody', 'images/Mobile/MobileBody.png');
        
////////////////
////Pinecones////
////////////////    
        //game.load.image('MagLenz',     'images/Pinecone/alphaMaskState.png');      
        //Load Stickers and body
        game.load.image('PineconeBody', 'images/Pinecone/PineconeBody.png');
        //Wings
        game.load.image('PineconeWings_1', 'images/Pinecone/PineconeWings_1.png');     
        game.load.image('PineconeWings_2', 'images/Pinecone/PineconeWings_2.png'); 
        game.load.image('PineconeWings_3', 'images/Pinecone/PineconeWings_3.png'); 
        game.load.image('PineconeWings_4', 'images/Pinecone/PineconeWings_4.png');
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
        //Head gear
        game.load.image('PineconeHeadgear_1', 'images/Pinecone/PineconeHeadgear_1.png');     
        game.load.image('PineconeHeadgear_2', 'images/Pinecone/PineconeHeadgear_2.png'); 
        game.load.image('PineconeHeadgear_3', 'images/Pinecone/PineconeHeadgear_3.png'); 
        game.load.image('PineconeHeadgear_4', 'images/Pinecone/PineconeHeadgear_4.png');    
        //Clothing 
        game.load.image('PineconeClothing_1', 'images/Pinecone/PineconeClothing_1.png');
        game.load.image('PineconeClothing_2', 'images/Pinecone/PineconeClothing_2.png');
        game.load.image('PineconeClothing_3', 'images/Pinecone/PineconeClothing_3.png');      
        game.load.image('PineconeClothing_4', 'images/Pinecone/PineconeClothing_4.png');
      
        game.load.spritesheet("Pinecone_Stickers", "images/ui/Pinecone_stickers.png", 182, 125, 24);
////////////////
///////Leaf/////
////////////////         
        game.load.image('RockBody', 'images/Rock/RockBody.png');     
////////////////
///////Leaf/////
////////////////    
        game.load.image('LeafBody', 'images/Leaf/LeafBody.png');  
////////////////
///StickWand///
////////////////    
        game.load.image('StickWandBody', 'images/StickWand/StickWandBody.png');   
///////////////////////////
//Carosel Stickers to load/
///////////////////////////
        //Load Background images for the rock
        game.load.image('craft_Backgroung', 'images/backgrounds/Background_1.png');
        
        //Background for character movemeng 
        game.load.image('placement_Background', 'images/backgrounds/DragBackground.png');
        
        //Sticker Tab
        game.load.spritesheet('StickerCaroselTab', 'images/ui/diy-tabs.png', 952, 268, 2);
       
        
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
        game.load.spritesheet("buttons", "images/ui/buttons-red.png", 265, 75);
        game.load.spritesheet("soundButtons", "images/ui/soundButtons-blue.png", 22, 22, 4);
        game.load.image("daisylogo", "images/ui/daisylogo.png");
        //Load Background images for the rock
        game.load.image('CloseButton', 'images/results/close-button.png');
        game.load.spritesheet("creativeButtons", "images/results/results-ui-sprite.png", 150, 128, 4);
        game.load.audio("backgroundMusic", "audio/background/piano.mp3");
        game.load.audio("elephant", "audio/sfx/elephant.mp3");  
        //Object UI
        game.load.spritesheet("Characterbuttons", "images/ui/Objects_UI.png", 120, 120);
    
        //Placement
         game.load.image('DownloadModal', "images/results/download-modal.png");
         game.load.image('DownloadButton', "images/results/download.png");
        
        //Loading Variables      
        var empty = game.add.image(0, 0, "loadingEmpty");
        var full = game.add.image(0, 0, "loadingFull");

        
        center(empty);
        full.anchor.set(0, 0.5);
        full.x = game.world.centerX - empty.width / 2;
        full.y = empty.y;
        

        
        
        game.load.setPreloadSprite(full);
        
        
      this.logo = this.add.sprite( game.width/2, 0, 'LoadscreenAnim');
      this.logo.anchor.set(0.5, 0.5);
        this.logo.x -= this.logo.width
      this.logo.scale.set(scaleRatio*4,scaleRatio*4);
      this.logo.animations.add('shake');
      this.logo.animations.play('shake', 30, true)
    },

    create: function () {
        game.state.start("StateTitle");
    },

    update: function () {
        
    }

}