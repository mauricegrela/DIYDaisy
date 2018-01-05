var StateDirectory = {

    preload: function () {
        GameCenter_x = game.width/2;
        GameCenter_y = game.height/3; 
        
        XPosition = 0;
    }

    , create: function () {   
    ExtroMenu = game.add.group();
    this.PlaceModeButton = gameButtons.addButton("place", 300, 100, this.PlaceCreation, this);//Save File
    ExtroMenu.add(this.PlaceModeButton);
    this.EpisodeModeButton = gameButtons.addButton("watch", 300, 200, this.WatchEpisode, this);//Watch Episode
    ExtroMenu.add(this.EpisodeModeButton);
    this.DownloadModeButton = gameButtons.addButton("download", 300, 300, this.SaveFile, this);//Enter place mode 
    ExtroMenu.add(this.DownloadModeButton);     
        
        //Add background      
     
        scaleRatio = window.devicePixelRatio / 2;
        
        CharacterGroup = game.add.group();
     
        this.craftBackground = game.add.sprite(0, 0, 'placement_Background');
        this.craftBackground.scale.setTo(scaleRatio,scaleRatio);
        
        game.world.setBounds(0, 0, this.craftBackground.width, this.craftBackground.height);
        
        this.cursors = game.input.keyboard.createCursorKeys();
        
        
        this.Body = game.add.sprite(GameCenter_x, GameCenter_y,ImageAssetArray[0]);
        this.Body.scale.setTo(scaleRatio,scaleRatio);
        this.Body.anchor.x = Pivot_X[0];
        this.Body.anchor.y =  Pivot_Y[0];
        this.Body.alpha = 1;
        PlacableCollection[0]=this.Body;
        CharacterGroup.add(this.Body);
        
        this.Sticker1 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[1]);
        this.Sticker1.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker1.anchor.x = Pivot_X[1];
        this.Sticker1.anchor.y =  Pivot_Y[1];
        this.Sticker1.alpha = testArrayAlpha[1];
        PlacableCollection[1]=this.Sticker1;
        CharacterGroup.add(this.Sticker1);
        
        this.Sticker2 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[2]);
        this.Sticker2.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker2.anchor.x = Pivot_X[2];
        this.Sticker2.anchor.y =  Pivot_Y[2];
        this.Sticker2.alpha = testArrayAlpha[2];
        PlacableCollection[2]=this.Sticker2;
        CharacterGroup.add(this.Sticker2);
        
        this.Sticker3 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[3]);
        this.Sticker3.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker3.anchor.x = Pivot_X[3];
        this.Sticker3.anchor.y =  Pivot_Y[3];
        this.Sticker3.alpha = testArrayAlpha[3];
        PlacableCollection[3]=this.Sticker3;
        CharacterGroup.add(this.Sticker3);
        
        this.Sticker4 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[4]);
        this.Sticker4.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker4.anchor.x = Pivot_X[4];
        this.Sticker4.anchor.y =  Pivot_Y[4];
        this.Sticker4.alpha = testArrayAlpha[4];
        PlacableCollection[4]=this.Sticker4;
        CharacterGroup.add(this.Sticker4);
        
        this.Sticker5 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[5]);
        this.Sticker5.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker5.anchor.x = Pivot_X[5];
        this.Sticker5.anchor.y =  Pivot_Y[5];
        this.Sticker5.alpha = testArrayAlpha[5];
        PlacableCollection[5]=this.Sticker5;
        CharacterGroup.add(this.Sticker5);
      
        this.Sticker6 = game.add.sprite(GameCenter_x, GameCenter_y, ImageReference[6]);
        this.Sticker6.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker6.anchor.x = Pivot_X[6];
        this.Sticker6.anchor.y =  Pivot_Y[6];
        this.Sticker6.alpha = testArrayAlpha[6];
        PlacableCollection[6]=this.Sticker6;
        CharacterGroup.add(this.Sticker6);
        
        game.world.bringToTop(CharacterGroup);
        
        //this.tester = game.add.sprite(0, 0, game.cache.getBitmapData(this.DrawnSprite));
    },
    
    PlaceCreation: function () {
    game.state.start("StatePlace")
    },
    WatchEpisode: function () {
    game.state.start("StateEpisode");
    },
    SaveFile: function () {

    }
    , update: function () {
            
        if (this.game.input.activePointer.isDown) 
        {	if (this.game.origDragPoint) {		
        // move the camera by the amount the mouse has moved since last update		
        this.game.camera.x += this.game.origDragPoint.x - this.game.input.activePointer.position.x;
        this.game.camera.y += this.game.origDragPoint.y - this.game.input.activePointer.position.y;	}
        // set new drag origin to current position	
        this.game.origDragPoint = this.game.input.activePointer.position.clone();
        }
        else
        {	this.game.origDragPoint = null;}
        
        /*if (this.cursors.left.isDown)
        {
        game.camera.x -= 4;
        }

            else if (this.cursors.right.isDown)
            {
            game.camera.x += 4;
            }
        
        if( game.input.activePointer.isDown == true )
            {
                
            }*/
        for (let i = 0; i < PlacableCollection.length-1; i++) 
        {
        PlacableCollection[i].x = game.input.x;
        PlacableCollection[i].y = game.input.y;
        PlacableCollection[i].fixedToCamera = true;
        //t.cameraOffset.setTo(200, 500);
        //this.game.camera.x = PlacableCollection[i].x
        }
        
        if(game.input.x>this.game.camera.width-50)
            {
               //this.craftBackground.visible = false; 
                this.game.camera.x += 30;
            }
                else if(game.input.x<50)
                {
                   //this.craftBackground.visible = false; 
                    this.game.camera.x -= 30;
                }
        
        //this.CharacterGroup.x = game.input.x;
        //this.CharacterGroup.y = game.input.y;
    }

}