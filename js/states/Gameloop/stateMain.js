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

     
    },

    create: function () {

        scaleRatio = window.devicePixelRatio / 2;
        
            game.input.addPointer();

        //Set the character Group 
        Character = game.add.group();
        
        //  Create the group for the stickers
        StickerGroup_1 = game.add.group();
        //  Create the group for the stickers
        StickerGroup_2 = game.add.group();
        //  Create the group for the stickers
        StickerGroup_3 = game.add.group();
        //  Create the group for the stickers
        StickerGroup_4 = game.add.group();
        
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
     
        
        
        
        //this.craftBackground.width = game.width;
        //this.craftBackground.height = game.height;
        
        //add some buttons
        //this.btnYes = gameButtons.addButton("save", game.world.centerX+(game.world.centerX/2), -1, this.SaveClicked, this);
        //DressUpGroup.add(this.btnYes);
        //this.btnNo = gameButtons.addButton("no", -1, this.btnYes.y - this.btnYes.height, this.sayNo, this);
        
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
        var GameCenter_x = game.width/2;
        var GameCenter_y = game.height/3;
        SelectedColor = 0xff00ff;
       
        
///////////////////////////
///button Sticker Group////
///////////////////////////
        
        
        //Main Button Placement
        var MainButtonsPos_x = window.innerWidth/10;
        var MainButtonsPos_y = game.height/4;
        var MacroButton_Scale = 0.5;
   
        //Placeable Buttons
        this.MainStickerButton = gameButtons.addGenericButton("0", MainButtonsPos_x, MainButtonsPos_y+20, this.CharacterHitOn, this,"creativeButtons",0); 
        this.MainStickerButton.scale.setTo(scaleRatio,scaleRatio);
        buttongroup.add(this.MainStickerButton);
        
        this.MainColorButton = gameButtons.addGenericButton("0", MainButtonsPos_x+this.MainStickerButton.width, MainButtonsPos_y+20, this.ColorTurnOn, this,"creativeButtons",1); 
        buttongroup.add(this.MainColorButton);
        this.MainColorButton.scale.setTo(scaleRatio,scaleRatio);
        buttongroup.add(this.MainColorButton);
        
        this.MainResetButton = gameButtons.addGenericButton("0", MainButtonsPos_x+this.MainStickerButton.width*2, MainButtonsPos_y+20, this.StickerTurnOn, this,"creativeButtons",2); 
        this.MainResetButton.scale.setTo(scaleRatio,scaleRatio);
        buttongroup.add(this.MainResetButton);
        
        //Top Menu Buttons
        MenuTopButtons_Pos_x = game.width/9;     
        MenuTopButtons_Pos_y = 0;
        
        //Hint Button
        this.AlphaButton = gameButtons.addGenericButton("0", MenuTopButtons_Pos_x, MenuTopButtons_Pos_y+20, this.AlphaHintOn, this,"creativeButtons",3); 
        this.AlphaButton.scale.setTo(scaleRatio,scaleRatio);
        MainButtonGroup.add(this.AlphaButton);
        
        //Save Button
        this.SaveButton = gameButtons.addGenericButton("0", MenuTopButtons_Pos_x+this.MainStickerButton.width, MenuTopButtons_Pos_y+20, this.SaveClicked, this,"creativeButtons",4); 
        this.SaveButton.scale.setTo(scaleRatio,scaleRatio);
        MainButtonGroup.add(this.SaveButton);
        
        //Back button
        this.BackToButton = gameButtons.addGenericButton("0", MenuTopButtons_Pos_x+this.MainStickerButton.width*2, MenuTopButtons_Pos_y+20, this.BackToCharacterSelect, this,"creativeButtons",5); 
        this.BackToButton.scale.setTo(scaleRatio,scaleRatio);
        MainButtonGroup.add(this.BackToButton);
        
        
///////////////////////////
//character Sticker Group//
///////////////////////////
        
        var ButtonsPos_x = game.width/3.6;
        var ButtonsPos_y = game.height; 
        var ButtonsScale = scaleRatio;
        
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
        this.RockCharacter.events.onInputOver.add(this.RockCharSticker, this.RockCharacter);   
        this.RockCharacter.scale.setTo(scaleRatio/2,scaleRatio/2);
        CharacterStickerGroup.add(this.RockCharacter);
        
        var ButtonsPos_y = game.height-this.RockCharacter.height; 
        
        this.RockCharacter.y = ButtonsPos_y;
        
        //Character Pinecone Stickers
        this.PineconeCharacter = game.add.sprite(ButtonsPos_x+this.RockCharacter.width, ButtonsPos_y , 'PineconeBody');   
        this.PineconeCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.PineconeCharacter.events.onInputOver.add(this.PineconeCharSticker, this.PineconeCharacter);   
        this.PineconeCharacter.scale.setTo(scaleRatio/2,scaleRatio/2);
        CharacterStickerGroup.add(this.PineconeCharacter);
        
        CharacterStickerGroup.visible = false;
        
        
                
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
        
        //Wings
        this.StickerButton1 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y, 
        this.Sticker_1_Place, this,3,StickerAssigner_set1); 
        this.StickerButton1.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_1.add(this.StickerButton1);
     
        this.StickerButton2 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y+this.StickerButton1.height, this.Sticker_2_Place, this,4,StickerAssigner_set1); 
        this.StickerButton2.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_1.add(this.StickerButton2);
        
        this.StickerButton3 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y, this.Sticker_3_Place, this,5,StickerAssigner_set1);  
        this.StickerButton3.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_1.add(this.StickerButton3);
        
        this.StickerButton4 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y+this.StickerButton1.height, this.Sticker_4_Place, this,6,StickerAssigner_set1);
        this.StickerButton4.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_1.add(this.StickerButton4);
        
        //feet
        this.StickerButton5 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_5_Place, this,11,StickerAssigner_set1); 
        this.StickerButton5.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_1.add(this.StickerButton5);
        
        this.StickerButton6 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y+this.StickerButton1.height, this.Sticker_6_Place, this,26,StickerAssigner_set1); 
        this.StickerButton6.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_1.add(this.StickerButton6);
        
        //Clothing
        this.StickerButton7 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y, this.Sticker_7_Place, this,9,StickerAssigner_set1);  
        this.StickerButton7.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_1.add(this.StickerButton7);
        
        this.StickerButton8 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y+this.StickerButton1.height, this.Sticker_8_Place, this,10,StickerAssigner_set1);
        this.StickerButton8.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_1.add(this.StickerButton8);
        
