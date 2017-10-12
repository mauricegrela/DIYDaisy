var StateMainLeaf = {
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
      game.scale.setScreenSize(true);*/
        
        
this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
this.game.scale.refresh();


        
        
    },

    create: function () {

        
        //Set the character Group 
        Character = game.add.group();
        
        //  Create the group for the stickers
        StickerGroup = game.add.group();

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
        
        this.craftBackground.width = game.width;
        this.craftBackground.height = game.height;
        
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
        
        game.world.bringToTop(StickerGroup);
        game.world.bringToTop(ColorGroup);
        
        //Images Variables
        var GameCenter_x = game.width/2;
        var GameCenter_y = game.height/3;
        SelectedColor = 0xff00ff;
                   
        //Main Button Placement
        var MainButtonsPos_x = game.width/20;
        var MainButtonsPos_y = game.height/4;
        var MacroButton_Scale = 0.5;
        //Placeable Buttons
        this.MainStickerButton = gameButtons.addGenericButton("0", MainButtonsPos_x+160, MainButtonsPos_y+20, this.StickerTurnOn, this,"creativeButtons",2); 
        this.MainStickerButton.scale.setTo(MacroButton_Scale,MacroButton_Scale);
        buttongroup.add(this.MainStickerButton);
        this.MainColorButton = gameButtons.addGenericButton("0", MainButtonsPos_x+300, MainButtonsPos_y+20, this.ColorTurnOn, this,"creativeButtons",0); 
        buttongroup.add(this.MainColorButton);
        this.MainColorButton.scale.setTo(MacroButton_Scale,MacroButton_Scale);
        buttongroup.add(this.MainColorButton);
        this.MainResetButton = gameButtons.addGenericButton("0", MainButtonsPos_x+440, MainButtonsPos_y+20, this.CharacterHitOn, this,"creativeButtons",1); 
        this.MainResetButton.scale.setTo(MacroButton_Scale,MacroButton_Scale);
        buttongroup.add(this.MainResetButton);
        
        //Top Menu Buttons
        MenuTopButtons_Pos_x = 700;     
        MenuTopButtons_Pos_y = 0;
        //Hint Button
        this.MainStickerButton = gameButtons.addGenericButton("0", MenuTopButtons_Pos_x+160, MenuTopButtons_Pos_y+20, this.AlphaHintOn, this,"creativeButtons",3); 
        this.MainStickerButton.scale.setTo(MacroButton_Scale,MacroButton_Scale);
        //Save Button
        this.MainColorButton = gameButtons.addGenericButton("0", MenuTopButtons_Pos_x+300, MenuTopButtons_Pos_y+20, this.SaveClicked, this,"creativeButtons",4); 
        this.MainColorButton.scale.setTo(MacroButton_Scale,MacroButton_Scale);
        //Back button
        this.MainResetButton = gameButtons.addGenericButton("0", MenuTopButtons_Pos_x+440, MenuTopButtons_Pos_y+20, this.BackToCharacterSelect, this,"creativeButtons",5); 
        this.MainResetButton.scale.setTo(MacroButton_Scale,MacroButton_Scale);
        
        //Sticker Buttons
        var ButtonsPos_x = 800;
        var ButtonsPos_y = 700;
        this.StickerButton1 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y, this.Sticker_1, this,0); 
        StickerGroup.add(this.StickerButton1);
        this.StickerButton2 = gameButtons.addStickerButton("0", ButtonsPos_x+80, ButtonsPos_y, this.Sticker_2, this,1); 
        StickerGroup.add(this.StickerButton2);
        this.StickerButton3 = gameButtons.addStickerButton("0", ButtonsPos_x+160, ButtonsPos_y, this.Sticker_3, this,2);  
        StickerGroup.add(this.StickerButton3);
        this.StickerButton4 = gameButtons.addStickerButton("0", ButtonsPos_x+240, ButtonsPos_y, this.Sticker_4, this,3);
        StickerGroup.add(this.StickerButton4);
        StickerGroup.visible = true;
        
        //Hit Button
        /*this.Hintbutton = gameButtons.addStickerButton("0", ButtonsPos_x+160, ButtonsPos_x+20, this.AlphaHitOn, this,4); */

        //Color Buttons
        this.ColorButton1 = gameButtons.addColorButton("0", ButtonsPos_x, ButtonsPos_y, this.Color_1, this,0xAEE313); 
        ColorGroup.add(this.ColorButton1);
        this.ColorButton2 = gameButtons.addColorButton("0", ButtonsPos_x+80, ButtonsPos_y, this.Color_2, this,0x13AEE3); 
        ColorGroup.add(this.ColorButton2);       
        this.ColorButton3 = gameButtons.addColorButton("0", ButtonsPos_x+160, ButtonsPos_y, this.Color_3, this,0xAE13E3); 
        ColorGroup.add(this.ColorButton3); 
        this.ColorButton4 = gameButtons.addColorButton("0", ButtonsPos_x+240, ButtonsPos_y, this.Color_4, this,0xFE7805); 
        ColorGroup.add(this.ColorButton4);    
        ColorGroup.visible = false;
        //Selected Color pallet
        this.Selectedcolor = this.ColorButton1;
        
        
        //Leaf Body
        this.LeafBody = game.add.sprite(GameCenter_x, GameCenter_y, 'Body');   
        this.LeafBody.anchor.set(0.5);
        this.LeafBody.alpha = 1;
        this.LeafBody.inputEnabled = true;
        this.LeafBody.input.pixelPerfectOver = true;
        this.LeafBody.events.onInputOver.add(this.BodyClick, this);    
        Character.add(this.LeafBody); 
        
        //Leaf Ears
        this.LeafEars = game.add.sprite(GameCenter_x, GameCenter_y, 'Ears');        
        this.LeafEars.alpha = 0;
        this.LeafEars.anchor.set(0.5);
        this.LeafEars.inputEnabled = true;
        this.LeafEars.input.pixelPerfectOver = true;
        this.LeafEars.events.onInputOver.add(this.Sticker_1Click, this);  
        Character.add(this.LeafEars); 
        
        //Leaf Eyes       
        this.LeafEyes = game.add.sprite(GameCenter_x, GameCenter_y, 'Eyes');
        this.LeafEyes.alpha = 0;
        this.LeafEyes.anchor.set(0.5);
        this.LeafEyes.inputEnabled = true;
        this.LeafEyes.input.pixelPerfectOver = true;
        this.LeafEyes.events.onInputOver.add(this.Sticker_2Click, this);
        Character.add(this.LeafEyes);
        
        //Leaf whiskers
        this.LeafWhiskers = game.add.sprite(GameCenter_x, GameCenter_y, 'Whiskers');
        this.LeafWhiskers.alpha = 0;
        this.LeafWhiskers.anchor.set(0.5);
        this.LeafWhiskers.inputEnabled = true;
        this.LeafWhiskers.input.pixelPerfectOver = true;
        this.LeafWhiskers.events.onInputOver.add(this.Sticker_3Click, this);
        Character.add(this.LeafWhiskers);
        
        //LeafNose
        this.LeafNose = game.add.sprite(GameCenter_x, GameCenter_y, 'Nose');
        this.LeafNose.alpha = 0;
        this.LeafNose.anchor.set(0.5);
        this.LeafNose.inputEnabled = true;
        this.LeafNose.input.pixelPerfectOver = true;
        this.LeafNose.events.onInputOver.add(this.Sticker_4Click, this);
        Character.add(this.LeafNose);
        
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
        mummy.events.onInputDown.add(this.ImageClick, {param1: mummy, param2: "walk"});
        mummy.alpha = 0; 
        
        //Alpha hint 
        this.MagnifyingLenz = game.add.sprite(GameCenter_x, GameCenter_y, 'MagLenz');
        this.MagnifyingLenz.anchor.set(0.5);   
        //	A mask is a Graphics object
        this.mask = game.add.graphics(0, 0);
        //	Shapes drawn to the Graphics object must be filled.
        this.mask.beginFill(0xffffff);
        //	Here we'll draw a circle
        this.mask.drawCircle(100, 100, 100);
        //	And apply it to the Sprite
        this.MagnifyingLenz.mask = this.mask;
        Character.add(this.MagnifyingLenz);
        
        game.world.bringToTop(Character);
        game.world.bringToTop(buttongroup);
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
    update: function () { 
        
        game.scale.setShowAll();
        game.scale.refresh();
        
        if(IsInAlpha == true)
        {
        this.mask.x = game.input.mousePointer.x-100;
        this.mask.y = game.input.mousePointer.y-100;  
        }      
          if(isClickDragging == true) 
          {//If the player is dragging the image onto the 
            if( game.input.activePointer.leftButton.isDown == true )
            {////this.LeafBody.alpha = 0;
                this.SelectedButton.x = game.input.mousePointer.x;
                this.SelectedButton.y = game.input.mousePointer.y;
            }
                else
                {
                    isClickDragging = false;
                    Xpos_ArrayAlpha[PositionArrayIndicator]= game.input.mousePointer.x;
                    Ypos_ArrayAlpha[PositionArrayIndicator]= game.input.mousePointer.y;
                }
                  
            }
    }, 
    

    BodyClick: function () 
    { 
        isAddindpaint = true;
        if(isClickDragging == false)
        {
        this.LeafBody.tint = SelectedColor;
        testArrayColor[0] = SelectedColor;
        }
    }, 
            
    //Colors
    Sticker_1Click: function () {
        isAddindpaint = true;
        if(isClickDragging == false)
        {
        this.LeafEyes.tint = SelectedColor;
        testArrayColor[2] = SelectedColor;
        }
    },
    
    Sticker_2Click: function () {
        if(isClickDragging == false)
        {
        isAddindpaint = true;
        this.LeafEars.tint = SelectedColor;
        testArrayColor[1] = SelectedColor;
        }
    },
    
    Sticker_3Click: function () {
        if(isClickDragging == false)
        {
        isAddindpaint = true;
        this.LeafNose.tint = SelectedColor;
        testArrayColor[4] = SelectedColor;
        }
    },
    
    Sticker_4Click: function () {
        if(isClickDragging == false)
        {
        isAddindpaint = true;
        this.LeafWhiskers.tint = SelectedColor;
        testArrayColor[3] = SelectedColor;
        }
    },
    ////////////
    //Sickers.//
    ////////////
    Sticker_1: function () {
        
    isClickDragging = true;
    isAddindpaint = false;
    this.SelectedButton = this.LeafEyes;
    this.LeafEyes.alpha = 1;  
    PositionArrayIndicator = 1;
    testArrayAlpha[1] = 1;
    //if(this.LeafEyes.alpha == 1){//isClickDragging = true;this.SelectedButton = this.LeafEyes; this.LeafEyes.alpha = 1//this.LeafEyes.alpha = 0;testArrayAlpha[1] = 0;}else{//testArrayAlpha[1] = 1;this.LeafEyes.alpha = 1;}
    },  
    
    Sticker_2: function () {
    isClickDragging = true;
    isAddindpaint = false;
    this.SelectedButton = this.LeafEars;
    this.LeafEars.alpha = 1;
    PositionArrayIndicator = 2;
    testArrayAlpha[2] = 1;
    //if(this.LeafEars.alpha == 1){this.LeafEars.alpha = 0;testArrayAlpha[2] = 0;}else{this.LeafEars.alpha = 1;testArrayAlpha[2] = 1;}
    }, 
    
    Sticker_3: function () {
    isClickDragging = true;
    isAddindpaint = false;
    this.SelectedButton = this.LeafNose;
    this.LeafNose.alpha = 1;
    PositionArrayIndicator = 3;
    testArrayAlpha[3] = 1;
    //if(this.LeafNose.alpha == 1){this.LeafNose.alpha = 0;testArrayAlpha[3] = 0;}else{this.LeafNose.alpha = 1;testArrayAlpha[3] = 1;}
    },   
    
    Sticker_4: function () {
    isClickDragging = true;
    isAddindpaint = false;
    this.SelectedButton = this.LeafWhiskers;
    this.LeafWhiskers.alpha = 1;  
    PositionArrayIndicator = 4;
    testArrayAlpha[4] = 1;
    //if(this.LeafWhiskers.alpha == 1){this.LeafWhiskers.alpha = 0;testArrayAlpha[4] = 0;}else{this.LeafWhiskers.alpha = 1;testArrayAlpha[4] = 1;}
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
    this.ColorButton1.scale.setTo(2, 2);
    },
    Color_2: function () {
    this.Selectedcolor.scale.setTo(1, 1);
    this.Selectedcolor = this.ColorButton2;
    SelectedColor =0x13AEE3;
    this.ColorButton2.scale.setTo(2, 2);
    },
    Color_3: function () {
    this.Selectedcolor.scale.setTo(1, 1);
    this.Selectedcolor = this.ColorButton3;
    SelectedColor =0xAE13E3;
    this.ColorButton3.scale.setTo(2, 2);
    },
    Color_4: function () {
    this.Selectedcolor.scale.setTo(1, 1);
    this.Selectedcolor = this.ColorButton4;
    SelectedColor =0xFE7805;
    this.ColorButton4.scale.setTo(2, 2);
    }, 
    
    StickerTurnOn: function () {StickerGroup.visible = false;ColorGroup.visible = true;},
    ColorTurnOn: function () {StickerGroup.visible = true;ColorGroup.visible = false;},
    CharacterHitOn: function () {StickerGroup.visible = true;ColorGroup.visible = false;},
    
    SaveClicked: function () {game.state.start("StateLeafOuttro")},
    
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
    
    
    sayNo: function () {this.backgroundMusic.stop();game.state.start("StateOver");}
}