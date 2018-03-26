var StateMain = {
////////////////////////////////////////////
///////////REMEMBER TO REFRESH/////////////
//////////////////////////////////////////
    preload: function () {        


        isTakingPhoto = false;
 
    },

    create: function () {
        Character = game.add.group();
        
        //  Create the group for the stickers
        StickerGroup_1 = game.add.group();
        StickerGroup_2 = game.add.group();
        StickerGroup_3 = game.add.group();
        StickerGroup_4 = game.add.group();
        StickerGroup_5 = game.add.group();
        StickerGroup_6 = game.add.group();
        StickerGroup_7 = game.add.group();
        
        StickersUnderBody = game.add.group();
        StickerBody = game.add.group();
        StickersAboveBody = game.add.group();
        CharacterStickerGroup = game.add.group();
        MainButtonGroup = game.add.group();
        BackgroundGroup = game.add.group();
        buttongroup = game.add.group();
        
        //reset the score
        score = 0;
        
        //Add background      
        this.craftBackground = game.add.sprite(0, 0, 'craft_Backgroung');
        this.craftBackground.height = this.game.height;
        this.craftBackground.width = this.game.width;
        //this.craftBackground.scale.setTo(scaleRatio,scaleRatio);
        BackgroundGroup.add(this.craftBackground);  


       
        this.drop = game.add.audio("drop");
        

        
         if(IsPlacingRock == true)
             {
             this.SpecificInstructions = game.add.audio("LadyBugInstructions");
             this.SpecificInstructions.play();
             }
        
         if(IsPlacingPinecone == true)
             {
             this.SpecificInstructions = game.add.audio("PineconeAnimalInstructions");
             this.SpecificInstructions.play();
             }
        
         if(IsPlacingMobile == true)
             {         
            //Nothing yet
             }
        
         if(IsPlacingLeaf == true)
            {
            this.SpecificInstructions = game.add.audio("ButterflyInstructions");
            this.SpecificInstructions.play();
            }
        
         if(IsPlacingStickWand == true)
             {         
             this.SpecificInstructions = game.add.audio("WandInstructions");
             this.SpecificInstructions.play();
             }
        
        IsPlacingRock = false;
        IsPlacingPinecone = false;
        IsPlacingMobile = false;
        IsPlacingLeaf = false;
        IsPlacingStickWand = false;
        //Images Variables
        SelectedColor = 0xff00ff;
             
///////////////////////////////////
///CaroseleButtons Sticker Group///
///////////////////////////////////
        this.Logo = game.add.sprite(0,0, 'daisylogo');
        this.Logo.scale.setTo(scaleRatio,scaleRatio);
        this.Logo.inputEnabled = true;
        this.Logo.anchor.set(0,0.4);
        this.Logo.x =  this.Logo.width/4;
        this.Logo.y =  this.Logo.height/2;
        this.Logo.events.onInputOver.add(this.ToLandingPage, this.Logo); 


        
    if(isFirstCharaterSelected == true)
    {    
        this.SaveButton = gameButtons.addGenericButton("0", 0,0 , this.SaveClicked, this,"creativeButtons",1); 
        this.SaveButton.anchor.x = 1.1;
        this.SaveButton.anchor.y = 0;
        this.SaveButton.x =  game.width;
        this.SaveButton.y = 0;
        this.SaveButton.scale.setTo(0.8,0.8);
        
        this.BGMusic = game.add.audio("MusicTrack");
        this.BGMusic.play();
        
        game.time.events.add(10*1000, function() {
        this.DelayedAudioPromt = game.add.audio("TeachSaveButton");
        this.DelayedAudioPromt.play();
        });
        
    }
        else
        {
        this.InitialAudioPromt = game.add.audio("InitialInstructions");
        this.InitialAudioPromt.play();
        }
///////////////////////////
//character Sticker Group//
///////////////////////////
//These are the sprites which the player can click to change the character they're playing with       
        var ButtonsPos_x = game.width/2-60;
        var ButtonsPos_y = game.height;
            if (isMobile==true) 
            {
            var ButtonsScale = scaleRatio;
            }
                else
                {
                var ButtonsScale = scaleRatio;
                }
        var CharacterStickerScale = scaleRatio;

        GroupRefArrayCounter = 0;
        
        //Sticker Carosels        
        this.charactercarouselStickers = game.add.sprite(game.width/2, game.height, 'StickerCaroselTab',1);
        this.charactercarouselStickers.scale.setTo(scaleRatio,scaleRatio);
        this.charactercarouselStickers.anchor.x = 0.5;
        this.charactercarouselStickers.anchor.y =  1;

        //StickerBody.add(this.charactercarouselStickers);
    if(isFirstCharaterSelected == true)
    {  
        //Sticker Carosels        
        this.charactercarouselCharacter = game.add.sprite(game.width/2, game.height, 'StickerCaroselTab',0);
        this.charactercarouselCharacter.scale.setTo(scaleRatio,scaleRatio);
        this.charactercarouselCharacter.anchor.x = 0.5;
        this.charactercarouselCharacter.anchor.y =  1;
        //StickerBody.add(this.charactercarouselStickers);
        CharacterStickerGroup.add(this.charactercarouselCharacter);        
    }
        else
        {
        //Sticker Carosels        
        this.charactercarouselCharacter = game.add.sprite(game.width/2, game.height, 'StickerCaroselTab',2);
        this.charactercarouselCharacter.scale.setTo(scaleRatio,scaleRatio);
        this.charactercarouselCharacter.anchor.x = 0.5;
        this.charactercarouselCharacter.anchor.y =  1;
        //StickerBody.add(this.charactercarouselStickers);
        CharacterStickerGroup.add(this.charactercarouselCharacter);  
        }

        
        ///////////////////
        //Main Button Placement
        var MainButtonsPos_x = game.width/2-50;
        var MainButtonsPos_y = game.height-this.charactercarouselCharacter.height;
        var MacroButton_Scale = scaleRatio;
   
        //Placeable Buttons
        this.MainStickerButton = gameButtons.addGenericButton("0", MainButtonsPos_x, MainButtonsPos_y, this.CharacterHitOn, this,"TabButton",0); 
        this.MainStickerButton.scale.setTo(MacroButton_Scale,MacroButton_Scale);
        this.MainStickerButton.anchor.x = 0.0;
        this.MainStickerButton.anchor.y = -0.5;
        this.MainStickerButton.alpha = 0;
        this.MainStickerButton.x -=this.MainStickerButton.width;
        
        this.MainResetButton = gameButtons.addGenericButton("0", MainButtonsPos_x, MainButtonsPos_y, this.StickerTurnOn, this,"TabButton",0);
        this.MainResetButton.scale.setTo(MacroButton_Scale,MacroButton_Scale);
        this.MainResetButton.anchor.x = 0.0;
        this.MainResetButton.anchor.y =  -0.5;
        this.MainResetButton.alpha = 0;
        buttongroup.add(this.MainResetButton);
        buttongroup.add(this.MainStickerButton);

        ///////////////
        //Character Rock Stickers
        this.RockCharacter = game.add.sprite(ButtonsPos_x, ButtonsPos_y , 'Characterbuttons');   
        this.RockCharacter.inputEnabled = true;
        this.RockCharacter.frame = 1;
        this.RockCharacter.anchor.x = 0.5;
        this.RockCharacter.anchor.y =  0.5;
        this.RockCharacter.events.onInputDown.add(this.RockSticker, this.RockCharacter);   
        this.RockCharacter.scale.setTo(CharacterStickerScale,CharacterStickerScale);
        CharacterStickerGroup.add(this.RockCharacter); 
        ButtonsPos_y = game.height-this.RockCharacter.height/2;  
        this.RockCharacter.y = ButtonsPos_y;
        //Character Pinecone Stickers
        this.PineconeCharacter = game.add.sprite(ButtonsPos_x+this.RockCharacter.width, ButtonsPos_y , 'Characterbuttons');   
        this.PineconeCharacter.inputEnabled = true;
        this.PineconeCharacter.frame = 4;
        this.PineconeCharacter.anchor.x = 0.5;
        this.PineconeCharacter.anchor.y =  0.5;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.PineconeCharacter.events.onInputDown.add(this.PineconeSticker, this.PineconeCharacter);   
        this.PineconeCharacter.scale.setTo(CharacterStickerScale,CharacterStickerScale);
        CharacterStickerGroup.add(this.PineconeCharacter);
        
        //Character StickWand Stickers
        this.SmudgeStickCharacter = game.add.sprite((ButtonsPos_x+this.RockCharacter.width*2), ButtonsPos_y , 'Characterbuttons');   
        this.SmudgeStickCharacter.inputEnabled = true;
        this.SmudgeStickCharacter.frame = 3;
        this.SmudgeStickCharacter.anchor.x = 0.5;
        this.SmudgeStickCharacter.anchor.y = 0.5;
        this.SmudgeStickCharacter.events.onInputDown.add(this.LeafSticker, this.SmudgeStickCharacter);   
        this.SmudgeStickCharacter.scale.setTo(CharacterStickerScale,CharacterStickerScale);
        CharacterStickerGroup.add(this.SmudgeStickCharacter);
        
        //Character Mobile Stickers
        this.StickWandCharacter = game.add.sprite((ButtonsPos_x-this.RockCharacter.width), ButtonsPos_y , 'Characterbuttons');
        this.StickWandCharacter.inputEnabled = true;
        this.StickWandCharacter.frame = 2;
        this.StickWandCharacter.anchor.x = 0.3;
        this.StickWandCharacter.anchor.y = 0.5;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.StickWandCharacter.events.onInputDown.add(this.StickWandSticker, this.StickWandCharacter);   
        this.StickWandCharacter.scale.setTo(CharacterStickerScale,CharacterStickerScale);
        CharacterStickerGroup.add(this.StickWandCharacter);
        
        //Character Mobile Stickers
        this.MobileCharacter = game.add.sprite(ButtonsPos_x-this.RockCharacter.width*2, ButtonsPos_y , 'Characterbuttons');   
        this.MobileCharacter.inputEnabled = true;
        this.MobileCharacter.frame = 0;
        this.MobileCharacter.anchor.x = 0.0;
        this.MobileCharacter.anchor.y = 0.5;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.MobileCharacter.events.onInputDown.add(this.MobileSticker, this.MobileCharacter);   
        this.MobileCharacter.scale.setTo(CharacterStickerScale,CharacterStickerScale);
        CharacterStickerGroup.add(this.MobileCharacter);
                
        
        

        
        CharacterStickerGroup.visible = false;
        
        var ButtonsPos_y =-100; 
                
///////////////////////////
//Placable Sticker Group///
///////////////////////////

  

        
        ImageGroupReference[0] = StickerGroup_1;
        ImageGroupReference[1] = StickerGroup_2;
        ImageGroupReference[2] = StickerGroup_3;
        ImageGroupReference[3] = StickerGroup_4;
        ImageGroupReference[4] = StickerGroup_5;
        ImageGroupReference[5] = StickerGroup_6;
        ImageGroupReference[6] = StickerGroup_7;
        
        ImageGroupReference[0].visible = false;
        ImageGroupReference[1].visible = false;
        ImageGroupReference[2].visible = false;
        ImageGroupReference[3].visible = false;
        ImageGroupReference[4].visible = false;
        ImageGroupReference[5].visible = false;
        ImageGroupReference[6].visible = false;
        ImageGroupReference[GroupRefArrayCounter].visible = true;
        
        //Sticker Vars
        OGPose_X = -100;
        OGPose_Y = -100;
        
///////////////////////////
////First Sticker Group////
///////////////////////////
        
       var CharacterButtonScale = 0.8;
        

        //Pinecone Body
        this.PineconeBody = game.add.sprite(GameCenter_x, GameCenter_y, ImageAssetArray[0]);
        this.PineconeBody.anchor.x = 0.5;
        this.PineconeBody.anchor.y = 0.5;
        this.PineconeBody.scale.setTo(CharacterButtonScale,CharacterButtonScale);
        StickerBody.add(this.PineconeBody);  
        if(isFirstCharaterSelected == false)
        {this.PineconeBody.visibility = false;} 
            
        //Sticker_1_1
        this.Sticker_1 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[0]);  
        this.Sticker_1.alpha = 0;
        this.Sticker_1.anchor.x = 0.5;
        this.Sticker_1.anchor.y = 0.5;
        this.Sticker_1.z =-1;
        //this.Sticker_1.inputEnabled = true;
        //this.Sticker_1.input.pixelPerfectOver = true;
        //this.Sticker_1.events.onInputDown.add(this.sticker_Click, {param1: this.Sticker_1, param2: 1});
        this.Sticker_1.scale.setTo(CharacterButtonScale,CharacterButtonScale);   
        //Character.add(this.Sticker_1);  
            if(StickerDepth[0]== false)
            {
            StickersUnderBody.add(this.Sticker_1);
            }
                else
                {
                StickersAboveBody.add(this.Sticker_1);
                }
         
        //Sticker_2      
        this.Sticker_2 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[0]);
        this.Sticker_2.alpha = 0;
        this.Sticker_2.anchor.x = 0.5;
        this.Sticker_2.anchor.y = 0.5;
        //this.Sticker_2.inputEnabled = true;
        //this.Sticker_2.input.pixelPerfectOver = true;
        //this.Sticker_2.events.onInputDown.add(this.sticker_Click, {param1: this.Sticker_2, param2: 2});
        this.Sticker_2.scale.setTo(CharacterButtonScale,CharacterButtonScale);
        //Character.add(this.Sticker_2);
            if(StickerDepth[1]== false)
            {
            StickersUnderBody.add(this.Sticker_2);
            }
                else
                {
                StickersAboveBody.add(this.Sticker_2);
                }
                 
        //Sticker_3
        this.Sticker_3 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[0]);
        this.Sticker_3.alpha = 0;
        this.Sticker_3.anchor.x = 0.5;
        this.Sticker_3.anchor.y = 0.5;
        //this.Sticker_3.inputEnabled = true;
        //this.Sticker_3.input.pixelPerfectOver = true; 
        //this.Sticker_3.events.onInputDown.add(this.sticker_Click, {param1: this.Sticker_3, param2: 3});
        this.Sticker_3.scale.setTo(CharacterButtonScale,CharacterButtonScale);
        //Character.add(this.Sticker_3);
            if(StickerDepth[2]== false)
            {
            StickersUnderBody.add(this.Sticker_3);
            }
                else
                {
                StickersAboveBody.add(this.Sticker_3);
                }
                
        //Sticker_4
        this.Sticker_4 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[0]);
        this.Sticker_4.alpha = 0;
        this.Sticker_4.anchor.x = 0.5;
        this.Sticker_4.anchor.y = 0.5;
        //this.Sticker_4.inputEnabled = true;
        //this.Sticker_4.input.pixelPerfectOver = true;
        //this.Sticker_4.events.onInputDown.add(this.sticker_Click, {param1: this.Sticker_4, param2: 4});
        this.Sticker_4.scale.setTo(CharacterButtonScale,CharacterButtonScale);
        //Character.add(this.Sticker_4);
            if(StickerDepth[3]== false)
            {
            StickersUnderBody.add(this.Sticker_4);
            }
                else
                {
                StickersAboveBody.add(this.Sticker_4);
                }

        //Sticker_5
        this.Sticker_5 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[0]);        
        this.Sticker_5.alpha = 0;
        this.Sticker_5.anchor.x = 0.5;
        this.Sticker_5.anchor.y = 0.5;
        //this.Sticker_5.inputEnabled = true;
        //this.Sticker_5.input.pixelPerfectOver = true;
        //this.Sticker_5.events.onInputDown.add(this.sticker_Click, {param1: this.Sticker_5, param2: 5});
        this.Sticker_5.scale.setTo(CharacterButtonScale,CharacterButtonScale);  
        //Character.add(this.Sticker_5);      
            if(StickerDepth[4]== false)
            {
            StickersUnderBody.add(this.Sticker_5);
            }
                else
                {
                StickersAboveBody.add(this.Sticker_5);
                }

        //Sticker_6      
        this.Sticker_6 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[0]);
        this.Sticker_6.alpha = 0;
        this.Sticker_6.anchor.x = 0.5;
        this.Sticker_6.anchor.y = 0.5;
        //this.Sticker_6.inputEnabled = true;
        //this.Sticker_6.input.pixelPerfectOver = true;
        //this.Sticker_6.events.onInputDown.add(this.sticker_Click, {param1: this.Sticker_6, param2: 6});
        this.Sticker_6.scale.setTo(CharacterButtonScale,CharacterButtonScale);
        //Character.add(this.Sticker_6);  
            if(StickerDepth[5]== false)
            {
            StickersUnderBody.add(this.Sticker_6);
            }
                else
                {
                StickersAboveBody.add(this.Sticker_6);
                }
        
        //Sticker_7      
        this.Sticker_7 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[0]);
        this.Sticker_7.alpha = 0;
        this.Sticker_7.anchor.x = 0.5;
        this.Sticker_7.anchor.y = 0.5;
        //this.Sticker_7.inputEnabled = true;
        //this.Sticker_7.input.pixelPerfectOver = true;
        this.Sticker_7.events.onInputDown.add(this.sticker_Click, {param1: this.Sticker_7, param2: 7});
        this.Sticker_7.scale.setTo(CharacterButtonScale,CharacterButtonScale);
        //Character.add(this.Sticker_6);  
            if(StickerDepth[6]== false)
            {
            StickersUnderBody.add(this.Sticker_7);
            }
                else
                {
                StickersAboveBody.add(this.Sticker_7);
                }
        