///////////////////////////
////Second Sticker Group///
///////////////////////////
        

        this.StickerButton9 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y, 
        this.Sticker_9_Place, this,12,StickerAssigner_set1); 
        this.StickerButton9.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_2.add(this.StickerButton9);
       
        this.StickerButton10 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y+this.StickerButton1.height, this.Sticker_10_Place, this,13,StickerAssigner_set1); 
        this.StickerButton10.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_2.add(this.StickerButton10);
        
        this.StickerButton11 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y, this.Sticker_11_Place, this,18,StickerAssigner_set1);  
        this.StickerButton11.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_2.add(this.StickerButton11);
        
        this.StickerButton12 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y+this.StickerButton1.height, this.Sticker_12_Place, this,19,StickerAssigner_set1);
        this.StickerButton12.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_2.add(this.StickerButton12);
        
        this.StickerButton13 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_13_Place, this,20,StickerAssigner_set1); 
        this.StickerButton13.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_2.add(this.StickerButton13);
        
        this.StickerButton14 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y+this.StickerButton1.height, this.Sticker_14_Place, this,21,StickerAssigner_set1); 
        this.StickerButton14.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_2.add(this.StickerButton14);
        
        this.StickerButton15 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y, this.Sticker_15_Place, this,22,StickerAssigner_set1);  
        this.StickerButton15.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_2.add(this.StickerButton15);
        
        this.StickerButton16 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y+this.StickerButton1.height, this.Sticker_16_Place, this,16,StickerAssigner_set1);
        this.StickerButton16.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_2.add(this.StickerButton16);
        
