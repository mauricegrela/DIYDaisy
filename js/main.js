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
var IsPlacingRock = false;
var IsPlacingPinecone = false;
var IsPlacingMobile = false;

var IsPlacingLeaf = false;
var IsPlacingStickWand = false;

var isClickDragging = false;
var isAddingPaint = false;
var isAddingSticker = true;
var isMovingSticker = true;
var GameCenter_x;
var GameCenter_y;

var DrawnSprite; 

var StickerAssigner_set1 = "Pinecone_Stickers"; 


var GroupRefArrayCounter = 0;

var  ExtroVideoRef = //Images
    [0,0,0,0,0 ];

var ImageGroupReference = //Images
    [0,0,0,0,0,0 ];

var ImageReference = //Images
    [
    'PineconeBody',
    'PineconeBody',
    'PineconeBody',
    'PineconeBody',
    'PineconeBody',
    'PineconeBody',
    ];

var PlacableCollection = //Images
    [
    0,
    0,
    0,
    0,
    0,
    0,
    ];

var AnimationsInTheGallery = //Images
    [
    0,
    0,
    0,
    0,
    ];

//This array sets which stickers can be placed in the level
var ImageAssetArray = //Images
        [
        'PineconeBody',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25'             
        ];

var testArrayAlpha = [
        //Directory,Tint,Transparancy
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,        
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        ];

///////////////////////////
////NOTE!!!! These op////
///////////////////////////

var Pivot_X = [
        //Directory,Tint,Transparancy
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5
        ];

var Pivot_Y = [
        //Directory,Tint,Transparancy
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.6,
        0.6,
        0.6,
        0.6,
        0.5,
        0.5,
        0.5,
        0.5,
        0.2,
        0.2,
        0.4,
        0.4,
        0.4,
        0.4,
        0.4,
        0.4
        ];

//These stickers will dictate the order inwhich stickers will be shown 
    var StickerDepth = [
        true,
        true,
        true,
        false,
        true,
        false
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
        this.game.crossOrigin = "anonymous";

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