///////////////////////////
////First Sticker Group////
///////////////////////////
        //Sticker_Place, {param1: this.StickerButton1, param2: 2, }
        //Wings
        this.StickerButton1 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y, this.Sticker_1_Place, this,0,StickerAssigner_set1);         
        this.StickerButton1.scale.setTo(ButtonsScale,ButtonsScale);      
        StickerGroup_1.add(this.StickerButton1);
        

        var ButtonsPos_x = game.width/2;
        var ButtonsPos_y = game.height-this.StickerButton1.height*1.3; 
        
        this.StickerButton1.x=ButtonsPos_x;
        this.StickerButton1.y=ButtonsPos_y;
        
        this.StickerButton2 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y, this.Sticker_2_Place, this,1,StickerAssigner_set1); 
        this.StickerButton2.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_1.add(this.StickerButton2);
        
        this.StickerButton3 = gameButtons.addStickerButton("0", ButtonsPos_x-this.StickerButton1.width, ButtonsPos_y, 
        this.Sticker_3_Place, this,2,StickerAssigner_set1);  
        this.StickerButton3.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_1.add(this.StickerButton3);
        
        this.StickerButton4 = gameButtons.addStickerButton("0", ButtonsPos_x-this.StickerButton1.width*2, ButtonsPos_y, 
        this.Sticker_4_Place, this,3,StickerAssigner_set1);
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
        this.StickerButton7 = gameButtons.addStickerButton("0", ButtonsPos_x-this.StickerButton1.width, ButtonsPos_y, this.Sticker_7_Place, this,6,StickerAssigner_set1);  
        this.StickerButton7.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_2.add(this.StickerButton7);
        
        this.StickerButton8 = gameButtons.addStickerButton("0", ButtonsPos_x-this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_8_Place, this,7,StickerAssigner_set1);
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
        
        this.StickerButton11 = gameButtons.addStickerButton("0", ButtonsPos_x-this.StickerButton1.width, ButtonsPos_y, this.Sticker_11_Place, this,10,StickerAssigner_set1);  
        this.StickerButton11.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_3.add(this.StickerButton11);
        
        this.StickerButton12 = gameButtons.addStickerButton("0", ButtonsPos_x-this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_12_Place, this,11,StickerAssigner_set1);
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
        
        this.StickerButton15 = gameButtons.addStickerButton("0", ButtonsPos_x-this.StickerButton1.width, ButtonsPos_y, this.Sticker_15_Place, this,14,StickerAssigner_set1);  
        this.StickerButton15.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_4.add(this.StickerButton15);
        
        this.StickerButton16 = gameButtons.addStickerButton("0", ButtonsPos_x-this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_16_Place, this,15,StickerAssigner_set1);
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
        
        this.StickerButton19 = gameButtons.addStickerButton("0", ButtonsPos_x-this.StickerButton1.width, ButtonsPos_y, this.Sticker_19_Place, this,18,StickerAssigner_set1);  
        this.StickerButton19.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_5.add(this.StickerButton19);
        
        this.StickerButton20 = gameButtons.addStickerButton("0", ButtonsPos_x-this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_20_Place, this,19,StickerAssigner_set1);
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
        
        this.StickerButton23 = gameButtons.addStickerButton("0", ButtonsPos_x-this.StickerButton1.width, ButtonsPos_y, this.Sticker_23_Place, this,22,StickerAssigner_set1);  
        this.StickerButton23.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_6.add(this.StickerButton23);
        
        this.StickerButton24 = gameButtons.addStickerButton("0", ButtonsPos_x-this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_24_Place, this,23,StickerAssigner_set1);
        this.StickerButton24.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_6.add(this.StickerButton24);
        
