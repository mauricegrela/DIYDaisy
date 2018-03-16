var StateDirectory = {

    preload: function () {

          
                


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
        
        NonCharacterBackgroundGroup = game.add.group();
        
        this.camerasnap = game.add.audio("cameraSnap");
        
        this.CameraClickPromt = game.add.audio("SaveButtonPressed");

        this.ConfirmSoundEffect = game.add.audio("StartOverConfirm");
        
        BookScale = scaleRatio *1.1;
        
        butonScale = 0.8;
        
        this.craftBackground = game.add.sprite(0, 0, 'craft_Backgroung');  
        this.craftBackground.height = game.height;
        this.craftBackground.width = game.width;
        NonCharacterBackgroundGroup.add(this.craftBackground);
        //Book background
        this.Background = game.add.sprite(game.width/2, game.height/2, 'DirectoryBackground');
        this.Background.anchor.set(0.5);
        this.Background.scale.setTo(BookScale,BookScale);
        NonCharacterBackgroundGroup.add(this.Background);
        //this.Background.width =game.width; 
        //this.Background.height =game.height;

        CharacterScaleAdjustment = 0.7;
        CharacterGroup = game.add.group();
        
        
        GameCenter_x = this.Background.x+this.Background.width/5;
        GameCenter_y = this.Background.y;
        
        this.Body = game.add.sprite(GameCenter_x, GameCenter_y,ImageAssetArray[0]);
        this.Body.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Body.anchor.x = Pivot_X[0];
        this.Body.anchor.y =  Pivot_Y[0];
        this.Body.alpha = 1;
        StickerBody.add(this.Body);
        PlacableCollection[0]=this.Body;
      
        
        this.Sticker1 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[1]);
        this.Sticker1.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Sticker1.anchor.x = Pivot_X[1];
        this.Sticker1.anchor.y =  Pivot_Y[1];
        this.Sticker1.alpha = testArrayAlpha[1];
        PlacableCollection[1]=this.Sticker1;
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
        if(StickerDepth[5]== false)
        {
        StickersUnderBody.add(this.Sticker6);
        }
            else
            {
            StickersAboveBody.add(this.Sticker6);
            }
        
        this.Sticker7 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[7]);
        this.Sticker7.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Sticker7.anchor.x = Pivot_X[7];
        this.Sticker7.anchor.y =  Pivot_Y[7];
        this.Sticker7.alpha = testArrayAlpha[7];
        PlacableCollection[7]=this.Sticker7;
        if(StickerDepth[6]== false)
        {
        StickersUnderBody.add(this.Sticker7);
        }
            else
            {
            StickersAboveBody.add(this.Sticker7);
            }
        
        game.world.bringToTop(StickersUnderBody);
        game.world.bringToTop(StickerBody);
        game.world.bringToTop(StickersAboveBody);
        
        ExtroMenu = game.add.group();
        
        ButtonScale = scaleRatio*1.3;

        this.BackToCraftButton = gameButtons.addGenericButton("0", 0,0 , this.BackToCraftConfirm, this,"creativeButtons",2); 
        this.BackToCraftButton.anchor.x = 1.3;
        this.BackToCraftButton.anchor.y = -0.2;
        this.BackToCraftButton.x =  game.width;
        this.BackToCraftButton.y = 0;
        this.BackToCraftButton.scale.setTo(0.8,0.8);
        NonCharacterBackgroundGroup.add(this.BackToCraftButton);
        
        XPosition = this.Background.x-this.Background.width/5.5;
        YPosition = this.Background.y-game.height/12;
        
        //Butons      
        this.PlaceModeButton = game.add.sprite(XPosition,(YPosition), 'creativeButtons');   
        this.PlaceModeButton.frame = 0;
        this.PlaceModeButton.anchor.setTo(0.5);
        this.PlaceModeButton.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.PlaceModeButton.events.onInputOver.add(this.PlaceCreation, this.PlaceModeButton)  
        this.PlaceModeButton.scale.setTo((ButtonScale),(ButtonScale));
        NonCharacterBackgroundGroup.add(this.PlaceModeButton);
        
        this.DownloadButton = game.add.sprite(XPosition,(YPosition+this.PlaceModeButton.height), 'creativeButtons');   
        this.DownloadButton.frame = 1;
        this.DownloadButton.anchor.setTo(0.5);
        this.DownloadButton.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.DownloadButton.events.onInputOver.add(this.SaveFile, this.DownloadButton);   
        this.DownloadButton.scale.setTo((ButtonScale),(ButtonScale));
        NonCharacterBackgroundGroup.add(this.DownloadButton);

        this.Logo = game.add.sprite(0,0, 'daisylogo');
        this.Logo.scale.setTo(scaleRatio,scaleRatio);
        this.Logo.inputEnabled = true;
        this.Logo.anchor.set(0,0.4);
        this.Logo.x =  this.Logo.width/4;
        this.Logo.y =  this.Logo.height/2;
        this.Logo.events.onInputOver.add(this.ToLandingPage, this.Logo);
        NonCharacterBackgroundGroup.add(this.Logo); 
        
        game.world.bringToTop(StickersUnderBody);
        game.world.bringToTop(StickerBody);
        game.world.bringToTop(StickersAboveBody);
        
