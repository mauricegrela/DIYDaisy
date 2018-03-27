var StateTitle = {

    preload: function () {
        GameCenter_x = game.width/2;
        GameCenter_y = game.height/2.8;
    }, 
    
    create: function () {
        
        game.sound.stopAll();
        
        this.AudioPromt = game.add.audio("FrontEndTitle");
        this.AudioPromt.play();
        
        this.Background = game.add.sprite(this.game.width/2,this.game.height/2, 'FrontEndTile');
        this.Background.anchor.x = 0.5;
        this.Background.anchor.y = 0.5;

        
        this.btnStart = game.add.sprite(0, 0 , 'PlayButton');
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
    },

    
    startGame: function () {    
    game.sound.stopAll();
    game.state.start("StateMain");
    isFirstCharaterSelected = false;
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