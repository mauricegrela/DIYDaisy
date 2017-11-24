var StateMain = {
////////////////////////////////////////////
///////////REMEMBER TO REFRESH/////////////
//////////////////////////////////////////
    preload: function () {
    /*
    game.scale.scaleMode = Phaser.ScaleManager.show;
    game.scale.pageAlignVertically = true;
    game.scale.pageAlignHorizontally = true;
    game.scale.setShowAll();
    game.scale.refresh();
                  
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.RESIZE
    game.scale.minWidth = window.innerWidth/4;
    game.scale.minHeight = window.innerHeight/4;
    game.scale.maxWidth = window.innerWidth/1.5;
    game.scale.maxHeight = window.innerHeight/1.5;
    game.scale.forceLandscape = true;
    game.scale.pageAlignHorizontally = true;
    game.scale.setScreenSize(true);
    */       

        GameCenter_x = game.width/2;
        GameCenter_y = game.height/3;   
    },

    create: function () {
      
        
        scaleRatio = window.devicePixelRatio / 2;
        
        game.input.addPointer();

        //Set the character Group 
        Character = game.add.group();
        
        //  Create the group for the stickers
        StickerGroup_1 = game.add.group();
        StickerGroup_2 = game.add.group();
        StickerGroup_3 = game.add.group();
        StickerGroup_4 = game.add.group();
        StickerGroup_5 = game.add.group();
        StickerGroup_6 = game.add.group();
        
        MagnifinylLenzGroup = game.add.group(); 
        //Character change buttons 
        CharacterStickerGroup = game.add.group();
        
        //Main button group 
        MainButtonGroup = game.add.group();
        //  Create the group for the color pallet
        ColorGroup = game.add.group();
        
        //  Create a Group that will sit above Group 1
        //PlacableMenuGroup = game.add.group();  PROTOTYPE FOR THE ANIMATION
        //Background elements
        BackgroundGroup = game.add.group();
        
        buttongroup = game.add.group();
        
        //reset the score
        score = 0;
        
        //Add background      
        this.craftBackground = game.add.sprite(0, 0, 'craft_Backgroung');
        BackgroundGroup.add(this.craftBackground);     

        carouselScaleOffset = 1.2;
        
        //add sound buttons
        this.btnMusic = gameButtons.addAudioButton("music", 20, 20, gameButtons.toggleMusic, this);
        this.btnSound = gameButtons.addAudioButton("sound", 20, 70, gameButtons.toggleSound, this);

        //if using a scrolling game uncomment these lines
        //this.audioGroup=game.add.group();
        //this.audioGroup.fixedToCamera=true;

        //define sounds here
        this.elephant = game.add.audio("elephant");
        //define background music
        this.backgroundMusic = game.add.audio("backgroundMusic");
        
        //pass the background music to the gameMedia object
        gameMedia.setBackgroundMusic(this.backgroundMusic);
        

        
        //Images Variables

        SelectedColor = 0xff00ff;
       
        
///////////////////////////
///CaroseleButtons Sticker Group////
///////////////////////////
        
        if(this.game.device.desktop == true){ }
        
        //Main Button Placement
        var MainButtonsPos_x = window.innerWidth/2.3;
        var MainButtonsPos_y = game.height/1.7;
        var MacroButton_Scale = scaleRatio*1.2;
   
        //Placeable Buttons
        this.MainStickerButton = gameButtons.addGenericButton("0", MainButtonsPos_x, MainButtonsPos_y+20, this.CharacterHitOn, this,"TabButton",0); 
        this.MainStickerButton.scale.setTo(MacroButton_Scale,MacroButton_Scale);
        this.MainStickerButton.alpha = 0;
        buttongroup.add(this.MainStickerButton);
        
        this.MainResetButton = gameButtons.addGenericButton("0", MainButtonsPos_x+this.MainStickerButton.width, MainButtonsPos_y+20, this.StickerTurnOn, this,"TabButton",0);
        this.MainResetButton.alpha = 0;
        this.MainResetButton.scale.setTo(MacroButton_Scale,MacroButton_Scale);
        buttongroup.add(this.MainResetButton);
        
       /* this.MainResetButton = gameButtons.addGenericButton("0", MainButtonsPos_x-this.MainStickerButton.width*2, MainButtonsPos_y-20, this.ColorTurnOn, this,"creativeButtons",1);
        this.MainResetButton.alpha = 1;
        this.MainResetButton.scale.setTo(MacroButton_Scale,MacroButton_Scale);
        buttongroup.add(this.MainResetButton);*/
        
        //Top Menu Buttons
        MenuTopButtons_Pos_x = game.width-game.width/3;     
        MenuTopButtons_Pos_y = 0;
        
        //Hint Button
        /*this.AlphaButton = gameButtons.addGenericButton("0", MenuTopButtons_Pos_x, MenuTopButtons_Pos_y+20, this.AlphaHintOn, this,"creativeButtons",3); 
        this.AlphaButton.scale.setTo(scaleRatio,scaleRatio);
        MainButtonGroup.add(this.AlphaButton);
        this.AlphaButton.x = MenuTopButtons_Pos_x-this.AlphaButton.width;*/
        
        //Save Button
        this.SaveButton = gameButtons.addGenericButton("0", MenuTopButtons_Pos_x, MenuTopButtons_Pos_y+20, this.SaveClicked, this,"creativeButtons",4); 
        this.SaveButton.scale.setTo(scaleRatio,scaleRatio);
        MainButtonGroup.add(this.SaveButton);
        
        //Back button
        /*this.BackToButton = gameButtons.addGenericButton("0", MenuTopButtons_Pos_x-this.AlphaButton.width*3, MenuTopButtons_Pos_y+20, this.BackToCharacterSelect, this,"creativeButtons",5); 
        this.BackToButton.scale.setTo(scaleRatio,scaleRatio);
        MainButtonGroup.add(this.BackToButton);*/
               
        
///////////////////////////
//character Sticker Group//
///////////////////////////
        
        var ButtonsPos_x = game.width/2;
        var ButtonsPos_y = game.height; 
        var ButtonsScale = scaleRatio;
        
        var CharacterButtonScale = scaleRatio/3;
        
        //character Carosels
        charactercarouselScaleOffset = 1.2;
        this.charactercarousel = game.add.sprite(game.width/2, game.height, 'characterCaroselTab');
        this.charactercarousel.anchor.x = 0.5;
        this.charactercarousel.anchor.y =  1;
        this.charactercarousel.scale.setTo(scaleRatio*carouselScaleOffset,scaleRatio*carouselScaleOffset);
        CharacterStickerGroup.add(this.charactercarousel); 
        
        
        //Character Rock Stickers
        this.RockCharacter = game.add.sprite(ButtonsPos_x, ButtonsPos_y , 'RockBody');   
        this.RockCharacter.inputEnabled = true;
        this.RockCharacter.events.onInputOver.add(this.RockSticker, this.RockCharacter);   
        this.RockCharacter.scale.setTo(CharacterButtonScale,CharacterButtonScale);
        CharacterStickerGroup.add(this.RockCharacter);
        
        this.RockCharacter.y = game.height-this.RockCharacter.height*1.5;  
        ButtonsPos_y = game.height-this.RockCharacter.height*1.5;  
        
        this.RockCharacter.x = game.width/2-this.RockCharacter.height*2.5;  
        ButtonsPos_x = this.RockCharacter.x;
        
        
        //Character Pinecone Stickers
        this.PineconeCharacter = game.add.sprite(ButtonsPos_x+this.RockCharacter.width, ButtonsPos_y , 'PineconeBody');   
        this.PineconeCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.PineconeCharacter.events.onInputOver.add(this.PineconeSticker, this.PineconeCharacter);   
        this.PineconeCharacter.scale.setTo(CharacterButtonScale,CharacterButtonScale);
        CharacterStickerGroup.add(this.PineconeCharacter);
        
        //Character Mobile Stickers
        this.MobileCharacter = game.add.sprite(ButtonsPos_x+this.RockCharacter.width*2, ButtonsPos_y , 'MobileBody');   
        this.MobileCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.MobileCharacter.events.onInputOver.add(this.MobileSticker, this.MobileCharacter);   
        this.MobileCharacter.scale.setTo(CharacterButtonScale,CharacterButtonScale);
        CharacterStickerGroup.add(this.MobileCharacter);
                
        //Character StickWand Stickers
        this.SmudgeStickCharacter = game.add.sprite(ButtonsPos_x+this.RockCharacter.width*3, ButtonsPos_y , 'SmudgeStickBody');   
        this.SmudgeStickCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.SmudgeStickCharacter.events.onInputOver.add(this.SmudgeStickSticker, this.SmudgeStickCharacter);   
        this.SmudgeStickCharacter.scale.setTo(CharacterButtonScale,CharacterButtonScale);
        CharacterStickerGroup.add(this.SmudgeStickCharacter);
        
        //Character Mobile Stickers
        this.StickWandCharacter = game.add.sprite(ButtonsPos_x+this.RockCharacter.width*4, ButtonsPos_y , 'StickWandBody');
        this.StickWandCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.StickWandCharacter.events.onInputOver.add(this.StickWandSticker, this.StickWandCharacter);   
        this.StickWandCharacter.scale.setTo(CharacterButtonScale,CharacterButtonScale);
        CharacterStickerGroup.add(this.StickWandCharacter);
        
        CharacterStickerGroup.visible = false;
        //var ButtonsPos_y = game.height-this.RockCharacter.height; 
                
///////////////////////////
//Placable Sticker Group///
///////////////////////////

        //Sticker Carosels        
        this.charactercarousel = game.add.sprite(game.width/2, game.height, 'StickerCaroselTab');
        this.charactercarousel.anchor.x = 0.5;
        this.charactercarousel.anchor.y =  1;
        this.charactercarousel.scale.setTo(scaleRatio*carouselScaleOffset,scaleRatio*carouselScaleOffset);
        //StickerGroup.add(this.charactercarousel);  
        
///////////////////////////
////First Sticker Group////
///////////////////////////
        //Sticker_Place, {param1: this.StickerButton1, param2: 2, param3: 1}
        //Wings
        this.StickerButton1 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y, 
        this.Sticker_1_Place, this,0,StickerAssigner_set1); 
        this.StickerButton1.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_1.add(this.StickerButton1);
        
        this.StickerButton1.y = game.height-this.StickerButton1.height*2;  
        var ButtonsPos_y = this.StickerButton1.y;
        
        this.StickerButton1.x = game.width/2-this.StickerButton1.width*2;  
        var ButtonsPos_x = this.StickerButton1.x;
        
        this.StickerButton2 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y, this.Sticker_2_Place, this,1,StickerAssigner_set1); 
        this.StickerButton2.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_1.add(this.StickerButton2);
        
        this.StickerButton3 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_3_Place, this,2,StickerAssigner_set1);  
        this.StickerButton3.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_1.add(this.StickerButton3);
        
        this.StickerButton4 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y, this.Sticker_4_Place, this,3,StickerAssigner_set1);
        this.StickerButton4.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_1.add(this.StickerButton4);
        