///////////////////////////
////Third Sticker Group////
///////////////////////////

        this.StickerButton17 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y, 
        this.Sticker_17_Place, this,17,StickerAssigner_set1); 
        this.StickerButton17.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_3.add(this.StickerButton17);
       
        this.StickerButton18 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y+this.StickerButton1.height, this.Sticker_18_Place, this,15,StickerAssigner_set1); 
        this.StickerButton18.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_3.add(this.StickerButton18);
        
        this.StickerButton19 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y, this.Sticker_19_Place, this,14,StickerAssigner_set1);  
        this.StickerButton19.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_3.add(this.StickerButton19);
        
        this.StickerButton20 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y+this.StickerButton1.height, this.Sticker_20_Place, this,7,StickerAssigner_set1);
        this.StickerButton20.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_3.add(this.StickerButton20);
        
        this.StickerButton21 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_21_Place, this,8,StickerAssigner_set1); 
        this.StickerButton21.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_3.add(this.StickerButton21);
        
        this.StickerButton22 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y+this.StickerButton1.height, this.Sticker_22_Place, this,25,StickerAssigner_set1); 
        this.StickerButton22.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_3.add(this.StickerButton22);
        
        this.StickerButton23 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y, this.Sticker_23_Place, this,0,StickerAssigner_set1);  
        this.StickerButton23.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_3.add(this.StickerButton23);
        
        this.StickerButton24 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y+this.StickerButton1.height, this.Sticker_24_Place, this,1,StickerAssigner_set1);
        this.StickerButton24.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_3.add(this.StickerButton24);
                    

        
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
        
        GroupRefArrayCounter = 2;
        
        GroupRefArray[0] = StickerGroup_1;
        GroupRefArray[1] = StickerGroup_2;
        GroupRefArray[2] = StickerGroup_3;
        GroupRefArray[3] = StickerGroup_4;
        
        GroupRefArray[0].visible = false;
        GroupRefArray[1].visible = false;
        GroupRefArray[2].visible = false;
        GroupRefArray[3].visible = false;
        /*StickerGroup_1.visible = false;
        StickerGroup_2.visible = false;
        StickerGroup_3.visible = false;
        StickerGroup_4.visible = false;*/
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
        
        //Sticker_1_1
        this.Sticker_1 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[1]);  
        this.Sticker_1.alpha = 1;
        this.Sticker_1.anchor.x = PivotPoint_X[1];
        this.Sticker_1.anchor.y =  PivotPoint_Y[1];
        this.Sticker_1.inputEnabled = true;
        this.Sticker_1.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_1);
        this.Sticker_1.events.onInputOver.add(this.Sticker_1Click, this);  
        this.Sticker_1.scale.setTo(scaleRatio,scaleRatio);        
        //Character.add(this.Sticker_1);  
            
        //Sticker_2      
        this.Sticker_2 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[2]);
        this.Sticker_2.alpha = 0;
        //this.Sticker_2.anchor.set(0.5);
        this.Sticker_2.anchor.x = PivotPoint_X[2];
        this.Sticker_2.anchor.y =  PivotPoint_Y[2];
        this.Sticker_2.inputEnabled = true;
        this.Sticker_2.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_2);
        this.Sticker_2.events.onInputOver.add(this.Sticker_2Click, this);
        this.Sticker_2.scale.setTo(scaleRatio,scaleRatio);   
        //Character.add(this.Sticker_2);
        
        //Sticker_3
        this.Sticker_3 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[3]);
        this.Sticker_3.alpha = 0;
        this.Sticker_3.anchor.x = PivotPoint_X[3];
        this.Sticker_3.anchor.y =  PivotPoint_Y[3];
        this.Sticker_3.inputEnabled = true;
        this.Sticker_3.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_3);
        this.Sticker_3.events.onInputOver.add(this.Sticker_3Click, this);    
        this.Sticker_3.scale.setTo(scaleRatio,scaleRatio); 
        
        //Character.add(this.Sticker_3);
        
        //Sticker_4
        this.Sticker_4 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[4]);
        this.Sticker_4.alpha = 0;
        this.Sticker_4.anchor.x = PivotPoint_X[4];
        this.Sticker_4.anchor.y =  PivotPoint_Y[4];
        this.Sticker_4.inputEnabled = true;
        this.Sticker_4.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_4);
        this.Sticker_4.events.onInputOver.add(this.Sticker_4Click, this);
        this.Sticker_4.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_4);
        
        //Sticker_5
        this.Sticker_5 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[5]);        
        this.Sticker_5.alpha = 0;
        this.Sticker_5.anchor.x = PivotPoint_X[5];
        this.Sticker_5.anchor.y =  PivotPoint_Y[5];
        this.Sticker_5.inputEnabled = true;
        this.Sticker_5.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_5);
        this.Sticker_5.events.onInputOver.add(this.Sticker_5Click, this);  
        this.Sticker_5.scale.setTo(scaleRatio,scaleRatio);   
        //Character.add(this.Sticker_5);      
        
        //Sticker_6      
        this.Sticker_6 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[6]);
        this.Sticker_6.alpha = 0;
        this.Sticker_6.anchor.x = PivotPoint_X[6];
        this.Sticker_6.anchor.y =  PivotPoint_Y[6];
        this.Sticker_6.inputEnabled = true;
        this.Sticker_6.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_6);
        this.Sticker_6.events.onInputOver.add(this.Sticker_6Click, this);
        this.Sticker_6.scale.setTo(scaleRatio,scaleRatio);
        //Character.add(this.Sticker_6);
        
        //Pinecone Body
        this.PineconeBody = game.add.sprite(GameCenter_x, GameCenter_y, ImageAssetArray[0]);   
        this.PineconeBody.anchor.x = PivotPoint_X[0];
        this.PineconeBody.anchor.y =  PivotPoint_Y[0];
        //this.PineconeBody.events.onInputOver.add(this.BodyClick, this.PineconeBody);   
        this.PineconeBody.scale.setTo(scaleRatio,scaleRatio);
        this.SelectedButton = this.PineconeBody;
        //Character.add(this.PineconeBody);     
        
        //Sticker_7
        this.Sticker_7 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[7]);
        this.Sticker_7.alpha = 0;
        this.Sticker_7.anchor.x = PivotPoint_X[7];
        this.Sticker_7.anchor.y =  PivotPoint_Y[7];
        this.Sticker_7.inputEnabled = true;
        this.Sticker_7.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_7);
        this.Sticker_7.events.onInputOver.add(this.Sticker_7Click, this);
        this.Sticker_7.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_7);
        
        //Sticker_8
        this.Sticker_8 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[8]);
        this.Sticker_8.alpha = 0;
        this.Sticker_8.anchor.x = PivotPoint_X[8];
        this.Sticker_8.anchor.y =  PivotPoint_Y[8];
        this.Sticker_8.inputEnabled = true;
        this.Sticker_8.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        this.Sticker_8.events.onInputOver.add(this.Sticker_8Click, this);
        this.Sticker_8.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_8);
///////////////////////////
////Second Sticker Group///
///////////////////////////
        //Sticker_9
        this.Sticker_9 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[9]);
        this.Sticker_9.alpha = 0;
        this.Sticker_9.anchor.x = PivotPoint_X[9];
        this.Sticker_9.anchor.y =  PivotPoint_Y[9];
        this.Sticker_9.inputEnabled = true;
        this.Sticker_9.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_7);
        this.Sticker_9.events.onInputOver.add(this.Sticker_9Click, this);
        this.Sticker_9.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_7);
        
        //Sticker_10
        this.Sticker_10 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[10]);
        this.Sticker_10.alpha = 0;
        this.Sticker_10.anchor.x = PivotPoint_X[10];
        this.Sticker_10.anchor.y =  PivotPoint_Y[10];
        this.Sticker_10.inputEnabled = true;
        this.Sticker_10.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        this.Sticker_10.events.onInputOver.add(this.Sticker_10Click, this);
        this.Sticker_10.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_8);     
                
        //Sticker_11
        this.Sticker_11 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[11]);
        this.Sticker_11.alpha = 0;
        this.Sticker_11.anchor.x = PivotPoint_X[11];
        this.Sticker_11.anchor.y =  PivotPoint_Y[11];
        this.Sticker_11.inputEnabled = true;
        this.Sticker_11.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        this.Sticker_11.events.onInputOver.add(this.Sticker_11Click, this);
        this.Sticker_11.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_8);     
                
        //Sticker_12
        this.Sticker_12 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[12]);
        this.Sticker_12.alpha = 0;
        this.Sticker_12.anchor.x = PivotPoint_X[12];
        this.Sticker_12.anchor.y =  PivotPoint_Y[12];
        this.Sticker_12.inputEnabled = true;
        this.Sticker_12.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        this.Sticker_12.events.onInputOver.add(this.Sticker_12Click, this);
        this.Sticker_12.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_8);     
                
        //Sticker_13
        this.Sticker_13 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[13]);
        this.Sticker_13.alpha = 0;
        this.Sticker_13.anchor.x = PivotPoint_X[13];
        this.Sticker_13.anchor.y =  PivotPoint_Y[13];
        this.Sticker_13.inputEnabled = true;
        this.Sticker_13.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        this.Sticker_13.events.onInputOver.add(this.Sticker_13Click, this);
        this.Sticker_13.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_8);     
                
        //Sticker_14
        this.Sticker_14 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[14]);
        this.Sticker_14.alpha = 0;
        this.Sticker_14.anchor.x = PivotPoint_X[14];
        this.Sticker_14.anchor.y =  PivotPoint_Y[14];
        this.Sticker_14.inputEnabled = true;
        this.Sticker_14.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        this.Sticker_14.events.onInputOver.add(this.Sticker_14Click, this);
        this.Sticker_14.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_8);     
                
        //Sticker_15
        this.Sticker_15 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[15]);
        this.Sticker_15.alpha = 0;
        this.Sticker_15.anchor.x = PivotPoint_X[15];
        this.Sticker_15.anchor.y =  PivotPoint_Y[15];
        this.Sticker_15.inputEnabled = true;
        this.Sticker_15.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        this.Sticker_15.events.onInputOver.add(this.Sticker_15Click, this);
        this.Sticker_15.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_8);     
                
        //Sticker_16
        this.Sticker_16 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[16]);
        this.Sticker_16.alpha = 0;
        this.Sticker_16.anchor.x = PivotPoint_X[16];
        this.Sticker_16.anchor.y =  PivotPoint_Y[16];
        this.Sticker_16.inputEnabled = true;
        this.Sticker_16.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        this.Sticker_16.events.onInputOver.add(this.Sticker_16Click, this);
        this.Sticker_16.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_8);    
        
