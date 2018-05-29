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
        var buttonrez = 0.8;
        
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
        /*
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
        */
        ///////////////////
        ////////Rock///////
        ///////////////////

        //Character Rock Stickers
        this.RockCharacterImage = game.add.button(PDFButtonsPos_x+125, PDFButtonsPos_y , 'RockPDF',this.imageClick, {param1: "http://www.cbc.ca/parents/content/pdf/DaisyPrintable_LadybugRocks.pdf",}, this.RockCharacterImage,2,1,0)
        this.RockCharacterImage.anchor.setTo(0.5);  
        this.RockCharacterImage.scale.setTo(PDFButtonScale,PDFButtonScale);
        this.RockCharacterImage.inputEnabled = true;
        
        /*this.RockCharacterImage = game.add.sprite(PDFButtonsPos_x+125, PDFButtonsPos_y , 'RockPDF');
        this.RockCharacterImage.inputEnabled = true;
        this.RockCharacterImage.events.onInputDown.add(this.imageClick, {param1: "PDFS/diyLadyBugRock.pdf",}, this.RockCharacterImage);
        this.RockCharacterImage.anchor.setTo(0.5);  
        this.RockCharacterImage.scale.setTo(PDFButtonScale,PDFButtonScale);
        */
        ///////////////////
        //////Pinecone/////
        ///////////////////
        this.PineConeCharacterImage = game.add.button(PDFButtonsPos_x-100, PDFButtonsPos_y , 'PineconePDF',this.imageClick, {param1: "http://www.cbc.ca/parents/content/pdf/DaisyPrintable_PineconeFriends.pdf",}, this.PineConeCharacterImage,2,1,0);
        this.PineConeCharacterImage.anchor.setTo(0.5);  
        this.PineConeCharacterImage.scale.setTo(PDFButtonScale,PDFButtonScale);
        this.PineConeCharacterImage.inputEnabled = true;

        ///////////////////
        /////StickWand/////
        ///////////////////
        this.StickWandCharacterImage = game.add.button(PDFButtonsPos_x-300, PDFButtonsPos_y , 'LeafPDF',this.imageClick, {param1: "http://www.cbc.ca/parents/content/pdf/DaisyPrintable_FlowerButterfly.pdf",}, this.StickWandCharacterImage,2,1,0);
        this.StickWandCharacterImage.anchor.setTo(0.5);  
        this.StickWandCharacterImage.scale.setTo(PDFButtonScale,PDFButtonScale);
        this.StickWandCharacterImage.inputEnabled = true;

        //////////////////
        ///////Leaf///////
        //////////////////

        //Character Rock Stickers
        this.StickWandCharacterImage = game.add.button(PDFButtonsPos_x+300, PDFButtonsPos_y , 'StickWandPDF',this.imageClick, {param1: "http://www.cbc.ca/parents/content/pdf/DaisyPrintable_RainbowNatureWand.pdf",}, this.StickWandCharacterImage,2,1,0);
        this.StickWandCharacterImage.anchor.setTo(0.5);  
        this.StickWandCharacterImage.scale.setTo(PDFButtonScale,PDFButtonScale);
        this.StickWandCharacterImage.inputEnabled = true;
       
            /*
        this.StickWandCharacterImage = game.add.sprite(PDFButtonsPos_x+300, PDFButtonsPos_y , 'StickWandPDF');
        this.StickWandCharacterImage.inputEnabled = true;
        this.StickWandCharacterImage.events.onInputDown.add(this.imageClick, {param1: "PDFS/diyNatureWand.pdf",}, this.StickWandCharacterImage);   
        this.StickWandCharacterImage.anchor.setTo(0.5);  
        this.StickWandCharacterImage.scale.setTo(PDFButtonScale,PDFButtonScale);
        CharacterGroup.add(this.StickWandCharacterImage);
    
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
        
        /*
        //Character Rock Stickers
        this.LeafCharacterImage = game.add.sprite(PDFButtonsPos_x+this.RockCharacterImage.width*2, PDFButtonsPos_y , 'MapleLeafPDF');
        this.LeafCharacterImage.anchor.setTo(0.5);  
        this.LeafCharacterImage.scale.setTo(PDFButtonScale,PDFButtonScale);
        CharacterGroup.add(this.LeafCharacterImage);
        */
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


        
        titleText =  game.add.text(game.width-game.width/2, game.height/3, "", 
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
        //CreditsGroup.add(titleText);
        titleText.setText("Click the characters to download printable instructions for making your own nature craft. ");
        titleText.addColor("#002e41", 0);
        
        
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