///////////////////////////
////Seven Sticker Group////
///////////////////////////
        
        this.StickerButton25 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y, this.Sticker_25_Place, this,24,StickerAssigner_set1); 
        this.StickerButton25.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_7.add(this.StickerButton25);
        
        this.StickerButton26 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y, this.Sticker_26_Place, this,25,StickerAssigner_set1); 
        this.StickerButton26.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_7.add(this.StickerButton26);
        
        this.StickerButton27 = gameButtons.addStickerButton("0", ButtonsPos_x-this.StickerButton1.width, ButtonsPos_y, this.Sticker_27_Place, this,26,StickerAssigner_set1);  
        this.StickerButton27.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_7.add(this.StickerButton27);
        
        this.StickerButton28 = gameButtons.addStickerButton("0", ButtonsPos_x-this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_28_Place, this,27,StickerAssigner_set1);
        this.StickerButton28.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_7.add(this.StickerButton28);
        
        
        Arrow_Y = game.height-this.StickerButton1.height;
        
        arrowScaleOffset = 1;
        //Carosels Left
        this.CaroselArrow_Left = gameButtons.addGenericButton("0", ButtonsPos_x-this.StickerButton1.width*2, Arrow_Y, this.Carosel_Left, this,"CaroselArrows",0); 
        this.CaroselArrow_Left.anchor.x = 1;
        this.CaroselArrow_Left.scale.setTo(scaleRatio*arrowScaleOffset,scaleRatio*arrowScaleOffset);
        //StickerGroup.add(this.CaroselArrow_Left);
        
        //Carosels Right
        this.CaroselArrow_Right = gameButtons.addGenericButton("0", ButtonsPos_x+this.StickerButton1.width*2, Arrow_Y, this.Carosel_Right, this,"CaroselArrows",1); 
        this.CaroselArrow_Right.scale.setTo(scaleRatio*arrowScaleOffset,scaleRatio*arrowScaleOffset);
        //StickerGroup.add(this.CaroselArrow_Right);
        
        Character.sort();
        
        game.world.bringToTop(StickersUnderBody);
        game.world.bringToTop(StickerBody);
        game.world.bringToTop(StickersAboveBody);
        
        game.world.bringToTop(StickerGroup_7);
        game.world.bringToTop(StickerGroup_6);
        game.world.bringToTop(StickerGroup_5);       
        game.world.bringToTop(StickerGroup_4);
        game.world.bringToTop(StickerGroup_3);
        game.world.bringToTop(StickerGroup_2);
        game.world.bringToTop(StickerGroup_1);
        game.world.bringToTop(MainButtonGroup);
        game.world.bringToTop(CharacterStickerGroup);
        game.world.bringToTop(buttongroup);
        //init the music
        //gameMedia.updateMusic();        
        //init the sound buttons
        //gameButtons.updateButtons();
        //Set the outrovideo
        vidGroup = game.add.group();
        //Set the Episoderovideo
        vidGroup_Ep = game.add.group();

        this.SelectedButton = this.PineconeBody;
        
        //game.input.addMoveCallback(this.paint, this);  
        
        if(isFirstCharaterSelected == false)
        {
        CharacterStickerGroup.visible = true;
        ImageGroupReference[GroupRefArrayCounter].visible = false;
        this.charactercarouselStickers.visible = false;
        this.CaroselArrow_Left.visible = false;
        this.CaroselArrow_Right.visible = false;
            
            
        StickersUnderBody.visible = false;
        StickerBody.visible = false;
        StickersAboveBody.visible = false;
        }
    },      
    
    ToLandingPage: function()
    {
        game.sound.stopAll();
        game.state.start("StateTitle");   
    }, 

    RockSticker: function () {
isFirstCharaterSelected = true;
IsPlacingRock = true;
CaroselGroupNumber = 4;
StickerAssigner_set1 = "Rock_Stickers_1";
//Reset the references to the body
        ImageReference[0] = 'RockBody';
        ImageReference[1] = '';
        ImageReference[2] = '';
        ImageReference[3] = '';
        ImageReference[4] = '';
        ImageReference[5] = '';
        ImageReference[6] = '';
        ImageReference[7] = '';
///////////////////////////
////Sticker Body//////////
///////////////////////////
        ImageAssetArray[0]='RockBody';
///////////////////////////
////First Sticker Group////
///////////////////////////
        ImageAssetArray[1]='RockBase_1';
        ImageAssetArray[2]='RockBase_2'; 
        ImageAssetArray[3]='RockBase_3';
        ImageAssetArray[4]='RockBase_4';
///////////////////////////
////Second Sticker Group///
///////////////////////////
        ImageAssetArray[5]='RockFace_1';
        ImageAssetArray[6]='RockFace_2';
        ImageAssetArray[7]='RockFace_3';
        ImageAssetArray[8]='RockFace_4';
///////////////////////////
////Third Sticker Group////
///////////////////////////
        ImageAssetArray[9]='RockHeadgear_1';
        ImageAssetArray[10]='RockHeadgear_2';
        ImageAssetArray[11]='RockHeadgear_3';
        ImageAssetArray[12]='RockHeadgear_4';
///////////////////////////
////Fourth Sticker Group///
///////////////////////////
        ImageAssetArray[13]='RockWings_1';
        ImageAssetArray[14]='RockWings_2';
        ImageAssetArray[15]='RockWings_3';  
        ImageAssetArray[16]='RockWings_4';
///////////////////////////
////Fifth Sticker Group////
///////////////////////////
        ImageAssetArray[17]='RockFeet_1';
        ImageAssetArray[18]='RockFeet_2';
        ImageAssetArray[19]='RockFeet_3';
        ImageAssetArray[20]='RockFeet_4';
//////////////////////////
////Sticker Depths////////
//////////////////////////
        StickerDepth[0]=true;
        StickerDepth[1]=true;
        StickerDepth[2]=true;
        StickerDepth[3]=false;
        StickerDepth[4]=true;
        StickerDepth[5]=true;
        StickerDepth[6]=true;
game.sound.stopAll();
game.state.start("StateMain"); 
    },
    