///////////////////////////
////Second Sticker Group///
/////////////////////////// 
        
        //feet
        this.StickerButton5 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y, this.Sticker_5_Place, this,4,StickerAssigner_set1); 
        this.StickerButton5.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_2.add(this.StickerButton5);
        
        this.StickerButton6 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y, this.Sticker_6_Place, this,5,StickerAssigner_set1); 
        this.StickerButton6.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_2.add(this.StickerButton6);
        
        //Clothing
        this.StickerButton7 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_7_Place, this,6,StickerAssigner_set1);  
        this.StickerButton7.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_2.add(this.StickerButton7);
        
        this.StickerButton8 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y, this.Sticker_8_Place, this,7,StickerAssigner_set1);
        this.StickerButton8.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_2.add(this.StickerButton8);
        
///////////////////////////
////Third Sticker Group////
///////////////////////////
        
        this.StickerButton9 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y, this.Sticker_9_Place, this,8,StickerAssigner_set1); 
        this.StickerButton9.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_3.add(this.StickerButton9);
       
        this.StickerButton10 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y, this.Sticker_10_Place, this,9,StickerAssigner_set1); 
        this.StickerButton10.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_3.add(this.StickerButton10);
        
        this.StickerButton11 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_11_Place, this,10,StickerAssigner_set1);  
        this.StickerButton11.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_3.add(this.StickerButton11);
        
        this.StickerButton12 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y, this.Sticker_12_Place, this,11,StickerAssigner_set1);
        this.StickerButton12.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_3.add(this.StickerButton12);
        
