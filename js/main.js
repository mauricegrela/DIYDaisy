var game;
var score;
var highScore;
var soundOn = true;
var musicOn = true;
var selectedVideo;
var isFirstCharaterSelected = false;
var isInPlaceMode = false;
var isExtroVideoPlaying = false;
var isInCompleteCraftMode = false;
var IsInAlpha = false;
var SelectedColor;
var wrongTag = "";
var IsCamSnap = false;
var gameButtons;
var gameMedia;
//var BGMusic;
//var BGMusicInteractive;
var total = 0;
var AudioLength = 0;
//UI
var RightHangButtonOffset_X = 1;
var RightHangButtonOffset_Y = 1;
var ButtonScaleAdjustment = 1.5;
var Logo_X =0;
var Logo_Y =0;

var  canvas_height_max =900
var canvas_width_max =1600
var canvas_width = window.innerWidth * window.devicePixelRatio;
var canvas_height = window.innerHeight * window.devicePixelRatio;
var aspect_ratio = canvas_width / canvas_height;
scaleRatio =1;      

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
var IsTwinklePlay = true;
var GameCenter_x;
var GameCenter_y;

var DrawnSprite; 

var StickerAssigner_set1 = "Pinecone_Stickers"; 


var GroupRefArrayCounter = 0;

var  ExtroVideoRef = //Images
    [0,0,0,0,0 ];

var ImageGroupReference = //Images
    [0,0,0,0,0,0,0 ];

var ImageReference = //Images
    [
    'PineconeBody',
    'PineconeBody',
    'PineconeBody',
    'PineconeBody',
    'PineconeBody',
    'PineconeBody',
    'PineconeBody',
    'PineconeBody'
    ];

var PlacableCollection = //Images
    [
    0,
    0,
    0,
    0,
    0,
    0,
    0
    ];

var AnimObject = //Images
    [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
    ];
var AnimRef = //Images
    [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
    ];