PineconeSticker: function () {

IsPlacingPinecone = true;
    
isFirstCharaterSelected = true;
CaroselGroupNumber = 4;
StickerAssigner_set1 = "Pinecone_Stickers"; 
//Reset the references to the body
    ImageReference[0] = 'PineconeBody';
    ImageReference[1] = '';
    ImageReference[2] = '';
    ImageReference[3] = '';
    ImageReference[4] = '';
    ImageReference[5] = '';
    ImageReference[6] = '';
    ImageReference[7] = '';

//////////////////////////
////Sticker Body//////////
//////////////////////////
        ImageAssetArray[0]='PineconeBody';
///////////////////////////
////First Sticker Group////
///////////////////////////
        ImageAssetArray[1]='PineconeWings_1';
        ImageAssetArray[2]='PineconeWings_2';
        ImageAssetArray[3]='PineconeWings_3';  
        ImageAssetArray[4]='PineconeWings_4';
///////////////////////////
////Second Sticker Group///
///////////////////////////
        ImageAssetArray[5]='PineconeEyes_1';
        ImageAssetArray[6]='PineconeEyes_2'; 
        ImageAssetArray[7]='PineconeEyes_3';
        ImageAssetArray[8]='PineconeEyes_4';

///////////////////////////
////Third Sticker Group////
///////////////////////////
        ImageAssetArray[9]='PineconeFeet_1';
        ImageAssetArray[10]='PineconeFeet_2';
        ImageAssetArray[11]='PineconeFeet_3';
        ImageAssetArray[12]='PineconeFeet_4';

////Fourth Sticker Group///
///////////////////////////
        ImageAssetArray[13]='PineconeHeadgear_1';
        ImageAssetArray[14]='PineconeHeadgear_2';
        ImageAssetArray[15]='PineconeHeadgear_3';
        ImageAssetArray[16]='PineconeHeadgear_4';

///////////////////////////
////Fifth Sticker Group////
///////////////////////////
        ImageAssetArray[17]='PineconeClothing_1';
        ImageAssetArray[18]='PineconeClothing_2';
        ImageAssetArray[19]='PineconeClothing_3';
        ImageAssetArray[20]='PineconeClothing_4';
//////////////////////////
////Sticker Depths////////
//////////////////////////
        StickerDepth[0]=false;
        StickerDepth[1]=true;
        StickerDepth[2]=false;
        StickerDepth[3]=true;
        StickerDepth[4]=true;
        StickerDepth[5]=true;
        StickerDepth[6]=true;
game.sound.stopAll();
game.state.start("StateMain");
    },
    
    MobileSticker: function () {  
IsPlacingMobile = true;    
isFirstCharaterSelected = true;
CaroselGroupNumber = 4;
StickerAssigner_set1 = "MapleLeaf_stickers";
//Reset the references to the body
    ImageReference[0] = 'MapleLeafBody';
    ImageReference[1] = '';
    ImageReference[2] = '';
    ImageReference[3] = '';
    ImageReference[4] = '';
    ImageReference[5] = '';
    ImageReference[6] = '';
    ImageReference[7] = '';
//////////////////////////
////Sticker Body//////////
//////////////////////////
        ImageAssetArray[0]='MapleLeafBody';
///////////////////////////
////First Sticker Group////
///////////////////////////
        ImageAssetArray[1]='MapleLeaf_1';
        ImageAssetArray[2]='MapleLeaf_2'; 
        ImageAssetArray[3]='MapleLeaf_3';
        ImageAssetArray[4]='MapleLeaf_4';
///////////////////////////
////Second Sticker Group///
///////////////////////////
        ImageAssetArray[5]='MapleLeaf_5';
        ImageAssetArray[6]='MapleLeaf_6';
        ImageAssetArray[7]='MapleLeaf_7';
        ImageAssetArray[8]='MapleLeaf_8';
///////////////////////////
////Third Sticker Group////
///////////////////////////
        ImageAssetArray[9]='MapleLeaf_9';
        ImageAssetArray[10]='MapleLeaf_10';
        ImageAssetArray[11]='MapleLeaf_11';
        ImageAssetArray[12]='MapleLeaf_12';
///////////////////////////
////Fourth Sticker Group///
///////////////////////////
        ImageAssetArray[13]='MapleLeaf_13';
        ImageAssetArray[14]='MapleLeaf_14';
        ImageAssetArray[15]='MapleLeaf_15';  
        ImageAssetArray[16]='MapleLeaf_16';
///////////////////////////
////Fifth Sticker Group////
///////////////////////////
        ImageAssetArray[17]='MapleLeaf_17';
        ImageAssetArray[18]='MapleLeaf_18';
        ImageAssetArray[19]='MapleLeaf_19';
        ImageAssetArray[20]='MapleLeaf_20';
//////////////////////////
////Sticker Depths////////
//////////////////////////
        StickerDepth[0]=true;
        StickerDepth[1]=true;
        StickerDepth[2]=true;
        StickerDepth[3]=false;

game.sound.stopAll();
game.state.start("StateMain"); 
    },
    
    LeafSticker: function () {
IsPlacingLeaf = true;
        
CaroselGroupNumber = 3;
StickerAssigner_set1 = "Leaf_Stickers";
isFirstCharaterSelected = true;
//Reset the references to the body
        ImageReference[0] = 'LeafBody';
        ImageReference[1] = '';
        ImageReference[2] = '';
        ImageReference[3] = '';
        ImageReference[4] = '';
        ImageReference[5] = '';
        ImageReference[6] = '';
        ImageReference[7] = '';
///////////////////////////
////Sticker Body//////////
///////////////////////////
        ImageAssetArray[0]='LeafBody';
///////////////////////////
////First Sticker Group////
///////////////////////////
        ImageAssetArray[1]='LeafWings_1';
        ImageAssetArray[2]='LeafWings_2'; 
        ImageAssetArray[3]='LeafWings_3';
        ImageAssetArray[4]='LeafWings_4';
///////////////////////////
////Second Sticker Group///
///////////////////////////
        ImageAssetArray[5]='LeafFace_1';
        ImageAssetArray[6]='LeafFace_2';
        ImageAssetArray[7]='LeafFace_3';
        ImageAssetArray[8]='LeafFace_4';
///////////////////////////
////Third Sticker Group////
///////////////////////////
        ImageAssetArray[9]='LeafHeadgear_1';
        ImageAssetArray[10]='LeafHeadgear_2';
        ImageAssetArray[11]='LeafHeadgear_3';
        ImageAssetArray[12]='LeafHeadgear_4';
///////////////////////////
////Fourth Sticker Group///
///////////////////////////
        ImageAssetArray[13]='LeafClothing_1';
        ImageAssetArray[14]='LeafClothing_2';
        ImageAssetArray[15]='LeafClothing_3';  
        ImageAssetArray[16]='LeafClothing_4';
//////////////////////////
////Sticker Depths////////
//////////////////////////
        StickerDepth[0]=false;
        StickerDepth[1]=true;
        StickerDepth[2]=true;
        StickerDepth[3]=true;
        StickerDepth[4]=true;
        StickerDepth[5]=true;   
        StickerDepth[6]=true;  
game.sound.stopAll();
game.state.start("StateMain");
    },
     
    StickWandSticker: function () {
IsPlacingStickWand = true;
CaroselGroupNumber = 4;
StickerAssigner_set1 = "StickWand_stickers";
isFirstCharaterSelected = true;
//Reset the references to the body
        ImageReference[0] = 'StickWandBody';
        ImageReference[1] = '';
        ImageReference[2] = '';
        ImageReference[3] = '';
        ImageReference[4] = '';
        ImageReference[5] = '';
        ImageReference[6] = '';
        ImageReference[7] = '';
///////////////////////////
////Sticker Body//////////
///////////////////////////
        ImageAssetArray[0]='StickWandBody';
///////////////////////////
////First Sticker Group////
///////////////////////////
        ImageAssetArray[1]='StickWandBase_1';
        ImageAssetArray[2]='StickWandBase_2'; 
        ImageAssetArray[3]='StickWandBase_3';
        ImageAssetArray[4]='StickWandBase_4';
///////////////////////////
////Second Sticker Group///
///////////////////////////
        ImageAssetArray[5]='StickWandFace_1';
        ImageAssetArray[6]='StickWandFace_2';
        ImageAssetArray[7]='StickWandFace_3';
        ImageAssetArray[8]='StickWandFace_4';
///////////////////////////
////Third Sticker Group////
///////////////////////////
        ImageAssetArray[9]='StickWandHeadgear_1';
        ImageAssetArray[10]='StickWandHeadgear_2';
        ImageAssetArray[11]='StickWandHeadgear_3';
        ImageAssetArray[12]='StickWandHeadgear_4';
///////////////////////////
////Fourth Sticker Group///
///////////////////////////
        ImageAssetArray[13]='StickWandFeet_1';
        ImageAssetArray[14]='StickWandFeet_2';
        ImageAssetArray[15]='StickWandFeet_3';
        ImageAssetArray[16]='StickWandFeet_4';
///////////////////////////
////Fifth Sticker Group////
///////////////////////////
        ImageAssetArray[17]='StickWandClothing_1';
        ImageAssetArray[18]='StickWandClothing_2';
        ImageAssetArray[19]='StickWandClothing_3';
        ImageAssetArray[20]='StickWandClothing_4';
    //////////////////////////
    ////Sticker Depths////////
    //////////////////////////
        StickerDepth[0]=true;
        StickerDepth[1]=true;
        StickerDepth[2]=true;
        StickerDepth[3]=false;
        StickerDepth[4]=true;
        StickerDepth[5]=true;
        StickerDepth[6]=true;
game.sound.stopAll();        
game.state.start("StateMain");
    },
    
    p: function (pointer) {

    // console.log(pointer.);
    //console.log(pointer.event);

    },
    
    render: function () {
    //game.debug.text( ImageAssetArray[0], 100, 380 );
    //game.debug.text( ImageAssetArray[0], 100, 390 ); 
    
    //game.debug.text( Pivot_X[0], 100, 380 );
    //game.debug.text( Pivot_Y[0], 100, 390 );     
        
    },

    update: function () { 
        if(isClickDragging == true) 
        {//If the player is dragging the image onto the 
            if(game.input.activePointer.isDown == true)
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
                    this.drop.play();
                }
        }

        
    Character.sort('y', Phaser.Group.SORT_DESCENDING);  
    }, 
    
    paint: function (pointer, x, y) {

        if (pointer.isDown && isAddingPaint  == true)
        {
            
            this.bmd.draw(this.loop, x, y);
        }
    },
    
    Carosel_Left: function()
    {   
         ImageGroupReference[GroupRefArrayCounter].visible = false;
            if(GroupRefArrayCounter>0)
            {
            GroupRefArrayCounter-=1;
            }
                else
                {
                GroupRefArrayCounter=CaroselGroupNumber;
                }
        ImageGroupReference[GroupRefArrayCounter].visible = true;
    },
    
    Carosel_Right: function()
    {
         ImageGroupReference[GroupRefArrayCounter].visible = false;
            if(GroupRefArrayCounter<CaroselGroupNumber)
            {
            GroupRefArrayCounter+=1;
            }
                else
                {
                GroupRefArrayCounter=0;
                }
        ImageGroupReference[GroupRefArrayCounter].visible = true;
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
    this.param1.frame = this.param2;   
    this.param1.alpha = 1;  
    },  
    
