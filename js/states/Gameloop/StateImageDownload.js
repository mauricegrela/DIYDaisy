var StateImageDownload = {

    preload: function () {
        GameCenter_x = game.width-game.width/2.5;
        GameCenter_y = game.world.centerY-game.height/30; 
        
        XPosition = game.width/2;
        YPosition = game.height/2;
        
        game.load.audio("cameraSnap",'audio/sfx/camera.mp3');   
    }

    , create: function () {   
    
        this.camerasnap = game.add.audio("cameraSnap");
        
        //scaleRatio = window.devicePixelRatio / 2;
        
        butonScale = 0.8;
            
        this.DownloadBackground = game.add.sprite(0, 0, 'DownloadModal');  
        this.DownloadBackground.height = game.height;
        this.DownloadBackground.width = game.width;
        //DownloadModalGroup.add(this.DownloadBackground);
        
        

        
        //Background Working
        this.Background = game.add.sprite(game.world.centerX,game.world.centerY, 'DirectoryBackground');
        this.Background.anchor.set(0.5);
        this.Background.scale.setTo(scaleRatio,scaleRatio);
        //this.Background.width =game.width; 
        //this.Background.height =game.height;
        

        CharacterScaleAdjustment = 0.5;
        CharacterGroup = game.add.group();
        
        StickersUnderBody = game.add.group();
        StickerBody = game.add.group();
        StickersAboveBody = game.add.group();
        

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
        
        
        this.CloseButton = game.add.sprite(
        game.width, 
        0,
        'CloseButton');
        this.CloseButton.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.CloseButton.events.onInputOver.add( this.PlaceCreation, this.CloseButton);   
        this.CloseButton.scale.setTo(scaleRatio,scaleRatio);
        this.CloseButton.anchor.x = 1;
        this.CloseButton.anchor.y =  0;
       // DownloadModalGroup.add(this.CloseButton);
        

    this.Logo = game.add.sprite(0,0, 'daisylogo');
    this.Logo.scale.setTo(scaleRatio,scaleRatio);
    this.Logo.anchor.set(0.0); 
        
 
        
    },
    
    PlaceCreation: function () {
        this.link = document.createElement('a');
        this.link.href = this.game.canvas.toDataURL('image/png');
        this.link.download = 'MyCreation.jpg';
        document.body.appendChild(this.link);
        this.link.click();
        document.body.removeChild(this.link);  
        
        //game.state.start("StateDirectory")
        
    },



    update: function () {
        
    }

}