var StateRockMain = {
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

        scaleRatio = window.devicePixelRatio / 2;
        
            game.input.addPointer();

        //Set the character Group 
        Character = game.add.group();
        
        //  Create the group for the stickers
        StickerGroup = game.add.group();

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
        //this.craftBackground = game.add.sprite(0, 0, 'craft_Backgroung');
        //BackgroundGroup.add(this.craftBackground); 
        
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
        var GameCenter_y = game.height/2;
        SelectedColor = 0xff00ff;
                   
        //Main Button Placement
        var MainButtonsPos_x = window.innerWidth/10;
        var MainButtonsPos_y = game.height/4;
        var MacroButton_Scale = 0.5;
        
        //Placeable Buttons
        this.MainStickerButton = gameButtons.addGenericButton("0", MainButtonsPos_x, MainButtonsPos_y+20, this.StickerTurnOn, this,"creativeButtons",0); 
        this.MainStickerButton.scale.setTo(scaleRatio,scaleRatio);
        buttongroup.add(this.MainStickerButton);
        this.MainColorButton = gameButtons.addGenericButton("0", MainButtonsPos_x+this.MainStickerButton.width, MainButtonsPos_y+20, this.ColorTurnOn, this,"creativeButtons",1); 
        buttongroup.add(this.MainColorButton);
        this.MainColorButton.scale.setTo(scaleRatio,scaleRatio);
        buttongroup.add(this.MainColorButton);
        this.MainResetButton = gameButtons.addGenericButton("0", MainButtonsPos_x+this.MainStickerButton.width*2, MainButtonsPos_y+20, this.CharacterHitOn, this,"creativeButtons",2); 
        this.MainResetButton.scale.setTo(scaleRatio,scaleRatio);
        buttongroup.add(this.MainResetButton);
        
        //Top Menu Buttons
        MenuTopButtons_Pos_x = 700;     
        MenuTopButtons_Pos_y = 0;
        
        //Hint Button
        this.MainStickerButton = gameButtons.addGenericButton("0", MenuTopButtons_Pos_x, MenuTopButtons_Pos_y+20, this.AlphaHintOn, this,"creativeButtons",3); 
        this.MainStickerButton.scale.setTo(scaleRatio,scaleRatio);
        MainButtonGroup.add(this.MainStickerButton);
        //Save Button
        this.MainColorButton = gameButtons.addGenericButton("0", MenuTopButtons_Pos_x+this.MainStickerButton.width, MenuTopButtons_Pos_y+20, this.SaveClicked, this,"creativeButtons",4); 
        this.MainColorButton.scale.setTo(scaleRatio,scaleRatio);
        MainButtonGroup.add(this.MainColorButton);
        //Back button
        this.MainResetButton = gameButtons.addGenericButton("0", MenuTopButtons_Pos_x+this.MainStickerButton.width*2, MenuTopButtons_Pos_y+20, this.BackToCharacterSelect, this,"creativeButtons",5); 
        this.MainResetButton.scale.setTo(scaleRatio,scaleRatio);
        MainButtonGroup.add(this.MainResetButton);
        
        //Sticker Buttons
        var ButtonsPos_x = window.innerWidth/10;
        var ButtonsPos_y = window.innerHeight/2+window.innerHeight/5; 
        var ButtonsScale = 1.5;
        
        this.StickerButton1 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y, this.Sticker_1_Place, this,0,StickerAssigner); 
        this.StickerButton1.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup.add(this.StickerButton1);
        
        this.StickerButton2 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y+this.StickerButton1.height, this.Sticker_2_Place, this,1,StickerAssigner); 
        this.StickerButton2.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup.add(this.StickerButton2);
        
        this.StickerButton3 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y, this.Sticker_3_Place, this,2,StickerAssigner);  
        this.StickerButton3.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup.add(this.StickerButton3);
        
        this.StickerButton4 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y+this.StickerButton1.height, this.Sticker_4_Place, this,3,StickerAssigner);
        this.StickerButton4.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup.add(this.StickerButton4);
        
        this.StickerButton5 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_5_Place, this,4,StickerAssigner); 
        this.StickerButton5.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup.add(this.StickerButton5);
        
        this.StickerButton6 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y+this.StickerButton1.height, this.Sticker_6_Place, this,5,StickerAssigner); 
        this.StickerButton6.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup.add(this.StickerButton6);
        
        this.StickerButton7 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y, this.Sticker_7_Place, this,6,StickerAssigner);  
        this.StickerButton7.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup.add(this.StickerButton7);
        
        this.StickerButton8 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y+this.StickerButton1.height, this.Sticker_8_Place, this,7,StickerAssigner);
        this.StickerButton8.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup.add(this.StickerButton8);
                
        
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
        
        //Sticker Vars
        
        OGPose_X = -100;
        OGPose_Y = -100;
        
        //Pinecone Body
        this.PineconeBody = game.add.sprite(GameCenter_x, GameCenter_y, ImageAssetArray[0]);   
        this.PineconeBody.anchor.set(0.5);
        //this.PineconeBody.alpha = 1;
        this.PineconeBody.inputEnabled = true;
        this.PineconeBody.input.pixelPerfectOver = true;          
        this.PineconeBody.events.onInputOver.add(this.BodyClick, this);   
        this.PineconeBody.scale.setTo(scaleRatio,scaleRatio);
        this.SelectedButton = this.PineconeBody;
        //Character.add(this.PineconeBody);       
         //Sticker_3
        this.Sticker_3 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[1]);
        this.Sticker_3.alpha = 0;

        //this.Sticker_3.anchor.set(0.5);
        this.Sticker_3.anchor.x = 0.5;
        this.Sticker_3.anchor.y = 0.5;
        this.Sticker_3.inputEnabled = true;
        this.Sticker_3.input.pixelPerfectOver = true;
        this.Sticker_3.events.onInputOver.add(this.Sticker_3Click, this);    
        this.Sticker_3.scale.setTo(scaleRatio,scaleRatio); 
        
        //Character.add(this.Sticker_3);
        
        //Sticker_4
        this.Sticker_4 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[2]);
        this.Sticker_4.alpha = 0;
        //this.Sticker_4.anchor.set(0.5);
        this.Sticker_4.anchor.x = 0.5;
        this.Sticker_4.anchor.y = 0.5;
        this.Sticker_4.inputEnabled = true;
        this.Sticker_4.input.pixelPerfectOver = true;
        this.Sticker_4.events.onInputOver.add(this.Sticker_4Click, this);
        this.Sticker_4.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_4);
        
        //Sticker_7
        this.Sticker_7 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[3]);
        this.Sticker_7.alpha = 0;
        //this.Sticker_7.anchor.set(0.5);
        this.Sticker_7.anchor.x = 0.5;
        this.Sticker_7.anchor.y = 0.5;
        this.Sticker_7.inputEnabled = true;
        this.Sticker_7.input.pixelPerfectOver = true;
        this.Sticker_7.events.onInputOver.add(this.Sticker_7Click, this);
        this.Sticker_7.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_7);
        
        //Sticker_8
        this.Sticker_8 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[4]);
        this.Sticker_8.alpha = 0;
        //this.Sticker_8.anchor.set(0.5);
        this.Sticker_8.anchor.x = 0.5;
        this.Sticker_8.anchor.y = 0.5;
        this.Sticker_8.inputEnabled = true;
        this.Sticker_8.input.pixelPerfectOver = true;
        this.Sticker_8.events.onInputOver.add(this.Sticker_8Click, this);
        this.Sticker_8.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_8);
        
        
        //Sticker_1_1
        this.Sticker_1 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[5]);        
        this.Sticker_1.alpha = 1;
        //this.Sticker_1.anchor.set(0.5);
        this.Sticker_1.anchor.x = 0.5;
        this.Sticker_1.anchor.y = 1;
        this.Sticker_1.inputEnabled = true;
        this.Sticker_1.input.pixelPerfectOver = true;
        this.Sticker_1.events.onInputOver.add(this.Sticker_1Click, this);  
        this.Sticker_1.scale.setTo(scaleRatio,scaleRatio);        
        //Character.add(this.Sticker_1);  
        
        
        //Sticker_2      
        this.Sticker_2 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[6]);
        this.Sticker_2.alpha = 0;
        //this.Sticker_2.anchor.set(0.5);
        this.Sticker_2.anchor.x = 0.5;
        this.Sticker_2.anchor.y = 1;
        this.Sticker_2.inputEnabled = true;
        this.Sticker_2.input.pixelPerfectOver = true;
        this.Sticker_2.events.onInputOver.add(this.Sticker_2Click, this);
        this.Sticker_2.scale.setTo(scaleRatio,scaleRatio);   
        //Character.add(this.Sticker_2);
       
        
        //Sticker_5
        this.Sticker_5 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[7]);        
        this.Sticker_5.alpha = 0;
        //this.Sticker_5.anchor.set(0.5);
        this.Sticker_5.anchor.x = 0.5;
        this.Sticker_5.anchor.y = 0.5;
        this.Sticker_5.inputEnabled = true;
        this.Sticker_5.input.pixelPerfectOver = true;
        this.Sticker_5.events.onInputOver.add(this.Sticker_5Click, this);  
        this.Sticker_5.scale.setTo(scaleRatio,scaleRatio);   
        //Character.add(this.Sticker_5);      
        
        //Sticker_6      
        this.Sticker_6 = game.add.sprite(OGPose_X, OGPose_Y, ImageAssetArray[8]);
        this.Sticker_6.alpha = 0;
        //this.Sticker_6.anchor.set(0.5);
        this.Sticker_6.anchor.x = 0.5;
        this.Sticker_6.anchor.y = 0.5;
        this.Sticker_6.inputEnabled = true;
        this.Sticker_6.input.pixelPerfectOver = true;
        this.Sticker_6.events.onInputOver.add(this.Sticker_6Click, this);
        this.Sticker_6.scale.setTo(scaleRatio,scaleRatio);
        //Character.add(this.Sticker_6);
       
     
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
        mummy.events.onInputOver.add(this.ImageClick, {param1: mummy, param2: "walk"});
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
        
        //game.world.bringToTop(Character);
        game.world.bringToTop(StickerGroup);
        game.world.bringToTop(ColorGroup);
        game.world.bringToTop(MainButtonGroup);
        
        
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
    p: function (pointer) {

    // console.log(pointer.);
    console.log(pointer.event);

},
    
    render: function () {
/*
    var x = 32;
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
*/
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
    

    BodyClick: function () 
    { 
        
        if(isAddingPaint == true)
        {
        this.PineconeBody.tint = SelectedColor;
        testArrayColor[0] = SelectedColor;
        }
    }, 
            
    //Colors
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
            this.SelectedButton = this.Sticker_1;
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
    
    ////////////
    //Sickers.//
    ////////////
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
    
    StickerTurnOn: function () {
        StickerGroup.visible = true;
        ColorGroup.visible = false;
        isAddingPaint = false;
        isAddingSticker = true;
        },
    
    ColorTurnOn: function () {   
        StickerGroup.visible = false;
        ColorGroup.visible = true;     
        isAddingPaint = true;
        isAddingSticker = false;
        },
    
    CharacterHitOn: function () {
        StickerGroup.visible = true;
        ColorGroup.visible = false;
        isAddingPaint = false;
        isAddingSticker = false;
    },
    
    SaveClicked: function () {game.state.start("StatePineconeOuttro")},
    
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