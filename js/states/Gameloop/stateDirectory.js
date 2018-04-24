var StateDirectory = {

    preload: function () {

          
        this.BackButtonSFX = game.add.audio("BackButton");
       


        GameCenter_x = game.width-game.width/2.5;
        GameCenter_y = game.height/2;
        
        XPosition = game.width/2.7;
        YPosition = game.height/3.0;

        

    }

    , create: function () { 

        game.stage.backgroundColor = "#ffffff";
        
        StickersUnderBody = game.add.group();
        StickerBody = game.add.group();
        StickersAboveBody = game.add.group();
        
        ScreenshotLogoGroup = game.add.group();
        
        NonCharacterBackgroundGroup = game.add.group();
        TopButtonsGroup = game.add.group();
        
        
        this.camerasnap = game.add.audio("cameraSnap");
        
        this.CameraClickPromt = game.add.audio("SaveButtonPressed");

        this.ConfirmSoundEffect = game.add.audio("StartOverConfirm");
        
         this.ThumbsUpSFX = game.add.audio("ThumbsUpSFX");
         this.ThumbsDownSFX = game.add.audio("ThumbsDownSFX");
        
        BookScale = scaleRatio/1.6 ;
        
        butonScale = 0.8;
        
        this.Screenshot = game.add.sprite(0, 0, 'craft_Backgroung'); 
        ScreenshotLogoGroup.add(this.Screenshot);
        
        this.craftBackground = game.add.sprite(0, 0, 'craft_Backgroung');  
        this.craftBackground.height = game.height;
        this.craftBackground.width = game.width;
        NonCharacterBackgroundGroup.add(this.craftBackground);
        //Book background
        this.Background = game.add.sprite(game.width/2, game.height/2, 'DirectoryBackground');
        this.Background.anchor.set(0.5);
        this.Background.scale.setTo(BookScale,BookScale);
        NonCharacterBackgroundGroup.add(this.Background);
        TopButtonsGroup.add(this.Background);
        //this.Background.width =game.width; 
        //this.Background.height =game.height;

        CharacterScaleAdjustment = 0.7;
        CharacterGroup = game.add.group();
        
        
        GameCenter_x = this.Background.x+this.Background.width/5;
        GameCenter_y = this.Background.y;
        
        this.Body = game.add.sprite(GameCenter_x, GameCenter_y,ImageAssetArray[0]);
        this.Body.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Body.anchor.x = 0.5;
        this.Body.anchor.y =  0.5;
        this.Body.alpha = 1;
        StickerBody.add(this.Body);
        PlacableCollection[0]=this.Body;
        //TopButtonsGroup.add(this.Body);
        
        this.Sticker2 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[2]);
        this.Sticker2.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Sticker2.anchor.x = 0.5;
        this.Sticker2.anchor.y = 0.5;
        this.Sticker2.alpha = testArrayAlpha[2];
        PlacableCollection[2]=this.Sticker2;
        //TopButtonsGroup.add(this.Sticker2);
        if(StickerDepth[1]== false)
        {
        StickersUnderBody.add(this.Sticker2);
        }
            else
            {
            StickersAboveBody.add(this.Sticker2);
            }

        this.Sticker1 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[1]);
        this.Sticker1.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Sticker1.anchor.x = 0.5;
        this.Sticker1.anchor.y = 0.5;
        this.Sticker1.alpha = testArrayAlpha[1];
        PlacableCollection[1]=this.Sticker1;
        //TopButtonsGroup.add(this.Sticker1);
        if(StickerDepth[0]== false)
        {
        StickersUnderBody.add(this.Sticker1);
        }
            else
            {
            StickersAboveBody.add(this.Sticker1);
            }
        
        this.Sticker3 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[3]);
        this.Sticker3.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Sticker3.anchor.x = 0.5;
        this.Sticker3.anchor.y = 0.5;
        this.Sticker3.alpha = testArrayAlpha[3];
        PlacableCollection[3]=this.Sticker3;
        //TopButtonsGroup.add(this.Sticker3);
        if(StickerDepth[2]== false)
        {
        StickersUnderBody.add(this.Sticker3);
        }
            else
            {
            StickersAboveBody.add(this.Sticker3);
            }
        
        if(CaroselGroupNumber<=4)
        {
            this.Sticker4 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[4]);
            this.Sticker4.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
            this.Sticker4.anchor.x = 0.5;
            this.Sticker4.anchor.y = 0.5;
            this.Sticker4.alpha = testArrayAlpha[4];
            PlacableCollection[4]=this.Sticker4;
            //TopButtonsGroup.add(this.Sticker4);
            if(StickerDepth[3]== false)
            {
            StickersUnderBody.add(this.Sticker4);
            }
                else
                {
                StickersAboveBody.add(this.Sticker4);
                }   
        }
       
        if(CaroselGroupNumber<=5)
        {
            this.Sticker5 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[5]);
            this.Sticker5.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
            this.Sticker5.anchor.x = 0.5;
            this.Sticker5.anchor.y = 0.5;
            this.Sticker5.alpha = testArrayAlpha[5];
            PlacableCollection[5]=this.Sticker5;
            //TopButtonsGroup.add(this.Sticker5);
            if(StickerDepth[4]== false)
            {
            StickersUnderBody.add(this.Sticker5);
            }
                else
                {
                StickersAboveBody.add(this.Sticker5);
                }
        }
        
        if(CaroselGroupNumber<=6)
        {
            this.Sticker6 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[6]);
            this.Sticker6.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
            this.Sticker6.anchor.x = 0.5;
            this.Sticker6.anchor.y = 0.5;
            this.Sticker6.alpha = testArrayAlpha[6];
            PlacableCollection[6]=this.Sticker6;
            //TopButtonsGroup.add(this.Sticker6);
            if(StickerDepth[5]== false)
            {
            StickersUnderBody.add(this.Sticker6);
            }
                else
                {
                StickersAboveBody.add(this.Sticker6);
                }
        }
                
        if(CaroselGroupNumber<=6)
        {
            this.Sticker7 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[7]);
            this.Sticker7.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
            this.Sticker7.anchor.x = 0.5;
            this.Sticker7.anchor.y = 0.5;
            this.Sticker7.alpha = testArrayAlpha[7];
            PlacableCollection[7]=this.Sticker7;
            //TopButtonsGroup.add(this.Sticker7);
            if(StickerDepth[6]== false)
            {
            StickersUnderBody.add(this.Sticker7);
            }
                else
                {
                StickersAboveBody.add(this.Sticker7);
                }
        }
        //game.world.bringToTop(StickersUnderBody);
        //game.world.bringToTop(StickerBody);
        //game.world.bringToTop(StickersAboveBody);
        
        ExtroMenu = game.add.group();
        
        ButtonScale = scaleRatio*1;

        this.BackToCraftButton = gameButtons.addGenericButton("0", 0,0 , this.BackToCraftConfirm, this,"creativeButtons",2); 
        this.BackToCraftButton.anchor.x = 1;
        this.BackToCraftButton.anchor.y = 0;
        this.BackToCraftButton.x =  game.width;
        this.BackToCraftButton.y = 0;
        this.BackToCraftButton.scale.setTo(0.8,0.8);
        NonCharacterBackgroundGroup.add(this.BackToCraftButton);
        TopButtonsGroup.add(this.BackToCraftButton);
        XPosition = this.Background.x-this.Background.width/5.5;
        YPosition = this.Background.y-game.height/12;
    
        
        //Butons      
        this.PlaceModeButton = game.add.sprite(XPosition,(YPosition), 'creativeButtons');   
        this.PlaceModeButton.frame = 0;
        this.PlaceModeButton.anchor.setTo(0.5);
        this.PlaceModeButton.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.PlaceModeButton.events.onInputDown.add(this.PlaceCreation, this.PlaceModeButton)  
        this.PlaceModeButton.scale.setTo((ButtonScale),(ButtonScale));
        NonCharacterBackgroundGroup.add(this.PlaceModeButton);
        TopButtonsGroup.add(this.PlaceModeButton);
        
        this.DownloadButton = game.add.sprite(XPosition,(YPosition+this.PlaceModeButton.height), 'PictureFrame');   
        //this.DownloadButton.frame = 1;
        this.DownloadButton.anchor.setTo(0.5);
        this.DownloadButton.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.DownloadButton.events.onInputDown.add(this.SaveFile, this.DownloadButton);   
        this.DownloadButton.scale.setTo((ButtonScale),(ButtonScale));
        NonCharacterBackgroundGroup.add(this.DownloadButton);
        TopButtonsGroup.add(this.DownloadButton);
        
        this.Logo = game.add.sprite(0,0, 'daisylogo');
        this.Logo.scale.setTo(scaleRatio,scaleRatio);
        this.Logo.inputEnabled = true;
        this.Logo.anchor.set(0,0.4);
        this.Logo.x =  this.Logo.width/4;
        this.Logo.y =  this.Logo.height/2;
        this.Logo.events.onInputDown.add(this.ToLandingPage, this.Logo);
        NonCharacterBackgroundGroup.add(this.Logo);
        TopButtonsGroup.add(this.BackToCraftButton);
        game.world.bringToTop(this.Logo);
        game.world.bringToTop(this.BackToCraftButton);
        
        this.addDelayTwo();
        this.addDelayOne();
        
