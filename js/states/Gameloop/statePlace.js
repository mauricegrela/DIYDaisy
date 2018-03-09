var StatePlace = {

    preload: function () {        
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
        
    }

    , create: function () {
        
        craftBackgroundScale = scaleRatio;
        craftAnimBackgroundScale = scaleRatio*1.5;
        CharacterScaleAdjustment = 0.5;
        
        CharacterGroup = game.add.group();
                
        StickersUnderBody = game.add.group();
        StickerBody = game.add.group();
        StickersAboveBody = game.add.group();
     
        this.craftBackground1 = game.add.sprite(0, 0, 'placing_Backgroung1');
        this.craftBackground1.scale.setTo(scaleRatio,scaleRatio);
        this.craftBackground1.height = this.game.height;
        this.craftBackground1.width = this.game.height*5.3;
        
        game.world.setBounds(0, 0, this.craftBackground1.width, this.craftBackground1.height);
        
        this.cursors = game.input.keyboard.createCursorKeys();
        
        this.Body = game.add.sprite(GameCenter_x, GameCenter_y,ImageAssetArray[0]);
        this.Body.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Body.anchor.x = Pivot_X[0];
        this.Body.anchor.y = Pivot_Y[0];
        this.Body.alpha = 1;
        PlacableCollection[0]=this.Body;
        StickerBody.add(this.Body);
        
        this.Sticker1 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[1]);
        this.Sticker1.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Sticker1.anchor.x = Pivot_X[1];
        this.Sticker1.anchor.y =  Pivot_Y[1];
        this.Sticker1.alpha = testArrayAlpha[1];
        PlacableCollection[1]=this.Sticker1;
        //CharacterGroup.add(this.Sticker1);
        if(StickerDepth[0]== false)
        {
        StickersUnderBody.add(this.Sticker1);
        }
            else
            {
            StickersAboveBody.add(this.Sticker1);
            }
        
        this.Sticker2 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[2]);
        this.Sticker2.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Sticker2.anchor.x = Pivot_X[2];
        this.Sticker2.anchor.y =  Pivot_Y[2];
        this.Sticker2.alpha = testArrayAlpha[2];
        PlacableCollection[2]=this.Sticker2;
        //CharacterGroup.add(this.Sticker2);
        if(StickerDepth[1]== false)
        {
        StickersUnderBody.add(this.Sticker2);
        }
            else
            {
            StickersAboveBody.add(this.Sticker2);
            }
        
        this.Sticker3 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[3]);
        this.Sticker3.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Sticker3.anchor.x = Pivot_X[3];
        this.Sticker3.anchor.y =  Pivot_Y[3];
        this.Sticker3.alpha = testArrayAlpha[3];
        PlacableCollection[3]=this.Sticker3;
        //CharacterGroup.add(this.Sticker3);
        if(StickerDepth[2]== false)
        {
        StickersUnderBody.add(this.Sticker3);
        }
            else
            {
            StickersAboveBody.add(this.Sticker3);
            }
        
        this.Sticker4 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[4]);
        this.Sticker4.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Sticker4.anchor.x = Pivot_X[4];
        this.Sticker4.anchor.y =  Pivot_Y[4];
        this.Sticker4.alpha = testArrayAlpha[4];
        PlacableCollection[4]=this.Sticker4;
        //CharacterGroup.add(this.Sticker4);
        if(StickerDepth[3]== false)
        {
        StickersUnderBody.add(this.Sticker4);
        }
            else
            {
            StickersAboveBody.add(this.Sticker4);
            }
        
        this.Sticker5 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[5]);
        this.Sticker5.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Sticker5.anchor.x = Pivot_X[5];
        this.Sticker5.anchor.y =  Pivot_Y[5];
        this.Sticker5.alpha = testArrayAlpha[5];
        PlacableCollection[5]=this.Sticker5;
        //CharacterGroup.add(this.Sticker5);
        if(StickerDepth[4]== false)
        {
        StickersUnderBody.add(this.Sticker5);
        }
            else
            {
            StickersAboveBody.add(this.Sticker5);
            }
        
        this.Sticker6 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[6]);
        this.Sticker6.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Sticker6.anchor.x = Pivot_X[6];
        this.Sticker6.anchor.y =  Pivot_Y[6];
        this.Sticker6.alpha = testArrayAlpha[6];
        PlacableCollection[6]=this.Sticker6;
        //CharacterGroup.add(this.Sticker6);
        if(StickerDepth[5]== false)
        {
        StickersUnderBody.add(this.Sticker6);
        }
            else
            {
            StickersAboveBody.add(this.Sticker6);
            }
        //game.world.bringToTop(CharacterGroup);
        
        //game.world.bringToTop(this.craftBackground3);
        
        this.mummy1 = game.add.sprite(
        768,
        0, 
        'Anim1', 5);
        this.mummy1.scale.set(craftAnimBackgroundScale);
        this.mummy1.anchor.x  = 0.5;
        this.mummy1.anchor.y = 0.0;
        //this.mummy1.smoothed = false;
        //this.mummy1.fixedToCamera = true;
        this.anim1 = this.mummy1.animations.add('walk');
        //this.mummy1.x = this.mummy1.width*1.5;
        //this.anim1.play(10, true);

        this.mummy2 = game.add.sprite(
        543,
        this.craftBackground1.height,
        'Anim2', 5);
        this.mummy2.scale.set(craftAnimBackgroundScale);
        this.mummy2.anchor.x = 0.5;
        this.mummy2.anchor.y =  1;
        //this.mummy2.smoothed = false;
        //this.mummy2.fixedToCamera = true;
        this.anim2 = this.mummy2.animations.add('walk');
        //this.mummy2.x = this.mummy2.width*1.5;
        
        this.mummy3 = game.add.sprite(
        1124,
        this.craftBackground1.height,
        'Anim3', 5);
        this.mummy3.scale.set(craftAnimBackgroundScale);
        this.mummy3.anchor.x = 0.5;
        this.mummy3.anchor.y =  1;
        //this.mummy2.smoothed = false;
        //this.mummy2.fixedToCamera = true;
        this.anim3 = this.mummy3.animations.add('walk');
        //this.mummy3.x = this.mummy3.width*2.5;
        
        this.mummy4 = game.add.sprite(
        1530,
        this.craftBackground1.height-40,
        'Anim4', 5);
        this.mummy4.scale.set(craftAnimBackgroundScale);
        this.mummy4.anchor.x = 0.5;
        this.mummy4.anchor.y =  1;
        //this.mummy2.smoothed = false;
        //this.mummy2.fixedToCamera = true;
        this.anim4 = this.mummy4.animations.add('walk');
        //this.mummy4.x = this.mummy4.width*2.92;
        
        this.mummy5 = game.add.sprite(
        2304,
        this.craftBackground1.height-20,
        'Anim5', 5);
        this.mummy5.scale.set(craftAnimBackgroundScale);
        this.mummy5.anchor.x = 0.5;
        this.mummy5.anchor.y =  1;
        //this.mummy2.smoothed = false;
        //this.mummy2.fixedToCamera = true;
        this.anim5 = this.mummy5.animations.add('walk');
        //this.mummy5.x = this.mummy5.width*4.3;
        
        this.mummy6 = game.add.sprite(
        2450,
        this.craftBackground1.height-20,
        'Anim6', 5);
        this.mummy6.scale.set(craftAnimBackgroundScale);
        this.mummy6.anchor.x = 0.5;
        this.mummy6.anchor.y =  0.8;
        //this.mummy2.smoothed = false;
        //this.mummy2.fixedToCamera = true;
        this.anim6 = this.mummy6.animations.add('walk');
        //this.mummy6.x = this.mummy6.width*4.7;
        
        this.mummy7 = game.add.sprite(
        2850,
        this.craftBackground1.height-20,
        'Anim7', 5);
        this.mummy7.scale.set(craftAnimBackgroundScale);
        this.mummy7.anchor.x = 0.5;
        this.mummy7.anchor.y =  1;
        //this.mummy2.smoothed = false;
        //this.mummy2.fixedToCamera = true;
        this.anim7 = this.mummy7.animations.add('walk');
        //this.mummy7.x = this.mummy7.width*6.5;
        
        this.mummy8 = game.add.sprite(
        3050,
        this.craftBackground1.height/2,
        'Anim8', 5);
        this.mummy8.scale.set(craftAnimBackgroundScale);
        this.mummy8.anchor.x = 0.5;
        this.mummy8.anchor.y =  0.8;
        //this.mummy2.smoothed = false;
        //this.mummy2.fixedToCamera = true;
        this.anim8 = this.mummy8.animations.add('walk');
        //this.mummy8.x = this.mummy8.width*6.5;
        
        this.mummy9 = game.add.sprite(
        3521,
        this.craftBackground1.height,
        'Anim9', 5);
        this.mummy9.scale.set(craftAnimBackgroundScale);
        this.mummy9.anchor.x = 0.4;
        this.mummy9.anchor.y =  1.3;
        //this.mummy2.smoothed = false;
        //this.mummy2.fixedToCamera = true;
        this.anim9 = this.mummy9.animations.add('walk');
        //this.mummy9.x = this.mummy9.width*7.2;
        
        this.mummy10 = game.add.sprite(
        3730,
        this.craftBackground1.height,
        'Anim10', 5);
        this.mummy10.scale.set(craftAnimBackgroundScale);
        this.mummy10.anchor.x = 0.4;
        this.mummy10.anchor.y =  1.01;
        //this.mummy2.smoothed = false;
        //this.mummy2.fixedToCamera = true;
        this.anim10 = this.mummy10.animations.add('walk');
        //this.mummy10.x = this.mummy10.width*7.3;
        
        AnimObject[0]=this.mummy1;
        AnimObject[1]=this.mummy2;
        AnimObject[2]=this.mummy3;
        AnimObject[3]=this.mummy4;
        AnimObject[4]=this.mummy5;
        AnimObject[5]=this.mummy6;
        AnimObject[6]=this.mummy7;
        AnimObject[7]=this.mummy8;
        AnimObject[8]=this.mummy9;
        AnimObject[9]=this.mummy10;
         
        AnimRef[0]=this.anim1;
        AnimRef[1]=this.anim2;
        AnimRef[2]=this.anim3;
        AnimRef[3]=this.anim4;
        AnimRef[4]=this.anim5;
        AnimRef[5]=this.anim6;
        AnimRef[6]=this.anim7;
        AnimRef[7]=this.anim8;
        AnimRef[8]=this.anim9;
        AnimRef[9]=this.anim10;
         
        
                
        this.Clouds = game.add.audio("Clouds"); 
        this.Dandelion = game.add.audio("Dandelion");
        this.Squirrel = game.add.audio("Squirrel");
        this.Donkey = game.add.audio("Donkey");
        this.Frog = game.add.audio("Frog");
        this.Turtle = game.add.audio("Turtle");
        this.Bee = game.add.audio("Bee");
        this.Kite = game.add.audio("Kite");
        this.lights = game.add.audio("lights");
        this.tea = game.add.audio("tea");
        
        
        AudioTunes[0]=this.Clouds;
        AudioTunes[1]=game.add.audio("Dandelion");//this.Dandelion;
        AudioTunes[2]=game.add.audio("Squirrel");//this.Squirrel;
        AudioTunes[3]=game.add.audio("Donkey");//this.Donkey;
        AudioTunes[4]=game.add.audio("Frog");
        AudioTunes[5]=game.add.audio("Turtle");
        AudioTunes[6]=game.add.audio("Bee");
        AudioTunes[7]=game.add.audio("Kite");
        AudioTunes[8]=game.add.audio("lights");
        AudioTunes[9]=game.add.audio("tea");
        
        game.world.bringToTop(StickersUnderBody);
        game.world.bringToTop(StickerBody);
        game.world.bringToTop(StickersAboveBody);
        game.world.bringToTop(this.mummy2);
        
        this.craftBackground2 = game.add.sprite(0, 0, 'placing_Backgroung2');
        this.craftBackground2.scale.setTo(craftBackgroundScale,craftBackgroundScale);
        this.craftBackground2.scale.setTo(scaleRatio,scaleRatio);
        this.craftBackground2.height = this.game.height;
        this.craftBackground2.width = this.game.height*5.3;
        game.world.bringToTop(this.mummy1);
        //this.tester = game.add.sprite(0, 0, game.cache.getBitmapData(this.DrawnSprite));

        
        this.Logo = game.add.sprite(0,0, 'daisylogo');
        this.Logo.scale.setTo(scaleRatio,scaleRatio);
        this.Logo.inputEnabled = true;
        this.Logo.anchor.set(0);
        this.Logo.x =  this.Logo.width/4;
        this.Logo.y =  this.Logo.height/2;
        this.Logo.events.onInputOver.add(this.ToLandingPage, this.Logo); 
        this.Logo.fixedToCamera = true;
        
        this.SaveButton = gameButtons.addGenericButton("0", 0,0 , this.BackToCraft, this,"creativeButtons",2); 
        this.SaveButton.anchor.x = 1.3;
        this.SaveButton.anchor.y = -0.2;
        this.SaveButton.x =  game.width;
        this.SaveButton.y = 0;
        this.SaveButton.scale.setTo(0.8,0.8);
        this.SaveButton.fixedToCamera = true;
    },
    
    PlaceCreation: function () {
    game.state.start("StatePlace")
    },
    
    WatchEpisode: function () {
    game.state.start("StateEpisode");
    },
    
    SaveFile: function () {
    },
        
    BackToCraft: function()
    {
    game.state.start("StateDirectory"); 
    this.Clouds.stop();
    this.Dandelion.stop();
    this.Squirrel.stop();
    this.Donkey.stop();
    this.Frog.stop();
    this.Turtle.stop();
    this.Bee.stop();
    this.Kite.stop();
    this.lights.stop();
    this.tea.stop();
    },
    
    ToLandingPage: function()
    {
    game.state.start("StateTitle");   
    },
    
    update: function () {
        //Paralaxing background. 
        this.craftBackground2.x = game.camera.x*0.1;

        //Camera panning
            if (this.game.input.activePointer.isDown) 
            {   if (this.game.origDragPoint) {      
            // move the camera by the amount the mouse has moved since last update      
            this.game.camera.x += this.game.origDragPoint.x - this.game.input.activePointer.position.x;
            this.game.camera.y += this.game.origDragPoint.y - this.game.input.activePointer.position.y; }
            // set new drag origin to current position  
            this.game.origDragPoint = this.game.input.activePointer.position.clone();
            }
                else
                {   this.game.origDragPoint = null;}
        
        for (let i = 0; i <= AnimObject.length-1; i+=1) 
        {
            if((PlacableCollection[0].x>AnimObject[i].x-AnimObject[i].width/3 && PlacableCollection[0].x<AnimObject[i].x+AnimObject[i].width/3) && AnimRef[i].isPlaying  == false)
            {
            AnimRef[i].play(10, false);
                if(i==0)
                {
                this.Clouds.play();
                this.Dandelion.stop();
                this.Squirrel.stop();
                this.Donkey.stop();
                this.Frog.stop();
                this.Turtle.stop();
                this.Bee.stop();
                this.Kite.stop();
                this.lights.stop();
                this.tea.stop();
                }
                    else if(i==1)
                    {
                    this.Clouds.stop();
                    this.Dandelion.play();
                    this.Squirrel.stop();
                    this.Donkey.stop();
                    this.Frog.stop();
                    this.Turtle.stop();
                    this.Bee.stop();
                    this.Kite.stop();
                    this.lights.stop();
                    this.tea.stop();
                    }
                        else if(i==2)
                        {
                        this.Clouds.stop();
                        this.Dandelion.stop();
                        this.Squirrel.play();
                        this.Donkey.stop();
                        this.Frog.stop();
                        this.Turtle.stop();
                        this.Bee.stop();
                        this.Kite.stop();
                        this.lights.stop();
                        this.tea.stop();
                        }
                            else if(i==3)
                            {
                            this.Clouds.stop();
                            this.Dandelion.stop();
                            this.Squirrel.stop();
                            this.Donkey.play();
                            this.Frog.stop();
                            this.Turtle.stop();
                            this.Bee.stop();
                            this.Kite.stop();
                            this.lights.stop();
                            this.tea.stop();
                            }
                                else if(i==4)
                                {
                                this.Clouds.stop();
                                this.Dandelion.stop();
                                this.Squirrel.stop();
                                this.Donkey.stop();
                                this.Frog.play();
                                this.Turtle.stop();
                                this.Bee.stop();
                                this.Kite.stop();
                                this.lights.stop();
                                this.tea.stop();
                                }
                                    else if(i==5)
                                    {
                                    this.Clouds.stop();
                                    this.Dandelion.stop();
                                    this.Squirrel.stop();
                                    this.Donkey.stop();
                                    this.Frog.stop();
                                    this.Turtle.play();
                                    this.Bee.stop();
                                    this.Kite.stop();
                                    this.lights.stop();
                                    this.tea.stop();
                                    }
                                        else if(i==6)
                                        {
                                        this.Clouds.stop();
                                        this.Dandelion.stop();
                                        this.Squirrel.stop();
                                        this.Donkey.stop();
                                        this.Frog.stop();
                                        this.Turtle.stop();
                                        this.Bee.play();
                                        this.Kite.stop();
                                        this.lights.stop();
                                        this.tea.stop();
                                        }
                                            else if(i==7)
                                            {
                                            this.Clouds.stop();
                                            this.Dandelion.stop();
                                            this.Squirrel.stop();
                                            this.Donkey.stop();
                                            this.Frog.stop();
                                            this.Turtle.stop();
                                            this.Bee.stop();
                                            this.Kite.play();
                                            this.lights.stop();
                                            this.tea.stop();
                                            }
                                                else if(i==8)
                                                {
                                                this.Clouds.stop();
                                                this.Dandelion.stop();
                                                this.Squirrel.stop();
                                                this.Donkey.stop();
                                                this.Frog.stop();
                                                this.Turtle.stop();
                                                this.Bee.stop();
                                                this.Kite.stop();
                                                this.lights.play();
                                                this.tea.stop();
                                                }
                                                    else if(i==9)
                                                    {
                                                    this.Clouds.stop();
                                                    this.Dandelion.stop();
                                                    this.Squirrel.stop();
                                                    this.Donkey.stop();
                                                    this.Frog.stop();
                                                    this.Turtle.stop();
                                                    this.Bee.stop();
                                                    this.Kite.stop();
                                                    this.lights.stop();
                                                    this.tea.play();
                                                    }
            }   
        }
        //Render each of the character layers. 
        for (let i = 0; i < PlacableCollection.length-1; i++) 
        {
        PlacableCollection[i].x = game.input.x;
        PlacableCollection[i].y = game.input.y;
        PlacableCollection[i].fixedToCamera = true;
        }
    }
}