///////////////////////////
//////DownloadGroup////////
///////////////////////////
        DownloadModalGroup = game.add.group();
   
        var graphics = game.add.graphics(0, 0);
        graphics.beginFill(0x000000, 0.5);
        graphics.drawRect(0, 0, this.game.width,this.game.height);
        DownloadModalGroup.add(graphics);
        
        //Download modal
        this.DownloadBackground = game.add.sprite(game.width/2,game.height/2, 'DownloadModal');  
        //this.DownloadBackground.height = game.height;
        //this.DownloadBackground.width = game.width;
        this.DownloadBackground.scale.setTo(scaleRatio,scaleRatio);
        this.DownloadBackground.anchor.x = 0.5;
        this.DownloadBackground.anchor.y = 0.5;
        DownloadModalGroup.add(this.DownloadBackground);
        
        this.CloseButton = game.add.sprite(
            this.DownloadBackground.x+this.DownloadBackground.width/2,
            this.DownloadBackground.y-this.DownloadBackground.height/2,'CloseButton');
        this.CloseButton.anchor.x = 0.5;
        this.CloseButton.anchor.y = 0.5;
        this.CloseButton.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.CloseButton.events.onInputOver.add( this.CloseButtonpress, this.CloseButton);   
        this.CloseButton.scale.setTo(scaleRatio,scaleRatio);
        DownloadModalGroup.add(this.CloseButton);
        
        
        this.downloadButton = game.add.sprite(game.width/2,game.height/2, 'DownloadButton');
        this.downloadButton.anchor.x = 0.5;
        this.downloadButton.anchor.y = 0.5;
        this.downloadButton.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.downloadButton.events.onInputOver.add(this.CloseButtonpressed, this.downloadButton);   
        this.downloadButton.scale.setTo(scaleRatio,scaleRatio);
        
        DownloadModalGroup.add(this.downloadButton);

        DownloadModalGroup.visible = false;
        
///////////////////////////
///////Confirm Back////////
///////////////////////////
        ConfirmBackGroup = game.add.group();
   
        var graphics = game.add.graphics(0, 0);
        graphics.beginFill(0x000000, 0.5);
        graphics.drawRect(0, 0, this.game.width,this.game.height);
        ConfirmBackGroup.add(graphics);
        
        //Download modal
        this.ConfirmBackground = game.add.sprite(game.width/2,game.height/2, 'DownloadModal');  
        //this.DownloadBackground.height = game.height;
        //this.DownloadBackground.width = game.width;
        this.ConfirmBackground.scale.setTo(scaleRatio,scaleRatio);
        this.ConfirmBackground.anchor.x = 0.5;
        this.ConfirmBackground.anchor.y = 0.5;
        ConfirmBackGroup.add(this.ConfirmBackground);
        
        
        this.YesButton = game.add.sprite(game.width/2,game.height/2, 'ThumbsDown');
        this.YesButton.anchor.x = 0;
        this.YesButton.anchor.y = 0.5;
        this.YesButton.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.YesButton.events.onInputOver.add(this.CloseConfirmButtonpress, this.YesButton);   
        //this.YesButton.scale.setTo(1.8,1.8);
        ConfirmBackGroup.add(this.YesButton);
        
        this.NoButton = game.add.sprite(game.width/2,game.height/2, 'ThumbsUp');
        this.NoButton.anchor.x = 1;
        this.NoButton.anchor.y = 0.5;
        this.NoButton.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.NoButton.events.onInputOver.add(this.BackToCraft, this.NoButton);   
        //this.NoButton.scale.setTo(1.8,1.8);
        ConfirmBackGroup.add(this.NoButton);
        ConfirmBackGroup.visible = false;
    },
        
    
    CloseConfirmButtonpress: function () {
    game.sound.stopAll(); 
    ConfirmBackGroup.visible = false;
    }, 
    
    BackToCraftConfirm: function () {
    ConfirmBackGroup.visible = true;
    game.sound.stopAll();   
    this.ConfirmSoundEffect.play();
    },
    
    BackToCraft: function () {
    game.sound.stopAll();
    isFirstCharaterSelected = false;
    game.state.start("stateMainLoad");    
    },
    
    CloseConfirmWindow: function () {
    ConfirmBackGroup.visible = false;
    },
    
    PlaceCreation: function () {
    game.sound.stopAll(); 
    game.state.start("StatePlace")   
    },

    WatchEpisode: function () {
        game.state.start("StateEpisode");
    },

    SaveFile: function () {
        //this.CameraClickPromt.play();
        //this.camerasnap.play();
        //this.ConfirmSoundEffect.play();
        DownloadModalGroup.visible = true;
    }, 
    
    ToLandingPage: function()
    {
        game.sound.stopAll(); 
        game.state.start("StateTitle");   
    }, 
    
    CloseButtonpress: function () {
        DownloadModalGroup.visible = false;
    }, 
    
    CloseButtonpressed: function () {
        game.sound.stopAll();
        //this.camerasnap.play();
        DownloadModalGroup.visible = false;
        NonCharacterBackgroundGroup.visible = false;       
            for (let i = 0; i <= PlacableCollection.length-1; i+=1) 
            {

                PlacableCollection[i].x = game.width/2;
                PlacableCollection[i].y = game.height/2;
            }     
        game.time.events.add(200, function() {
        this.link = document.createElement('a');
        this.link.href = this.game.canvas.toDataURL('image/png');
        this.link.download = 'MyCreation.jpg';
        document.body.appendChild(this.link);
        this.link.click();
        document.body.removeChild(this.link);
        NonCharacterBackgroundGroup.visible = true;
            for (let i = 0; i <= PlacableCollection.length-1; i+=1) 
            {

                PlacableCollection[i].x = GameCenter_x;
                PlacableCollection[i].y = GameCenter_y;
            }
        });
    }, 

    
    update: function () {
        
    }

}