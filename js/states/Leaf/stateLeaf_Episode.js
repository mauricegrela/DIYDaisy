var StateLeaf_Episode = {

    preload: function () {

    }

    , create: function () {   
    ExtroMenu = game.add.group();
    this.PlaceModeButton = gameButtons.addButton("skip", 300, 100, this.PlaceCreation, this);//Save File
                   
    },
    
    PlaceCreation: function () {
    game.state.start("StateCharacterSelect");
    },
    update: function () {

    }

}