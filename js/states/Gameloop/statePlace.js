var StatePlace = {

    preload: function () {        
       /*game.load.image('Body', ImageAssetArray[0]);
        game.load.image('Sticker1', ImageAssetArray[1]);
        game.load.image('Sticker2', ImageAssetArray[2]);
        game.load.image('Sticker3', ImageAssetArray[3]);
        game.load.image('Sticker4', ImageAssetArray[4]);
        game.load.image('Sticker5', ImageAssetArray[5]);
        game.load.image('Sticker6', ImageAssetArray[6]);
        game.load.image('Sticker7', ImageAssetArray[7]);
        game.load.image('Sticker8', ImageAssetArray[8]);*/
    }

    , create: function () {
        

        
        

        
        
        //Add background      
     
        //scaleRatio = window.devicePixelRatio / 2;


        craftBackgroundScale = scaleRatio ;


        CharacterScaleAdjustment = 0.5;
        
        CharacterGroup = game.add.group();
     
        this.craftBackground1 = game.add.sprite(0, 0, 'placing_Backgroung1');
        this.craftBackground1.scale.setTo(craftBackgroundScale,craftBackgroundScale);
       

        //this.craftBackground3 = game.add.sprite(0, 0, 'placing_Backgroung3');
        //this.craftBackground3.scale.setTo(scaleRatio,scaleRatio);
        
        game.world.setBounds(0, 0, this.craftBackground1.width, this.craftBackground1.height);
        
        this.cursors = game.input.keyboard.createCursorKeys();
        
        
        this.Body = game.add.sprite(GameCenter_x, GameCenter_y,ImageAssetArray[0]);
        this.Body.scale.setTo(scaleRatio*CharacterScaleAdjustment,scaleRatio*CharacterScaleAdjustment);
        this.Body.anchor.x = Pivot_X[0];
        this.Body.anchor.y = Pivot_Y[0];
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
        
        //game.world.bringToTop(this.craftBackground3);
        
        this.mummy1 = game.add.sprite(
        0,
        0, 
        'Anim1', 5);
        this.mummy1.scale.set(scaleRatio);
        this.mummy1.anchor.x = 0.0;
        this.mummy1.anchor.y = 0.0;
        //this.mummy1.smoothed = false;
        //this.mummy1.fixedToCamera = true;
        this.anim1 = this.mummy1.animations.add('walk');

        //this.anim1.play(10, true);

        this.mummy2 = game.add.sprite(
        this.craftBackground1.width/10,
        this.craftBackground1.height,
        'Anim2', 5);
        this.mummy2.scale.set(scaleRatio);
        this.mummy2.anchor.x = 0.5;
        this.mummy2.anchor.y =  1;
        //this.mummy2.smoothed = false;
        //this.mummy2.fixedToCamera = true;
        this.anim2 = this.mummy2.animations.add('walk');

        this.mummy3 = game.add.sprite(
        (this.craftBackground1.width/10)*2, 
        this.craftBackground1.height,
        'Anim3', 5);
        this.mummy3.scale.set(scaleRatio);
        this.mummy3.anchor.x = 0.5;
        this.mummy3.anchor.y =  1;
        //this.mummy2.smoothed = false;
        //this.mummy2.fixedToCamera = true;
        this.anim3 = this.mummy3.animations.add('walk');
        
        this.mummy4 = game.add.sprite(
        (this.craftBackground1.width/10)*3, 
        this.craftBackground1.height,
        'Anim4', 5);
        this.mummy4.scale.set(scaleRatio);
        this.mummy4.anchor.x = 0.5;
        this.mummy4.anchor.y =  1;
        //this.mummy2.smoothed = false;
        //this.mummy2.fixedToCamera = true;
        this.mummy4 = this.mummy4.animations.add('walk');
        
        this.mummy5 = game.add.sprite(
        (this.craftBackground1.width/10)*4, 
        this.craftBackground1.height,
        'Anim5', 5);
        this.mummy5.scale.set(scaleRatio);
        this.mummy5.anchor.x = 0.5;
        this.mummy5.anchor.y =  1;
        //this.mummy2.smoothed = false;
        //this.mummy2.fixedToCamera = true;
        this.mummy5 = this.mummy5.animations.add('walk');
        
        this.mummy7 = game.add.sprite(
        (this.craftBackground1.width/10)*5, 
        this.craftBackground1.height,
        'Anim7', 5);
        this.mummy7.scale.set(scaleRatio);
        this.mummy7.anchor.x = 0.5;
        this.mummy7.anchor.y =  1;
        //this.mummy2.smoothed = false;
        //this.mummy2.fixedToCamera = true;
        this.mummy7 = this.mummy7.animations.add('walk');
        
        this.mummy8 = game.add.sprite(
        (this.craftBackground1.width/10)*6, 
        this.craftBackground1.height,
        'Anim8', 5);
        this.mummy8.scale.set(scaleRatio);
        this.mummy8.anchor.x = 0.5;
        this.mummy8.anchor.y =  1;
        //this.mummy2.smoothed = false;
        //this.mummy2.fixedToCamera = true;
        this.mummy8 = this.mummy8.animations.add('walk');
        
        this.mummy9 = game.add.sprite(
        (this.craftBackground1.width/10)*7, 
        this.craftBackground1.height,
        'Anim9', 5);
        this.mummy9.scale.set(scaleRatio);
        this.mummy9.anchor.x = 0.5;
        this.mummy9.anchor.y =  1;
        //this.mummy2.smoothed = false;
        //this.mummy2.fixedToCamera = true;
        this.mummy9 = this.mummy9.animations.add('walk');
                
        this.mummy10 = game.add.sprite(
        (this.craftBackground1.width/10)*8, 
        this.craftBackground1.height,
        'Anim10', 5);
        this.mummy10.scale.set(scaleRatio);
        this.mummy10.anchor.x = 0.5;
        this.mummy10.anchor.y =  1;
        //this.mummy2.smoothed = false;
        //this.mummy2.fixedToCamera = true;
        this.mummy10 = this.mummy10.animations.add('walk');
        
        AnimationsInTheGallery[0]=this.mummy1;
        AnimationsInTheGallery[1]=this.anim1;
        AnimationsInTheGallery[2]=this.mummy2;
        AnimationsInTheGallery[3]=this.anim2;
        AnimationsInTheGallery[4]=this.mummy3;
        AnimationsInTheGallery[5]=this.anim3;
        AnimationsInTheGallery[6]=this.mummy4;
        AnimationsInTheGallery[7]=this.anim4;
        AnimationsInTheGallery[8]=this.mummy5;
        AnimationsInTheGallery[9]=this.anim5;
        AnimationsInTheGallery[10]=this.mummy6;
        AnimationsInTheGallery[11]=this.anim6;
        AnimationsInTheGallery[12]=this.mummy7;
        AnimationsInTheGallery[13]=this.anim7;
        AnimationsInTheGallery[14]=this.mummy8;
        AnimationsInTheGallery[15]=this.anim8;
        AnimationsInTheGallery[16]=this.mummy9;
        AnimationsInTheGallery[17]=this.anim9;
        AnimationsInTheGallery[18]=this.mummy10;
        AnimationsInTheGallery[19]=this.anim10;
        
        this.craftBackground2 = game.add.sprite(0, 0, 'placing_Backgroung2');
        this.craftBackground2.scale.setTo(craftBackgroundScale,craftBackgroundScale);
        this.craftBackground2.scale.set(scaleRatio);
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
        //this.craftBackground3.x = game.camera.x*0.4;
        
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
        
        for (let i = 0; i <= AnimationsInTheGallery.length-2; i+=2) 
        {
            if(
            PlacableCollection[0].x>AnimationsInTheGallery[i].x-AnimationsInTheGallery[i].width/2 &&               PlacableCollection[0].x<AnimationsInTheGallery[i].x+AnimationsInTheGallery[i].width/2)// &&
            //AnimationsInTheGallery[i+1].isPlaying  == false)
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