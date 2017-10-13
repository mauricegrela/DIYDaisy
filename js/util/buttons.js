GameButtons = function () {


    this.addButton = function (type, xx, yy, f, scope) {
            if (xx == -1) {
                xx = game.world.centerX;
            }
            if (yy == -1) {
                yy = game.world.centerY;
            }

            var over = 0;
            var down = 1;

            switch (type) {

            case "play":
                over = 0;
                down = 1;
                break;

            case "skip":
                over = 2;
                down = 3;
                break;

            case "save":
                over = 4;
                down = 5;
                break;
                    
            case "download":
                over = 6;
                down = 7;
                break;
                    
            case "watch":
                over = 8;
                down = 9;
                break;
                    
            case "place":
                over = 10;
                down = 11;
                break;  
                    
            case "parents":
                over = 12;
                down = 13;
                break; 
            }

            var button = game.add.button(xx, yy, "buttons", f, scope, down, over, down);
            button.anchor.set(0.5, 0.5);
            return button;
        },

        this.addAudioButton = function (type, xx, yy, f, scope) {

            if (xx == -1) {
                xx = game.world.centerX;
            }
            if (yy == -1) {
                yy = game.world.centerY;
            }
            var mButton = game.add.sprite(xx, yy, "soundButtons");
            if (type == "music") {
                mButton.frame = 2;
                this.musicButton = mButton;
            } else {
                this.soundButton = mButton;
            }

            mButton.inputEnabled = true;
            mButton.events.onInputDown.add(f, scope);
            return mButton;
        },//STICKER BUTTON VARIABLES 
        
        this.addStickerButton = function (type, xx, yy, f, scope, SpriteRef,ButtonArtRef) {
        if (xx == -1) {
                xx = game.world.centerX;
            }
            if (yy == -1) {
                yy = game.world.centerY;
            }
            var sButton = game.add.sprite(xx, yy, ButtonArtRef);
            sButton.frame = SpriteRef;
            /*if (type == "music") {
                
                this.musicButton = mButton;
            } else {
                this.soundButton = mButton;
            }*/
            SpriteRef
            sButton.inputEnabled = true;
            sButton.events.onInputDown.add(f, scope);
            return sButton;
        }, 
        
        this.addGenericButton = function (type, xx, yy, f, scope, SpriteSheet, SpriteRef) {
        if (xx == -1) {
                xx = game.world.centerX;
            }
            if (yy == -1) {
                yy = game.world.centerY;
            }
            var sButton = game.add.sprite(xx, yy, SpriteSheet);
            sButton.frame = SpriteRef;
            /*if (type == "music") {
                
                this.musicButton = mButton;
            } else {
                this.soundButton = mButton;
            }*/
            SpriteRef
            sButton.inputEnabled = true;
            sButton.events.onInputDown.add(f, scope);
            return sButton;
        }, 
        
        this.addColorButton = function (type, xx, yy, f, scope, color) {
        if (xx == -1) {
                xx = game.world.centerX;
            }
            if (yy == -1) {
                yy = game.world.centerY;
            }
            var sButton = game.add.sprite(xx, yy, "StickerLeaf1");
            sButton.frame = 0;
            sButton.tint = color;
            sButton.inputEnabled = true;
            sButton.events.onInputDown.add(f, scope);
            return sButton;
        },   
        
        this.updateButtons = function () {
            if (musicOn == true) {
                this.musicButton.frame = 2;
            } else {
                this.musicButton.frame = 3;
            }
            if (soundOn == true) {

                this.soundButton.frame = 0;
            } else {
                this.soundButton.frame = 1;
            }
        }, 
        
        this.toggleMusic = function (target, scope) {
            musicOn = !musicOn;
            if (musicOn == true) {
                target.frame = 2;
            } else {
                target.frame = 3;
            }
            gameMedia.updateMusic();
        },
                
        this.toggleSound = function (target, scope) {
            soundOn = !soundOn;
            if (soundOn == true) {
                target.frame = 0;
            } else {
                target.frame = 1;
            }
        }
}