///////////////////////////
////Third Sticker Group////
///////////////////////////
        
        //Sticker_17
        this.Sticker_17 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[17]);
        this.Sticker_17.alpha = 0;
        this.Sticker_17.anchor.x = PivotPoint_X[17];
        this.Sticker_17.anchor.y =  PivotPoint_Y[17];
        this.Sticker_17.inputEnabled = true;
        this.Sticker_17.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        this.Sticker_17.events.onInputOver.add(this.Sticker_17Click, this);
        this.Sticker_17.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_8);     
                
        //Sticker_18
        this.Sticker_18 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[18]);
        this.Sticker_18.alpha = 0;
        this.Sticker_18.anchor.x = PivotPoint_X[18];
        this.Sticker_18.anchor.y =  PivotPoint_Y[18];
        this.Sticker_18.inputEnabled = true;
        this.Sticker_18.input.pixelPerfectOver = true;
        this.Sticker_18.events.onInputOver.add(this.Sticker_18Click, this);
        this.Sticker_18.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_8);     
                
        //Sticker_19
        this.Sticker_19 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[19]);
        this.Sticker_19.alpha = 0;
        this.Sticker_19.anchor.x = PivotPoint_X[19];
        this.Sticker_19.anchor.y =  PivotPoint_Y[19];
        this.Sticker_19.inputEnabled = true;
        this.Sticker_19.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        this.Sticker_19.events.onInputOver.add(this.Sticker_19Click, this);
        this.Sticker_19.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_8);     
                
        //Sticker_20
        this.Sticker_20 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[20]);
        this.Sticker_20.alpha = 0;
        this.Sticker_20.anchor.x = PivotPoint_X[20];
        this.Sticker_20.anchor.y =  PivotPoint_Y[20];
        this.Sticker_20.inputEnabled = true;
        this.Sticker_20.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        this.Sticker_20.events.onInputOver.add(this.Sticker_20Click, this);
        this.Sticker_20.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_8);     
                
        //Sticker_21
        this.Sticker_21 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[21]);
        this.Sticker_21.alpha = 0;
        this.Sticker_21.anchor.x = PivotPoint_X[21];
        this.Sticker_21.anchor.y =  PivotPoint_Y[21];
        this.Sticker_21.inputEnabled = true;
        this.Sticker_21.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        this.Sticker_21.events.onInputOver.add(this.Sticker_21Click, this);
        this.Sticker_21.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_8);     
                
        //Sticker_22
        this.Sticker_22 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[22]);
        this.Sticker_22.alpha = 0;
        this.Sticker_22.anchor.x = PivotPoint_X[22];
        this.Sticker_22.anchor.y =  PivotPoint_Y[22];
        this.Sticker_22.inputEnabled = true;
        this.Sticker_22.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        this.Sticker_22.events.onInputOver.add(this.Sticker_22Click, this);
        this.Sticker_22.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_8);     
                
        //Sticker_23
        this.Sticker_23 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[23]);
        this.Sticker_23.alpha = 0;
        this.Sticker_23.anchor.x = PivotPoint_X[23];
        this.Sticker_23.anchor.y =  PivotPoint_Y[23];
        this.Sticker_23.inputEnabled = true;
        this.Sticker_23.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        this.Sticker_23.events.onInputOver.add(this.Sticker_23Click, this);
        this.Sticker_23.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_8);  
        
        //Sticker_24
        this.Sticker_24 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[24]);
        this.Sticker_24.alpha = 0;
        this.Sticker_24.anchor.x = PivotPoint_X[24];
        this.Sticker_24.anchor.y =  PivotPoint_Y[24];
        this.Sticker_24.inputEnabled = true;
        this.Sticker_24.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_8);
        this.Sticker_24.events.onInputOver.add(this.Sticker_24Click, this);
        this.Sticker_24.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_8);
        
        
        //Animation test
        var mummy = game.add.sprite(300, 200, 'mummy');
        mummy.inputEnabled = true;
        //  Here we add a new animation called 'walk'
        //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
        var walk = mummy.animations.add('walk');
        //PlacableMenuGroup.add(this.mummy);
        //  And this starts the animation playing by using its key ("walk")
        //  30 is the frame rate (30fps)
        //  true means it will loop when it finishes
        //mummy.animations.play('walk', 30, false);
        mummy.events.onInputOut.add(this.ImageClick, {param1: mummy, param2: "walk"});
        mummy.alpha = 0; 
        
        //Alpha hint 
        this.MagnifyingLenz = game.add.sprite(GameCenter_x, GameCenter_y, 'MagLenz');
        this.MagnifyingLenz.anchor.set(0.5);   
        this.MagnifyingLenz.scale.setTo(scaleRatio,scaleRatio); 
        //	A mask is a Graphics object
        this.mask = game.add.graphics(0, 0);
        //	Shapes drawn to the Graphics object must be filled.
        this.mask.beginFill(0xffffff);
        //	Here we'll draw a circle
        this.mask.drawCircle(250, 250, 250);
        //	And apply it to the Sprite
        this.MagnifyingLenz.mask = this.mask;
        MagnifinylLenzGroup.add(this.MagnifyingLenz);
        
        //game.world.bringToTop(Character);
        game.world.bringToTop(MagnifinylLenzGroup);
        game.world.bringToTop(StickerGroup_4);
        game.world.bringToTop(StickerGroup_3);
        game.world.bringToTop(StickerGroup_2);
        game.world.bringToTop(StickerGroup_1);
        game.world.bringToTop(ColorGroup);
        game.world.bringToTop(MainButtonGroup);
        game.world.bringToTop(CharacterStickerGroup);
        
        
        //game.world.bringToTop(buttongroup);
        //init the music
        gameMedia.updateMusic();        
        //init the sound buttons
        gameButtons.updateButtons();
        //Set the outrovideo
        vidGroup = game.add.group();
        //Set the Episoderovideo
        vidGroup_Ep = game.add.group();
       
        
       //this.onResize();
    },      
    
    RockCharSticker: function () {
        ImageAssetArray[0]='RockBody';
        PivotPoint_X[0] = 0.5;
        PivotPoint_Y[0] = 0.5;       
        ImageAssetArray[1]='RockWings_1';
        PivotPoint_X[1] = 0.5;
        PivotPoint_Y[1] = 0.5;  
        ImageAssetArray[2]='RockWings_2';
        PivotPoint_X[2] = 0.5;
        PivotPoint_Y[2] = 0.5; 
        ImageAssetArray[3]='RockFace_1';
        PivotPoint_X[3] = 0.5;
        PivotPoint_Y[3] = 0.5; 
        ImageAssetArray[4]='RockFace_2';
        PivotPoint_X[4] = 0.5;
        PivotPoint_Y[4] = 0.5; 
        ImageAssetArray[5]='RockFeet_1';
        PivotPoint_X[5] = 0.5;
        PivotPoint_Y[5] = 1; 
        ImageAssetArray[6]='RockFeet_2';
        PivotPoint_X[6] = 0.5;
        PivotPoint_Y[6] = 1; 
        ImageAssetArray[7]='RockAntenae_1';
        PivotPoint_X[7] = 0.5;
        PivotPoint_Y[7] = 0; 
        ImageAssetArray[8]='RockAntenae_2';         
        PivotPoint_X[8] = 0.5;
        PivotPoint_Y[8] = 0; 
        StickerAssigner_set1 = "Rock_Stickers_1";           
        game.state.start("StateMain");
    },
    
    PineconeCharSticker: function () {
        ImageAssetArray[0]='PineconeBody';
        PivotPoint_X[0] = 0.5;
        PivotPoint_Y[0] = 0.5;      
        ImageAssetArray[1]='PineconeWings_1';
        PivotPoint_X[1] = 0.5;
        PivotPoint_Y[1] = 0.5;   
        ImageAssetArray[2]='PineconeWings_2';
        PivotPoint_X[2] = 0.5;
        PivotPoint_Y[2] = 0.5;   
        ImageAssetArray[3]='PineconeEyes_1';
        PivotPoint_X[3] = 0.5;
        PivotPoint_Y[3] = 0.5;   
        ImageAssetArray[4]='PineconeEyes_2';
        PivotPoint_X[4] = 0.5;
        PivotPoint_Y[4] = 0.5;   
        ImageAssetArray[5]='PineconeFeet_1';
        PivotPoint_X[5] = 0.5;
        PivotPoint_Y[5] = 1;   
        ImageAssetArray[6]='PineconeFeet_2';
        PivotPoint_X[6] = 0.5;
        PivotPoint_Y[6] = 1; 
        ImageAssetArray[7]='PineconeMouth_1';
        PivotPoint_X[7] = 0.5;
        PivotPoint_Y[7] = 0.5;
        ImageAssetArray[8]='PineconeMouth_2';           
        PivotPoint_X[8] = 0.5;
        PivotPoint_Y[8] = 0.5; 
        StickerAssigner_set1 = "Pinecone_Stickers";      
        game.state.start("StateMain");
    },
    
    p: function (pointer) {

    // console.log(pointer.);
    //console.log(pointer.event);

    },
    
    render: function () {

    /*var x = 32;
    var y = 0;
    var yi = 32;

    game.debug.text('Viewport', x, y += yi);

    game.debug.text('Viewport Width: ' + game.scale.viewportWidth, x, y += yi);
    game.debug.text('window.innerWidth: ' + window.innerWidth, x, y += yi);
    game.debug.text('window.outerWidth: ' + window.outerWidth, x, y += yi);

    game.debug.text('Viewport Height: ' + game.scale.viewportHeight, x, y += yi);
    game.debug.text('window.innerHeight: ' + window.innerHeight, x, y += yi);
    game.debug.text('window.outerHeight: ' + window.outerHeight, x, y += yi);

    game.debug.text('Document', x, y += yi*2);

    game.debug.text('Document Width: ' + game.scale.documentWidth, x, y += yi);
    game.debug.text('Document Height: ' + game.scale.documentHeight, x, y += yi);

    //  Device: How to get device size.

    //  Use window.screen.width for device width and window.screen.height for device height. 
    //  .availWidth and .availHeight give you the device size minus UI taskbars. (Try on an iPhone.) 
    //  Device size is static and does not change when the page is resized or rotated.

    x = 350;
    y = 0;

    game.debug.text('Device', x, y += yi);

    game.debug.text('window.screen.width: ' + window.screen.width, x, y += yi);
    game.debug.text('window.screen.availWidth: ' + window.screen.availWidth, x, y += yi);
    game.debug.text('window.screen.height: ' + window.screen.height, x, y += yi);
    game.debug.text('window.screen.availHeight: ' + window.screen.availHeight, x, y += yi);

    game.debug.spriteInputInfo(this.PineconeBody, 32, 32);
    game.debug.geom(this.PineconeBody.input._tempPoint);
        
    game.debug.spriteInputInfo(this.Sticker_1, 32, 42*4);
    game.debug.geom(this.Sticker_1.input._tempPoint);
        
    game.debug.spriteInputInfo(this.Sticker_2, 32, 42*6);
    game.debug.geom(this.Sticker_2.input._tempPoint);
        
    game.debug.spriteInputInfo(this.Sticker_3, 32, 42*8);
    game.debug.geom(this.Sticker_3.input._tempPoint);
        
    game.debug.spriteInputInfo(this.Sticker_4, 32, 42*10);
    game.debug.geom(this.Sticker_4.input._tempPoint);
        
    game.debug.spriteInputInfo(this.Sticker_5, 32, 42*12);
    game.debug.geom(this.Sticker_5.input._tempPoint);
        
    game.debug.spriteInputInfo(this.Sticker_6, 32, 32*14);
    game.debug.geom(this.Sticker_6.input._tempPoint);
        
    game.debug.spriteInputInfo(this.Sticker_7, 32, 32*16);
    game.debug.geom(this.Sticker_7.input._tempPoint);*/
},

    update: function () { 
 
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
                        Xpos_ArrayAlpha[PositionArrayIndicator]= game.input.x;
                        Ypos_ArrayAlpha[PositionArrayIndicator]= game.input.y;
                    }
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
    

    BodyClick: function () 
    { 
        
        /*if(isAddingPaint == true)
        {
        this.PineconeBody.tint = SelectedColor;
        testArrayColor[0] = SelectedColor;
        }*/
    }, 
           