//////////////////////////////////
////First Sticker Button Group////
//////////////////////////////////
    Sticker_1_Place: function () {    
    isClickDragging = true; 
    this.SelectedButton = this.Sticker_1;
    this.Sticker_1.loadTexture(ImageAssetArray[1]);   
    this.Sticker_1.alpha = 1;  
    //Image Reference for placement section
    ImageReference[1]=ImageAssetArray[1];
    //Pivot 
    this.Sticker_1.anchor.x = Pivot_X[0];
    this.Sticker_1.anchor.y = Pivot_Y[0];
    //Data storage 
    PositionArrayIndicator = 1;
    testArrayAlpha[1] = 1;
    },
    
    Sticker_2_Place: function () {
    isClickDragging = true;
    this.Sticker_1.loadTexture(ImageAssetArray[2]); 
    this.Sticker_1.alpha = 1;  
    this.SelectedButton = this.Sticker_1;
    //Image Reference for placement section
    ImageReference[1]=ImageAssetArray[2];
    //Pivot 
    this.Sticker_1.anchor.x = Pivot_X[1];
    this.Sticker_1.anchor.y = Pivot_Y[1];
    //Data storage 
    PositionArrayIndicator = 2;
    testArrayAlpha[1] = 1;
    },
    
    Sticker_3_Place: function () {
    isClickDragging = true;
    this.Sticker_1.loadTexture(ImageAssetArray[3]);
    this.Sticker_1.alpha = 1;
    this.SelectedButton = this.Sticker_1;
    //Image Reference for placement section
    ImageReference[1]=ImageAssetArray[3];
    //Pivot 
    this.Sticker_1.anchor.x = Pivot_X[2];
    this.Sticker_1.anchor.y = Pivot_Y[2];
    //Data storage 
    PositionArrayIndicator = 3;
    testArrayAlpha[1] = 1;
    },
    
    Sticker_4_Place: function () {
    isClickDragging = true;
    this.Sticker_1.loadTexture(ImageAssetArray[4]);
    this.Sticker_1.alpha = 1;
    this.SelectedButton = this.Sticker_1;
    //Image Reference for placement section
    ImageReference[1]=ImageAssetArray[4];
    //Pivot 
    this.Sticker_1.anchor.x = Pivot_X[3];
    this.Sticker_1.anchor.y = Pivot_Y[3];
    //Data storage 
    PositionArrayIndicator = 4;
    testArrayAlpha[1] = 1;
    }, 
    