//////////////////////////
////Four Sticker Group////
//////////////////////////
        
        this.StickerButton13 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y, this.Sticker_13_Place, this,12,StickerAssigner_set1); 
        this.StickerButton13.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_4.add(this.StickerButton13);
        
        this.StickerButton14 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y, this.Sticker_14_Place, this,13,StickerAssigner_set1); 
        this.StickerButton14.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_4.add(this.StickerButton14);
        
        this.StickerButton15 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_15_Place, this,14,StickerAssigner_set1);  
        this.StickerButton15.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_4.add(this.StickerButton15);
        
        this.StickerButton16 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y, this.Sticker_16_Place, this,15,StickerAssigner_set1);
        this.StickerButton16.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_4.add(this.StickerButton16);
        
///////////////////////////
/////Five Sticker Group/////
///////////////////////////

        this.StickerButton17 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y,this.Sticker_17_Place, this,16,StickerAssigner_set1); 
        this.StickerButton17.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_5.add(this.StickerButton17);
       
        this.StickerButton18 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y, this.Sticker_18_Place, this,17,StickerAssigner_set1); 
        this.StickerButton18.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_5.add(this.StickerButton18);
        
        this.StickerButton19 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_19_Place, this,18,StickerAssigner_set1);  
        this.StickerButton19.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_5.add(this.StickerButton19);
        
        this.StickerButton20 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y, this.Sticker_20_Place, this,19,StickerAssigner_set1);
        this.StickerButton20.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_5.add(this.StickerButton20);
        
///////////////////////////
/////Six Sticker Group/////
///////////////////////////
        
        this.StickerButton21 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y, this.Sticker_21_Place, this,20,StickerAssigner_set1); 
        this.StickerButton21.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_6.add(this.StickerButton21);
        
        this.StickerButton22 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y, this.Sticker_22_Place, this,21,StickerAssigner_set1); 
        this.StickerButton22.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_6.add(this.StickerButton22);
        
        this.StickerButton23 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_23_Place, this,22,StickerAssigner_set1);  
        this.StickerButton23.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_6.add(this.StickerButton23);
        
        this.StickerButton24 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y, this.Sticker_24_Place, this,23,StickerAssigner_set1);
        this.StickerButton24.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_6.add(this.StickerButton24);
                
        
        Arrow_Y = game.height-this.StickerButton1.height;
        
        //Carosels Left
        this.CaroselArrow_Left = gameButtons.addGenericButton("0", ButtonsPos_x, Arrow_Y, this.Carosel_Left, this,"CaroselArrows",0); 
        this.CaroselArrow_Left.anchor.x = 1;
        this.CaroselArrow_Left.scale.setTo(scaleRatio,scaleRatio);
        //StickerGroup.add(this.CaroselArrow_Left);
        
        //Carosels Right
        this.CaroselArrow_Right = gameButtons.addGenericButton("0", ButtonsPos_x+this.StickerButton1.width*4, Arrow_Y, this.Carosel_Right, this,"CaroselArrows",1); 
        this.CaroselArrow_Right.scale.setTo(scaleRatio,scaleRatio);
        //StickerGroup.add(this.CaroselArrow_Right);
        
        GroupRefArrayCounter = 0;
        
        GroupRefArray[0] = StickerGroup_1;
        GroupRefArray[1] = StickerGroup_2;
        GroupRefArray[2] = StickerGroup_3;
        GroupRefArray[3] = StickerGroup_4;
        GroupRefArray[4] = StickerGroup_5;
        GroupRefArray[5] = StickerGroup_6;
        
        GroupRefArray[0].visible = false;
        GroupRefArray[1].visible = false;
        GroupRefArray[2].visible = false;
        GroupRefArray[3].visible = false;
        GroupRefArray[4].visible = false;
        GroupRefArray[5].visible = false;
        GroupRefArray[GroupRefArrayCounter].visible = true;
        
        
        //Hit Button
        /*this.Hintbutton = gameButtons.addStickerButton("0", ButtonsPos_x+160, ButtonsPos_x+20, this.AlphaHitOn, this,4); */


        //Color Buttons
        this.ColorButton1 = gameButtons.addColorButton("0", ButtonsPos_x, ButtonsPos_y, this.Color_1, this,0xAEE313,"PaintUI"); 
        this.ColorButton1.scale.setTo(1,1);
        ColorGroup.add(this.ColorButton1);
        this.ColorButton2 = gameButtons.addColorButton("0", ButtonsPos_x+this.ColorButton1.width, ButtonsPos_y, this.Color_2, this,0x13AEE3,"PaintUI"); 
        this.ColorButton2.scale.setTo(1,1);
        ColorGroup.add(this.ColorButton2);       
        this.ColorButton3 = gameButtons.addColorButton("0", ButtonsPos_x+this.ColorButton1.width*2, ButtonsPos_y, this.Color_3, this,0xAE13E3,"PaintUI"); 
        this.ColorButton3.scale.setTo(1,1);
        ColorGroup.add(this.ColorButton3); 
        this.ColorButton4 = gameButtons.addColorButton("0", ButtonsPos_x+this.ColorButton1.width*3, ButtonsPos_y, this.Color_4, this,0xFE7805,"PaintUI"); 
        this.ColorButton4.scale.setTo(1,1);
        ColorGroup.add(this.ColorButton4);    
        ColorGroup.visible = false;
        //Selected Color pallet
        this.Selectedcolor = this.ColorButton1;
        
        //Sticker Vars
        
        OGPose_X = -100;
        OGPose_Y = -100;
        