//////////////////////////////////
////First Sticker Button Group////
//////////////////////////////////
    
    Sticker_1Click: function () {
        
        if(isAddingPaint == true)
        {
        this.Sticker_1.tint = SelectedColor;
        testArrayColor[1] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.StickerRef;
            PositionArrayIndicator = 1;
            }
    },
    
    Sticker_2Click: function () {
        
        if(isAddingPaint == true)
        {
        this.Sticker_2.tint = SelectedColor;
        testArrayColor[2] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_2;
            PositionArrayIndicator = 2;
            }
    },
    
    Sticker_3Click: function () {
        if(isAddingPaint == true)
        {
        this.Sticker_3.tint = SelectedColor;
        testArrayColor[3] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_3;
            PositionArrayIndicator = 3;
            }
    },
    
    Sticker_4Click: function () {
        if(isAddingPaint == true)
        {
        this.Sticker_4.tint = SelectedColor;
        testArrayColor[4] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_4;
            PositionArrayIndicator = 4;
            }
    },
    
    Sticker_5Click: function () {
        if(isAddingPaint == true)
        {
        this.Sticker_5.tint = SelectedColor;
        testArrayColor[5] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_5;
            PositionArrayIndicator = 5;
            }
    },
    
    Sticker_6Click: function () {
        if(isAddingPaint == true)
        {
        this.Sticker_6.tint = SelectedColor;
        testArrayColor[6] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_6;
            PositionArrayIndicator = 6;
            }
    },
             
    Sticker_7Click: function () {
        if(isAddingPaint == true)
        {
        this.Sticker_7.tint = SelectedColor;
        testArrayColor[7] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_7;
            PositionArrayIndicator = 7;
            }
        
    },
    
   Sticker_8Click: function () {
        if(isClickDragging == false)
        {
        this.Sticker_8.tint = SelectedColor;
        testArrayColor[8] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_8;
            PositionArrayIndicator = 8;
            }
    }, 