///////////////////////////
///Second Sticker Group////
///////////////////////////
    
    Sticker_5_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_2;
    this.Sticker_2.loadTexture(ImageAssetArray[5]);
    this.Sticker_2.alpha = 1; 
    //Image Reference for placement section
    ImageReference[2]=ImageAssetArray[5];
    //Pivot 
    this.Sticker_2.anchor.x = Pivot_X[4];
    this.Sticker_2.anchor.y = Pivot_Y[4];
    //Data storage 
    PositionArrayIndicator = 5;
    testArrayAlpha[2] = 1;
    }, 
        
    Sticker_6_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_2;
    this.Sticker_2.loadTexture(ImageAssetArray[6]);
    this.Sticker_2.alpha = 1; 
    //Image Reference for placement section
    ImageReference[2]=ImageAssetArray[6];
    //Pivot 
    this.Sticker_2.anchor.x = Pivot_X[5];
    this.Sticker_2.anchor.y = Pivot_Y[5];
    //Data storage 
    PositionArrayIndicator = 6;
    testArrayAlpha[2] = 1;
    }, 
            
    Sticker_7_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_2;
    this.Sticker_2.loadTexture(ImageAssetArray[7]);
    this.Sticker_2.alpha = 1;  
    //Image Reference for placemnt section
    ImageReference[2]=ImageAssetArray[7];
    //Pivot 
    this.Sticker_2.anchor.x = Pivot_X[6];
    this.Sticker_2.anchor.y = Pivot_Y[6];
    //Data storage 
    PositionArrayIndicator = 7;
    testArrayAlpha[2] = 1;
    }, 
             
    Sticker_8_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_2;
    this.Sticker_2.loadTexture(ImageAssetArray[8]);
    this.Sticker_2.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[2]=ImageAssetArray[8];
    //Pivot 
    this.Sticker_2.anchor.x = Pivot_X[7];
    this.Sticker_2.anchor.y = Pivot_Y[7];
    //Data storage
    PositionArrayIndicator = 8;
    testArrayAlpha[2] = 1;
    }, 