///////////////////////////
////First Sticker Group////
///////////////////////////
        
        //Pinecone Body
        this.PineconeBody = game.add.sprite(GameCenter_x, GameCenter_y+StickerDepth[0], ImageAssetArray[0]);
        this.PineconeBody.anchor.x = 0.5;
        this.PineconeBody.anchor.y = 0.5;
        this.PineconeBody.scale.setTo(scaleRatio,scaleRatio);
        this.SelectedButton = this.PineconeBody;
        Character.add(this.PineconeBody);   
        
        //Sticker_1_1
        this.Sticker_1 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[1], ImageAssetArray[1]);  
        this.Sticker_1.alpha = 0;
        this.Sticker_1.anchor.x = 0.5;
        this.Sticker_1.anchor.y = 0.5;
        this.Sticker_1.z =-1;
        this.Sticker_1.inputEnabled = true;
        this.Sticker_1.input.pixelPerfectOver = true;
        this.Sticker_1.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_1, param2: 1});
        this.Sticker_1.scale.setTo(scaleRatio,scaleRatio);        
        Character.add(this.Sticker_1);  
            
        //Sticker_2      
        this.Sticker_2 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[2], ImageAssetArray[2]);
        this.Sticker_2.alpha = 0;
        this.Sticker_2.anchor.x = 0.5;
        this.Sticker_2.anchor.y = 0.5;
        this.Sticker_2.inputEnabled = true;
        this.Sticker_2.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_2);
        //this.Sticker_2.events.onInputOver.add(this.Sticker_2Click, this);
        this.Sticker_2.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_2, param2: 2});
        this.Sticker_2.scale.setTo(scaleRatio,scaleRatio);   
        Character.add(this.Sticker_2);
        
        //Sticker_3
        this.Sticker_3 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[3], ImageAssetArray[3]);
        this.Sticker_3.alpha = 0;
        this.Sticker_3.anchor.x = 0.5;
        this.Sticker_3.anchor.y = 0.5;
        this.Sticker_3.inputEnabled = true;
        this.Sticker_3.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_3);
        //this.Sticker_3.events.onInputOver.add(this.Sticker_3Click, this);  
        this.Sticker_3.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_3, param2: 3});
        this.Sticker_3.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_3);
        
        //Sticker_4
        this.Sticker_4 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[4], ImageAssetArray[4]);
        this.Sticker_4.alpha = 0;
        this.Sticker_4.anchor.x = 0.5;
        this.Sticker_4.anchor.y = 0.5;

        this.Sticker_4.inputEnabled = true;
        this.Sticker_4.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_4);
        //this.Sticker_4.events.onInputOver.add(this.Sticker_4Click, this);
        this.Sticker_4.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_4, param2: 4});
        this.Sticker_4.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_4);
        
        //Sticker_5
        this.Sticker_5 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[5], ImageAssetArray[5]);        
        this.Sticker_5.alpha = 0;
        this.Sticker_5.anchor.x = 0.5;
        this.Sticker_5.anchor.y = 0.5;
        this.Sticker_5.inputEnabled = true;
        this.Sticker_5.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_5);
        //this.Sticker_5.events.onInputOver.add(this.Sticker_5Click, this);  
        this.Sticker_5.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_5, param2: 5});
        this.Sticker_5.scale.setTo(scaleRatio,scaleRatio);   
        Character.add(this.Sticker_5);      
        
        //Sticker_6      
        this.Sticker_6 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[6], ImageAssetArray[6]);
        this.Sticker_6.alpha = 0;
        this.Sticker_6.anchor.x = 0.5;
        this.Sticker_6.anchor.y = 0.5;
        this.Sticker_6.inputEnabled = true;
        this.Sticker_6.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_6);
        //this.Sticker_6.events.onInputOver.add(this.Sticker_6Click, this);
        this.Sticker_6.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_6, param2: 6});
        this.Sticker_6.scale.setTo(scaleRatio,scaleRatio);
        Character.add(this.Sticker_6);
        
  
        
        //Sticker_7
        this.Sticker_7 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[6], ImageAssetArray[7]);
        this.Sticker_7.alpha = 0;
        this.Sticker_7.anchor.x = 0.5;
        this.Sticker_7.anchor.y = 0.5;
        this.Sticker_7.inputEnabled = true;
        this.Sticker_7.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_7);
        //this.Sticker_7.events.onInputOver.add(this.Sticker_7Click, this);
        this.Sticker_7.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_7, param2: 7});
        this.Sticker_7.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_7);
        
        //Sticker_8
        this.Sticker_8 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[8], ImageAssetArray[8]);
        this.Sticker_8.alpha = 0;
        this.Sticker_8.anchor.x = 0.5;
        this.Sticker_8.anchor.y = 0.5;
        this.Sticker_8.inputEnabled = true;
        this.Sticker_8.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        //this.Sticker_8.events.onInputOver.add(this.Sticker_8Click, this);
        this.Sticker_8.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_8, param2: 8});    
        this.Sticker_8.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_8);
