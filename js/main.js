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
var isAddindpaint = false;



var testArray = [];

 //var testArray = [ 'Name' ];

    var testArray = [
        //Directory,Tint,Transparancy
        'images/Leaf/LeafBody.png',//Body  
        'images/Leaf/LeafEyes.png',//Sticker1 
        'images/Leaf/LeafEars.png',//Sticker2             
        'images/Leaf/LeafNose.png',//Sticker3       
        'images/Leaf/LeafWiskers.png'//Sticker4             
        ];

    var testArrayColor = [
        //Directory,Tint,Transparancy
        0xAEE313,//Body
        0xAEE313,//Sticker1
        0xAEE313,//Sticker2
        0xAEE313,//Sticker3
        0xAEE313//Sticker4
        ];

    var testArrayAlpha = [
        //Directory,Tint,Transparancy
        1,//Body
        0,//Sticker1
        0,//Sticker2
        0,//Sticker3
        0//Sticker4
        ];

var PositionArrayIndicator = 0;

    var Xpos_ArrayAlpha = [
        //Xposition of the drag
        0,//Body
        0,//Sticker1
        0,//Sticker2
        0,//Sticker3
        0//Sticker4
        ];
    var Ypos_ArrayAlpha = [
        //Yposition of the drag
        0,//Body
        0,//Sticker1
        0,//Sticker2
        0,//Sticker3
        0//Sticker4
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
    //StateShit
    game.state.add("StateLoad", StateLoad);
    game.state.add("StateInit", StateInit);
    game.state.add("StateOver", StateOver);
    game.state.start("StateInit");

}