///////////////////////////
////Third Sticker Group////
///////////////////////////
    
    Sticker_9_Place: function () {    
    isClickDragging = true;
    this.SelectedButton = this.Sticker_3;
    this.Sticker_3.loadTexture(ImageAssetArray[9]);
    this.Sticker_3.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[3]=ImageAssetArray[9];
    //Pivot 
    this.Sticker_3.anchor.x = Pivot_X[8];
    this.Sticker_3.anchor.y = Pivot_Y[8];
    //Data storage
    PositionArrayIndicator = 9;
    testArrayAlpha[3] = 1;
    },  
    
    Sticker_10_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_3;
    this.Sticker_3.loadTexture(ImageAssetArray[10]);
    this.Sticker_3.alpha = 1;  
    //Image Reference for placemnt section
    ImageReference[3]=ImageAssetArray[10];
    //Pivot 
    this.Sticker_3.anchor.x = Pivot_X[9];
    this.Sticker_3.anchor.y = Pivot_Y[9];
    //Data storage
    PositionArrayIndicator = 10;
    testArrayAlpha[3] = 1;
    }, 
    
    Sticker_11_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_3;
    this.Sticker_3.loadTexture(ImageAssetArray[11]);
    this.Sticker_3.alpha = 1;
    //Image Reference for placemnt section
    ImageReference[3]=ImageAssetArray[11];
    //Pivot 
    this.Sticker_3.anchor.x = Pivot_X[10];
    this.Sticker_3.anchor.y = Pivot_Y[10];
    //Data storage
    PositionArrayIndicator = 11;
    testArrayAlpha[3] = 1;
    },   
    
    Sticker_12_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_3;
    this.Sticker_3.loadTexture(ImageAssetArray[12]);
    this.Sticker_3.alpha = 1;   
    //Image Reference for placemnt section
    ImageReference[3]=ImageAssetArray[12];
    //Pivot 
    this.Sticker_3.anchor.x = Pivot_X[11];
    this.Sticker_3.anchor.y = Pivot_Y[11];
    //Data storage
    PositionArrayIndicator = 12;
    testArrayAlpha[3] = 1;
    }, 
    
    
///////////////////////////
////Fourth Sticker Group///
///////////////////////////   
    
    Sticker_13_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_4;
    this.Sticker_4.loadTexture(ImageAssetArray[13]);
    this.Sticker_4.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[4]=ImageAssetArray[13];
    //Pivot 
    this.Sticker_4.anchor.x = Pivot_X[12];
    this.Sticker_4.anchor.y = Pivot_Y[12];
    //Data storage
    PositionArrayIndicator = 13;
    testArrayAlpha[4] = 1;
    }, 
        
    Sticker_14_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_4;
    this.Sticker_4.loadTexture(ImageAssetArray[14]);
    this.Sticker_4.alpha = 1;
    //Image Reference for placemnt section
    ImageReference[4]=ImageAssetArray[14];
    //Pivot 
    this.Sticker_4.anchor.x = Pivot_X[13];
    this.Sticker_4.anchor.y = Pivot_Y[13];
    //Data storage
    PositionArrayIndicator = 14;
    testArrayAlpha[4] = 1;
    }, 
            
    Sticker_15_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_4;
    this.Sticker_4.loadTexture(ImageAssetArray[15]);
    this.Sticker_4.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[4]=ImageAssetArray[15];
    //Pivot 
    this.Sticker_4.anchor.x = Pivot_X[14];
    this.Sticker_4.anchor.y = Pivot_Y[14];
    //Data storage
    PositionArrayIndicator = 15;
    testArrayAlpha[4] = 1;
    }, 
             
    Sticker_16_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_4;
    this.Sticker_4.loadTexture(ImageAssetArray[16]);
    this.Sticker_4.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[4]=ImageAssetArray[16];
    //Pivot 
    this.Sticker_4.anchor.x = Pivot_X[15];
    this.Sticker_4.anchor.y = Pivot_Y[15];
    //Data storage
    PositionArrayIndicator = 16;
    testArrayAlpha[4] = 1;
    }, 