///////////////////////////
////Second Sticker Group///
///////////////////////////
        //Sticker_9
        this.Sticker_9 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[9], ImageAssetArray[9]);
        this.Sticker_9.alpha = 0;
        this.Sticker_9.anchor.x = 0.5;
        this.Sticker_9.anchor.y = 0.5;
        this.Sticker_9.inputEnabled = true;
        this.Sticker_9.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_7);
        //this.Sticker_9.events.onInputOver.add(this.Sticker_9Click, this);
        this.Sticker_9.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_9, param2: 9});  
        this.Sticker_9.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_7);
        
        //Sticker_10
        this.Sticker_10 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[10], ImageAssetArray[10]);
        this.Sticker_10.alpha = 0;
        this.Sticker_10.anchor.x = 0.5;
        this.Sticker_10.anchor.y = 0.5;
        this.Sticker_10.inputEnabled = true;
        this.Sticker_10.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        //this.Sticker_10.events.onInputOver.add(this.Sticker_10Click, this);
        this.Sticker_10.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_10, param2: 10});  
        this.Sticker_10.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_8);     
                
        //Sticker_11
        this.Sticker_11 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[11], ImageAssetArray[11]);
        this.Sticker_11.alpha = 0;
        this.Sticker_11.anchor.x = 0.5;
        this.Sticker_11.anchor.y = 0.5;
        this.Sticker_11.inputEnabled = true;
        this.Sticker_11.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        //this.Sticker_11.events.onInputOver.add(this.Sticker_11Click, this);
        this.Sticker_11.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_11, param2: 11}); 
        this.Sticker_11.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_8);     
                
        //Sticker_12
        this.Sticker_12 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[12], ImageAssetArray[12]);
        this.Sticker_12.alpha = 0;
        this.Sticker_12.anchor.x = 0.5;
        this.Sticker_12.anchor.y = 0.5;
        this.Sticker_12.inputEnabled = true;
        this.Sticker_12.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        //this.Sticker_12.events.onInputOver.add(this.Sticker_12Click, this);
        //this.Sticker_12.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_12, param2: 12}); 
        this.Sticker_12.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_12, param2: 12}); 
        this.Sticker_12.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_8);     
                
        //Sticker_13
        this.Sticker_13 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[13], ImageAssetArray[13]);
        this.Sticker_13.alpha = 0;
        this.Sticker_13.anchor.x = 0.5;
        this.Sticker_13.anchor.y = 0.5;
        this.Sticker_13.inputEnabled = true;
        this.Sticker_13.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        //this.Sticker_13.events.onInputOver.add(this.Sticker_13Click, this);
        this.Sticker_13.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_13, param2: 13}); 
        this.Sticker_13.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_8);     
                
        //Sticker_14
        this.Sticker_14 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[14], ImageAssetArray[14]);
        this.Sticker_14.alpha = 0;
        this.Sticker_14.anchor.x = 0.5;
        this.Sticker_14.anchor.y = 0.5;
        this.Sticker_14.inputEnabled = true;
        this.Sticker_14.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        //this.Sticker_14.events.onInputOver.add(this.Sticker_14Click, this);
        this.Sticker_14.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_14, param2: 14}); 
        this.Sticker_14.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_8);     
                
        //Sticker_15
        this.Sticker_15 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[15], ImageAssetArray[15]);
        this.Sticker_15.alpha = 0;
        this.Sticker_15.anchor.x = 0.5;
        this.Sticker_15.anchor.y = 0.5;
        this.Sticker_15.inputEnabled = true;
        this.Sticker_15.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        //this.Sticker_15.events.onInputOver.add(this.Sticker_15Click, this);
        this.Sticker_15.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_15, param2: 15}); 
        this.Sticker_15.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_8);     
                
        //Sticker_16
        this.Sticker_16 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[16], ImageAssetArray[16]);
        this.Sticker_16.alpha = 0;
        this.Sticker_16.anchor.x = 0.5;
        this.Sticker_16.anchor.y = 0.5;
        this.Sticker_16.inputEnabled = true;
        this.Sticker_16.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        //this.Sticker_16.events.onInputOver.add(this.Sticker_16Click, this);
        this.Sticker_16.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_16, param2: 16}); 
        this.Sticker_16.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_8);    
        
