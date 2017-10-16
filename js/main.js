var game;
var score;
var highScore;
var soundOn = true;
var musicOn = true;
var isInPlaceMode = false;
var isExtroVideoPlaying = false;
var isInCompleteCraftMode = false;
var IsInAlpha = false;
var wrongTag = "";
var gameButtons;
var gameMedia;
var SelectedColor;
//PLACE YOUR OWN GLOBALS HERE
var isMobile;
//Sprite Manipulation Library
var isClickDragging = false;
var isAddingPaint = false;
var isAddingSticker = true;
var isMovingSticker = true;


var StickerAssigner = "Pinecone_Stickers"; 



var ImageAssetArray = 
    [
        'PineconeBody',
        'PineconeWings_1',
        'PineconeWings_2',
        'PineconeEyes_1',
        'PineconeEyes_2',
        'PineconeFeet_1',
        'PineconeFeet_2',
        'PineconeMouth_1',
        'PineconeMouth_2'             
    ];



 //var testArray = [ 'Name' ];
    var testArray = [
        //Directory,Tint,Transparancy
        'images/Pinecone/PineconeBody.png',//Body  
        'images/Pinecone/PineconeFeet_1.png',//Sticker1 
        'images/Pinecone/PineconeFeet_2.png',//Sticker2             
        'images/Pinecone/PineconeMouth_1.png',//Sticker3       
        'images/Pinecone/PineconeMouth_2.png',//Sticker4   
        'images/Pinecone/PineconeWings_1.png',//Sticker5 
        'images/Pinecone/PineconeWings_2.png',//Sticker6             
        'images/Pinecone/PineconeEyes_1.png',//Sticker7      
        'images/Pinecone/PineconeEyes_2.png'//Sticker8  
        ];

    var testArrayColor = [
        //Directory,Tint,Transparancy
         0xFFFFFF,//Body
         0xFFFFFF,//Sticker1
         0xFFFFFF,//Sticker2
         0xFFFFFF,//Sticker3
         0xFFFFFF,//Sticker4
         0xFFFFFF,//Sticker5
         0xFFFFFF,//Sticker6
         0xFFFFFF,//Sticker7
         0xFFFFFF//Sticker8
        ];

    var testArrayAlpha = [
        //Directory,Tint,Transparancy
        1,//Body
        0,//Sticker1
        0,//Sticker2
        0,//Sticker3
        0,//Sticker4
        0,//Sticker5
        0,//Sticker6
        0,//Sticker7
        0//Sticker8
        ];

var PositionArrayIndicator = 0;

    var Xpos_ArrayAlpha = [
        //Xposition of the drag
        0,//Body
        0,//Sticker1
        0,//Sticker2
        0,//Sticker3
        0,//Sticker4
        0,//Sticker5
        0,//Sticker6
        0,//Sticker7
        0//Sticker8
        ];
    var Ypos_ArrayAlpha = [
        //Yposition of the drag
        0,//Body
        0,//Sticker1
        0,//Sticker2
        0,//Sticker3
        0,//Sticker4
        0,//Sticker5
        0,//Sticker6
        0,//Sticker7
        0//Sticker8
        ];


//portrait or landscape

var useLandscape = true;


window.onload = function () {

isMobile=navigator.userAgent.indexOf("Mobile");
if (isMobile>-1)
     {
        isMobile=true;
     }
     else
     {
        isMobile=false;
     }

    if (isMobile==false) {
        //desktop laptop
        if (useLandscape == true) {
            game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, "ph_game");
        } else { 

            game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, "ph_game");
        }

    } else {
        //mobile device
        game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, "ph_game");
    }
    if (isMobile==true) {
        if (useLandscape == true) {
            wrongTag = "wrongWayLandscape";
        } else {
            wrongTag = "wrongWayPortrait";
        }
    }
    gameMedia = new GameMedia();
    gameButtons = new GameButtons();
    //add a state or screen to the game
    
    //Adding the intro states
    game.state.add("StateTitle", StateTitle);
    game.state.add("StateParentsCorner", StateParentsCorner);
    game.state.add("StateIntroMovie", StateIntroMovie);
    //Character Creation States
    game.state.add("StateCharacterSelect", StateCharacterSelect);
    
    //GameLoopState
    game.state.add("StateMain",StateMain);
    game.state.add("StatePlace",StatePlace);
    game.state.add("StateOuttro",StateOuttro);
    game.state.add("StateDirectory",StateDirectory);
    game.state.add("StateEpisode",StateEpisode);
    
    //StateShit
    game.state.add("StateLoad", StateLoad);
    game.state.add("StateInit", StateInit);
    game.state.add("StateOver", StateOver);
    game.state.start("StateInit");

}