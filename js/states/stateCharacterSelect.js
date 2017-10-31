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
        ImageAssetArray[1]='PineconeWings_1';
        PivotPoint_X[1] = 0.5;
        PivotPoint_Y[1] = 0.5;   
        ImageAssetArray[2]='PineconeWings_2';
        PivotPoint_X[2] = 0.5;
        PivotPoint_Y[2] = 0.5;   
        ImageAssetArray[3]='PineconeEyes_1';
        PivotPoint_X[3] = 0.5;
        PivotPoint_Y[3] = 0.5;   
        ImageAssetArray[4]='PineconeEyes_2';
        PivotPoint_X[4] = 0.5;
        PivotPoint_Y[4] = 0.5;   
        ImageAssetArray[5]='PineconeFeet_1';
        PivotPoint_X[5] = 0.5;
        PivotPoint_Y[5] = 1;   
        ImageAssetArray[6]='PineconeFeet_2';
        PivotPoint_X[6] = 0.5;
        PivotPoint_Y[6] = 1; 
        ImageAssetArray[9]='PineconeFeet_2';
        PivotPoint_X[9] = 0.5;
        PivotPoint_Y[9] = 0.5;      
        ImageAssetArray[10]='PineconeWings_1';
        PivotPoint_X[10] = 0.5;
        PivotPoint_Y[10] = 0.5;   
        ImageAssetArray[11]='PineconeWings_2';
        PivotPoint_X[11] = 0.5;
        PivotPoint_Y[11] = 0.5;   
        ImageAssetArray[12]='PineconeEyes_1';
        PivotPoint_X[12] = 0.5;
        PivotPoint_Y[12] = 0.5;   
        ImageAssetArray[13]='PineconeEyes_2';
        PivotPoint_X[13] = 0.5;
        PivotPoint_Y[13] = 0.5;   
        ImageAssetArray[14]='PineconeFeet_1';
        PivotPoint_X[14] = 0.5;
        PivotPoint_Y[14] = 1;   
        ImageAssetArray[15]='PineconeFeet_2';
        PivotPoint_X[15] = 0.5;
        PivotPoint_Y[15] = 1; 
        ImageAssetArray[16]='PineconeMouth_1';
        PivotPoint_X[16] = 0.5;
        PivotPoint_Y[16] = 0.5;
        ImageAssetArray[17]='PineconeMouth_2';           
        PivotPoint_X[17] = 0.5;
        PivotPoint_Y[17] = 0.5;
        ImageAssetArray[18]='PineconeFeet_1';
        PivotPoint_X[18] = 0.5;
        PivotPoint_Y[18] = 1;   
        ImageAssetArray[19]='PineconeFeet_2';
        PivotPoint_X[19] = 0.5;
        PivotPoint_Y[19] = 1; 
        ImageAssetArray[20]='PineconeFeet_2';
        PivotPoint_X[20] = 0.5;
        PivotPoint_Y[20] = 0.5;      
        ImageAssetArray[21]='PineconeWings_1';
        PivotPoint_X[21] = 0.5;
        PivotPoint_Y[21] = 0.5;   
        ImageAssetArray[22]='PineconeWings_2';
        PivotPoint_X[22] = 0.5;
        PivotPoint_Y[22] = 0.5;   
        ImageAssetArray[23]='PineconeEyes_1';
        PivotPoint_X[23] = 0.5;
        PivotPoint_Y[23] = 0.5;   
        ImageAssetArray[24]='PineconeEyes_2';
        PivotPoint_X[24] = 0.5;
        PivotPoint_Y[24] = 0.5;   
        ImageAssetArray[25]='PineconeFeet_1';
        PivotPoint_X[25] = 0.5;
        PivotPoint_Y[25] = 1;   

        
        
        StickerAssigner_set1 = "Pinecone_Stickers";
        //StickerAssigner_set2 = "Rock_Stickers_2";
        game.state.start("StateMain");
    //video1.stop();
    },
    
    update: function () {

    }

}