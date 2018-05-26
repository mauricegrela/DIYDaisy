var StateTitle = {

    preload: function () {
        GameCenter_x = game.width/2;
        GameCenter_y = game.height/2.8;
        
        
    }, 
    
    create: function () {
            //game.sound.stopAll(); 
        //game.sound.stopAll();
        IsTwinklePlay = true;
        
        this.AudioPromt = game.add.audio("FrontEndTitle");
        this.AudioPromt.play();
        
        this.Background = game.add.sprite(this.game.width/2,this.game.height/2, 'FrontEndTile');
        this.Background.anchor.x = 0.5;
        this.Background.anchor.y = 0.5;

        this.btnStart = gameButtons.addGenericButton("0", 0, 0, this.startGame, this,"PlayButton",0)
        this.btnStart.anchor.x = 0.5;
        this.btnStart.anchor.y =  1;
        this.btnStart.inputEnabled = true;
        this.btnStart.events.onInputDown.add(this.startGame, this.btnStart);  
        this.btnStart.scale.setTo(0.8,0.8);
        this.btnStart.x = this.game.width - this.btnStart.width*1.3;
        this.btnStart.y = this.game.height - this.btnStart.height/3;        

        this.btnParentsCorner = game.add.sprite(0,0, 'ParentsCorner');
        this.btnParentsCorner.anchor.x = 0.5;
        this.btnParentsCorner.anchor.y = 1;
        this.btnParentsCorner.inputEnabled = true;
        this.btnParentsCorner.events.onInputDown.add(this.ParentsCorner, this.btnParentsCorner);   
        this.btnParentsCorner.x = this.btnParentsCorner.width;
        
        this.btnParentsCorner.y = this.btnStart.y;
                 
        this.AudioOnButton = this.add.sprite( 0, 0, 'AudioLoadingIcon');
        this.AudioOnButton.anchor.set(0.8,0.5);
        this.AudioOnButton.x = this.game.width-this.AudioOnButton.width;
        this.AudioOnButton.y = this.AudioOnButton.width/2;
        this.AudioOnButton.scale.set(0.8,0.8);
        this.AudioOnButton.animations.add('shake');
        this.AudioOnButton.animations.play('shake', 2.5, true);
        
    },

    startGame: function () {    
    game.sound.stopAll();
    isFirstCharaterSelected = false;
    //this.MindfulMoment.play();
    //this.MindfulMoment.play();
    game.state.start("StateMain");
    //game.state.start("StatePlace");
    //game.state.start("StateDirectory");
    }, 
    
    ParentsCorner: function () {
    game.sound.stopAll();
    game.state.start("StateParentsCorner");
    }, 
    Cornerer: function () {
    }, 
    
    update: function () {

    }
    
   
    

}