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
        
        
        
    mummy = game.add.sprite(200, 360, 'mummy', 5);
    mummy.scale.set(4);
    mummy.smoothed = false;
    anim = mummy.animations.add('walk');
        
        
        //Add background      
     
        scaleRatio = window.devicePixelRatio / 2;
        CharacterScaleAdjustment = 0.5;
        
        CharacterGroup = game.add.group();
     
        this.craftBackground1 = game.add.sprite(0, 0, 'placing_Backgroung1');
        this.craftBackground1.scale.setTo(scaleRatio,scaleRatio);
       
        this.craftBackground2 = game.add.sprite(0, 0, 'placing_Backgroung2');
        this.craftBackground2.scale.setTo(scaleRatio,scaleRatio);
        
        this.craftBackground3 = game.add.sprite(0, 0, 'placing_Backgroung3');
        this.craftBackground3.scale.setTo(scaleRatio,scaleRatio);
        
        game.world.setBounds(0, 0, this.craftBackground1.width, this.craftBackground1.height);
        
        this.cursors = game.input.keyboard.createCursorKeys();
        
        
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
        
        game.world.bringToTop(this.craftBackground3);
        
        this.mummy1 = game.add.sprite(this.craftBackground1.width/3, game.camera.height/2, 'mummy', 5);
        this.mummy1.scale.set(4);
        this.mummy1.anchor.x = 0.5;
        this.mummy1.anchor.y = 0.5;
        this.mummy1.smoothed = false;
        //this.mummy1.fixedToCamera = true;
        this.anim1 = this.mummy1.animations.add('walk');

        //this.anim1.play(10, true);


        this.mummy2 = game.add.sprite(this.craftBackground1.width/3*2, game.camera.height/2, 'mummy', 5);
        this.mummy2.scale.set(4);
        this.mummy2.anchor.x = 0.5;
        this.mummy2.anchor.y =  0.5;
        //this.mummy2.smoothed = false;
        this.mummy2.fixedToCamera = true;
        this.anim2 = this.mummy2.animations.add('walk');

        //this.anim1.play(10, true);
        
        AnimationsInTheGallery[0]=this.mummy1;
        AnimationsInTheGallery[1]=this.anim1;
        AnimationsInTheGallery[2]=this.mummy2;
        AnimationsInTheGallery[3]=this.anim2;
        
        //game.world.bringToTop(this.mummy);
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
        //Paralaxing background. 
        this.craftBackground2.x = game.camera.x*0.3;
        this.craftBackground3.x = game.camera.x*0.4;
        
        //Camera panning
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
        
        for (let i = 0; i < AnimationsInTheGallery.length-1; i+=2) 
        {
            if(
            PlacableCollection[0].x>AnimationsInTheGallery[i].x-AnimationsInTheGallery[i].width &&               PlacableCollection[0].x<AnimationsInTheGallery[i].x+AnimationsInTheGallery[i].width &&
            AnimationsInTheGallery[i+1].isPlaying  == false)
            {
             AnimationsInTheGallery[i+1].play(10, false);
            }
                else
                {
                //AnimationsInTheGallery[i].alpha =0;
                //AnimationsInTheGallery[i+1].stop(true, true);
                //AnimationsInTheGallery[i+1].stop(true, true);
                }
            
        }
        
        //Render each of the character layers. 
        for (let i = 0; i < PlacableCollection.length-1; i++) 
        {
        PlacableCollection[i].x = game.input.x;
        PlacableCollection[i].y = game.input.y;
        PlacableCollection[i].fixedToCamera = true;
        }
        /*
        //for panning the camera 
        if(game.input.x>this.game.camera.width-this.game.camera.width/2.5)
            {
               //this.craftBackground.visible = false; 
                this.game.camera.x += 10;
            }
                else if(game.input.x<this.game.camera.width/2.5)
                {
                   //this.craftBackground.visible = false; 
                    this.game.camera.x -= 10;
                }*/
    }

}