///////////////////////////
////Third Sticker Group////
///////////////////////////
        
        //Sticker_17
        this.Sticker_17 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[17], ImageAssetArray[17]);
        this.Sticker_17.alpha = 0;
        this.Sticker_17.anchor.x = 0.5;
        this.Sticker_17.anchor.y = 0.5;
        this.Sticker_17.inputEnabled = true;
        this.Sticker_17.input.pixelPerfectOver = true;
        this.Sticker_17.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_17, param2: 17}); 
        this.Sticker_17.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_8);     
                
        //Sticker_18
        this.Sticker_18 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[18], ImageAssetArray[18]);
        this.Sticker_18.alpha = 0;
        this.Sticker_18.anchor.x = 0.5;
        this.Sticker_18.anchor.y = 0.5;
        this.Sticker_18.inputEnabled = true;
        this.Sticker_18.input.pixelPerfectOver = true;
        this.Sticker_18.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_18, param2: 18}); 
        this.Sticker_18.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_8);     
                
        //Sticker_19
        this.Sticker_19 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[19], ImageAssetArray[19]);
        this.Sticker_19.alpha = 0;
        this.Sticker_19.anchor.x = 0.5;
        this.Sticker_19.anchor.y = 0.5;
        this.Sticker_19.inputEnabled = true;
        this.Sticker_19.input.pixelPerfectOver = true;
        this.Sticker_19.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_19, param2: 19});
        this.Sticker_19.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_8);     
                
        //Sticker_20
        this.Sticker_20 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[20], ImageAssetArray[20]);
        this.Sticker_20.alpha = 0;
        this.Sticker_20.anchor.x = 0.5;
        this.Sticker_20.anchor.y = 0.5;
        this.Sticker_20.inputEnabled = true;
        this.Sticker_20.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_20, param2: 20});
        this.Sticker_20.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_8);     
                
        //Sticker_21
        this.Sticker_21 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[21], ImageAssetArray[21]);
        this.Sticker_21.alpha = 0;
        this.Sticker_21.anchor.x = 0.5;
        this.Sticker_21.anchor.y = 0.5;
        this.Sticker_21.inputEnabled = true;
        this.Sticker_21.input.pixelPerfectOver = true;
        this.Sticker_21.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_21, param2: 21});
        this.Sticker_21.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_8);     
                
        //Sticker_22
        this.Sticker_22 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[22], ImageAssetArray[22]);
        this.Sticker_22.alpha = 0;
        this.Sticker_22.anchor.x = 0.5;
        this.Sticker_22.anchor.y = 0.5;
        this.Sticker_22.inputEnabled = true;
        this.Sticker_22.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        //this.Sticker_22.events.onInputOver.add(this.Sticker_22Click, this);
        this.Sticker_22.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_22, param2: 22});
        this.Sticker_22.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_8);     
                
        //Sticker_23
        this.Sticker_23 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[23], ImageAssetArray[23]);
        this.Sticker_23.alpha = 0;
        this.Sticker_23.anchor.x = 0.5;
        this.Sticker_23.anchor.y = 0.5;
        this.Sticker_23.inputEnabled = true;
        this.Sticker_23.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        //this.Sticker_23.events.onInputOver.add(this.Sticker_23Click, this);
        this.Sticker_23.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_23, param2: 23});
        this.Sticker_23.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_8);  
        
        //Sticker_24
        this.Sticker_24 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[24], ImageAssetArray[24]);
        this.Sticker_24.alpha = 0;
        this.Sticker_24.anchor.x = 0.5;
        this.Sticker_24.anchor.y = 0.5;
        this.Sticker_24.inputEnabled = true;
        this.Sticker_24.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        this.Sticker_24.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_24, param2: 24});
        this.Sticker_24.scale.setTo(scaleRatio,scaleRatio); 
        Character.add(this.Sticker_8);
        
        Character.sort();
        
        /*Animated Elements 
        /////////////////////////
        //PaintBrush Animation///
        /////////////////////////
        var mummy = game.add.sprite(game.width, game.height/2, 'PaintBrush');
        mummy.scale.setTo(scaleRatio,scaleRatio); 
        mummy.inputEnabled = true;
        mummy.anchor.x = 1;
        mummy.anchor.y = 0.5;
        var walk = mummy.animations.add('walk');
        mummy.animations.play('walk', 30, false);
        mummy.events.onInputDown.add(this.ImageClick, {param1: mummy, param2: "walk"});
        mummy.alpha = 1; 
        
        /////////////////////////
        //////Jar Animation//////
        /////////////////////////
        var Jar = game.add.sprite(0, game.height/2, 'PencilJar');
        Jar.scale.setTo(scaleRatio,scaleRatio); 
        Jar.inputEnabled = true;
        Jar.anchor.x = 0;
        Jar.anchor.y = 0.5;
        var walk = Jar.animations.add('walk');
        Jar.animations.play('walk', 30, false);
        Jar.events.onInputDown.add(this.ImageClick, {param1: Jar, param2: "walk"});
        Jar.alpha = 1; 
        */
        
        //Alpha hint 
        /*this.MagnifyingLenz = game.add.sprite(GameCenter_x, GameCenter_y, 'MagLenz');
        this.MagnifyingLenz.anchor.set(0.5);   
        this.MagnifyingLenz.scale.setTo(scaleRatio,scaleRatio); 
        //	A mask is a Graphics object
        this.mask = game.add.graphics(0, 0);
        //	Shapes drawn to the Graphics object must be filled.
        this.mask.beginFill(0xffffff);
        //	Here we'll draw a circle
        this.mask.drawCircle(250, 250, 250);
        //	And apply it to the Sprite
        this.MagnifyingLenz.mask = this.mask;*/
            
        /*this.test = game.add.sprite(0, 0, game.cache.getBitmapData(this.DrawnSprite));
        buttongroup.add(this.test);*/

        game.world.bringToTop(Character);
        game.world.bringToTop(MagnifinylLenzGroup);
        game.world.bringToTop(StickerGroup_6);
        game.world.bringToTop(StickerGroup_5);       
        game.world.bringToTop(StickerGroup_4);
        game.world.bringToTop(StickerGroup_3);
        game.world.bringToTop(StickerGroup_2);
        game.world.bringToTop(StickerGroup_1);
        game.world.bringToTop(ColorGroup);
        game.world.bringToTop(MainButtonGroup);
        game.world.bringToTop(CharacterStickerGroup);
        game.world.bringToTop(buttongroup);
        //init the music
        gameMedia.updateMusic();        
        //init the sound buttons
        gameButtons.updateButtons();
        //Set the outrovideo
        vidGroup = game.add.group();
        //Set the Episoderovideo
        vidGroup_Ep = game.add.group();

          //////////////////////
        //New Coloring Tools//
        //////////////////////
        var bmd;
        var loop;

        //	This is the sprite we're going to be drawing onto the BitmapData
        //	We use game.make because we don't need it displayed, we just need it to exist
        this.loop = game.make.sprite(0, 0, 'PaintDot');
        this.loop.tint = 0xFE7805;
        this.loop.alpha = 0.5;   
        this.loop.anchor.set(0.5);
        this.loop.blendMode = PIXI.blendModes.ADD;
        //	Note that any properties you set here will be replicated when the Sprite is drawn
        // this.loop.scale.set(2);

        //this.crab = game.make.sprite(0, 0,'PineconeBody');

        //	This is the BitmapData we're going to be drawing to
        this.bmd = game.add.bitmapData(game.width, game.height);
        this.bmd.addToWorld();

        //	Disables anti-aliasing when we draw sprites to the BitmapData
        this.bmd.smoothed = true;

        //this.bmd.draw(this.crab, 10, 10);

        game.input.addMoveCallback(this.paint, this);  
        
        game.world.bringToTop(this.bmd);
        //////////////////////
        //////////////////////
        //////////////////////
    },      
    
    RockSticker: function () {
        ImageAssetArray[0]='RockBody';
 
        StickerAssigner_set1 = "Pinecone_Stickers";
        game.state.start("StateMain");
    },
    
    PineconeSticker: function () {
        ImageAssetArray[0]='PineconeBody';
        StickerAssigner_set1 = "Pinecone_Stickers"; 
        game.state.start("StateMain");
    },
    
    MobileSticker: function () {
        ImageAssetArray[0]='MobileBody';
        StickerAssigner_set1 = "Mobile_stickers";
        game.state.start("StateMain");
    },
    
    SmudgeStickSticker: function () {
        ImageAssetArray[0]='SmudgeStickBody';
        game.state.start("StateMain");
    },
     
    StickWandSticker: function () {
        ImageAssetArray[0]='StickWandBody';
        game.state.start("StateMain");
    },
    
    p: function (pointer) {

    // console.log(pointer.);
    //console.log(pointer.event);

    },
    
    render: function () {
    game.debug.text( GameCenter_x-game.input.x, 100, 380 );
    game.debug.text( GameCenter_y-game.input.y, 100, 390 );      
},

    update: function () { 
 
        Character.sort('y', Phaser.Group.SORT_DESCENDING );
        
        //game.scale.setShowAll();
        //game.scale.refresh();
        
        if(IsInAlpha == true)
        {
        this.mask.x = game.input.x-100;
        this.mask.y = game.input.y-100;  
        }      
            if(isClickDragging == true) 
            {//If the player is dragging the image onto the 
                if( game.input.activePointer.isDown == true )
                {////this.PineconeBody.alpha = 0;
                    this.SelectedButton.x = game.input.x;
                    this.SelectedButton.y = game.input.y;
                    isMovingSticker = true;
                }
                    else
                    {
                        isMovingSticker = false;
                        isClickDragging = false;
                        this.SelectedButton.x = GameCenter_x;
                        this.SelectedButton.y = GameCenter_y;
                    }
            }
    }, 
    
    paint: function (pointer, x, y) {

        if (pointer.isDown && isAddingPaint  == true)
        {
            
            this.bmd.draw(this.loop, x, y);
        }

    },
    
    Carosel_Left: function()
    {   
         GroupRefArray[GroupRefArrayCounter].visible = false;
            if(GroupRefArrayCounter>0)
            {
            GroupRefArrayCounter-=1;
            }
                else
                {
                GroupRefArrayCounter=GroupRefArray.length-1;
                }
        GroupRefArray[GroupRefArrayCounter].visible = true;
    },
    
    Carosel_Right: function()
    {
         GroupRefArray[GroupRefArrayCounter].visible = false;
            if(GroupRefArrayCounter<GroupRefArray.length-1)
            {
            GroupRefArrayCounter+=1;
            }
                else
                {
                GroupRefArrayCounter=0;
                }
        GroupRefArray[GroupRefArrayCounter].visible = true;
    },
           
