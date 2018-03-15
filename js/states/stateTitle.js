var StateTitle = {

    preload: function () {
        

        
        //game.load.image('Whiskers', testArray[0]);
            //Responsive text
        GameCenter_x = game.width/2;
        GameCenter_y = game.height/2.8;   

        
        //scaleRatio = window.devicePixelRatio ;
    }, 
    
    create: function () {
        this.Background = game.add.sprite(this.game.width/2,this.game.height/2, 'FrontEndTile');
        this.Background.anchor.x = 0.5;
        this.Background.anchor.y = 0.5;

        
        this.btnStart = game.add.sprite(0, 0 , 'PlayButton');
        this.btnStart.anchor.x = 0.4;
        this.btnStart.anchor.y =  0.4;
        this.btnStart.inputEnabled = true;
        this.btnStart.events.onInputOver.add(this.startGame, this.btnStart);   
        this.btnStart.scale.setTo(1.5,1.5);
        this.btnStart.x = this.game.width - this.btnStart.width;
        this.btnStart.y = this.game.height - this.btnStart.height;        

        this.btnParentsCorner = game.add.sprite(0,0, 'ParentsCorner');
        this.btnParentsCorner.anchor.x = 0.5;
        this.btnParentsCorner.anchor.y = 0.5;
        this.btnParentsCorner.inputEnabled = true;
        this.btnParentsCorner.events.onInputOver.add(this.ParentsCorner, this.btnParentsCorner);   
        this.btnParentsCorner.x = this.btnParentsCorner.width;
        this.btnParentsCorner.y = this.game.height-this.btnParentsCorner.height;
        
        this.BtnCBC = game.add.sprite(this.btnParentsCorner.width*2, this.game.height-this.btnParentsCorner.height, 'CBCButton');
        this.BtnCBC.anchor.x = 0.5;
        this.BtnCBC.anchor.y =  0.5;
        this.BtnCBC.inputEnabled = true;
        this.BtnCBC.events.onInputOver.add(this.Cornerer, this.BtnCBC);   
    },

    
    startGame: function () {     
    game.state.start("StateMain");
    //game.state.start("StatePlace");
    //game.state.start("StateDirectory");
    }, 
    
    ParentsCorner: function () {
    game.state.start("StateParentsCorner");
    }, 
    Cornerer: function () {
    }, 
    
    update: function () {

    }

}