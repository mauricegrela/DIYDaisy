var StateCharacterSelect = {
    //Characters select their creation here
    preload: function () {
                


    }

    , create: function () {
        
        var titleText = game.add.text(0, 0, "Character Select Screen");
        titleText.fill = "#ffffff";
        
        
        scaleRatio = window.devicePixelRatio / 4;
        //Rock Sticker
        ButtonPosition_X = game.width / 3;
        ButtonPosition_Y = game.height / 3;
        this.PineconeSticker = game.add.sprite(ButtonPosition_X, ButtonPosition_Y, 'PineconeBody');  
        this.PineconeSticker.alpha = 1;
        this.PineconeSticker.anchor.x = 0.5;
        this.PineconeSticker.anchor.y =  0.5;
        this.PineconeSticker.inputEnabled = true;
        this.PineconeSticker.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_1);
        this.PineconeSticker.events.onInputOver.add(this.PineconeGame, this);  
        this.PineconeSticker.scale.setTo(scaleRatio,scaleRatio);
        
        //Mobile Sticker
        MobilePosition_X = game.width-game.width / 4;
        MobilePosition_Y = game.height / 4;
        this.MobileSticker = game.add.sprite(ButtonPosition_X, ButtonPosition_Y+this.PineconeSticker.height, 'MobileBody');  
        this.MobileSticker.alpha = 1;
        this.MobileSticker.anchor.x = 0.5;
        this.MobileSticker.anchor.y =  0.5;
        this.MobileSticker.inputEnabled = true;
        this.MobileSticker.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_1);
        this.MobileSticker.events.onInputOver.add(this.MobileGame, this);  
        this.MobileSticker.scale.setTo(scaleRatio,scaleRatio);
        
        //Rock Sticker
        RockPosition_X = game.width / 2;
        RockPosition_Y = game.width / 4;
        this.RockSticker = game.add.sprite(ButtonPosition_X+this.PineconeSticker.width, ButtonPosition_Y, 'RockBody');  
        this.RockSticker.alpha = 1;
        this.RockSticker.anchor.x = 0.5;
        this.RockSticker.anchor.y =  0.5;
        this.RockSticker.inputEnabled = true;
        this.RockSticker.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_1);
        this.RockSticker.events.onInputOver.add(this.RockGame, this);  
        this.RockSticker.scale.setTo(scaleRatio,scaleRatio);
        
        //SmudgeStick Sticker
        SmudgeStick_X = game.width / 2;
        SmudgeStick_Y = game.width / 8;
        this.SmudgeStickSticker = game.add.sprite(ButtonPosition_X+this.PineconeSticker.width, ButtonPosition_Y+this.PineconeSticker.height, 'SmudgeStickBody');  
        this.SmudgeStickSticker.alpha = 1;
        this.SmudgeStickSticker.anchor.x = 0.5;
        this.SmudgeStickSticker.anchor.y =  0.5;
        this.SmudgeStickSticker.inputEnabled = true;
        this.SmudgeStickSticker.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_1);
        this.SmudgeStickSticker.events.onInputOver.add(this.SmudgeStickGame, this);  
        this.SmudgeStickSticker.scale.setTo(scaleRatio,scaleRatio);
        
        //StickWand Sticker
        StickWand_X = game.width / 10;
        StickWand_Y = game.width / 8;
        this.StickWandSticker = game.add.sprite(ButtonPosition_X+this.RockSticker.width*2, ButtonPosition_Y+this.RockSticker.height, 'StickWandBody');  
        this.StickWandSticker.alpha = 1;
        this.StickWandSticker.anchor.x = 0.5;
        this.StickWandSticker.anchor.y =  0.5;
        this.StickWandSticker.inputEnabled = true;
        this.StickWandSticker.input.pixelPerfectOver = true;
        //game.input.addMoveCallback(this.p, this.Sticker_1);
        this.StickWandSticker.events.onInputOver.add(this.StickWandGame, this);  
        this.StickWandSticker.scale.setTo(scaleRatio,scaleRatio);
        
        
    }, 
    StickWandGame: function () {    

        ImageAssetArray[0]='StickWandBody';
        PivotPoint_X[0] = 0.5;
        PivotPoint_Y[0] = 0.5;    
///////////////////////////
////First Sticker Group////
///////////////////////////
        ImageAssetArray[1]='PineconeWings_1';
        PivotPoint_X[1] = 0.5;
        PivotPoint_Y[1] = 0.5;   
        ImageAssetArray[2]='PineconeWings_2';
        PivotPoint_X[2] = 0.5;
        PivotPoint_Y[2] = 0.5;   
        ImageAssetArray[3]='PineconeWings_3';
        PivotPoint_X[3] = 0.5;
        PivotPoint_Y[3] = 0.5;   
        ImageAssetArray[4]='PineconeWings_4';
        PivotPoint_X[4] = 0.5;
        PivotPoint_Y[4] = 0.5;   
        ImageAssetArray[5]='PineconeFeet_1';
        PivotPoint_X[5] = 0.5;
        PivotPoint_Y[5] = 1;   
        ImageAssetArray[6]='PineconeFeet_2';
        PivotPoint_X[6] = 0.5;
        PivotPoint_Y[6] = 1; 
        ImageAssetArray[7]='Bowtie';
        PivotPoint_X[7] = 0.5;
        PivotPoint_Y[7] = 0.5;      
        ImageAssetArray[8]='skirt';
        PivotPoint_X[8] = 0.5;
        PivotPoint_Y[8] = 0.5;   
///////////////////////////
////Second Sticker Group///
///////////////////////////
        ImageAssetArray[9]='Shoes_1';
        PivotPoint_X[9] = 0.5;
        PivotPoint_Y[9] = 1;   
        ImageAssetArray[10]='Shoes_2';
        PivotPoint_X[10] = 0.5;
        PivotPoint_Y[10] = 1;   
        ImageAssetArray[11]='PineconeEyes_1';
        PivotPoint_X[11] = 0.5;
        PivotPoint_Y[11] = 0.3;   
        ImageAssetArray[12]='PineconeEyes_2';
        PivotPoint_X[12] = 0.5;
        PivotPoint_Y[12] = 0.3; 
        ImageAssetArray[13]='PineconeEyes_3';
        PivotPoint_X[13] = 0.5;
        PivotPoint_Y[13] = 0.3; 
        ImageAssetArray[14]='PineconeEyes_4';
        PivotPoint_X[14] = 0.5;
        PivotPoint_Y[14] = 0.3; 
        ImageAssetArray[15]='PineconeEyes_5';           
        PivotPoint_X[15] = 0.5;
        PivotPoint_Y[15] = 0.3; 
        ImageAssetArray[16]='Shades_1';
        PivotPoint_X[16] = 0.5;
        PivotPoint_Y[16] = 0.3; 
///////////////////////////
////Third Sticker Group////
///////////////////////////
        ImageAssetArray[17]='Shades_2';
        PivotPoint_X[17] = 0.5;
        PivotPoint_Y[17] = 0.3; 
        ImageAssetArray[18]='PineconeNose_2';
        PivotPoint_X[18] = 0.5;
        PivotPoint_Y[18] = 0.5;    
        ImageAssetArray[19]='PineconeNose_1';
        PivotPoint_X[17] = 0.5;
        PivotPoint_Y[17] = 0; 
        ImageAssetArray[20]='PineconeHair_1';
        PivotPoint_X[20] = 0.5;
        PivotPoint_Y[20] = 0;      
        ImageAssetArray[21]='PineconeHair_2';
        PivotPoint_X[21] = 0.5;
        PivotPoint_Y[21] = 0;   
        ImageAssetArray[22]='PineconeHair_3';
        PivotPoint_X[22] = 0.5;
        PivotPoint_Y[22] = 0;   
        ImageAssetArray[23]='PineconeHeadGear_1';
        PivotPoint_X[23] = 0.5;
        PivotPoint_Y[23] = 0;   
        ImageAssetArray[24]='PineconeHeadGear_2';
        PivotPoint_X[24] = 0.5;
        PivotPoint_Y[24] = 0;   
        ImageAssetArray[25]='PineconeHeadGear_3';
        PivotPoint_X[23] = 0.5;
        PivotPoint_Y[23] = 0;   

        
        
        StickerAssigner_set1 = "Pinecone_Stickers";
        //StickerAssigner_set2 = "Rock_Stickers_2";
        game.state.start("StateMain");
        
    },  
    
    SmudgeStickGame: function () {    

        ImageAssetArray[0]='SmudgeStickBody';
        PivotPoint_X[0] = 0.5;
        PivotPoint_Y[0] = 0.5;    
///////////////////////////
////First Sticker Group////
///////////////////////////
        ImageAssetArray[1]='PineconeWings_1';
        PivotPoint_X[1] = 0.5;
        PivotPoint_Y[1] = 0.5;   
        ImageAssetArray[2]='PineconeWings_2';
        PivotPoint_X[2] = 0.5;
        PivotPoint_Y[2] = 0.5;   
        ImageAssetArray[3]='PineconeWings_3';
        PivotPoint_X[3] = 0.5;
        PivotPoint_Y[3] = 0.5;   
        ImageAssetArray[4]='PineconeWings_4';
        PivotPoint_X[4] = 0.5;
        PivotPoint_Y[4] = 0.5;   
        ImageAssetArray[5]='PineconeFeet_1';
        PivotPoint_X[5] = 0.5;
        PivotPoint_Y[5] = 1;   
        ImageAssetArray[6]='PineconeFeet_2';
        PivotPoint_X[6] = 0.5;
        PivotPoint_Y[6] = 1; 
        ImageAssetArray[7]='Bowtie';
        PivotPoint_X[7] = 0.5;
        PivotPoint_Y[7] = 0.5;      
        ImageAssetArray[8]='skirt';
        PivotPoint_X[8] = 0.5;
        PivotPoint_Y[8] = 0.5;   
///////////////////////////
////Second Sticker Group///
///////////////////////////
        ImageAssetArray[9]='Shoes_1';
        PivotPoint_X[9] = 0.5;
        PivotPoint_Y[9] = 0.5;   
        ImageAssetArray[10]='Shoes_2';
        PivotPoint_X[10] = 0.5;
        PivotPoint_Y[10] = 0.5;   
        ImageAssetArray[11]='PineconeEyes_1';
        PivotPoint_X[11] = 0.5;
        PivotPoint_Y[11] = 0.5;   
        ImageAssetArray[12]='PineconeEyes_2';
        PivotPoint_X[12] = 0.5;
        PivotPoint_Y[12] = 1;   
        ImageAssetArray[13]='PineconeEyes_3';
        PivotPoint_X[13] = 0.5;
        PivotPoint_Y[13] = 1; 
        ImageAssetArray[14]='PineconeEyes_4';
        PivotPoint_X[14] = 0.5;
        PivotPoint_Y[14] = 0.5;
        ImageAssetArray[15]='PineconeEyes_5';           
        PivotPoint_X[15] = 0.5;
        PivotPoint_Y[15] = 0.5;
        ImageAssetArray[16]='Shades_1';
        PivotPoint_X[16] = 0.5;
        PivotPoint_Y[16] = 1;   
///////////////////////////
////Third Sticker Group////
///////////////////////////
        ImageAssetArray[17]='Shades_2';
        PivotPoint_X[17] = 0.5;
        PivotPoint_Y[17] = 1; 
        ImageAssetArray[18]='PineconeNose_2';
        PivotPoint_X[18] = 0.5;
        PivotPoint_Y[18] = 0.5;    
        ImageAssetArray[19]='PineconeNose_1';
        PivotPoint_X[17] = 0.5;
        PivotPoint_Y[17] = 1; 
        ImageAssetArray[20]='PineconeHair_1';
        PivotPoint_X[20] = 0.5;
        PivotPoint_Y[20] = 0.5;      
        ImageAssetArray[21]='PineconeHair_2';
        PivotPoint_X[21] = 0.5;
        PivotPoint_Y[21] = 0.5;   
        ImageAssetArray[22]='PineconeHair_3';
        PivotPoint_X[22] = 0.5;
        PivotPoint_Y[22] = 0.5;   
        ImageAssetArray[23]='PineconeHeadGear_1';
        PivotPoint_X[23] = 0.5;
        PivotPoint_Y[23] = 0.5;   
        ImageAssetArray[24]='PineconeHeadGear_2';
        PivotPoint_X[24] = 0.5;
        PivotPoint_Y[24] = 0.5;   
        ImageAssetArray[25]='PineconeHeadGear_3';
        PivotPoint_X[23] = 0.5;
        PivotPoint_Y[23] = 1;   

        
        
        StickerAssigner_set1 = "Pinecone_Stickers";
        //StickerAssigner_set2 = "Rock_Stickers_2";
        game.state.start("StateMain");
        
    },  
    
    MobileGame: function () {    

        ImageAssetArray[0]='MobileBody';
        PivotPoint_X[0] = 0.5;
        PivotPoint_Y[0] = 0.5;    
///////////////////////////
////First Sticker Group////
///////////////////////////
        ImageAssetArray[1]='PineconeWings_1';
        PivotPoint_X[1] = 0.5;
        PivotPoint_Y[1] = 0.5;   
        ImageAssetArray[2]='PineconeWings_2';
        PivotPoint_X[2] = 0.5;
        PivotPoint_Y[2] = 0.5;   
        ImageAssetArray[3]='PineconeWings_3';
        PivotPoint_X[3] = 0.5;
        PivotPoint_Y[3] = 0.5;   
        ImageAssetArray[4]='PineconeWings_4';
        PivotPoint_X[4] = 0.5;
        PivotPoint_Y[4] = 0.5;   
        ImageAssetArray[5]='PineconeFeet_1';
        PivotPoint_X[5] = 0.5;
        PivotPoint_Y[5] = 1;   
        ImageAssetArray[6]='PineconeFeet_2';
        PivotPoint_X[6] = 0.5;
        PivotPoint_Y[6] = 1; 
        ImageAssetArray[7]='Bowtie';
        PivotPoint_X[7] = 0.5;
        PivotPoint_Y[7] = 0.5;      
        ImageAssetArray[8]='skirt';
        PivotPoint_X[8] = 0.5;
        PivotPoint_Y[8] = 0.5;   
///////////////////////////
////Second Sticker Group///
///////////////////////////
        ImageAssetArray[9]='Shoes_1';
        PivotPoint_X[9] = 0.5;
        PivotPoint_Y[9] = 0.5;   
        ImageAssetArray[10]='Shoes_2';
        PivotPoint_X[10] = 0.5;
        PivotPoint_Y[10] = 0.5;   
        ImageAssetArray[11]='PineconeEyes_1';
        PivotPoint_X[11] = 0.5;
        PivotPoint_Y[11] = 0.5;   
        ImageAssetArray[12]='PineconeEyes_2';
        PivotPoint_X[12] = 0.5;
        PivotPoint_Y[12] = 1;   
        ImageAssetArray[13]='PineconeEyes_3';
        PivotPoint_X[13] = 0.5;
        PivotPoint_Y[13] = 1; 
        ImageAssetArray[14]='PineconeEyes_4';
        PivotPoint_X[14] = 0.5;
        PivotPoint_Y[14] = 0.5;
        ImageAssetArray[15]='PineconeEyes_5';           
        PivotPoint_X[15] = 0.5;
        PivotPoint_Y[15] = 0.5;
        ImageAssetArray[16]='Shades_1';
        PivotPoint_X[16] = 0.5;
        PivotPoint_Y[16] = 1;   
///////////////////////////
////Third Sticker Group////
///////////////////////////
        ImageAssetArray[17]='Shades_2';
        PivotPoint_X[17] = 0.5;
        PivotPoint_Y[17] = 1; 
        ImageAssetArray[18]='PineconeNose_2';
        PivotPoint_X[18] = 0.5;
        PivotPoint_Y[18] = 0.5;    
        ImageAssetArray[19]='PineconeNose_1';
        PivotPoint_X[17] = 0.5;
        PivotPoint_Y[17] = 1; 
        ImageAssetArray[20]='PineconeHair_1';
        PivotPoint_X[20] = 0.5;
        PivotPoint_Y[20] = 0.5;      
        ImageAssetArray[21]='PineconeHair_2';
        PivotPoint_X[21] = 0.5;
        PivotPoint_Y[21] = 0.5;   
        ImageAssetArray[22]='PineconeHair_3';
        PivotPoint_X[22] = 0.5;
        PivotPoint_Y[22] = 0.5;   
        ImageAssetArray[23]='PineconeHeadGear_1';
        PivotPoint_X[23] = 0.5;
        PivotPoint_Y[23] = 0.5;   
        ImageAssetArray[24]='PineconeHeadGear_2';
        PivotPoint_X[24] = 0.5;
        PivotPoint_Y[24] = 0.5;   
        ImageAssetArray[25]='PineconeHeadGear_3';
        PivotPoint_X[23] = 0.5;
        PivotPoint_Y[23] = 1;   

        
        
        StickerAssigner_set1 = "Pinecone_Stickers";
        //StickerAssigner_set2 = "Rock_Stickers_2";
        game.state.start("StateMain");
        
    },  
    
    RockGame: function () {    

        ImageAssetArray[0]='RockBody';
        PivotPoint_X[0] = 0.5;
        PivotPoint_Y[0] = 0.5;    
///////////////////////////
////First Sticker Group////
///////////////////////////
        ImageAssetArray[1]='PineconeWings_1';
        PivotPoint_X[1] = 0.5;
        PivotPoint_Y[1] = 0.5;   
        ImageAssetArray[2]='PineconeWings_2';
        PivotPoint_X[2] = 0.5;
        PivotPoint_Y[2] = 0.5;   
        ImageAssetArray[3]='PineconeWings_3';
        PivotPoint_X[3] = 0.5;
        PivotPoint_Y[3] = 0.5;   
        ImageAssetArray[4]='PineconeWings_4';
        PivotPoint_X[4] = 0.5;
        PivotPoint_Y[4] = 0.5;   
        ImageAssetArray[5]='PineconeFeet_1';
        PivotPoint_X[5] = 0.5;
        PivotPoint_Y[5] = 1;   
        ImageAssetArray[6]='PineconeFeet_2';
        PivotPoint_X[6] = 0.5;
        PivotPoint_Y[6] = 1; 
        ImageAssetArray[7]='Bowtie';
        PivotPoint_X[7] = 0.5;
        PivotPoint_Y[7] = 0.5;      
        ImageAssetArray[8]='skirt';
        PivotPoint_X[8] = 0.5;
        PivotPoint_Y[8] = 0.5;   
///////////////////////////
////Second Sticker Group///
///////////////////////////
        ImageAssetArray[9]='Shoes_1';
        PivotPoint_X[9] = 0.5;
        PivotPoint_Y[9] = 0.5;   
        ImageAssetArray[10]='Shoes_2';
        PivotPoint_X[10] = 0.5;
        PivotPoint_Y[10] = 0.5;   
        ImageAssetArray[11]='PineconeEyes_1';
        PivotPoint_X[11] = 0.5;
        PivotPoint_Y[11] = 0.5;   
        ImageAssetArray[12]='PineconeEyes_2';
        PivotPoint_X[12] = 0.5;
        PivotPoint_Y[12] = 1;   
        ImageAssetArray[13]='PineconeEyes_3';
        PivotPoint_X[13] = 0.5;
        PivotPoint_Y[13] = 1; 
        ImageAssetArray[14]='PineconeEyes_4';
        PivotPoint_X[14] = 0.5;
        PivotPoint_Y[14] = 0.5;
        ImageAssetArray[15]='PineconeEyes_5';           
        PivotPoint_X[15] = 0.5;
        PivotPoint_Y[15] = 0.5;
        ImageAssetArray[16]='Shades_1';
        PivotPoint_X[16] = 0.5;
        PivotPoint_Y[16] = 1;   
///////////////////////////
////Third Sticker Group////
///////////////////////////
        ImageAssetArray[17]='Shades_2';
        PivotPoint_X[17] = 0.5;
        PivotPoint_Y[17] = 1; 
        ImageAssetArray[18]='PineconeNose_2';
        PivotPoint_X[18] = 0.5;
        PivotPoint_Y[18] = 0.5;    
        ImageAssetArray[19]='PineconeNose_1';
        PivotPoint_X[17] = 0.5;
        PivotPoint_Y[17] = 1; 
        ImageAssetArray[20]='PineconeHair_1';
        PivotPoint_X[20] = 0.5;
        PivotPoint_Y[20] = 0.5;      
        ImageAssetArray[21]='PineconeHair_2';
        PivotPoint_X[21] = 0.5;
        PivotPoint_Y[21] = 0.5;   
        ImageAssetArray[22]='PineconeHair_3';
        PivotPoint_X[22] = 0.5;
        PivotPoint_Y[22] = 0.5;   
        ImageAssetArray[23]='PineconeHeadGear_1';
        PivotPoint_X[23] = 0.5;
        PivotPoint_Y[23] = 0.5;   
        ImageAssetArray[24]='PineconeHeadGear_2';
        PivotPoint_X[24] = 0.5;
        PivotPoint_Y[24] = 0.5;   
        ImageAssetArray[25]='PineconeHeadGear_3';
        PivotPoint_X[23] = 0.5;
        PivotPoint_Y[23] = 1; 

        StickerAssigner_set1 = "Pinecone_Stickers";
        //StickerAssigner_set2 = "Rock_Stickers_2";
        game.state.start("StateMain");
        
    },  
    
    PineconeGame: function () {

        ImageAssetArray[0]='PineconeBody';
        PivotPoint_X[0] = 0.5;
        PivotPoint_Y[0] = 0.5;    

        StickerAssigner_set1 = "Pinecone_Stickers";
        //StickerAssigner_set2 = "Rock_Stickers_2";
        game.state.start("StateMain");
    //video1.stop();
    },
    
    update: function () {

    }

}