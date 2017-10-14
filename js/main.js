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


var testArray = [];

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
        0xAEE313,//Body
        0xAEE313,//Sticker1
        0xAEE313,//Sticker2
        0xAEE313,//Sticker3
        0xAEE313,//Sticker4
        0xAEE313,//Sticker5
        0xAEE313,//Sticker6
        0xAEE313,//Sticker7
        0xAEE313//Sticker8
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
    //Adding the 
    game.state.add("StateTitle", StateTitle);
    game.state.add("StateParentsCorner", StateParentsCorner);
    game.state.add("StateMain", StateMain);
    game.state.add("StateIntroMovie", StateIntroMovie);
    //Character Creation States
    game.state.add("StateCharacterSelect", StateCharacterSelect);
    //Leaf States
    game.state.add("StateMainLeaf", StateMainLeaf);
    game.state.add("StateLeafPlace",StateLeafPlace);
    game.state.add("StateLeafOuttro",StateLeafOuttro);
    game.state.add("StateLeafDirectory",StateLeafDirectory);
    game.state.add("StateLeaf_Episode",StateLeaf_Episode);
    //Pinecone States
    game.state.add("StatePineconeMain", StatePineconeMain);
    game.state.add("StatePineconePlace",StatePineconePlace);
    game.state.add("StatePineconeOuttro",StatePineconeOuttro);
    game.state.add("StatePineconeDirectory",StatePineconeDirectory);
    game.state.add("StatePinecone_Episode",StatePinecone_Episode);
    //StateShit
    game.state.add("StateLoad", StateLoad);
    game.state.add("StateInit", StateInit);
    game.state.add("StateOver", StateOver);
    game.state.start("StateInit");

}