var AudioTunes = //Images
    [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
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
        '25',
        '26',
        '27',
        '28'
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

//These stickers will dictate the order inwhich stickers will be shown 
    var StickerDepth = [
        false,
        true,
        true,
        false,
        true,
        false,
        false
        ];

var CaroselGroupNumber = 4;
//portrait or landscape

var useLandscape = true;


//////////////////////////
                ////Sticker Body//////////
                //////////////////////////
                        ImageAssetArray[0]='PineconeBody';
                ///////////////////////////
                ////First Sticker Group////
                ///////////////////////////
                        ImageAssetArray[1]='PineconeWings_1';
                        ImageAssetArray[2]='PineconeWings_2';
                        ImageAssetArray[3]='PineconeWings_3';  
                        ImageAssetArray[4]='PineconeWings_4';
                ///////////////////////////
                ////Second Sticker Group///
                ///////////////////////////
                        ImageAssetArray[5]='PineconeEyes_1';
                        ImageAssetArray[6]='PineconeEyes_2'; 
                        ImageAssetArray[7]='PineconeEyes_3';
                        ImageAssetArray[8]='PineconeEyes_4';

                ///////////////////////////
                ////Third Sticker Group////
                ///////////////////////////
                        ImageAssetArray[9]='PineconeFeet_1';
                        ImageAssetArray[10]='PineconeFeet_2';
                        ImageAssetArray[11]='PineconeFeet_3';
                        ImageAssetArray[12]='PineconeFeet_4';

                ////Fourth Sticker Group///
                ///////////////////////////
                        ImageAssetArray[13]='PineconeHeadgear_1';
                        ImageAssetArray[14]='PineconeHeadgear_2';
                        ImageAssetArray[15]='PineconeHeadgear_3';
                        ImageAssetArray[16]='PineconeHeadgear_4';

                ///////////////////////////
                ////Fifth Sticker Group////
                ///////////////////////////
                        ImageAssetArray[17]='PineconeClothing_1';
                        ImageAssetArray[18]='PineconeClothing_2';
                        ImageAssetArray[19]='PineconeClothing_3';
                        ImageAssetArray[20]='PineconeClothing_4';
                //////////////////////////
                ////Sticker Depths////////
                //////////////////////////
                        StickerDepth[0]=false;
                        StickerDepth[1]=true;
                        StickerDepth[2]=false;
                        StickerDepth[3]=true;
                        StickerDepth[4]=true;
                        StickerDepth[5]=true;

                //////////////////////////
                //////Pivot Points////////
                //////////////////////////
                    Pivot_X [0]=0.5;
                    Pivot_Y [0]=0.5;
                    Pivot_X [1]=0.5;
                    Pivot_Y [1]=0.5;
                    Pivot_X [2]=0.5;
                    Pivot_Y [2]=0.5;
                    Pivot_X [3]=0.5;
                    Pivot_Y [3]=0.5;

                    Pivot_X [4]=0.5;
                    Pivot_Y [4]=0.5;
                    Pivot_X [5]=0.5;
                    Pivot_Y [5]=0.5;
                    Pivot_X [6]=0.5;
                    Pivot_Y [6]=0.5; 
                    Pivot_X [7]=0.5;
                    Pivot_Y [7]=0.5;

                    Pivot_X [8]=0.5;
                    Pivot_Y [8]=0.5;
                    Pivot_X [9]=0.5;
                    Pivot_Y [9]=0.5;
                    Pivot_X [10]=0.5;
                    Pivot_Y [10]=0.5;
                    Pivot_X [11]=0.5;
                    Pivot_Y [11]=0.5;

                    Pivot_X [12]=0.5;
                    Pivot_Y [12]=0.5;
                    Pivot_X [13]=0.5;
                    Pivot_Y [13]=0.5;   
                    Pivot_X [14]=0.5;
                    Pivot_Y [14]=0.5;
                    Pivot_X [15]=0.5;
                    Pivot_Y [15]=0.5;

                    Pivot_X [16]=0.5;
                    Pivot_Y [16]=0.5;
                    Pivot_X [17]=0.5;
                    Pivot_Y [17]=0.5;   
                    Pivot_X [18]=0.5;
                    Pivot_Y [18]=0.5;  
                    Pivot_X [19]=0.5;
                    Pivot_Y [19]=0.5;

                    Pivot_Y [20]=0.5;
                    Pivot_X [20]=0.5;      
                    Pivot_Y [21]=0.5;
                    Pivot_X [21]=0.5;    
                    Pivot_Y [22]=0.5;
                    Pivot_X [22]=0.5;   
                    Pivot_Y [23]=0.5;
                    Pivot_X [23]=0.5;

                    Pivot_Y [24]=0.5;
                    Pivot_X [24]=0.5;      
                    Pivot_Y [25]=0.5;
                    Pivot_X [25]=0.5;    
                    Pivot_Y [26]=0.5;
                    Pivot_X [26]=0.5;   
                    Pivot_Y [27]=0.5;
                    Pivot_X [27]=0.5;


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
            game = new Phaser.Game(1024, 768, Phaser.CANVAS, "ph_game", null, false, true);
        } else { 

            game = new Phaser.Game(1024, 768, Phaser.CANVAS, "ph_game", null, false, true);
        }

    } else {
        //mobile device
        game = new Phaser.Game(1024, 768, Phaser.CANVAS, "ph_game");
    }


    /*game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.refresh();   
    game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE; */
    
    if (isMobile==true) {
        if (useLandscape == true) {
            wrongTag = "wrongWayLandscape";
        } else {
            wrongTag = "wrongWayPortrait";
        }
    }
    

    
    this.game.crossOrigin = "anonymous";
    //var scaleRatio=0;
    
      
    
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
    game.state.add("stateMainLoad", stateMainLoad);
    
    //StateShit
    game.state.add("StateLoad", StateLoad);
    game.state.add("StateInit", StateInit);
    game.state.add("StateOver", StateOver);
       
    
    
    

    
    game.state.start("StateInit");
    
    
     
    

}