//////////////////////////////////
////First Sticker Button Group////
//////////////////////////////////
    
    sticker_Click: function()
    {
        isClickDragging = true;
        this.SelectedButton = this.param1;
        PositionArrayIndicator = this.param2;   
    },
    
   
    
    Sticker_Place: function () {    
    isClickDragging = true;
    this.SelectedButton = this.param1;
    this.SelectedButton.alpha = 1; 
    testArrayAlpha[this.param2] = 1;
    this.param3.alpha = 0;
    this.param4.alpha = 0;  
    this.param5.alpha = 0;
    },  
    
//////////////////////////////////
////First Sticker Button Group////
//////////////////////////////////
    Sticker_1_Place: function () {    
    isClickDragging = true;
    this.SelectedButton = this.Sticker_1;
    this.Sticker_1.alpha = 1;  
    this.Sticker_2.alpha = 0;
    this.Sticker_3.alpha = 0; 
    this.Sticker_4.alpha = 0; 
    PositionArrayIndicator = 1;
    testArrayAlpha[1] = 1;
    },  
    
    Sticker_2_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_2;
    this.Sticker_1.alpha = 0; 
    this.Sticker_2.alpha = 1;
    this.Sticker_3.alpha = 0; 
    this.Sticker_4.alpha = 0; 
    PositionArrayIndicator = 2;
    testArrayAlpha[2] = 1;
    }, 
    
    Sticker_3_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_3;
    this.Sticker_1.alpha = 0; 
    this.Sticker_2.alpha = 0; 
    this.Sticker_3.alpha = 1;
    this.Sticker_4.alpha = 0;      
    PositionArrayIndicator = 3;
    testArrayAlpha[3] = 1;
    },   
    
    Sticker_4_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_4;
    this.Sticker_1.alpha = 0; 
    this.Sticker_2.alpha = 0;
    this.Sticker_3.alpha = 0;
    this.Sticker_4.alpha = 1; 
    PositionArrayIndicator = 4;
    testArrayAlpha[4] = 1;
    }, 
    
///////////////////////////
///Second Sticker Group////
///////////////////////////
    
    Sticker_5_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_5;
    this.Sticker_5.alpha = 1;  
    this.Sticker_6.alpha = 0;
    this.Sticker_7.alpha = 0;
    this.Sticker_8.alpha = 0;
    PositionArrayIndicator = 5;
    testArrayAlpha[5] = 1;
    }, 
        
    Sticker_6_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_6;
    this.Sticker_5.alpha = 0;
    this.Sticker_6.alpha = 1;
    this.Sticker_7.alpha = 0;
    this.Sticker_8.alpha = 0;
    PositionArrayIndicator = 6;
    testArrayAlpha[6] = 1;
    }, 
            
    Sticker_7_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_7;
    this.Sticker_5.alpha = 0;
    this.Sticker_6.alpha = 0;
    this.Sticker_7.alpha = 1;  
    this.Sticker_8.alpha = 0; 
    PositionArrayIndicator = 7;
    testArrayAlpha[7] = 1;
    }, 
             
    Sticker_8_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_8;
    this.Sticker_5.alpha = 0;
    this.Sticker_6.alpha = 0;
    this.Sticker_7.alpha = 0;
    this.Sticker_8.alpha = 1;  
    PositionArrayIndicator = 8;
    testArrayAlpha[8] = 1;
    }, 

///////////////////////////
////Third Sticker Group////
///////////////////////////
    
    Sticker_9_Place: function () {    
    isClickDragging = true;
    this.SelectedButton = this.Sticker_9;
    this.Sticker_9.alpha = 1;  
    this.Sticker_10.alpha = 0; 
    this.Sticker_11.alpha = 0;
    this.Sticker_12.alpha = 0;
    //this.Sticker_2.alpha = 0; 
    PositionArrayIndicator = 9;
    testArrayAlpha[9] = 1;
    },  
    
    Sticker_10_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_10;
    this.Sticker_9.alpha = 0;  
    this.Sticker_10.alpha = 1;
    this.Sticker_11.alpha = 0;
    this.Sticker_12.alpha = 0; 
    PositionArrayIndicator = 10;
    testArrayAlpha[10] = 1;
    }, 
    
    Sticker_11_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_11;
    this.Sticker_9.alpha = 0;  
    this.Sticker_10.alpha = 0;
    this.Sticker_11.alpha = 1;
    this.Sticker_12.alpha = 0;      
    PositionArrayIndicator = 11;
    testArrayAlpha[11] = 1;
    },   
    
    Sticker_12_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_12;
    this.Sticker_9.alpha = 0;  
    this.Sticker_10.alpha = 0;
    this.Sticker_11.alpha = 0;
    this.Sticker_12.alpha = 1;    
    PositionArrayIndicator = 12;
    testArrayAlpha[12] = 1;
    }, 
    
    
///////////////////////////
////Fourth Sticker Group///
///////////////////////////   
    
    Sticker_13_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_13;
    this.Sticker_13.alpha = 1;
    this.Sticker_14.alpha = 0;
    this.Sticker_15.alpha = 0;
    this.Sticker_16.alpha = 0; 
    PositionArrayIndicator = 13;
    testArrayAlpha[13] = 1;
    }, 
        
    Sticker_14_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_14;
    this.Sticker_13.alpha = 0;
    this.Sticker_14.alpha = 1;
    this.Sticker_15.alpha = 0;
    this.Sticker_16.alpha = 0; 
    PositionArrayIndicator = 14;
    testArrayAlpha[14] = 1;
    }, 
            
    Sticker_15_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_15;
    this.Sticker_13.alpha = 0;
    this.Sticker_14.alpha = 0;
    this.Sticker_15.alpha = 2;
    this.Sticker_16.alpha = 0; 
    PositionArrayIndicator = 15;
    testArrayAlpha[15] = 1;
    }, 
             
    Sticker_16_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_16; 
    this.Sticker_13.alpha = 0;
    this.Sticker_14.alpha = 0;
    this.Sticker_15.alpha = 0;
    this.Sticker_16.alpha = 1; 
    PositionArrayIndicator = 16;
    testArrayAlpha[16] = 1;
    }, 