///////////////////////////
//////DownloadGroup////////
///////////////////////////
        DownloadModalGroup = game.add.group();
   
        var graphics = game.add.graphics(0, 0);
        graphics.beginFill(0x000000, 0.8);
        graphics.drawRect(0, 0, this.game.width,this.game.height);
        DownloadModalGroup.add(graphics);
        
        //Download modal
        this.DownloadBackground = game.add.sprite(game.width/2,game.height/2, 'DownloadModal');  
        //this.DownloadBackground.height = game.height;
        //this.DownloadBackground.width = game.width;
        this.DownloadBackground.scale.setTo(1.2,1.2);
        this.DownloadBackground.anchor.x = 0.5;
        this.DownloadBackground.anchor.y = 0.5;
        DownloadModalGroup.add(this.DownloadBackground);
        
        this.CloseButton = game.add.sprite(
        this.DownloadBackground.x+this.DownloadBackground.width/2,
        this.DownloadBackground.y-this.DownloadBackground.height/2,'CloseButton');
        this.CloseButton.anchor.x = 0.5;
        this.CloseButton.anchor.y = 0.5;
        this.CloseButton.inputEnabled = true;
        this.CloseButton.events.onInputDown.add( this.CloseButtonpress, this.CloseButton);   
        this.CloseButton.scale.setTo(1.5,1.5);
        DownloadModalGroup.add(this.CloseButton);

        
        this.downloadButton = game.add.sprite(game.width/2,game.height/2, 'DownloadButton');
        this.downloadButton.anchor.x = 0.5;
        this.downloadButton.anchor.y = 0.5;
        this.downloadButton.inputEnabled = true;
        this.downloadButton.events.onInputDown.add(this.CloseButtonpressed, this.downloadButton);   
        this.downloadButton.scale.setTo(1.5,1.5);
        
        DownloadModalGroup.add(this.downloadButton);

        DownloadModalGroup.visible = false;
        