//////////////////////////////////
///Second Sticker Button Group////
//////////////////////////////////
    
    Sticker_9Click: function () {
        
        if(isAddingPaint == true)
        {
        this.Sticker_1.tint = SelectedColor;
        testArrayColor[1] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_9;
            PositionArrayIndicator = 9;
            }
    },
    
    Sticker_10Click: function () {
        
        if(isAddingPaint == true)
        {
        this.Sticker_2.tint = SelectedColor;
        testArrayColor[2] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_10;
            PositionArrayIndicator = 10;
            }
    },
    
    Sticker_11Click: function () {
        if(isAddingPaint == true)
        {
        this.Sticker_3.tint = SelectedColor;
        testArrayColor[3] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_11;
            PositionArrayIndicator = 11;
            }
    },
    
    Sticker_12Click: function () {
        if(isAddingPaint == true)
        {
        this.Sticker_4.tint = SelectedColor;
        testArrayColor[4] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_12;
            PositionArrayIndicator = 12;
            }
    },
    
    Sticker_13Click: function () {
        if(isAddingPaint == true)
        {
        this.Sticker_5.tint = SelectedColor;
        testArrayColor[5] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_13;
            PositionArrayIndicator = 13;
            }
    },
    
    Sticker_14Click: function () {
        if(isAddingPaint == true)
        {
        this.Sticker_6.tint = SelectedColor;
        testArrayColor[6] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_14;
            PositionArrayIndicator = 14;
            }
    },
             
    Sticker_15Click: function () {
        if(isAddingPaint == true)
        {
        this.Sticker_7.tint = SelectedColor;
        testArrayColor[7] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_15;
            PositionArrayIndicator = 15;
            }
        
    },
    
   Sticker_16Click: function () {
        if(isClickDragging == false)
        {
        this.Sticker_8.tint = SelectedColor;
        testArrayColor[8] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_16;
            PositionArrayIndicator = 16;
            }
    }, 
