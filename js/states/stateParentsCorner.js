var StateParentsCorner = {


    
    preload: function () {
        
        //game.load.image('Whiskers', testArray[0]);
            var titleText;
        
    }

    , create: function () {
        


        var BottomButtonPos_X = game.width/8;
        var BottomButtonPos_Y = game.height - 50;
        //scaleRatio = window.devicePixelRatio / 4;
        
        var PDFButtonsPos_x = game.width/2;
        var PDFButtonsPos_y = game.height/2; 
        var PDFButtonScale = 0.5;
        
        var Credits = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        var TermsAndConditions = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        var privacystatement = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        
        
                
        this.craftBackground1 = game.add.sprite(0, 0, 'ParentsCornerBG');
        this.craftBackground1.height = this.game.height;
        this.craftBackground1.width = this.game.width;

        CharacterGroup = game.add.group();
        
        ////////////////
        //Text buttons//
        ////////////////
        this.PlaceModeButton = gameButtons.addButton("credits",
        this.game.width, 
        this.game.height,
        this.TextSetUpButton, {param1: Credits,}, this);
        this.PlaceModeButton.anchor.setTo(0.5);
        this.PlaceModeButton.scale.setTo(ButtonScaleAdjustment,ButtonScaleAdjustment);
        this.PlaceModeButton.x = this.game.width/2 + this.PlaceModeButton.width;
        this.PlaceModeButton.y = this.game.height - this.PlaceModeButton.height*3.5;
        CharacterGroup.add(this.PlaceModeButton);
        
        this.PlaceModeButton = gameButtons.addButton("terms and conditions",
        this.game.width, 
        this.game.height,
        this.TextSetUpButton, {param1: TermsAndConditions,}, this);
        this.PlaceModeButton.anchor.setTo(0.5);
        this.PlaceModeButton.scale.setTo(ButtonScaleAdjustment,ButtonScaleAdjustment);
        this.PlaceModeButton.x = this.game.width/2 ;
        this.PlaceModeButton.y = this.game.height - this.PlaceModeButton.height*3.5;
        CharacterGroup.add(this.PlaceModeButton);
        
        this.PlaceModeButton = gameButtons.addButton("privacy",
        this.game.width, 
        this.game.height,
        this.TextSetUpButton, {param1: privacystatement,}, this);
        this.PlaceModeButton.anchor.setTo(0.5);
        this.PlaceModeButton.scale.setTo(ButtonScaleAdjustment,ButtonScaleAdjustment);
        this.PlaceModeButton.x = this.game.width/2 - this.PlaceModeButton.width;
        this.PlaceModeButton.y = this.game.height - this.PlaceModeButton.height*3.5;
        CharacterGroup.add(this.PlaceModeButton);
        
        
        

        //Character Rock Stickers
        this.RockCharacter = game.add.sprite(PDFButtonsPos_x, PDFButtonsPos_y , 'RockPDF');
        this.RockCharacter.anchor.setTo(0.5);
        //this.RockCharacter.frame = 1;
        this.RockCharacter.inputEnabled = true;
        this.RockCharacter.events.onInputOver.add(this.imageClick, {param1: "PDFS/diyLadyBugRock.pdf",}, this.RockCharacter);   
        this.RockCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);
        CharacterGroup.add(this.RockCharacter);
        //this.RockCharacter.y = game.height-this.RockCharacter.height*1.5;  
        //PDFButtonsPos_y = game.height-this.RockCharacter.height*1.5;  
        
        //Character Pinecone Stickers
        this.PineconeCharacter = game.add.sprite(PDFButtonsPos_x+this.RockCharacter.width, PDFButtonsPos_y , 'PineconePDF');   
        //this.PineconeCharacter.frame = 4;
        this.PineconeCharacter.anchor.setTo(0.5);
        this.PineconeCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.PineconeCharacter.events.onInputOver.add(this.imageClick, {param1: "PDFS/diyPineconeFriend.pdf",}, this.PineconeCharacter);   
        this.PineconeCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);
        CharacterGroup.add(this.PineconeCharacter);
        
        //Character Mobile Stickers
        this.MobileCharacter = game.add.sprite(PDFButtonsPos_x+this.RockCharacter.width*2, PDFButtonsPos_y , 'MobilePDF');   
        //this.MobileCharacter.frame = 0;
        this.MobileCharacter.inputEnabled = true;
        this.MobileCharacter.anchor.setTo(0.5);
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.MobileCharacter.events.onInputOver.add(this.imageClick, {param1: "PDFS/diyForestMobile.pdf",}, this.MobileCharacter);   
        this.MobileCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);
        CharacterGroup.add(this.MobileCharacter);
        
        //Character StickWand Stickers
        this.StickWandCharacter = game.add.sprite(PDFButtonsPos_x-this.RockCharacter.width, PDFButtonsPos_y , 'StickWandPDF');   
        //this.StickWandCharacter.frame = 2;
        this.StickWandCharacter.inputEnabled = true;
        this.StickWandCharacter.anchor.setTo(0.5);
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.StickWandCharacter.events.onInputOver.add(this.imageClick, {param1: "PDFS/diyNatureWand.pdf",}, this.StickWandCharacter);   
        this.StickWandCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);
        CharacterGroup.add(this.StickWandCharacter);
        
        //Character Mobile Stickers
        this.LeafCharacter = game.add.sprite(PDFButtonsPos_x-this.RockCharacter.width*2, PDFButtonsPos_y , 'LeafPDF');
        //this.LeafCharacter.frame = 3;
        this.LeafCharacter.inputEnabled = true;
        this.LeafCharacter.anchor.setTo(0.5);
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.LeafCharacter.events.onInputOver.add(this.imageClick, {param1: "PDFS/diyFlowerPetalArt.pdf",}, this.LeafCharacter);   
        this.LeafCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);
        CharacterGroup.add(this.LeafCharacter);
        ///////////////
        //Text Bodies//
        ///////////////
        CreditsGroup = game.add.group();
        
        this.Logo = game.add.sprite(0,0, 'daisylogo');
        this.Logo.scale.setTo(scaleRatio,scaleRatio);
        this.Logo.inputEnabled = true;
        this.Logo.anchor.set(0,0.4);
        this.Logo.x =  this.Logo.width/4;
        this.Logo.y =  this.Logo.height/2;
        this.Logo.events.onInputOver.add(this.ToLandingPage, this.Logo); 
        
        /*var graphics = game.add.graphics(game.width/2, game.height/2);
        graphics.anchor.setTo(0.5);
        graphics.beginFill(0xffffff, 0.8);
        graphics.drawRect(game.width/2, game.height/2, game.width/2,game.height/2);
        CreditsGroup.add(graphics);*/

        TextFill =  game.add.text(game.width-game.width/2, game.height/2, "", 
        {   font: "16px Arial",
            fill: 'rgba(255, 255, 255, 0.75)',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            align: "center", // the alignment of the text is independent of the bounds, try changing to 'center' or 'right'
            boundsAlignH: "center", 
            boundsAlignV: "center", 
            wordWrap: true, wordWrapWidth: game.width/2
        });
        
        TextFill.fill = 'rgba(68, 136, 170, 0.0)';
        TextFill.anchor.set(0.5, 0.5);
        //TextFill.width = 20;
        CreditsGroup.add(TextFill);
        
        
        titleText =  game.add.text(game.width-game.width/2, game.height/2, "", 
        {   font: "16px Arial",
            //fill: '#333333',
            backgroundColor: 'rgba(99, 99, 99, 0.0)',
            align: "center", // the alignment of the text is independent of the bounds, try changing to 'center' or 'right'
            boundsAlignH: "center", 
            boundsAlignV: "center", 
            wordWrap: true, wordWrapWidth: game.width/2
        });
        titleText.fill = '#333333';
        titleText.anchor.set(0.5, 0.5);
        CreditsGroup.add(titleText);
        
        this.SaveButton = gameButtons.addGenericButton("0", 0,0 , this.startGame, this,"creativeButtons",2); 
        this.SaveButton.anchor.x = 1.3;
        this.SaveButton.anchor.y = -0.2;
        this.SaveButton.x =  game.width;
        this.SaveButton.y = 0;
        this.SaveButton.scale.setTo(0.8,0.8);
        
        
        
        this.CloseButton = game.add.sprite(
        game.width/2+game.width/3.7,
        game.height/2-game.height/6,
        'CloseButton');
        this.CloseButton.anchor.x = 0.5;
        this.CloseButton.anchor.y = 0.5;
        this.CloseButton.inputEnabled = true;
        this.CloseButton.events.onInputOver.add( this.CloseButtonpress, this.CloseButton);   
        this.CloseButton.scale.setTo(scaleRatio,scaleRatio);
 
        CreditsGroup.add(this.CloseButton);
        CreditsGroup.visible = false;
    }, 
    
    startGame: function () {  
    game.state.start("StateTitle");
    //video1.stop();
    }, 
    
    
    CloseButtonpress: function () {
    TextFill.width = TextFill.width-55;
    TextFill.height = TextFill.height-55;
    CreditsGroup.visible = false;
    CharacterGroup.visible = true;
    }, 
    
    ToLandingPage: function()
    {
    game.state.start("StateTitle");   
    },
    
    imageClick: function()
    {
    var newWin = window.open(this.param1,"_blank");
    },
    
    TextSetUpButton: function () {
    titleText.setText(this.param1);
    TextFill.setText(this.param1);
    TextFill.width = TextFill.width+55;
    TextFill.height = TextFill.height+55;
    CreditsGroup.visible = true;
    CharacterGroup.visible = false;
    //this.CloseButton.x =0;
    //this.CloseButton.y = 0;
    }, 
    
    update: function () {

    }

}