///////////////////////////
///////Confirm Back////////
///////////////////////////
        ConfirmBackGroup = game.add.group();
   
        var graphics = game.add.graphics(0, 0);
        graphics.beginFill(0x000000, 0.8);
        graphics.drawRect(0, 0, this.game.width,this.game.height);
        ConfirmBackGroup.add(graphics);
        
        //Download modal
        this.ConfirmBackground = game.add.sprite(game.width/2,game.height/2, 'DownloadModal');  
        //this.DownloadBackground.height = game.height;
        //this.DownloadBackground.width = game.width;
        this.ConfirmBackground.scale.setTo(1.5,1.5);
        this.ConfirmBackground.anchor.x = 0.5;
        this.ConfirmBackground.anchor.y = 0.5;
        ConfirmBackGroup.add(this.ConfirmBackground);
        
        
        this.YesButton = gameButtons.addGenericButton("0", game.width/2,game.height/2 , this.CloseConfirmButtonpress, this,"ThumbsDown",0); 
        this.YesButton.anchor.x = 0;
        this.YesButton.anchor.y = 0.5;
        this.YesButton.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        //this.YesButton.events.onInputDown.add(this.CloseConfirmButtonpress, this.YesButton); this.YesButton.scale.setTo(0.7,0.7);
        this.YesButton.scale.setTo(1.2,1.2);
        ConfirmBackGroup.add(this.YesButton);
        
        this.NoButton = gameButtons.addGenericButton("0", game.width/2,game.height/2 , this.BackToCraft, this,"ThumbsUp",0); 
        this.NoButton.anchor.x = 1;
        this.NoButton.anchor.y = 0.5;
        this.NoButton.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        //this.NoButton.events.onInputDown.add(this.BackToCraft, this.NoButton);   
        this.NoButton.scale.setTo(1.2,1.2);
        ConfirmBackGroup.add(this.NoButton);
        ConfirmBackGroup.visible = false;
        
        game.world.bringToTop(NonCharacterBackgroundGroup);
        //NonCharacterBackgroundGroup.visible = true;
        
        
        //Screenshot
        this.DIYLogo = game.add.sprite(0,0, 'DLLogo');
        this.DIYLogo.scale.setTo(scaleRatio,scaleRatio);
        this.DIYLogo.inputEnabled = true;
        this.DIYLogo.anchor.set(0,0.4);
        this.DIYLogo.x =  this.DIYLogo.width/4;
        this.DIYLogo.y =  this.DIYLogo.height/2;
        ScreenshotLogoGroup.add(this.DIYLogo);
        
        this.CBCLogo = game.add.sprite(0,0, 'CBCButton');
        this.CBCLogo.scale.setTo(scaleRatio,scaleRatio);
        this.CBCLogo.inputEnabled = true;
        this.CBCLogo.anchor.set(0,1);
        this.CBCLogo.x =  this.DIYLogo.width/2;
        this.CBCLogo.y =  game.height;
        ScreenshotLogoGroup.add(this.CBCLogo);
        
        ScreenshotLogoGroup.visible = false;
        game.world.bringToTop(ScreenshotLogoGroup);
        

        game.world.bringToTop(TopButtonsGroup);
        game.world.bringToTop(DownloadModalGroup);
        game.world.bringToTop(ConfirmBackGroup);
        
        game.world.bringToTop(StickersUnderBody);
        game.world.bringToTop(StickerBody);
        game.world.bringToTop(StickersAboveBody);
        
        
    },
        
    
    render: function () {
    //game.debug.text(game.camera.width, 100, 380 );
    //game.debug.text(game.camera.x, 100, 400 );
    
    },
    
    CloseConfirmButtonpress: function () {
    game.sound.stopAll(); 
    this.ThumbsDownSFX.play();
    ConfirmBackGroup.visible = false;
    TopButtonsGroup.visible = true;
    StickersUnderBody.visible = true;
    StickerBody.visible = true;
    StickersAboveBody.visible = true;
    }, 
    
    BackToCraftConfirm: function () {
    TopButtonsGroup.visible = false;
    StickersUnderBody.visible = false;
    StickerBody.visible = false;
    StickersAboveBody.visible = false;
    ConfirmBackGroup.visible = true;
    game.sound.stopAll();   
    this.BackButtonSFX.play();
    this.ConfirmSoundEffect.play();
    },
    
    BackToCraft: function () {
    game.sound.stopAll();
    this.ThumbsUpSFX.play();
    isFirstCharaterSelected = false;
    GameCenter_x = game.width/2;
    GameCenter_y = game.height/2.8;   
    game.state.start("StateMain");    
    },
    
    CloseConfirmWindow: function () {
    ConfirmBackGroup.visible = false;
    TopButtonsGroup.visible = true;
    },
    
    PlaceCreation: function () {
    game.sound.stopAll(); 
    game.state.start("StatePlace");   
    },

    WatchEpisode: function () {
        game.state.start("StateEpisode");
    },

    SaveFile: function () {
        //this.CameraClickPromt.play();
        //this.camerasnap.play();
        //this.ConfirmSoundEffect.play();
        DownloadModalGroup.visible = true;
        TopButtonsGroup.visible = false;
        StickersUnderBody.visible = false;
        StickerBody.visible = false;
        StickersAboveBody.visible = false;
    }, 
    
    ToLandingPage: function()
    {
        game.sound.stopAll(); 
        game.state.start("StateTitle");   
    }, 
    
    CloseButtonpress: function () {
        DownloadModalGroup.visible = false;
        TopButtonsGroup.visible = true;
        StickersUnderBody.visible = true;
        StickerBody.visible = true;
        StickersAboveBody.visible = true;
    }, 
    
    CloseButtonpressed: function () {
        //game.sound.stopAll();
        IsCamSnap = true;
        DownloadModalGroup.visible = false;
        NonCharacterBackgroundGroup.visible = false;   
        ScreenshotLogoGroup.visible = true;
        StickersUnderBody.visible = true;
        StickerBody.visible = true;
        StickersAboveBody.visible = true;
            for (let i = 0; i <= PlacableCollection.length-1; i+=1) 
            {

                PlacableCollection[i].x = game.width/2;
                PlacableCollection[i].y = game.height/2;
            }     
        game.time.events.add(200, function() {
            //window.open("yoitsmoe.co");
            if(Phaser.Device.iOS == true)
            {
            
            /*var a = window.document.createElement("a");
            a.target = '_blank';
            a.href = 'http://www.google.com';

            // Dispatch fake click
            var e = window.document.createEvent("MouseEvents");
            e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
                
             //openTab('http://www.google.com');
            this.link = document.createElement('a');
            this.link.href = this.game.canvas.toDataURL('image/png');
            this.link.download = 'MyCreation.jpg';
            document.body.appendChild(this.link);
            this.link.click();
            document.body.removeChild(this.link);*/
            var string = this.game.canvas.toDataURL('image/png');
            var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
            var x = window.open();
            x.document.open();
            x.document.write(iframe) ;
            x.document.close();
            }
                else
                {
                this.link = document.createElement('a');
                this.link.href = this.game.canvas.toDataURL('image/png');
                this.link.download = 'MyCreation.jpg';
                document.body.appendChild(this.link);
                this.link.click();
                document.body.removeChild(this.link);
                } 
        //window.open(document.getElementById("a").toDataURL());
            
        NonCharacterBackgroundGroup.visible = true;
        ScreenshotLogoGroup.visible = false;
        TopButtonsGroup.visible = true;
        //GameCenter_x = this.Background.x+this.Background.width/5;
        //GameCenter_y = this.Background.y;
            
            
            for (let i = 0; i <= PlacableCollection.length-1; i+=1) 
            {

                PlacableCollection[i].x = GameCenter_x;
                PlacableCollection[i].y = GameCenter_y;
            }
        });
        
        //
    }, 

    
    update: function () {
        if(game.input.activePointer.isUp == true && IsCamSnap == true)
            {
                this.camerasnap.play();
                IsCamSnap = false;
            }
        
    }
    
    ,addDelayTwo: function () {
  
      // define the camera offset for the quake
      var rumbleOffset = 10;

      // we need to move according to the camera's current position
      var properties = {
        x: this.PlaceModeButton.x - rumbleOffset
      };

      // we make it a relly fast movement
      var duration = 100;
      // because it will repeat
      var repeat = 4;
      // we use bounce in-out to soften it a little bit
      var ease = Phaser.Easing.Bounce.InOut;
      var autoStart = false;
      // a little delay because we will run it indefinitely
      var delay =  9000;
      // we want to go back to the original position
      var yoyo = true;

      var quake = game.add.tween(this.PlaceModeButton)
        .to(properties, duration, ease, autoStart, delay, 4, yoyo);

      // we're using this line for the example to run indefinitely
      //.quake.onComplete.addOnce(this.addQuake);

      // let the earthquake begins
      quake.start();
        }
    ,addDelayOne: function () {
  
      // define the camera offset for the quake
      var rumbleOffset = 10;

      // we need to move according to the camera's current position
      var properties = {
        x: this.DownloadButton.x - rumbleOffset
      };

      // we make it a relly fast movement
      var duration = 100;
      // because it will repeat
      var repeat = 4;
      // we use bounce in-out to soften it a little bit
      var ease = Phaser.Easing.Bounce.InOut;
      var autoStart = false;
      // a little delay because we will run it indefinitely
      var delay =  11000;
      // we want to go back to the original position
      var yoyo = true;

      var quake = game.add.tween(this.DownloadButton)
        .to(properties, duration, ease, autoStart, delay, 4, yoyo);

      // we're using this line for the example to run indefinitely
      //.quake.onComplete.addOnce(this.addQuake);

      // let the earthquake begins
      quake.start();
        }
    

}