///////////////////////////
////Fifth Sticker Group///
///////////////////////////  
    
    Sticker_17_Place: function () {    
    isClickDragging = true;
    this.SelectedButton = this.Sticker_17;
    this.Sticker_17.alpha = 1;  
    this.Sticker_18.alpha = 0;  
    this.Sticker_19.alpha = 0; 
    this.Sticker_20.alpha = 0;  
    PositionArrayIndicator = 17;
    testArrayAlpha[17] = 1;
    },  
    
    Sticker_18_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_18;
    this.Sticker_17.alpha = 0;  
    this.Sticker_18.alpha = 1;  
    this.Sticker_19.alpha = 0; 
    this.Sticker_20.alpha = 0;  
    PositionArrayIndicator = 18;
    testArrayAlpha[18] = 1;
    }, 
    
    Sticker_19_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_19;
    this.Sticker_17.alpha = 0;  
    this.Sticker_18.alpha = 0;  
    this.Sticker_19.alpha = 1; 
    this.Sticker_20.alpha = 0;     
    PositionArrayIndicator = 19;
    testArrayAlpha[19] = 1;
    },   
    
    Sticker_20_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_20;
    this.Sticker_17.alpha = 0;  
    this.Sticker_18.alpha = 0;  
    this.Sticker_19.alpha = 0; 
    this.Sticker_20.alpha = 1; 
    PositionArrayIndicator = 20;
    testArrayAlpha[20] = 1;
    }, 
    
    
///////////////////////////
////Six Sticker Group////
///////////////////////////
    
    Sticker_21_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_21;
    this.Sticker_21.alpha = 1;    
    this.Sticker_22.alpha = 0;
    this.Sticker_23.alpha = 0; 
    this.Sticker_24.alpha = 0;
    PositionArrayIndicator = 21;
    testArrayAlpha[21] = 1;
    }, 
        
    Sticker_22_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_22;
    this.Sticker_21.alpha = 0;    
    this.Sticker_22.alpha = 1;
    this.Sticker_23.alpha = 0; 
    this.Sticker_24.alpha = 0;
    PositionArrayIndicator = 22;
    testArrayAlpha[22] = 1;
    }, 
            
    Sticker_23_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_23;
    this.Sticker_21.alpha = 0;    
    this.Sticker_22.alpha = 0;
    this.Sticker_23.alpha = 1; 
    this.Sticker_24.alpha = 0;
    PositionArrayIndicator = 23;
    testArrayAlpha[23] = 1;
    }, 
             
    Sticker_24_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_24;
    this.Sticker_21.alpha = 0;    
    this.Sticker_22.alpha = 0;
    this.Sticker_23.alpha = 0; 
    this.Sticker_24.alpha = 1;
    PositionArrayIndicator = 24;
    testArrayAlpha[24] = 1;
    },   
    
    
    
       
    //Alpha Hint
    AlphaHintOn: function () {
    if(IsInAlpha == true){IsInAlpha = false;this.mask.x = -100;this.mask.y = -100;}
    else{IsInAlpha = true;}},
    
    //Color Pallets
    Color_1: function () {
    this.Selectedcolor.scale.setTo(1, 1);
    this.Selectedcolor = this.ColorButton1;
    this.loop.tint = 0xAEE313;
    this.ColorButton1.scale.setTo(1.2, 1.2);
    },
    
    Color_2: function () {
    this.Selectedcolor.scale.setTo(1, 1);
    this.Selectedcolor = this.ColorButton2;
    this.loop.tint = 0x13AEE3;
    this.ColorButton2.scale.setTo(1.2, 1.2);
    },
    
    Color_3: function () {
    this.Selectedcolor.scale.setTo(1, 1);
    this.Selectedcolor = this.ColorButton3;
    this.loop.tint = 0xAE13E3;
    this.ColorButton3.scale.setTo(1.2, 1.2);
    },
    
    Color_4: function () {
    this.Selectedcolor.scale.setTo(1, 1);
    this.Selectedcolor = this.ColorButton4;
    this.loop.tint = 0xFE7805;
    this.ColorButton4.scale.setTo(1.2, 1.2);
    }, 
    
    StickerTurnOn: function () {
        //StickerGroup_1.visible = true;
        //StickerGroup_2.visible = false;
        GroupRefArray[GroupRefArrayCounter].visible = true;
        ColorGroup.visible = false;
        CharacterStickerGroup.visible = false;
        isAddingPaint = false;
        isAddingSticker = true;
        },
    
    ColorTurnOn: function () {   
        GroupRefArray[GroupRefArrayCounter].visible = false;
        ColorGroup.visible = true; 
        CharacterStickerGroup.visible = false;
        isAddingPaint = true;
        isAddingSticker = false;
        },
    
    CharacterHitOn: function () {
        GroupRefArray[GroupRefArrayCounter].visible = false;
        ColorGroup.visible = false;
        CharacterStickerGroup.visible = true;
        isAddingPaint = false;
        isAddingSticker = false;
    },
    
    SaveClicked: function () { game.cache.addBitmapData(this.DrawnSprite, this.bmd);game.state.start("StateOuttro")},
    
    BackToCharacterSelect: function () {game.state.start("StateCharacterSelect")},
        
    ImageClick: function () {
    this.param1.animations.play(this.param2, 30, false);
    }, 
    
    onResize: function(){
		// this function is called each time the browser is resized, and re-positions
		// game elements to keep them in their right position according to game size
    
        Character.x = Math.round((game.width)/2); 
        Character.x = Math.round((game.height)/2); 
        StickerGroup.x = Math.round((game.width-320)/2);
        StickerGroup.y = Math.round((game.height-320)/2);
        ColorGroup.x = Math.round((game.width-320)/2); 
        ColorGroup.y = Math.round((game.width-320)/2);
        BackgroundGroup.x = Math.round((game.width)/2); 
        BackgroundGroup.y = Math.round((game.height)/2); 
    
	
	},
    
    
    sayNo: function () {this.backgroundMusic.stop();game.state.start("StateCharacterSelect");}
}