//////////////////////////////////
////Third Sticker Button Group////
//////////////////////////////////
    
    Sticker_17Click: function () {
        
        if(isAddingPaint == true)
        {
        this.Sticker_1.tint = SelectedColor;
        testArrayColor[1] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_17;
            PositionArrayIndicator = 17;
            }
    },
    
    Sticker_18Click: function () {
        
        if(isAddingPaint == true)
        {
        this.Sticker_2.tint = SelectedColor;
        testArrayColor[2] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_18;
            PositionArrayIndicator = 18;
            }
    },
    
    Sticker_19Click: function () {
        if(isAddingPaint == true)
        {
        this.Sticker_3.tint = SelectedColor;
        testArrayColor[3] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_19;
            PositionArrayIndicator = 19;
            }
    },
    
    Sticker_20Click: function () {
        if(isAddingPaint == true)
        {
        this.Sticker_4.tint = SelectedColor;
        testArrayColor[4] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_20;
            PositionArrayIndicator = 20;
            }
    },
    
    Sticker_21Click: function () {
        if(isAddingPaint == true)
        {
        this.Sticker_5.tint = SelectedColor;
        testArrayColor[5] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_21;
            PositionArrayIndicator = 21;
            }
    },
    
    Sticker_22Click: function () {
        if(isAddingPaint == true)
        {
        this.Sticker_6.tint = SelectedColor;
        testArrayColor[6] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_22;
            PositionArrayIndicator = 22;
            }
    },
             
    Sticker_23Click: function () {
        if(isAddingPaint == true)
        {
        this.Sticker_7.tint = SelectedColor;
        testArrayColor[7] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_23;
            PositionArrayIndicator = 23;
            }
        
    },
    
   Sticker_24Click: function () {
        if(isClickDragging == false)
        {
        this.Sticker_8.tint = SelectedColor;
        testArrayColor[8] = SelectedColor;
        }
            else if (isMovingSticker == false)
            {
            //isMovingSticker = true;
            isClickDragging = true;
            this.SelectedButton = this.Sticker_24;
            PositionArrayIndicator = 24;
            }
    }, 
    
//////////////////////////////////
////First Sticker Button Group////
//////////////////////////////////
    Sticker_1_Place: function () {    
    isClickDragging = true;
    this.SelectedButton = this.Sticker_1;
    this.Sticker_1.alpha = 1;  
    this.Sticker_2.alpha = 0; 
    PositionArrayIndicator = 1;
    testArrayAlpha[1] = 1;
    },  
    
    Sticker_2_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_2;
    this.Sticker_2.alpha = 1;
    this.Sticker_1.alpha = 0;  
    PositionArrayIndicator = 2;
    testArrayAlpha[2] = 1;
    }, 
    
    Sticker_3_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_3;
    this.Sticker_3.alpha = 1;
    this.Sticker_4.alpha = 0;      
    PositionArrayIndicator = 3;
    testArrayAlpha[3] = 1;
    },   
    
    Sticker_4_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_4;
    this.Sticker_4.alpha = 1;  
    this.Sticker_3.alpha = 0;
    PositionArrayIndicator = 4;
    testArrayAlpha[4] = 1;
    }, 
    
    Sticker_5_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_5;
    this.Sticker_5.alpha = 1;  
    this.Sticker_6.alpha = 0;  
    PositionArrayIndicator = 5;
    testArrayAlpha[5] = 1;
    }, 
        
    Sticker_6_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_6;
    this.Sticker_6.alpha = 1; 
    this.Sticker_5.alpha = 0;
    PositionArrayIndicator = 6;
    testArrayAlpha[6] = 1;
    }, 
            
    Sticker_7_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_7;
    this.Sticker_7.alpha = 1;  
    this.Sticker_8.alpha = 0; 
    PositionArrayIndicator = 7;
    testArrayAlpha[7] = 1;
    }, 
             
    Sticker_8_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_8;
    this.Sticker_8.alpha = 1;  
    this.Sticker_7.alpha = 0; 
    PositionArrayIndicator = 8;
    testArrayAlpha[8] = 1;
    }, 
