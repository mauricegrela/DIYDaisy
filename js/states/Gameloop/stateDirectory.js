var StateDirectory = {

    preload: function () {

    }

    , create: function () {   
    ExtroMenu = game.add.group();
    this.PlaceModeButton = gameButtons.addButton("place", 300, 100, this.PlaceCreation, this);//Save File
    ExtroMenu.add(this.PlaceModeButton);
    this.EpisodeModeButton = gameButtons.addButton("watch", 300, 200, this.WatchEpisode, this);//Watch Episode
    ExtroMenu.add(this.EpisodeModeButton);
    this.DownloadModeButton = gameButtons.addButton("download", 300, 300, this.SaveFile, this);//Enter place mode 
    ExtroMenu.add(this.DownloadModeButton);     
        
        
                var GameCenter_x = game.width/1.4;
        var GameCenter_y = game.height/3;
        
        scaleRatio = window.devicePixelRatio / 2;
        
        CharacterGroup = game.add.group();

        
        this.Sticker1 = game.add.sprite(Xpos_ArrayAlpha[1], Ypos_ArrayAlpha[1], ImageAssetArray[1]);
        this.Sticker1.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker1.anchor.x = PivotPoint_X[1];
        this.Sticker1.anchor.y =  PivotPoint_Y[1];
        this.Sticker1.alpha = testArrayAlpha[1];
        this.Sticker1.tint = testArrayColor[1];
        CharacterGroup.add(this.Sticker1);
        
        
        this.Sticker2 = game.add.sprite(Xpos_ArrayAlpha[2], Ypos_ArrayAlpha[2], ImageAssetArray[2]);
        this.Sticker2.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker2.anchor.x = PivotPoint_X[2];
        this.Sticker2.anchor.y =  PivotPoint_Y[2];
        this.Sticker2.alpha = testArrayAlpha[2];
        this.Sticker2.tint = testArrayColor[2];
        CharacterGroup.add(this.Sticker2);
        
        
        this.Sticker3 = game.add.sprite(Xpos_ArrayAlpha[3], Ypos_ArrayAlpha[3], ImageAssetArray[3]);
        this.Sticker3.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker3.anchor.x = PivotPoint_X[3];
        this.Sticker3.anchor.y =  PivotPoint_Y[3];
        this.Sticker3.alpha = testArrayAlpha[3];
        this.Sticker3.tint = testArrayColor[3];
        CharacterGroup.add(this.Sticker3);
        
        
        this.Sticker4 = game.add.sprite(Xpos_ArrayAlpha[4], Ypos_ArrayAlpha[4], ImageAssetArray[4]);
        this.Sticker4.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker4.anchor.x = PivotPoint_X[4];
        this.Sticker4.anchor.y =  PivotPoint_Y[4];
        this.Sticker4.alpha = testArrayAlpha[4];
        this.Sticker4.tint = testArrayColor[4];
        CharacterGroup.add(this.Sticker4);
        

        this.Sticker5 = game.add.sprite(Xpos_ArrayAlpha[5], Ypos_ArrayAlpha[5], ImageAssetArray[5]);
        this.Sticker5.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker5.anchor.x = PivotPoint_X[5];
        this.Sticker5.anchor.y =  PivotPoint_Y[5];
        this.Sticker5.alpha = testArrayAlpha[5];
        this.Sticker5.tint = testArrayColor[5];
        CharacterGroup.add(this.Sticker5);
        

        this.Sticker6 = game.add.sprite(Xpos_ArrayAlpha[6], Ypos_ArrayAlpha[6], ImageAssetArray[6]);
        this.Sticker6.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker6.anchor.x = PivotPoint_X[6];
        this.Sticker6.anchor.y =  PivotPoint_Y[6];
        this.Sticker6.alpha = testArrayAlpha[6];
        this.Sticker6.tint = testArrayColor[6];
        CharacterGroup.add(this.Sticker6);   
                
        this.Body = game.add.sprite(GameCenter_x, GameCenter_y, ImageAssetArray[0]);
        this.Body.scale.setTo(scaleRatio,scaleRatio);
        this.Body.anchor.x = PivotPoint_X[0];
        this.Body.anchor.y =  PivotPoint_Y[0];
        this.Body.alpha = testArrayAlpha[0];
        this.Body.tint = testArrayColor[0];
        CharacterGroup.add(this.Body);
        
        this.Sticker7 = game.add.sprite(Xpos_ArrayAlpha[7], Ypos_ArrayAlpha[7], ImageAssetArray[7]);
        this.Sticker7.anchor.x = PivotPoint_X[7];
        this.Sticker7.anchor.y =  PivotPoint_Y[7];
        this.Sticker7.alpha = testArrayAlpha[7];
        this.Sticker7.tint = testArrayColor[7];
        CharacterGroup.add(this.Sticker7);
        

        this.Sticker8 = game.add.sprite(Xpos_ArrayAlpha[8], Ypos_ArrayAlpha[8], ImageAssetArray[8]);
        this.Sticker8.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker8.anchor.x = PivotPoint_X[8];
        this.Sticker8.anchor.y =  PivotPoint_Y[8];
        this.Sticker8.alpha = testArrayAlpha[8];
        this.Sticker8.tint = testArrayColor[8];
        CharacterGroup.add(this.Sticker8);
        
        
        this.Sticker9 = game.add.sprite(Xpos_ArrayAlpha[9], Ypos_ArrayAlpha[9], ImageAssetArray[9]);
        this.Sticker9.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker9.anchor.x = PivotPoint_X[9];
        this.Sticker9.anchor.y =  PivotPoint_Y[9];
        this.Sticker9.alpha = testArrayAlpha[9];
        this.Sticker9.tint = testArrayColor[9];
        CharacterGroup.add(this.Sticker9);
        
        
        this.Sticker10 = game.add.sprite(Xpos_ArrayAlpha[10], Ypos_ArrayAlpha[10], ImageAssetArray[10]);
        this.Sticker10.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker10.anchor.x = PivotPoint_X[10];
        this.Sticker10.anchor.y =  PivotPoint_Y[10];
        this.Sticker10.alpha = testArrayAlpha[10];
        this.Sticker10.tint = testArrayColor[10];
        CharacterGroup.add(this.Sticker10);
        
        
        this.Sticker11 = game.add.sprite(Xpos_ArrayAlpha[11], Ypos_ArrayAlpha[11], ImageAssetArray[11]);
        this.Sticker11.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker11.anchor.x = PivotPoint_X[11];
        this.Sticker11.anchor.y =  PivotPoint_Y[11];
        this.Sticker11.alpha = testArrayAlpha[11];
        this.Sticker11.tint = testArrayColor[11];
        CharacterGroup.add(this.Sticker11);
        
        
        this.Sticker12 = game.add.sprite(Xpos_ArrayAlpha[12], Ypos_ArrayAlpha[12], ImageAssetArray[12]);
        this.Sticker12.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker12.anchor.x = PivotPoint_X[12];
        this.Sticker12.anchor.y =  PivotPoint_Y[12];
        this.Sticker12.alpha = testArrayAlpha[12];
        this.Sticker12.tint = testArrayColor[12];
        CharacterGroup.add(this.Sticker12);
        

        this.Sticker13 = game.add.sprite(Xpos_ArrayAlpha[13], Ypos_ArrayAlpha[13], ImageAssetArray[13]);
        this.Sticker13.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker13.anchor.x = PivotPoint_X[13];
        this.Sticker13.anchor.y =  PivotPoint_Y[13];
        this.Sticker13.alpha = testArrayAlpha[13];
        this.Sticker13.tint = testArrayColor[13];
        CharacterGroup.add(this.Sticker13);
        

        this.Sticker14 = game.add.sprite(Xpos_ArrayAlpha[14], Ypos_ArrayAlpha[14], ImageAssetArray[14]);
        this.Sticker14.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker14.anchor.x = PivotPoint_X[14];
        this.Sticker14.anchor.y =  PivotPoint_Y[14];
        this.Sticker14.alpha = testArrayAlpha[14];
        this.Sticker14.tint = testArrayColor[14];
        CharacterGroup.add(this.Sticker14);
        

        this.Sticker15 = game.add.sprite(Xpos_ArrayAlpha[15], Ypos_ArrayAlpha[15], ImageAssetArray[15]);
        this.Sticker15.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker15.anchor.x = PivotPoint_X[15];
        this.Sticker15.anchor.y =  PivotPoint_Y[15];
        this.Sticker15.alpha = testArrayAlpha[15];
        this.Sticker15.tint = testArrayColor[15];
        CharacterGroup.add(this.Sticker15);
        

        this.Sticker16 = game.add.sprite(Xpos_ArrayAlpha[16], Ypos_ArrayAlpha[16], ImageAssetArray[16]);
        this.Sticker16.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker16.anchor.x = PivotPoint_X[16];
        this.Sticker16.anchor.y =  PivotPoint_Y[16];
        this.Sticker16.alpha = testArrayAlpha[16];
        this.Sticker16.tint = testArrayColor[16];
        CharacterGroup.add(this.Sticker16);
        
        
        this.Sticker17 = game.add.sprite(Xpos_ArrayAlpha[17], Ypos_ArrayAlpha[17], ImageAssetArray[17]);
        this.Sticker17.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker17.anchor.x = PivotPoint_X[17];
        this.Sticker17.anchor.y =  PivotPoint_Y[17];
        this.Sticker17.alpha = testArrayAlpha[17];
        this.Sticker17.tint = testArrayColor[17];
        CharacterGroup.add(this.Sticker17);
        
                
        this.Sticker18 = game.add.sprite(Xpos_ArrayAlpha[18], Ypos_ArrayAlpha[18], ImageAssetArray[18]);
        this.Sticker18.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker18.anchor.x = PivotPoint_X[18];
        this.Sticker18.anchor.y =  PivotPoint_Y[18];
        this.Sticker18.alpha = testArrayAlpha[18];
        this.Sticker18.tint = testArrayColor[18];
        CharacterGroup.add(this.Sticker18);
                          
        this.Sticker19 = game.add.sprite(Xpos_ArrayAlpha[19], Ypos_ArrayAlpha[19], ImageAssetArray[19]);
        this.Sticker19.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker19.anchor.x = PivotPoint_X[19];
        this.Sticker19.anchor.y =  PivotPoint_Y[19];
        this.Sticker19.alpha = testArrayAlpha[19];
        this.Sticker19.tint = testArrayColor[19];
        CharacterGroup.add(this.Sticker19);
              
                                  
        this.Sticker20 = game.add.sprite(Xpos_ArrayAlpha[20], Ypos_ArrayAlpha[20], ImageAssetArray[20]);
        this.Sticker20.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker20.anchor.x = PivotPoint_X[20];
        this.Sticker20.anchor.y =  PivotPoint_Y[20];
        this.Sticker20.alpha = testArrayAlpha[20];
        this.Sticker20.tint = testArrayColor[20];
        CharacterGroup.add(this.Sticker20);
        
                                          
        this.Sticker21 = game.add.sprite(Xpos_ArrayAlpha[21], Ypos_ArrayAlpha[21], ImageAssetArray[21]);
        this.Sticker21.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker21.anchor.x = PivotPoint_X[21];
        this.Sticker21.anchor.y =  PivotPoint_Y[21];
        this.Sticker21.alpha = testArrayAlpha[21];
        this.Sticker21.tint = testArrayColor[21];
        CharacterGroup.add(this.Sticker21);
        
                                                  
        this.Sticker22 = game.add.sprite(Xpos_ArrayAlpha[22], Ypos_ArrayAlpha[22], ImageAssetArray[22]);
        this.Sticker22.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker22.anchor.x = PivotPoint_X[22];
        this.Sticker22.anchor.y =  PivotPoint_Y[22];
        this.Sticker22.alpha = testArrayAlpha[22];
        this.Sticker22.tint = testArrayColor[22];
        CharacterGroup.add(this.Sticker22);
        
                                                          
        this.Sticker23 = game.add.sprite(Xpos_ArrayAlpha[23], Ypos_ArrayAlpha[23], ImageAssetArray[23]);
        this.Sticker23.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker23.anchor.x = PivotPoint_X[23];
        this.Sticker23.anchor.y =  PivotPoint_Y[23];
        this.Sticker23.alpha = testArrayAlpha[23];
        this.Sticker23.tint = testArrayColor[23];
        CharacterGroup.add(this.Sticker23);
        
                                                                  
        this.Sticker24 = game.add.sprite(Xpos_ArrayAlpha[24], Ypos_ArrayAlpha[24], ImageAssetArray[24]);
        this.Sticker24.scale.setTo(scaleRatio,scaleRatio);
        this.Sticker24.anchor.x = PivotPoint_X[24];
        this.Sticker24.anchor.y =  PivotPoint_Y[24];
        this.Sticker24.alpha = testArrayAlpha[24];
        this.Sticker24.tint = testArrayColor[24];
        CharacterGroup.add(this.Sticker24);
        
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

    }

}