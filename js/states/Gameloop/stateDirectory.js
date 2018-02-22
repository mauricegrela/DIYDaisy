var StateDirectory = {

    preload: function () {
        GameCenter_x = game.world.centerX+game.width/8;
        GameCenter_y = game.world.centerY-game.height/30;
        
        
        
        XPosition = game.world.centerX-game.width/8;
        YPosition = game.world.centerY;
    }

    , create: function () {   
    
        scaleRatio = window.devicePixelRatio / 2;
        
        butonScale = 1.5;
        
                 this.craftBackground = game.add.sprite(0, 0, 'craft_Backgroung');
        //BackgroundGroup.add(this.craftBackground); 
        
        //Background Working
        this.Background = game.add.sprite(game.world.centerX,game.world.centerY, 'DirectoryBackground');
        this.Background.anchor.set(0.5);
        this.Background.scale.setTo(scaleRatio,scaleRatio);
        //this.Background.width =game.width; 
        //this.Background.height =game.height;
        
        
    this.PlaceModeButton = gameButtons.addGenericButton("0",
    XPosition,
    (YPosition), 
    this.PlaceCreation, this,"creativeButtons",2); 
    this.PlaceModeButton.scale.setTo(scaleRatio*butonScale,scaleRatio*butonScale); 
        
    this.EpisodeModeButton = gameButtons.addGenericButton("0",
    XPosition-this.PlaceModeButton.width,
    (YPosition-this.PlaceModeButton.height), 
    this.WatchEpisode, this,"creativeButtons",1); 
    this.EpisodeModeButton.scale.setTo(scaleRatio*butonScale,scaleRatio*butonScale); 
        
    /*ExtroMenu = game.add.group();
    this.PlaceModeButton = gameButtons.addButton("place",                                          
    XPosition,
    YPosition, 
    this.PlaceCreation, this);//Save File
        
        
    ExtroMenu.add(this.PlaceModeButton);
        
    this.EpisodeModeButton = gameButtons.addButton("watch",
    XPosition-this.PlaceModeButton.width,
    (YPosition-this.PlaceModeButton.height),  
    this.WatchEpisode, this);//Watch Episode
    ExtroMenu.add(this.EpisodeModeButton);
        
    /*this.DownloadModeButton = gameButtons.addButton("download", 
    XPosition-this.PlaceModeButton.width,
    (YPosition+this.PlaceModeButton.height), 
    this.SaveFile, this);//Enter place mode 
    ExtroMenu.add(this.DownloadModeButton); */
        
    //Save Button
    this.SaveButton = gameButtons.addGenericButton("0",
     XPosition-this.PlaceModeButton.width,
    (YPosition+this.PlaceModeButton.height), 
    this.SaveClicked, this,"creativeButtons",4); 
    this.SaveButton.scale.setTo(scaleRatio,scaleRatio);
    //MainButtonGroup.add(this.SaveButton);

        
        CharacterScaleAdjustment = 1.0;
        CharacterGroup = game.add.group();

        this.Body = game.add.sprite(GameCenter_x, GameCenter_y,ImageAssetArray[0]);
        this.Body.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Body.anchor.x = Pivot_X[0];
        this.Body.anchor.y =  Pivot_Y[0];
        this.Body.alpha = 1;
        PlacableCollection[0]=this.Body;
        CharacterGroup.add(this.Body);
        
        this.Sticker1 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[1]);
        this.Sticker1.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Sticker1.anchor.x = Pivot_X[1];
        this.Sticker1.anchor.y =  Pivot_Y[1];
        this.Sticker1.alpha = testArrayAlpha[1];
        PlacableCollection[1]=this.Sticker1;
        CharacterGroup.add(this.Sticker1);
        
        this.Sticker2 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[2]);
        this.Sticker2.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Sticker2.anchor.x = Pivot_X[2];
        this.Sticker2.anchor.y =  Pivot_Y[2];
        this.Sticker2.alpha = testArrayAlpha[2];
        PlacableCollection[2]=this.Sticker2;
        CharacterGroup.add(this.Sticker2);
        
        this.Sticker3 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[3]);
        this.Sticker3.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Sticker3.anchor.x = Pivot_X[3];
        this.Sticker3.anchor.y =  Pivot_Y[3];
        this.Sticker3.alpha = testArrayAlpha[3];
        PlacableCollection[3]=this.Sticker3;
        CharacterGroup.add(this.Sticker3);
        
        this.Sticker4 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[4]);
        this.Sticker4.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Sticker4.anchor.x = Pivot_X[4];
        this.Sticker4.anchor.y =  Pivot_Y[4];
        this.Sticker4.alpha = testArrayAlpha[4];
        PlacableCollection[4]=this.Sticker4;
        CharacterGroup.add(this.Sticker4);
        
        this.Sticker5 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[5]);
        this.Sticker5.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Sticker5.anchor.x = Pivot_X[5];
        this.Sticker5.anchor.y =  Pivot_Y[5];
        this.Sticker5.alpha = testArrayAlpha[5];
        PlacableCollection[5]=this.Sticker5;
        CharacterGroup.add(this.Sticker5);
      
        this.Sticker6 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[6]);
        this.Sticker6.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Sticker6.anchor.x = Pivot_X[6];
        this.Sticker6.anchor.y =  Pivot_Y[6];
        this.Sticker6.alpha = testArrayAlpha[6];
        PlacableCollection[6]=this.Sticker6;
        CharacterGroup.add(this.Sticker6);
        
        game.world.bringToTop(CharacterGroup);



        
    },    
    
    SaveClicked: function () { 
        this.link = document.createElement('a');
        this.link.href = this.game.canvas.toDataURL('image/png');
        this.link.download = 'MyCreation.jpg';
        document.body.appendChild(this.link);
        this.link.click();
        document.body.removeChild(this.link);
        //game.cache.addBitmapData(this.DrawnSprite, this.bmd);
        //game.state.start("StateOuttro");
    },
    
    PlaceCreation: function () {
        game.state.start("StatePlace")
    },

    WatchEpisode: function () {
        game.state.start("StateEpisode");
    },

    SaveFile: function () {
        this.link = document.createElement('a');
        this.link.href = this.game.canvas.toDataURL('image/png');
        this.link.download = 'MyCreation.jpg';
        document.body.appendChild(this.link);
        this.link.click();
        document.body.removeChild(this.link);    
    }, 

    update: function () {
        
    }

}