var StateParentsCorner = {


    
    preload: function () {
        
        //game.load.image('Whiskers', testArray[0]);
            var titleText;
        
    }

    , create: function () {
        

        
        
        var BottomButtonPos_X = game.width/8;
        var BottomButtonPos_Y = game.height - 50;
        //scaleRatio = window.devicePixelRatio / 4;
        
        var PDFButtonsPos_x = game.width/4;
        var PDFButtonsPos_y = game.height/2; 
        var PDFButtonScale = scaleRatio/6;
        
        var Credits = "Credits";
        var TermsAndConditions = "terms and conditions";
        var privacystatement = "PrivacyStatement";
        
        
                
        //Background Working
        this.Background = game.add.sprite(0,0, 'VideoBackGround');
        this.Background.anchor.set(0.0);
        this.Background.width =game.width; 
        this.Background.height =game.height;

        
        
        ////////////////
        //Text buttons//
        ////////////////
        this.PlaceModeButton = gameButtons.addButton("credits",
        this.game.width, 
        this.game.height,
        this.TextSetUpButton, {param1: Credits,}, this);
        this.PlaceModeButton.anchor.setTo(0.5);
        this.PlaceModeButton.scale.setTo(scaleRatio,scaleRatio);
        this.PlaceModeButton.x = this.game.width/2 + this.PlaceModeButton.width;
        this.PlaceModeButton.y = this.game.height - this.PlaceModeButton.height;
        
        this.PlaceModeButton = gameButtons.addButton("terms and conditions",
        this.game.width, 
        this.game.height,
        this.TextSetUpButton, {param1: TermsAndConditions,}, this);
        this.PlaceModeButton.anchor.setTo(0.5);
        this.PlaceModeButton.scale.setTo(scaleRatio,scaleRatio);
        this.PlaceModeButton.x = this.game.width/2 ;
        this.PlaceModeButton.y = this.game.height - this.PlaceModeButton.height;
        
        this.PlaceModeButton = gameButtons.addButton("privacy",
        this.game.width, 
        this.game.height,
        this.TextSetUpButton, {param1: privacystatement,}, this);
        this.PlaceModeButton.anchor.setTo(0.5);
        this.PlaceModeButton.scale.setTo(scaleRatio,scaleRatio);
        this.PlaceModeButton.x = this.game.width/2 - this.PlaceModeButton.width;
        this.PlaceModeButton.y = this.game.height - this.PlaceModeButton.height;
        
        
        


        //Character Rock Stickers
        this.RockCharacter = game.add.sprite(PDFButtonsPos_x, PDFButtonsPos_y , 'RockBody');   
        this.RockCharacter.inputEnabled = true;
        this.RockCharacter.events.onInputOver.add(this.imageClick, {param1: "PDFS/diyLadyBugRock.pdf",}, this.RockCharacter);   
        this.RockCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);
        
        //this.RockCharacter.y = game.height-this.RockCharacter.height*1.5;  
        //PDFButtonsPos_y = game.height-this.RockCharacter.height*1.5;  
        
        //Character Pinecone Stickers
        this.PineconeCharacter = game.add.sprite(PDFButtonsPos_x+this.RockCharacter.width, PDFButtonsPos_y , 'PineconeBody');   
        this.PineconeCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.PineconeCharacter.events.onInputOver.add(this.imageClick, {param1: "PDFS/diyPineconeFriend.pdf",}, this.PineconeCharacter);   
        this.PineconeCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);

        //Character Mobile Stickers
        this.MobileCharacter = game.add.sprite(PDFButtonsPos_x+this.RockCharacter.width*2, PDFButtonsPos_y , 'MobileBody');   
        this.MobileCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.MobileCharacter.events.onInputOver.add(this.imageClick, {param1: "PDFS/diyForestMobile.pdf",}, this.MobileCharacter);   
        this.MobileCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);
                
        //Character StickWand Stickers
        this.StickWandCharacter = game.add.sprite(PDFButtonsPos_x+this.RockCharacter.width*3, PDFButtonsPos_y , 'StickWandBody');   
        this.StickWandCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.StickWandCharacter.events.onInputOver.add(this.imageClick, {param1: "PDFS/diyNatureWand.pdf",}, this.StickWandCharacter);   
        this.StickWandCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);
        
        //Character Mobile Stickers
        this.StickWandCharacter = game.add.sprite(PDFButtonsPos_x+this.RockCharacter.width*4, PDFButtonsPos_y , 'LeafBody');
        this.StickWandCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.StickWandCharacter.events.onInputOver.add(this.imageClick, {param1: "PDFS/diyFlowerPetalArt.pdf",}, this.StickWandCharacter);   
        this.StickWandCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);
        
        ///////////////
        //Text Bodies//
        ///////////////
        CreditsGroup = game.add.group();
        
        this.charactercarousel = game.add.sprite(game.width/2, game.height/2, 'StickerCaroselTab',0);
        this.charactercarousel.anchor.x = 0.5;
        this.charactercarousel.anchor.y =  0;
        this.charactercarousel.scale.setTo(scaleRatio,scaleRatio);
        CreditsGroup.add(this.charactercarousel);
        //Credits 
        
        /*
        //*character Carosels
        this.CloseButton = gameButtons.addButton("privacy", 
        this.game.width/2, 
        this.game.height, this.CloseButton, this);
        this.CloseButton.scale.setTo(scaleRatio,scaleRatio);
        this.CloseButton.anchor.set(0.5, 0.5);
        this.CloseButton.x = this.game.width/8;
        this.CloseButton.y = this.game.height-this.CloseButton.width;
        CreditsGroup.add(this.CloseButton);*/
        
        this.CloseButton = game.add.sprite(
        this.game.width/2, 
        this.game.height/2,
        'CloseButton');
        this.CloseButton.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.CloseButton.events.onInputOver.add( this.CloseButtonpress, this.CloseButton);   
        this.CloseButton.scale.setTo(scaleRatio,scaleRatio);
        this.CloseButton.x = this.game.width/8;
        this.CloseButton.y = this.game.height-this.CloseButton.width;
        CreditsGroup.add(this.CloseButton);
        

        
        //this.AlphaButton.x = MenuTopButtons_Pos_x-this.AlphaButton.width;  

        titleText = game.add.text(game.width/2, game.height-game.height/4, "Parents Corner");
        titleText.fill = "#ff0000";
        titleText.anchor.set(0.5, 0.5);
        CreditsGroup.add(titleText);
        
        CreditsGroup.visible = false;
     
        
        
        this.btnStart = gameButtons.addButton("play", 
        this.game.width/2, 
        this.game.height/3, this.startGame, this);
        this.btnStart.scale.setTo(scaleRatio,scaleRatio);
        titleText.anchor.set(0.5, 0.5);
        this.btnStart.x = this.game.width/2+this.btnStart.width/2;
    
    }, 
    
    startGame: function () {  
    game.state.start("StateIntroMovie");
    //video1.stop();
    }, 
    
    
    CloseButtonpress: function () {
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