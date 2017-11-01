var StateCharacterSelect = {
    //Characters select their creation here
    preload: function () {
        

    }

    , create: function () {
        
        var titleText = game.add.text(0, 0, "Character Select Screen");
        titleText.fill = "#ffffff";
        //titleText.anchor.set(0.5, 0.5);

        this.btnStart = gameButtons.addButton("start", game.world.centerX, 50, this.RockGame, this);
        
        
        this.btnStart2 = gameButtons.addButton("start", game.world.centerX, 250, this.PineconeGame, this);
       // video1 = game.add.video('Intro');
        //video1.play(true); 
        //video1.addToWorld();
        
    }, 
    RockGame: function () {    

        ImageAssetArray[0]='RockBody';
        PivotPoint_X[0] = 0.5;
        PivotPoint_Y[0] = 0.5;       
        ImageAssetArray[1]='RockWings_1';
        PivotPoint_X[1] = 0.5;
        PivotPoint_Y[1] = 0.5;  
        ImageAssetArray[2]='RockWings_2';
        PivotPoint_X[2] = 0.5;
        PivotPoint_Y[2] = 0.5; 
        ImageAssetArray[3]='RockFace_1';
        PivotPoint_X[3] = 0.5;
        PivotPoint_Y[3] = 0.5; 
        ImageAssetArray[4]='RockFace_2';
        PivotPoint_X[4] = 0.5;
        PivotPoint_Y[4] = 0.5; 
        ImageAssetArray[5]='RockFeet_1';
        PivotPoint_X[5] = 0.5;
        PivotPoint_Y[5] = 1; 
        ImageAssetArray[6]='RockFeet_2';
        PivotPoint_X[6] = 0.5;
        PivotPoint_Y[6] = 1; 
        ImageAssetArray[7]='RockAntenae_1';
        PivotPoint_X[7] = 0.5;
        PivotPoint_Y[7] = 0; 
        ImageAssetArray[8]='RockAntenae_2';         
        PivotPoint_X[8] = 0.5;
        PivotPoint_Y[8] = 0; 
        StickerAssigner_set1 = "Rock_Stickers_1";
        //StickerAssigner_set2 = "Rock_Stickers_2";
        game.state.start("StateMain");
        
    },  
    
    PineconeGame: function () {

        ImageAssetArray[0]='PineconeBody';
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
    //video1.stop();
    },
    
    update: function () {

    }

}