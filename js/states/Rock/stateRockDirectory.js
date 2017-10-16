var StatePineconeDirectory = {

    preload: function () {

    }

    , create: function () {   
    ExtroMenu = game.add.group();
    this.PlaceModeButton = gameButtons.addButton("place", 300, 100, this.PlaceCreation, this);//Save File
    ExtroMenu.add(this.PlaceModeButton);
    this.EpisodeModeButton = gameButtons.addButton("watch", 300, 200, this.WatchEpisode, this);//Watch Episode
    ExtroMenu.add(this.EpisodeModeButton);
    this.DownloadModeButton = gameButtons.addButton("download", 300, 300, this.SaveFile, this);//Enter place mode 
    ExtroMenu.add(this.DownloadModeButton);                    
    },
    
    PlaceCreation: function () {
    game.state.start("StateRockPlace")
    },
    WatchEpisode: function () {
    game.state.start("StateRock_Episode");
    },
    SaveFile: function () {

    }
    , update: function () {

    }

}