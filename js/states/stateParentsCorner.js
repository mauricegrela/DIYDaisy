var StateParentsCorner = {


    
    preload: function () {
        
        //game.load.image('Whiskers', testArray[0]);
            var titleText;
        
    }

    , create: function () {
        

        
        
        var BottomButtonPos_X = game.width/8;
        var BottomButtonPos_Y = game.height - 50;
        scaleRatio = window.devicePixelRatio / 2;
        
        var PDFButtonsPos_x = game.width/4;
        var PDFButtonsPos_y = game.height/2; 
        var PDFButtonScale = scaleRatio/4;
        
        var Credits = "Credits";
        var TermsAndConditions = "terms and conditions";
        var privacystatement = "PrivacyStatement";
        
        ////////////////
        //Text buttons//
        ////////////////
        //Credits
        this.PlaceModeButton = gameButtons.addButton("credits", BottomButtonPos_X, BottomButtonPos_Y, this.TextSetUpButton, {param1: Credits,}, this);//Save File
        //ExtroMenu.add(this.PlaceModeButton);
        
        //Terms of Privacy
        this.PlaceModeButton = gameButtons.addButton("terms and conditions", BottomButtonPos_X+this.PlaceModeButton.width, BottomButtonPos_Y, this.TextSetUpButton, {param1: TermsAndConditions,}, this);//Save File
        //ExtroMenu.add(this.PlaceModeButton);
        
        //Credits
        this.PlaceModeButton = gameButtons.addButton("privacy", BottomButtonPos_X+this.PlaceModeButton.width*2, BottomButtonPos_Y, this.TextSetUpButton, {param1: privacystatement,}, this);//Save File
        //ExtroMenu.add(this.PlaceModeButton);
        

        


        //Character Rock Stickers
        this.RockCharacter = game.add.sprite(PDFButtonsPos_x, PDFButtonsPos_y , 'RockBody');   
        this.RockCharacter.inputEnabled = true;
        this.RockCharacter.events.onInputOver.add(this.imageClick, {param1: "PDFS/TestBuild.pdf",}, this.RockCharacter);   
        this.RockCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);
        
        //this.RockCharacter.y = game.height-this.RockCharacter.height*1.5;  
        //PDFButtonsPos_y = game.height-this.RockCharacter.height*1.5;  
        
        //Character Pinecone Stickers
        this.PineconeCharacter = game.add.sprite(PDFButtonsPos_x+this.RockCharacter.width, PDFButtonsPos_y , 'PineconeBody');   
        this.PineconeCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.PineconeCharacter.events.onInputOver.add(this.imageClick, {param1: "PDFS/TestBuild.pdf",}, this.PineconeCharacter);   
        this.PineconeCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);

        //Character Mobile Stickers
        this.MobileCharacter = game.add.sprite(PDFButtonsPos_x+this.RockCharacter.width*2, PDFButtonsPos_y , 'MobileBody');   
        this.MobileCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.MobileCharacter.events.onInputOver.add(this.imageClick, {param1: "PDFS/TestBuild.pdf",}, this.MobileCharacter);   
        this.MobileCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);
                
        //Character StickWand Stickers
        this.StickWandCharacter = game.add.sprite(PDFButtonsPos_x+this.RockCharacter.width*3, PDFButtonsPos_y , 'StickWandBody');   
        this.StickWandCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.StickWandCharacter.events.onInputOver.add(this.imageClick, {param1: "PDFS/TestBuild.pdf",}, this.StickWandCharacter);   
        this.StickWandCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);
        
        //Character Mobile Stickers
        this.StickWandCharacter = game.add.sprite(PDFButtonsPos_x+this.RockCharacter.width*4, PDFButtonsPos_y , 'StickWandBody');
        this.StickWandCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.StickWandCharacter.events.onInputOver.add(this.imageClick, {param1: "PDFS/TestBuild.pdf",}, this.StickWandCharacter);   
        this.StickWandCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);
        
        ///////////////
        //Text Bodies//
        ///////////////
        //Credits 
        CreditsGroup = game.add.group();
        //character Carosels
        charactercarouselScaleOffset = 1.2;
        this.charactercarousel = game.add.sprite(game.width/2, game.height, 'characterCaroselTab');
        this.charactercarousel.anchor.x = 0.5;
        this.charactercarousel.anchor.y =  1;
        CreditsGroup.add(this.charactercarousel);
        
        //close Button
        this.AlphaButton = gameButtons.addGenericButton("0", game.width/1.5, game.height/2, this.CloseButton, this,"creativeButtons",2); 
        this.AlphaButton.scale.setTo(scaleRatio,scaleRatio);
        CreditsGroup.add(this.AlphaButton);
        
        //this.AlphaButton.x = MenuTopButtons_Pos_x-this.AlphaButton.width;  

        titleText = game.add.text(game.width/2, game.height-game.height/4, "Parents Corner");
        titleText.fill = "#ff0000";
        titleText.anchor.set(0.5, 0.5);
        CreditsGroup.add(titleText);
        
        CreditsGroup.visible = false;
        
        
        this.btnStart = gameButtons.addButton("play", game.world.centerX, game.world.centerY-game.height/8, this.startGame, this);
        titleText.anchor.set(0.5, 0.5);
        
    }, 
    
    startGame: function () {  
    game.state.start("StateIntroMovie");
    //video1.stop();
    }, 
    
    
    CloseButton: function () {
    CreditsGroup.visible = false;
    }, 
    
    imageClick: function()
    {
    var newWin = window.open(this.param1,"_blank");
    },
    
    TextSetUpButton: function () {
    //this.titleText.text.set = "sss";
    titleText.setText(this.param1);
    CreditsGroup.visible = true;
    }, 
    
    update: function () {

    }

}