///////////////////////////
///Second Sticker Group////
///////////////////////////
    Sticker_9_Place: function () {    
    isClickDragging = true;
    this.SelectedButton = this.Sticker_9;
    this.Sticker_9.alpha = 1;  
    this.Sticker_10.alpha = 0; 
    //this.Sticker_2.alpha = 0; 
    PositionArrayIndicator = 9;
    testArrayAlpha[9] = 1;
    },  
    
    Sticker_10_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_10;
    this.Sticker_10.alpha = 1;
    this.Sticker_9.alpha = 0;  
    //this.Sticker_1.alpha = 0;  
    PositionArrayIndicator = 10;
    testArrayAlpha[10] = 1;
    }, 
    
    Sticker_11_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_11;
    this.Sticker_11.alpha = 1;
    this.Sticker_12.alpha = 0;
    this.Sticker_13.alpha = 0;
    this.Sticker_14.alpha = 0;
    this.Sticker_15.alpha = 0;       
    //this.Sticker_4.alpha = 0;      
    PositionArrayIndicator = 11;
    testArrayAlpha[11] = 1;
    },   
    
    Sticker_12_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_12;
    this.Sticker_11.alpha = 0;
    this.Sticker_12.alpha = 1;
    this.Sticker_13.alpha = 0;
    this.Sticker_14.alpha = 0;
    this.Sticker_15.alpha = 0;     
    PositionArrayIndicator = 12;
    testArrayAlpha[12] = 1;
    }, 
    
    Sticker_13_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_13;
    this.Sticker_11.alpha = 0;
    this.Sticker_12.alpha = 0;
    this.Sticker_13.alpha = 1;
    this.Sticker_14.alpha = 0;
    this.Sticker_15.alpha = 0;  
    PositionArrayIndicator = 13;
    testArrayAlpha[13] = 1;
    }, 
        
    Sticker_14_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_14;
    this.Sticker_11.alpha = 0;
    this.Sticker_12.alpha = 0;
    this.Sticker_13.alpha = 0;
    this.Sticker_14.alpha = 1;
    this.Sticker_15.alpha = 0; 
    PositionArrayIndicator = 14;
    testArrayAlpha[14] = 1;
    }, 
            
    Sticker_15_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_15;
    this.Sticker_11.alpha = 0;
    this.Sticker_12.alpha = 0;
    this.Sticker_13.alpha = 0;
    this.Sticker_14.alpha = 0;
    this.Sticker_15.alpha = 1; 
    PositionArrayIndicator = 15;
    testArrayAlpha[15] = 1;
    }, 
             
    Sticker_16_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_16; 
    this.Sticker_16.alpha = 1; 
    PositionArrayIndicator = 16;
    testArrayAlpha[16] = 1;
    }, 
///////////////////////////
////Third Sticker Group////
///////////////////////////
    Sticker_17_Place: function () {    
    isClickDragging = true;
    this.SelectedButton = this.Sticker_17;
    this.Sticker_17.alpha = 1;  
    this.Sticker_16.alpha = 0;  
    PositionArrayIndicator = 17;
    testArrayAlpha[17] = 1;
    },  
    
    Sticker_18_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_18;
    this.Sticker_18.alpha = 1; 

    PositionArrayIndicator = 18;
    testArrayAlpha[18] = 1;
    }, 
    
    Sticker_19_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_19;
    this.Sticker_19.alpha = 1;     
   
    PositionArrayIndicator = 19;
    testArrayAlpha[19] = 1;
    },   
    
    Sticker_20_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_20;
    this.Sticker_20.alpha = 1;     
    PositionArrayIndicator = 20;
    testArrayAlpha[20] = 1;
    }, 
    
    Sticker_21_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_21;
    this.Sticker_21.alpha = 1; 
    PositionArrayIndicator = 21;
    testArrayAlpha[21] = 1;
    }, 
        
    Sticker_22_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_22;
    this.Sticker_22.alpha = 1; 
    PositionArrayIndicator = 22;
    testArrayAlpha[22] = 1;
    }, 
            
    Sticker_23_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_23;
    this.Sticker_23.alpha = 1; 
    PositionArrayIndicator = 23;
    testArrayAlpha[23] = 1;
    }, 
             
    Sticker_24_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_24;
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
    SelectedColor =0xAEE313;
    this.ColorButton1.scale.setTo(1.2, 1.2);
    },
    
    Color_2: function () {
    this.Selectedcolor.scale.setTo(1, 1);
    this.Selectedcolor = this.ColorButton2;
    SelectedColor =0x13AEE3;
    this.ColorButton2.scale.setTo(1.2, 1.2);
    },
    
    Color_3: function () {
    this.Selectedcolor.scale.setTo(1, 1);
    this.Selectedcolor = this.ColorButton3;
    SelectedColor =0xAE13E3;
    this.ColorButton3.scale.setTo(1.2, 1.2);
    },
    
    Color_4: function () {
    this.Selectedcolor.scale.setTo(1, 1);
    this.Selectedcolor = this.ColorButton4;
    SelectedColor =0xFE7805;
    this.ColorButton4.scale.setTo(1.2, 1.2);
    }, 
    
    StickerTurnOn: function () {
        StickerGroup_1.visible = true;
        StickerGroup_2.visible = false;
        ColorGroup.visible = false;
        CharacterStickerGroup.visible = false;
        isAddingPaint = false;
        isAddingSticker = true;
        },
    
    ColorTurnOn: function () {   
        StickerGroup_1.visible = false;
        StickerGroup_2.visible = false;
        ColorGroup.visible = true; 
        CharacterStickerGroup.visible = false;
        isAddingPaint = true;
        isAddingSticker = false;
        },
    
    CharacterHitOn: function () {
        StickerGroup_1.visible = false;
        StickerGroup_2.visible = false;
        ColorGroup.visible = false;
        CharacterStickerGroup.visible = true;
        isAddingPaint = false;
        isAddingSticker = false;
    },
    
    SaveClicked: function () {game.state.start("StateOuttro")},
    
    BackToCharacterSelect: function () {game.state.start("StateCharacterSelect")},
        
    ImageClick: function () {this.param1.animations.play(this.param2, 30, false);}, 
    
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