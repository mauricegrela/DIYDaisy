var StateParentsCorner = {


    
    preload: function () {
        
        //game.load.image('Whiskers', testArray[0]);
            var titleText;
        
    }

    , create: function () {
        


        var BottomButtonPos_X = game.width/8;
        var BottomButtonPos_Y = game.height/2 + game.height/3;
        //scaleRatio = window.devicePixelRatio / 4;
        
        var PDFButtonsPos_x = game.width/2+40;
        var PDFButtonsPos_y = game.height/2; 
        var PDFButtonScale = 0.5;
        
        var Credits = "Credits";
        var TermsAndConditions = "Terms And Conditions";
        var privacystatement = "Privacy";
        
        
                
        this.craftBackground1 = game.add.sprite(0, 0, 'ParentsCornerBG');
        this.craftBackground1.height = this.game.height;
        this.craftBackground1.width = this.game.width;

        CharacterGroup = game.add.group();
       
        ////////////////
        ////Buttons/////
        ////////////////    
        
        this.PrivacyButton = game.add.sprite(this.game.width/2, this.game.height/2,'buttons');
        this.PrivacyButton.y = BottomButtonPos_Y;
        this.PrivacyButton.anchor.setTo(0.5);
        this.PrivacyButton.frame = 12;
        this.PrivacyButton.inputEnabled = true;
        this.PrivacyButton.events.onInputDown.add(this.TextSetUpButton, {param1: privacystatement,}, this.PrivacyButton);   
        this.PrivacyButton.scale.setTo(1,1);
        CharacterGroup.add(this.PrivacyButton);       
        
        this.CreditsButton = game.add.sprite(this.game.width/2, this.game.height/2,'buttons');
        this.CreditsButton.y = BottomButtonPos_Y;
        this.CreditsButton.x = this.game.width/2 - this.CreditsButton.width; 
        this.CreditsButton.anchor.setTo(0.5);
        this.CreditsButton.frame = 8;
        this.CreditsButton.inputEnabled = true;
        this.CreditsButton.events.onInputDown.add(this.TextSetUpButton,  {param1: Credits,}, this.CreditsButton);   
        this.CreditsButton.scale.setTo(1,1);
        CharacterGroup.add(this.CreditsButton);
                
        this.TandCButton = game.add.sprite(this.game.width/2, this.game.height/2,'buttons');
        this.TandCButton.y = BottomButtonPos_Y;
        this.TandCButton.x = this.game.width/2 + this.TandCButton.width; 
        this.TandCButton.anchor.setTo(0.5);
        this.TandCButton.frame = 10;
        this.TandCButton.inputEnabled = true;
        this.TandCButton.events.onInputDown.add(this.TextSetUpButton, {param1: TermsAndConditions,}, this.TandCButton);   
        this.TandCButton.scale.setTo(1,1);
        CharacterGroup.add(this.TandCButton); 

        ///////////////////
        ////PDF Buttons////
        ///////////////////

        //Character Rock Stickers
        this.RockCharacter = game.add.sprite(PDFButtonsPos_x, PDFButtonsPos_y , 'RockPDF');
        this.RockCharacter.x = PDFButtonsPos_x-this.RockCharacter.width/4;
        this.RockCharacter.anchor.setTo(0.5);
        //this.RockCharacter.frame = 1;
        this.RockCharacter.inputEnabled = true;
        this.RockCharacter.events.onInputDown.add(this.imageClick, {param1: "PDFS/diyLadyBugRock.pdf",}, this.RockCharacter);   
        this.RockCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);
        CharacterGroup.add(this.RockCharacter);
        //this.RockCharacter.y = game.height-this.RockCharacter.height*1.5;  
        //PDFButtonsPos_y = game.height-this.RockCharacter.height*1.5;  
        
        //Character Pinecone Stickers
        this.PineconeCharacter = game.add.sprite(PDFButtonsPos_x, PDFButtonsPos_y , 'PineconePDF');   
        this.PineconeCharacter.x = PDFButtonsPos_x-this.RockCharacter.width*1.5;
        this.PineconeCharacter.anchor.setTo(0.5);
        this.PineconeCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.PineconeCharacter.events.onInputDown.add(this.imageClick, {param1: "PDFS/diyPineconeFriend.pdf",}, this.PineconeCharacter);   
        this.PineconeCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);
        CharacterGroup.add(this.PineconeCharacter);
        
        //Character StickWand Stickers
        this.StickWandCharacter = game.add.sprite(PDFButtonsPos_x, PDFButtonsPos_y , 'StickWandPDF');   
        this.StickWandCharacter.x = PDFButtonsPos_x+this.RockCharacter.width/4;
        //this.StickWandCharacter.frame = 2;
        this.StickWandCharacter.inputEnabled = true;
        this.StickWandCharacter.anchor.setTo(0.5);
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.StickWandCharacter.events.onInputDown.add(this.imageClick, {param1: "PDFS/diyNatureWand.pdf",}, this.StickWandCharacter);   
        this.StickWandCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);
        CharacterGroup.add(this.StickWandCharacter);
        
        //Character Mobile Stickers
        this.LeafCharacter = game.add.sprite(PDFButtonsPos_x, PDFButtonsPos_y , 'LeafPDF');
        this.LeafCharacter.x = PDFButtonsPos_x+this.RockCharacter.width;
        this.LeafCharacter.inputEnabled = true;
        this.LeafCharacter.anchor.setTo(0.5);
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.LeafCharacter.events.onInputDown.add(this.imageClick, {param1: "PDFS/diyFlowerPetalArt.pdf",}, this.LeafCharacter);   
        this.LeafCharacter.scale.setTo(PDFButtonScale,PDFButtonScale);
        CharacterGroup.add(this.LeafCharacter);
        
        
        ///////////////////
        ///Video Buttons///
        ///////////////////
        
        var VideoButtonsPos_x = game.width/2+40;
        var VideoButtonsPos_y = game.height/2+this.LeafCharacter.height/1.2; 
        var VideoButtonScale = 0.3;
        
        this.RockCharacter = game.add.sprite(VideoButtonsPos_x, VideoButtonsPos_y, 'PlayButton');
        this.RockCharacter.x = VideoButtonsPos_x-this.RockCharacter.width;
        this.RockCharacter.anchor.setTo(0.5);
        //this.RockCharacter.frame = 1;
        this.RockCharacter.inputEnabled = true;
        this.RockCharacter.events.onInputDown.add(this.videoClick, {param1: 'Episode_Rock',}, this.RockCharacter);   
        this.RockCharacter.scale.setTo(VideoButtonScale,VideoButtonScale);
        CharacterGroup.add(this.RockCharacter);
        //this.RockCharacter.y = game.height-this.RockCharacter.height*1.5;  
        //PDFButtonsPos_y = game.height-this.RockCharacter.height*1.5;  
        
        //Character Pinecone Stickers
        this.PineconeCharacter = game.add.sprite(VideoButtonsPos_x, VideoButtonsPos_y, 'PlayButton');   
        this.PineconeCharacter.x = VideoButtonsPos_x-this.PineconeCharacter.width/2;
        this.PineconeCharacter.anchor.setTo(0.5);
        this.PineconeCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.PineconeCharacter.events.onInputDown.add(this.videoClick, {param1: 'Episode_PineCone',}, this.PineconeCharacter);   
        this.PineconeCharacter.scale.setTo(VideoButtonScale,VideoButtonScale);
        CharacterGroup.add(this.PineconeCharacter);
        
        //Character StickWand Stickers
        this.StickWandCharacter = game.add.sprite(VideoButtonsPos_x, VideoButtonsPos_y, 'PlayButton');   
        this.StickWandCharacter.x = VideoButtonsPos_x+this.StickWandCharacter.width;
        //this.StickWandCharacter.frame = 2;
        this.StickWandCharacter.inputEnabled = true;
        this.StickWandCharacter.anchor.setTo(0.5);
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.StickWandCharacter.events.onInputDown.add(this.videoClick, {param1: 'Episode_Rainbow',}, this.StickWandCharacter);   
        this.StickWandCharacter.scale.setTo(VideoButtonScale,VideoButtonScale);
        CharacterGroup.add(this.StickWandCharacter);
        
        //Character Mobile Stickers
        this.LeafCharacter = game.add.sprite(VideoButtonsPos_x, VideoButtonsPos_y, 'PlayButton');
        this.LeafCharacter.x = VideoButtonsPos_x+this.LeafCharacter.width/2;
        this.LeafCharacter.inputEnabled = true;
        this.LeafCharacter.anchor.setTo(0.5);
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.LeafCharacter.events.onInputDown.add(this.videoClick, {param1: 'Episode_Flower',}, this.LeafCharacter);   
        this.LeafCharacter.scale.setTo(VideoButtonScale,VideoButtonScale);
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
        this.Logo.events.onInputDown.add(this.ToLandingPage, this.Logo); 
        
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
        this.SaveButton.anchor.x = 1;
        this.SaveButton.anchor.y = 0;
        this.SaveButton.x =  game.width;
        this.SaveButton.y = 0;
        this.SaveButton.scale.setTo(0.8,0.8);
        
        
        CloseGroup = game.add.group();
        this.CloseButton = game.add.sprite(
        0,
        0,
        'CloseButton');
        this.CloseButton.anchor.x = 0.5;
        this.CloseButton.anchor.y = 0.5;
        this.CloseButton.inputEnabled = true;
        this.CloseButton.events.onInputDown.add( this.CloseButtonpress, this.CloseButton);   
        this.CloseButton.scale.setTo(scaleRatio,scaleRatio);
        CloseGroup.add(this.CloseButton);
        
        CreditsGroup.visible = false;
        CloseGroup.visible = false;
    }, 
    
    startGame: function () {  
    game.state.start("StateTitle");
    }, 
    
    
    CloseButtonpress: function () {
    TextFill.width = TextFill.width-55;
    TextFill.height = TextFill.height-55;
    CreditsGroup.visible = false;
    CharacterGroup.visible = true;
    CloseGroup.visible = false;
    }, 
    
    ToLandingPage: function()
    {
    game.state.start("StateTitle");   
    },
    
    imageClick: function()
    {
    var newWin = window.open(this.param1,"_blank");
    },
    
    videoClick: function()
    {
    //var newWin = window.open(this.param1,"_blank");
    selectedVideo = this.param1;
    game.state.start("StateEpisode");
    },
    
    TextSetUpButton: function () {
    titleText.setText(this.param1);
    TextFill.setText(this.param1);
    TextFill.width = TextFill.width+55;
    TextFill.height = TextFill.height+55;

    CreditsGroup.visible = true;
    CharacterGroup.visible = false;1
    CloseGroup.visible = true;
    CloseGroup.x = TextFill.x+TextFill.width/2;
    CloseGroup.y = TextFill.y-TextFill.height/2;
    //this.CloseButton.x =0;
    //this.CloseButton.y = 0;
    }, 
    
    update: function () {

    }

}