///////////////////////////
////Fifth Sticker Group///
///////////////////////////  
    
    Sticker_17_Place: function () {    
    isClickDragging = true;
    this.SelectedButton = this.Sticker_5;
    this.Sticker_5.loadTexture(ImageAssetArray[17]);
    this.Sticker_5.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[5]=ImageAssetArray[17];
    //Pivot 
    this.Sticker_5.anchor.x = Pivot_X[16];
    this.Sticker_5.anchor.y = Pivot_Y[16];
    //Data storage
    PositionArrayIndicator = 17;
    testArrayAlpha[5] = 1;
    },  
    
    Sticker_18_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_5;
    this.Sticker_5.loadTexture(ImageAssetArray[18]);
    this.Sticker_5.alpha = 1;
    //Image Reference for placemnt section
    ImageReference[5]=ImageAssetArray[18];
    //Pivot 
    this.Sticker_5.anchor.x = Pivot_X[17];
    this.Sticker_5.anchor.y = Pivot_Y[17];
    //Data storage
    PositionArrayIndicator = 18;
    testArrayAlpha[5] = 1;
    }, 
    
    Sticker_19_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_5;
    this.Sticker_5.loadTexture(ImageAssetArray[19]);
    this.Sticker_5.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[5]=ImageAssetArray[19];
    //Pivot 
    this.Sticker_5.anchor.x = Pivot_X[18];
    this.Sticker_5.anchor.y = Pivot_Y[18];
    //Data storage
    PositionArrayIndicator = 19;
    testArrayAlpha[5] = 1;
    },   
    
    Sticker_20_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_5;
    this.Sticker_5.loadTexture(ImageAssetArray[20]);
    this.Sticker_5.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[5]=ImageAssetArray[20];
    //Pivot 
    this.Sticker_5.anchor.x = Pivot_X[19];
    this.Sticker_5.anchor.y = Pivot_Y[19];
    //Data storage
    PositionArrayIndicator = 20;
    testArrayAlpha[5] = 1;
    }, 
    
    
///////////////////////////
////Six Sticker Group////
///////////////////////////
    
    Sticker_21_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_6;
    this.Sticker_6.loadTexture(ImageAssetArray[21]);
    this.Sticker_6.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[6]=ImageAssetArray[21];
    //Pivot 
    this.Sticker_6.anchor.x = Pivot_X[20];
    this.Sticker_6.anchor.y = Pivot_Y[20];
    //Data storage
    PositionArrayIndicator = 21;
    testArrayAlpha[6] = 1;
    }, 
        
    Sticker_22_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_6;
    this.Sticker_6.loadTexture(ImageAssetArray[22]);
    this.Sticker_6.alpha = 1;
    //Image Reference for placemnt section
    ImageReference[6]=ImageAssetArray[22];
    //Pivot 
    this.Sticker_6.anchor.x = Pivot_X[21];
    this.Sticker_6.anchor.y = Pivot_Y[21];
    //Data storage
    PositionArrayIndicator = 22;
    testArrayAlpha[6] = 1;
    }, 
            
    Sticker_23_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_6;
    this.Sticker_6.loadTexture(ImageAssetArray[23]);
    this.Sticker_6.alpha = 1;
    //Image Reference for placemnt section
    ImageReference[6]=ImageAssetArray[23];
    //Pivot 
    this.Sticker_6.anchor.x = Pivot_X[22];
    this.Sticker_6.anchor.y = Pivot_Y[22];
    //Data storage
    PositionArrayIndicator = 23;
    testArrayAlpha[6] = 1;
    }, 
             
    Sticker_24_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_6;
    this.Sticker_6.loadTexture(ImageAssetArray[24]);
    this.Sticker_6.alpha = 1;
    //Image Reference for placemnt section
    ImageReference[6]=ImageAssetArray[24];
    //Pivot 
    this.Sticker_6.anchor.x = Pivot_X[23];
    this.Sticker_6.anchor.y = Pivot_Y[23];
    //Data storage
    PositionArrayIndicator = 24;
    testArrayAlpha[6] = 1;
    },   
    
///////////////////////////
///Seventh Sticker Group///
///////////////////////////
    
    Sticker_25_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_7;
    this.Sticker_7.loadTexture(ImageAssetArray[25]);
    this.Sticker_7.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[7]=ImageAssetArray[25];
    //Pivot 
    this.Sticker_7.anchor.x = Pivot_X[24];
    this.Sticker_7.anchor.y = Pivot_Y[24];
    //Data storage
    PositionArrayIndicator = 25;
    testArrayAlpha[7] = 1;
    }, 
        
    Sticker_26_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_7;
    this.Sticker_7.loadTexture(ImageAssetArray[26]);
    this.Sticker_7.alpha = 1;
    //Image Reference for placemnt section
    ImageReference[7]=ImageAssetArray[26];
    //Pivot 
    this.Sticker_7.anchor.x = Pivot_X[25];
    this.Sticker_7.anchor.y = Pivot_Y[25];
    //Data storage
    PositionArrayIndicator = 26;
    testArrayAlpha[7] = 1;
    }, 
            
    Sticker_27_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_7;
    this.Sticker_7.loadTexture(ImageAssetArray[27]);
    this.Sticker_7.alpha = 1;
    //Image Reference for placemnt section
    ImageReference[7]=ImageAssetArray[27];
    //Pivot 
    this.Sticker_7.anchor.x = Pivot_X[26];
    this.Sticker_7.anchor.y = Pivot_Y[26];
    //Data storage
    PositionArrayIndicator = 27;
    testArrayAlpha[7] = 1;
    }, 
             
    Sticker_28_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_7;
    this.Sticker_7.loadTexture(ImageAssetArray[28]);
    this.Sticker_7.alpha = 1;
    //Image Reference for placemnt section
    ImageReference[7]=ImageAssetArray[24];
    //Pivot 
    this.Sticker_7.anchor.x = Pivot_X[27];
    this.Sticker_7.anchor.y = Pivot_Y[27];
    //Data storage
    PositionArrayIndicator = 24;
    testArrayAlpha[7] = 1;
    },   
    
////////////////////
//Section Sticekrs//
////////////////////
    StickerTurnOn: function () {
            if(isFirstCharaterSelected == true)
            {
            CharacterStickerGroup.visible = false;
            ImageGroupReference[GroupRefArrayCounter].visible = true;
            this.charactercarouselStickers.visible = true;
            this.CaroselArrow_Left.visible = true;
            this.CaroselArrow_Right.visible = true;
            }
        },
    
    
    CharacterHitOn: function () {
        CharacterStickerGroup.visible = true;
        ImageGroupReference[GroupRefArrayCounter].visible = false;
        this.charactercarouselStickers.visible = false;
        this.CaroselArrow_Left.visible = false;
        this.CaroselArrow_Right.visible = false;
    },
    
    SaveClicked: function () { 
        game.sound.stopAll();
        game.state.start("StateDirectory");
        this.CompletedAudioPromt = game.add.audio("SaveButtonPressed");
        this.CompletedAudioPromt.play();  
    },
    
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
	}
}