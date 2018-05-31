var StateInit = {

    preload: function () {
        game.load.image("loadingEmpty", "images/loading/progress_none.png");
        game.load.image("loadingFull", "images/loading/progress_all.png");
        game.load.image("loadingBackground", "images/loading/Loading-Screen-bg.jpg");
        game.load.spritesheet('LoadscreenAnim', 'images/SpriteSheets/LOAD_SpriteSheet.png', 256, 256, 9);
        game.load.spritesheet('AudioLoadingIcon', 'images/loading/Audio-OnSpriteSheet.png', 126, 110, 4);

        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.refresh();
        
        if (isMobile==true) 
            {
                if (useLandscape == true) 
                {
                   game.scale.forceOrientation(true, false);
                } 
                    else 
                    {
                        game.scale.forceOrientation(false, true);
                    }
            game.scale.enterIncorrectOrientation.add(this.wrongWay, this);
            game.scale.leaveIncorrectOrientation.add(this.rightWay, this);
            game.scale.ScaleManager = Phaser.ScaleManager.SHOW_ALL;
            }

    }
    
    ,checkAudioContext: function()
    {
            //work out when the audio context has stopped

            if(this.game.sound.context.currentTime-this.last_context_time===0){

                //close out the existing context and create a new one
                //you will also need new gain nodes if you are using them

                this.game.sound.context.close();  
                this.game.sound.context=new AudioContext(); 
                this.game.sound.masterGain= this.game.sound.context.createGain(); 
                this.game.sound.masterGain.gain.volume=this.volume;
                this.game.sound.masterGain.connect(this.game.sound.context.destination);

                //now go through every sound and connect them to the new context
                //creating gain nodes as we go.
                for(var key in this.tracks){

                    var snd=this.tracks[key].snd;
                    snd.context=this.game.sound.context;
                    snd.masterGainNode = this.game.sound.masterGain;
                    snd.gainNode=this.game.sound.context.createGain();          
                    snd.gainNode.gain.value = snd.volume * this.volume;
                    snd.gainNode.connect(snd.masterGainNode);
                }       

            }else{
            //update out time variable
            this.last_context_time=ctx.currentTime;
            }
    }
    
    , create: function () {    
        
        
        ///This is run using a timer event every second

this.game.time.events.loop(1000, this.checkAudioContext, this);


        
      this.game.stage.backgroundColor = "#9dbf58";
        game.state.start("StateLoad");
    }
    , update: function () {

    }
    , rightWay: function () {
        document.getElementById(wrongTag).style.display = "none";
    }
    , wrongWay: function () {
        document.getElementById(wrongTag).style.display = "block";
    }


}