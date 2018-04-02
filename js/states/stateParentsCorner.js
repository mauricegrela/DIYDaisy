var StateParentsCorner = {


    
    preload: function () {
        
        //game.load.image('Whiskers', testArray[0]);
            this.BackButtonSFX = game.add.audio("BackButton");
        
            var titleText;
        
    }

    , create: function () {
        
        var VideoButtonsPos_x = game.width/2;
        var VideoButtonsPos_y = game.height/2; 
        var VideoButtonScale = 0.3;
        

        var BottomButtonPos_X = game.width;
        var BottomButtonPos_Y = game.height - game.height/4;
        var buttonrez = window.devicePixelRatio/1.5;
        
        var PDFButtonsPos_x = game.width/2;
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
        /////LOGOS//////
        ////////////////
        this.CBCLogo = game.add.sprite(this.game.width/2, this.game.height-100,'CBCLogo');
        this.CBCLogo.anchor.setTo(0.5);
        //this.CBCLogo.smoothed = true;
        this.CBCLogo.scale.setTo(buttonrez);
        
        this.RivalSchoolsLogo = game.add.sprite(this.game.width/2, this.game.height-100,'RivalSchools');
        this.RivalSchoolsLogo.anchor.setTo(0.5);
        //this.RivalSchoolsLogo.smoothed = true;
        this.RivalSchoolsLogo.scale.setTo(buttonrez);
        
        this.BellLogo = game.add.sprite(this.game.width/2, this.game.height-100,'BellLogo');
        this.BellLogo.anchor.setTo(0.5);
        //this.BellLogo.smoothed = true;
        this.BellLogo.scale.setTo(buttonrez);
        
        this.ImagineCreateLogo = game.add.sprite(this.game.width/2, this.game.height-100,'ImagineCreate');
        this.ImagineCreateLogo.anchor.setTo(0.5);
        //this.ImagineCreateLogo.smoothed = true;
        this.ImagineCreateLogo.scale.setTo(buttonrez);
        
        var Logo_Y = this.game.height-50;
        
        this.CBCLogo.y =Logo_Y;
        this.RivalSchoolsLogo.y =Logo_Y;
        this.BellLogo.y =Logo_Y;
        this.ImagineCreateLogo.y =Logo_Y;
        
        this.CBCLogo.x =this.game.width/2-this.CBCLogo.width*3;
        this.RivalSchoolsLogo.x =this.game.width/2+this.RivalSchoolsLogo.width*2;
        this.BellLogo.x =this.game.width/2-this.BellLogo.width*2;
        this.ImagineCreateLogo.x =this.game.width/2+this.BellLogo.width*1;
        
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
        ////////Rock///////
        ///////////////////

        //Character Rock Stickers
        this.RockCharacterImage = game.add.sprite(PDFButtonsPos_x, PDFButtonsPos_y , 'RockPDF');
        this.RockCharacterImage.anchor.setTo(0.5);  
        this.RockCharacterImage.scale.setTo(PDFButtonScale,PDFButtonScale);
        CharacterGroup.add(this.RockCharacterImage);
        /*
        this.RockCharacterVid = game.add.sprite(PDFButtonsPos_x, PDFButtonsPos_y+this.RockCharacterImage.height/2, 'PDFButton');
        this.RockCharacterVid.anchor.setTo(1,0.5);
        this.RockCharacterVid.inputEnabled = true;
        this.RockCharacterVid.events.onInputDown.add(this.videoClick, {param1: 'Episode_Rock',}, this.RockCharacterVid);   
        this.RockCharacterVid.scale.setTo(buttonrez);
        CharacterGroup.add(this.RockCharacterVid);
        
        this.RockCharacterPDF = game.add.sprite(PDFButtonsPos_x, PDFButtonsPos_y+this.RockCharacterImage.height/2, 'VideoButton');
        this.RockCharacterPDF.anchor.setTo(0,0.5);
        this.RockCharacterPDF.inputEnabled = true;
        this.RockCharacterPDF.events.onInputDown.add(this.imageClick, {param1: "PDFS/diyLadyBugRock.pdf",}, this.RockCharacter); 
        this.RockCharacterPDF.scale.setTo(buttonrez);
        CharacterGroup.add(this.RockCharacterPDF);
        */
        ///////////////////
        //////Pinecone/////
        ///////////////////

        //Character Rock Stickers
        this.PineConeCharacterImage = game.add.sprite(PDFButtonsPos_x-this.RockCharacterImage.width, PDFButtonsPos_y , 'PineconePDF');
        this.PineConeCharacterImage.anchor.setTo(0.5);  
        this.PineConeCharacterImage.scale.setTo(PDFButtonScale,PDFButtonScale);
        CharacterGroup.add(this.PineConeCharacterImage);
        /*
        this.PineConeCharacterVid = game.add.sprite(this.PineConeCharacterImage.x, PDFButtonsPos_y+this.PineConeCharacterImage.height/2, 'PDFButton');
        this.PineConeCharacterVid.anchor.setTo(1,0.5);
        this.PineConeCharacterVid.inputEnabled = true;
        this.PineConeCharacterVid.events.onInputDown.add(this.videoClick, {param1: 'Episode_PineCone',}, this.PineconeCharacter);  
        this.PineConeCharacterVid.scale.setTo(buttonrez);
        CharacterGroup.add(this.PineConeCharacterVid);
        
        this.RockCharacterPDF = game.add.sprite(this.PineConeCharacterImage.x, PDFButtonsPos_y+this.PineConeCharacterImage.height/2, 'VideoButton');
        this.RockCharacterPDF.anchor.setTo(0,0.5);
        this.RockCharacterPDF.inputEnabled = true;
        this.RockCharacterPDF.events.onInputDown.add(this.imageClick, {param1: "PDFS/diyPineconeFriend.pdf",}, this.PineConeCharacterVid);    
        this.RockCharacterPDF.scale.setTo(buttonrez);
        CharacterGroup.add(this.RockCharacterPDF);
        */
        ///////////////////
        /////StickWand/////
        ///////////////////

        //Character Rock Stickers
        this.StickWandCharacterImage = game.add.sprite(PDFButtonsPos_x-this.RockCharacterImage.width*2, PDFButtonsPos_y , 'LeafPDF');
        this.StickWandCharacterImage.anchor.setTo(0.5);  
        this.StickWandCharacterImage.scale.setTo(PDFButtonScale,PDFButtonScale);
        CharacterGroup.add(this.StickWandCharacterImage);
        /*
        this.StickWandCharacterVid = game.add.sprite(this.StickWandCharacterImage.x, PDFButtonsPos_y+this.StickWandCharacterImage.height/2, 'PDFButton');
        this.StickWandCharacterVid.anchor.setTo(1,0.5);
        this.StickWandCharacterVid.inputEnabled = true;
        this.StickWandCharacterVid.events.onInputDown.add(this.videoClick, {param1: 'Episode_Flower',}, this.StickWandCharacterVid);  
        this.StickWandCharacterVid.scale.setTo(buttonrez);
        CharacterGroup.add(this.StickWandCharacterVid);
        
        this.StickWandCharacterPDF = game.add.sprite(this.StickWandCharacterImage.x, PDFButtonsPos_y+this.StickWandCharacterImage.height/2, 'VideoButton');
        this.StickWandCharacterPDF.anchor.setTo(0,0.5);
        this.StickWandCharacterPDF.inputEnabled = true;
        this.StickWandCharacterPDF.events.onInputDown.add(this.imageClick, {param1: "PDFS/diyFlowerPetalArt.pdf",}, this.PineConeCharacterVid);    
        this.StickWandCharacterPDF.scale.setTo(buttonrez);
        CharacterGroup.add(this.StickWandCharacterPDF);
        */
        //////////////////
        ///////Leaf///////
        //////////////////

        //Character Rock Stickers
        this.StickWandCharacterImage = game.add.sprite(PDFButtonsPos_x+this.RockCharacterImage.width, PDFButtonsPos_y , 'StickWandPDF');
        this.StickWandCharacterImage.anchor.setTo(0.5);  
        this.StickWandCharacterImage.scale.setTo(PDFButtonScale,PDFButtonScale);
        CharacterGroup.add(this.StickWandCharacterImage);
        /*
        this.StickWandCharacterVid = game.add.sprite(this.StickWandCharacterImage.x, PDFButtonsPos_y+this.StickWandCharacterImage.height/2, 'PDFButton');
        this.StickWandCharacterVid.anchor.setTo(1,0.5);
        this.StickWandCharacterVid.inputEnabled = true;
        this.StickWandCharacterVid.events.onInputDown.add(this.videoClick, {param1: 'Episode_Rainbow',}, this.StickWandCharacterVid);  
        this.StickWandCharacterVid.scale.setTo(buttonrez);
        CharacterGroup.add(this.StickWandCharacterVid);
        
        this.StickWandCharacterPDF = game.add.sprite(this.StickWandCharacterImage.x, PDFButtonsPos_y+this.StickWandCharacterImage.height/2, 'VideoButton');
        this.StickWandCharacterPDF.anchor.setTo(0,0.5);
        this.StickWandCharacterPDF.inputEnabled = true;
        this.StickWandCharacterPDF.events.onInputDown.add(this.imageClick, {param1: "PDFS/diyNatureWand.pdf",}, this.StickWandCharacterPDF);    
        this.StickWandCharacterPDF.scale.setTo(buttonrez);
        CharacterGroup.add(this.StickWandCharacterPDF);
        */
        /////////////////////
        //////MapleLeaf//////
        /////////////////////

        //Character Rock Stickers
        this.LeafCharacterImage = game.add.sprite(PDFButtonsPos_x+this.RockCharacterImage.width*2, PDFButtonsPos_y , 'MapleLeafPDF');
        this.LeafCharacterImage.anchor.setTo(0.5);  
        this.LeafCharacterImage.scale.setTo(PDFButtonScale,PDFButtonScale);
        CharacterGroup.add(this.LeafCharacterImage);
        /*
        this.LeafCharacterVid = game.add.sprite(this.LeafCharacterImage.x, PDFButtonsPos_y+this.LeafCharacterImage.height/2, 'PDFButton');
        this.LeafCharacterVid.anchor.setTo(1,0.5);
        this.LeafCharacterVid.inputEnabled = true;
        this.LeafCharacterVid.events.onInputDown.add(this.videoClick, {param1: 'Episode_MapleLeaf',}, this.LeafCharacterVid);  
        this.LeafCharacterVid.scale.setTo(buttonrez);
        CharacterGroup.add(this.LeafCharacterVid);
        
        this.LeafCharacterPDF = game.add.sprite(this.LeafCharacterImage.x, PDFButtonsPos_y+this.LeafCharacterImage.height/2, 'VideoButton');
        this.LeafCharacterPDF.anchor.setTo(0,0.5);
        this.LeafCharacterPDF.inputEnabled = true;
        this.LeafCharacterPDF.events.onInputDown.add(this.imageClick, {param1: "PDFS/diyFlowerPetalArt.pdf",}, this.LeafCharacterPDF);    
        this.LeafCharacterPDF.scale.setTo(buttonrez);
        CharacterGroup.add(this.LeafCharacterPDF);
        */
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
    this.BackButtonSFX.play();
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