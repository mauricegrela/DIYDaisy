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
        StickerAssigner = "Rock_Stickers";          
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
        ImageAssetArray[7]='PineconeMouth_1';
        PivotPoint_X[7] = 0.5;
        PivotPoint_Y[7] = 0.5;
        ImageAssetArray[8]='PineconeMouth_2';           
        PivotPoint_X[8] = 0.5;
        PivotPoint_Y[8] = 0.5; 
        StickerAssigner = "Pinecone_Stickers";      
        game.state.start("StateMain");
    //video1.stop();
    },
    
    update: function () {

    }

}