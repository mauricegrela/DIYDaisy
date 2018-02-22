var StateMain = {
////////////////////////////////////////////
///////////REMEMBER TO REFRESH/////////////
//////////////////////////////////////////
    preload: function () { 
        game.load.image("loadingEmpty", "images/loading/progress_none.png");
        game.load.image("loadingFull", "images/loading/progress_all.png");
        
        GameCenter_x = game.width/2;
        GameCenter_y = game.height/3;   

        isTakingPhoto = false;

            if(IsPlacingMobile == true)
            {
                game.load.image('Mobile_1', 'images/Mobile/Mobile_1.png');
                game.load.image('Mobile_2', 'images/Mobile/Mobile_2.png');
                game.load.image('Mobile_3', 'images/Mobile/Mobile_3.png');
                game.load.image('Mobile_4', 'images/Mobile/Mobile_4.png');
                game.load.image('Mobile_5', 'images/Mobile/Mobile_5.png');
                game.load.image('Mobile_6', 'images/Mobile/Mobile_6.png');
                game.load.image('Mobile_7', 'images/Mobile/Mobile_7.png');
                game.load.image('Mobile_8', 'images/Mobile/Mobile_8.png');
                game.load.image('Mobile_9', 'images/Mobile/Mobile_9.png');
                game.load.image('Mobile_10', 'images/Mobile/Mobile_10.png');
                game.load.image('Mobile_11', 'images/Mobile/Mobile_11.png');
                game.load.image('Mobile_12', 'images/Mobile/Mobile_12.png'); 
                game.load.image('Mobile_13', 'images/Mobile/Mobile_13.png');
                game.load.image('Mobile_14', 'images/Mobile/Mobile_14.png');
                game.load.image('Mobile_15', 'images/Mobile/Mobile_15.png');
                game.load.image('Mobile_16', 'images/Mobile/Mobile_16.png');
                game.load.image('Mobile_17', 'images/Mobile/Mobile_17.png');
                game.load.image('Mobile_18', 'images/Mobile/Mobile_18.png'); 
                game.load.image('Mobile_19', 'images/Mobile/Mobile_19.png');
                game.load.image('Mobile_20', 'images/Mobile/Mobile_20.png');
                game.load.image('Mobile_21', 'images/Mobile/Mobile_21.png');
                game.load.image('Mobile_22', 'images/Mobile/Mobile_22.png');
                game.load.image('Mobile_23', 'images/Mobile/Mobile_23.png');
                game.load.image('Mobile_24', 'images/Mobile/Mobile_24.png');
                game.load.spritesheet("Mobile_stickers", "images/ui/Mobile_stickers.png", 365, 250, 24);

                //////////////////////////
                ////Sticker Body//////////
                //////////////////////////
                        ImageAssetArray[0]='MobileBody';
                ///////////////////////////
                ////First Sticker Group////
                ///////////////////////////
                        ImageAssetArray[1]='Mobile_1';
                        ImageAssetArray[2]='Mobile_2'; 
                        ImageAssetArray[3]='Mobile_3';
                        ImageAssetArray[4]='Mobile_4';
                ///////////////////////////
                ////Second Sticker Group///
                ///////////////////////////
                        ImageAssetArray[5]='Mobile_5';
                        ImageAssetArray[6]='Mobile_6';
                        ImageAssetArray[7]='Mobile_7';
                        ImageAssetArray[8]='Mobile_8';
                ///////////////////////////
                ////Third Sticker Group////
                ///////////////////////////
                        ImageAssetArray[9]='Mobile_9';
                        ImageAssetArray[10]='Mobile_10';
                        ImageAssetArray[11]='Mobile_11';
                        ImageAssetArray[12]='Mobile_12';
                ///////////////////////////
                ////Fourth Sticker Group///
                ///////////////////////////
                        ImageAssetArray[13]='Mobile_13';
                        ImageAssetArray[14]='Mobile_14';
                        ImageAssetArray[15]='Mobile_15';  
                        ImageAssetArray[16]='Mobile_16';
                ///////////////////////////
                ////Fifth Sticker Group////
                ///////////////////////////
                        ImageAssetArray[17]='Mobile_17';
                        ImageAssetArray[18]='Mobile_18';
                        ImageAssetArray[19]='Mobile_19';
                        ImageAssetArray[20]='Mobile_20';
                ///////////////////////////
                ////Sixth Sticker Group////
                ///////////////////////////
                        ImageAssetArray[21]='Mobile_21';
                        ImageAssetArray[22]='Mobile_22';
                        ImageAssetArray[23]='Mobile_23';
                        ImageAssetArray[24]='Mobile_24';
                

                Pivot_X [0]=0.8;
                Pivot_Y [0]=0.2;     
                Pivot_X [1]=0.8;
                Pivot_Y [1]=0.2;
                Pivot_X [2]=0.8;
                Pivot_Y [2]=0.2;
                Pivot_X [3]=0.8;
                Pivot_Y [3]=0.2;

                Pivot_X [4]=0.7;
                Pivot_Y [4]=0.1; 
                Pivot_X [5]=0.7;
                Pivot_Y [5]=0.1;     
                Pivot_X [6]=0.7;
                Pivot_Y [6]=0.1;     
                Pivot_X [7]=0.7;
                Pivot_Y [7]=0.1;

                Pivot_X [8]=0.45;  
                Pivot_Y [8]=0.1;   
                Pivot_X [9]=0.45;
                Pivot_Y [9]=0.1;   
                Pivot_X [10]=0.45;
                Pivot_Y [10]=0.1; 
                Pivot_X [11]=0.45;
                Pivot_Y [11]=0.1;

                Pivot_X [12]=0.25;
                Pivot_Y [12]=0.1;  
                Pivot_X [13]=0.25;
                Pivot_Y [13]=0.1;    
                Pivot_X [14]=0.25;
                Pivot_Y [14]=0.1;    
                Pivot_X [15]=0.25;
                Pivot_Y [15]=0.1;

                Pivot_X [16]=0.19;
                Pivot_Y [16]=0.23;    
                Pivot_X [17]=0.2;
                Pivot_Y [17]=0.275;    
                Pivot_X [18]=0.2;
                Pivot_Y [18]=0.26;   
                Pivot_X [19]=0.2;
                Pivot_Y [19]=0.26;

                Pivot_Y [20]=0.8;
                Pivot_X [20]=0.5;              
                Pivot_Y [21]=0.8;
                Pivot_X [21]=0.5;       
                Pivot_Y [22]=0.8; 
                Pivot_X [22]=0.5;     
                Pivot_Y [23]=0.8; 
                Pivot_X [23]=0.5;


                StickerAssigner_set1 = "Mobile_stickers";
                game.load.video('Episode', 'videos/Forest_Mobile/DaisyGBK_ForestMob_720.mp4');
                
                //Turn this off in case it gets loaded again
                IsPlacingMobile=false;
                
                
            }

            if(IsPlacingPineCone == true)
            {
                //Wings
                game.load.image('PineconeWings_1', 'images/Pinecone/PineconeWings_1.png');     
                game.load.image('PineconeWings_2', 'images/Pinecone/PineconeWings_2.png'); 
                game.load.image('PineconeWings_3', 'images/Pinecone/PineconeWings_3.png'); 
                game.load.image('PineconeWings_4', 'images/Pinecone/PineconeWings_4.png');
                //Eyes 
                game.load.image('PineconeEyes_1', 'images/Pinecone/PineconeEyes_1.png');     
                game.load.image('PineconeEyes_2', 'images/Pinecone/PineconeEyes_2.png'); 
                game.load.image('PineconeEyes_3', 'images/Pinecone/PineconeEyes_3.png'); 
                game.load.image('PineconeEyes_4', 'images/Pinecone/PineconeEyes_4.png'); 
                //Feet
                game.load.image('PineconeFeet_1', 'images/Pinecone/PineconeFeet_1.png');     
                game.load.image('PineconeFeet_2', 'images/Pinecone/PineconeFeet_2.png'); 
                game.load.image('PineconeFeet_3', 'images/Pinecone/PineconeFeet_3.png'); 
                game.load.image('PineconeFeet_4', 'images/Pinecone/PineconeFeet_4.png'); 
                //Head gear
                game.load.image('PineconeHeadgear_1', 'images/Pinecone/PineconeHeadgear_1.png');     
                game.load.image('PineconeHeadgear_2', 'images/Pinecone/PineconeHeadgear_2.png'); 
                game.load.image('PineconeHeadgear_3', 'images/Pinecone/PineconeHeadgear_3.png'); 
                game.load.image('PineconeHeadgear_4', 'images/Pinecone/PineconeHeadgear_4.png'); 
                //Clothing 
                game.load.image('PineconeClothing_1', 'images/Pinecone/PineconeClothing_1.png');
                game.load.image('PineconeClothing_2', 'images/Pinecone/PineconeClothing_2.png');
                game.load.image('PineconeClothing_3', 'images/Pinecone/PineconeClothing_3.png');      
                game.load.image('PineconeClothing_4', 'images/Pinecone/PineconeClothing_4.png');
           
                game.load.spritesheet("Pinecone_Stickers", "images/ui/Pinecone_stickers.png", 365, 250, 24);    

                //////////////////////////
                ////Sticker Body//////////
                //////////////////////////
                        ImageAssetArray[0]='PineconeBody';
                ///////////////////////////
                ////First Sticker Group////
                ///////////////////////////
                        ImageAssetArray[13]='PineconeWings_1';
                        ImageAssetArray[14]='PineconeWings_2';
                        ImageAssetArray[15]='PineconeWings_3';  
                        ImageAssetArray[16]='PineconeWings_4';
                ///////////////////////////
                ////Second Sticker Group///
                ///////////////////////////
                        ImageAssetArray[1]='PineconeEyes_1';
                        ImageAssetArray[2]='PineconeEyes_2'; 
                        ImageAssetArray[3]='PineconeEyes_3';
                        ImageAssetArray[4]='PineconeEyes_4';
                ///////////////////////////
                ////Third Sticker Group////
                ///////////////////////////
                        ImageAssetArray[21]='PineconeFeet_1';
                        ImageAssetArray[22]='PineconeFeet_2';
                        ImageAssetArray[23]='PineconeFeet_3';
                        ImageAssetArray[24]='PineconeFeet_4';
                        
                ///////////////////////////
                ////Fourth Sticker Group///
                ///////////////////////////
                        ImageAssetArray[9]='PineconeHeadgear_1';
                        ImageAssetArray[10]='PineconeHeadgear_2';
                        ImageAssetArray[11]='PineconeHeadgear_3';
                        ImageAssetArray[12]='PineconeHeadgear_4';
                ///////////////////////////
                ////Fifth Sticker Group////
                ///////////////////////////
                        ImageAssetArray[17]='PineconeClothing_1';
                        ImageAssetArray[18]='PineconeClothing_2';
                        ImageAssetArray[19]='PineconeClothing_3';
                        ImageAssetArray[20]='PineconeClothing_4';
                ///////////////////////////
                ////Sixth Sticker Group////
                ///////////////////////////
                       

         
            
                
                StickerAssigner_set1 = "Pinecone_Stickers"; 

                game.load.video('Episode', 'videos/PineCone_Animal/DaisyGBK_PineCon_Ani_720.mp4');

                //Turn this off in case it gets loaded again        
                IsPlacingPineCone=false;
            }

            if (IsPlacingRock == true)
            {
            game.load.image('RockBase_1', 'images/Rock/RockBase_1.png');
            game.load.image('RockBase_2', 'images/Rock/RockBase_2.png');      
            game.load.image('RockBase_3', 'images/Rock/RockBase_3.png');
            game.load.image('RockBase_4', 'images/Rock/RockBase_4.png'); 
                            
            game.load.image('RockFace_1', 'images/Rock/RockFace_1.png');
            game.load.image('RockFace_2', 'images/Rock/RockFace_2.png');
            game.load.image('RockFace_3', 'images/Rock/RockFace_3.png');
            game.load.image('RockFace_4', 'images/Rock/RockFace_4.png');
             
            game.load.image('RockHeadgear_1', 'images/Rock/RockHeadgear_1.png');
            game.load.image('RockHeadgear_2', 'images/Rock/RockHeadgear_2.png');
            game.load.image('RockHeadgear_3', 'images/Rock/RockHeadgear_3.png');
            game.load.image('RockHeadgear_4', 'images/Rock/RockHeadgear_4.png');
                    
            game.load.image('RockWings_1', 'images/Rock/RockWings_1.png');
            game.load.image('RockWings_2', 'images/Rock/RockWings_2.png');
            game.load.image('RockWings_3', 'images/Rock/RockWings_3.png');
            game.load.image('RockWings_4', 'images/Rock/RockWings_4.png');
            
            game.load.image('RockFeet_1', 'images/Rock/RockFeet_1.png');
            game.load.image('RockFeet_2', 'images/Rock/RockFeet_3.png');
            game.load.image('RockFeet_3', 'images/Rock/RockFeet_2.png');
            game.load.image('RockFeet_4', 'images/Rock/RockFeet_4.png');
            
            game.load.spritesheet("Rock_Stickers_1", "images/ui/Rock_stickers.png", 365, 250, 24);


            ///////////////////////////
            ////Sticker Body//////////
            ///////////////////////////
                    ImageAssetArray[0]='RockBody';
            ///////////////////////////
            ////First Sticker Group////
            ///////////////////////////
                    ImageAssetArray[1]='RockBase_1';
                    ImageAssetArray[2]='RockBase_2'; 
                    ImageAssetArray[3]='RockBase_3';
                    ImageAssetArray[4]='RockBase_4';
            ///////////////////////////
            ////Second Sticker Group///
            ///////////////////////////
                    ImageAssetArray[5]='RockFace_1';
                    ImageAssetArray[6]='RockFace_2';
                    ImageAssetArray[7]='RockFace_3';
                    ImageAssetArray[8]='RockFace_4';
            ///////////////////////////
            ////Third Sticker Group////
            ///////////////////////////
                    ImageAssetArray[9]='RockHeadgear_1';
                    ImageAssetArray[10]='RockHeadgear_2';
                    ImageAssetArray[11]='RockHeadgear_3';
                    ImageAssetArray[12]='RockHeadgear_4';
            ///////////////////////////
            ////Fourth Sticker Group///
            ///////////////////////////
                    ImageAssetArray[13]='RockWings_1';
                    ImageAssetArray[14]='RockWings_2';
                    ImageAssetArray[15]='RockWings_3';  
                    ImageAssetArray[16]='RockWings_4';
            ///////////////////////////
            ////Fifth Sticker Group////
            ///////////////////////////
                    ImageAssetArray[17]='RockFeet_1';
                    ImageAssetArray[18]='RockFeet_2';
                    ImageAssetArray[19]='RockFeet_3';
                    ImageAssetArray[20]='RockFeet_4';
           
                
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
        Pivot_Y [8]=0.72;   
        Pivot_X [9]=0.5;
        Pivot_Y [9]=0.65;    
        Pivot_X [10]=0.5;
        Pivot_Y [10]=0.6;  
        Pivot_X [11]=0.5;
        Pivot_Y [11]=0.6; 
                
        Pivot_X [12]=0.5;
        Pivot_Y [12]=0.5;  
        Pivot_X [13]=0.5;
        Pivot_Y [13]=0.5;    
        Pivot_X [14]=0.5;
        Pivot_Y [14]=0.5;    
        Pivot_X [15]=0.5;
        Pivot_Y [15]=0.5;
                
        Pivot_Y [16]=0.5;
        Pivot_X [16]=0.5;     
        Pivot_Y [17]=0.5;
        Pivot_X [17]=0.5;    
        Pivot_Y [18]=0.5; 
        Pivot_X [18]=0.5;      
        Pivot_Y [19]=0.5;
        Pivot_X [19]=0.5;
                
                
            StickerAssigner_set1 = "Rock_Stickers_1";

            game.load.video('Episode', 'videos/Ladybug_Rock/DaisyGBK_LadyRock_720.mp4');

            IsPlacingRock=false;
            }

            if(IsPlacingLeaf == true)
            {
                game.load.image('LeafWings_1', 'images/Leaf/LeafWings_1.png');
                game.load.image('LeafWings_2', 'images/Leaf/LeafWings_2.png');
                game.load.image('LeafWings_3', 'images/Leaf/LeafWings_3.png');
                game.load.image('LeafWings_4', 'images/Leaf/LeafWings_4.png');

                game.load.image('LeafFace_1', 'images/Leaf/LeafFace_1.png');
                game.load.image('LeafFace_2', 'images/Leaf/LeafFace_2.png');
                game.load.image('LeafFace_3', 'images/Leaf/LeafFace_3.png');
                game.load.image('LeafFace_4', 'images/Leaf/LeafFace_4.png');
         
                game.load.image('LeafHeadgear_1', 'images/Leaf/LeafHeadgear_1.png');
                game.load.image('LeafHeadgear_2', 'images/Leaf/LeafHeadgear_2.png');
                game.load.image('LeafHeadgear_3', 'images/Leaf/LeafHeadgear_3.png');
                game.load.image('LeafHeadgear_4', 'images/Leaf/LeafHeadgear_4.png');
        
                game.load.image('LeafClothing_1', 'images/Leaf/LeafClothing_1.png');
                game.load.image('LeafClothing_2', 'images/Leaf/LeafClothing_2.png');
                game.load.image('LeafClothing_3', 'images/Leaf/LeafClothing_3.png');
                game.load.image('LeafClothing_4', 'images/Leaf/LeafClothing_4.png');
   
            game.load.spritesheet("Rock_Stickers_1", "images/ui/Leaf_stickers.png", 365, 250, 24);


            ///////////////////////////
            ////Sticker Body//////////
            ///////////////////////////
                    ImageAssetArray[0]='LeafBody';
            ///////////////////////////
            ////First Sticker Group////
            ///////////////////////////
                    ImageAssetArray[1]='LeafWings_1';
                    ImageAssetArray[2]='LeafWings_2'; 
                    ImageAssetArray[3]='LeafWings_3';
                    ImageAssetArray[4]='LeafWings_4';
            ///////////////////////////
            ////Second Sticker Group///
            ///////////////////////////
                    ImageAssetArray[5]='LeafFace_1';
                    ImageAssetArray[6]='LeafFace_2';
                    ImageAssetArray[7]='LeafFace_3';
                    ImageAssetArray[8]='LeafFace_4';
            ///////////////////////////
            ////Third Sticker Group////
            ///////////////////////////
                    ImageAssetArray[9]='LeafHeadgear_1.png';
                    ImageAssetArray[10]='LeafHeadgear_2.png';
                    ImageAssetArray[11]='LeafHeadgear_3.png';
                    ImageAssetArray[12]='LeafHeadgear_4.png';
            ///////////////////////////
            ////Fourth Sticker Group///
            ///////////////////////////
                    ImageAssetArray[13]='LeafClothing_1';
                    ImageAssetArray[14]='LeafClothing_2';
                    ImageAssetArray[15]='LeafClothing_3';  
                    ImageAssetArray[16]='LeafClothing_4';
    
           
                
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
        Pivot_Y [8]=0.72;   
        Pivot_X [9]=0.5;
        Pivot_Y [9]=0.65;    
        Pivot_X [10]=0.5;
        Pivot_Y [10]=0.6;  
        Pivot_X [11]=0.5;
        Pivot_Y [11]=0.6; 
                
        Pivot_X [12]=0.5;
        Pivot_Y [12]=0.5;  
        Pivot_X [13]=0.5;
        Pivot_Y [13]=0.5;    
        Pivot_X [14]=0.5;
        Pivot_Y [14]=0.5;    
        Pivot_X [15]=0.5;
        Pivot_Y [15]=0.5;
                
                
                
                StickerAssigner_set1 = "Leaf_Stickers_1";
                
                game.load.video('Episode', 'videos/Flower_Petal/DaisyGBK_FlowerPetArt_720.mp4');

                IsPlacingStickWand = false;
            }

            if(IsPlacingStickWand == true)
            {
                game.load.image('StickWandBase_1', 'images/StickWand/StickWandBase_1.png');
                game.load.image('StickWandBase_2', 'images/StickWand/StickWandBase_2.png');      
                game.load.image('StickWandBase_3', 'images/StickWand/StickWandBase_3.png');
                game.load.image('StickWandBase_4', 'images/StickWand/StickWandBase_4.png'); 
                        
                game.load.image('StickWandFace_1', 'images/StickWand/StickWandFace_1.png');
                game.load.image('StickWandFace_2', 'images/StickWand/StickWandFace_2.png');
                game.load.image('StickWandFace_3', 'images/StickWand/StickWandFace_3.png');
                game.load.image('StickWandFace_4', 'images/StickWand/StickWandFace_4.png');
         
                game.load.image('StickWandHeadgear_1', 'images/StickWand/StickWandHeadgear_1.png');
                game.load.image('StickWandHeadgear_2', 'images/StickWand/StickWandHeadgear_2.png');
                game.load.image('StickWandHeadgear_3', 'images/StickWand/StickWandHeadgear_3.png');
                game.load.image('StickWandHeadgear_4', 'images/StickWand/StickWandHeadgear_4.png');

                game.load.image('StickWandFeet_1', 'images/StickWand/StickWandFeet_1.png');
                game.load.image('StickWandFeet_2', 'images/StickWand/StickWandFeet_3.png');
                game.load.image('StickWandFeet_3', 'images/StickWand/StickWandFeet_2.png');
                game.load.image('StickWandFeet_4', 'images/StickWand/StickWandFeet_4.png');
       
                game.load.image('StickWandClothing_1', 'images/StickWand/StickWandClothing_1.png');
                game.load.image('StickWandClothing_2', 'images/StickWand/StickWandClothing_2.png');
                game.load.image('StickWandClothing_3', 'images/StickWand/StickWandClothing_3.png');
                game.load.image('StickWandClothing_4', 'images/StickWand/StickWandClothing_4.png');    

                ImageAssetArray[0]='StickWandBody';
                

                game.load.video('Episode', 'videos/Forest_Mobile/DaisyGBK_ForestMob_720.mp4');
                
                IsPlacingStickWand = false;
                
            }


    },

    create: function () {
      

        
        scaleRatio = window.devicePixelRatio / 2;
        
        game.input.addPointer();

        //Set the character Group 
        Character = game.add.group();
        
        
        //  Create the group for the stickers
        StickerGroup_1 = game.add.group();
        StickerGroup_2 = game.add.group();
        StickerGroup_3 = game.add.group();
        StickerGroup_4 = game.add.group();
        StickerGroup_5 = game.add.group();
        StickerGroup_6 = game.add.group();
        
        StickersUnderBody = game.add.group();
        StickerBody = game.add.group();
        StickersAboveBody = game.add.group();
        
        //Character change buttons 
        CharacterStickerGroup = game.add.group();
        
        //Main button group 
        MainButtonGroup = game.add.group();

        //  Create a Group that will sit above Group 1
        //PlacableMenuGroup = game.add.group();  PROTOTYPE FOR THE ANIMATION
        //Background elements
        BackgroundGroup = game.add.group();
        
        buttongroup = game.add.group();
        
        //reset the score
        score = 0;
        
        //Add background      
        this.craftBackground = game.add.sprite(0, 0, 'craft_Backgroung');
        BackgroundGroup.add(this.craftBackground);     

        carouselScaleOffset = 1.2;
        
        //add sound buttons
        this.btnMusic = gameButtons.addAudioButton("music", 20, 20, gameButtons.toggleMusic, this);
        this.btnSound = gameButtons.addAudioButton("sound", 20, 70, gameButtons.toggleSound, this);

        //if using a scrolling game uncomment these lines
        //this.audioGroup=game.add.group();
        //this.audioGroup.fixedToCamera=true;

        //define sounds here
        this.elephant = game.add.audio("elephant");
        //define background music
        this.backgroundMusic = game.add.audio("backgroundMusic");
        
        //pass the background music to the gameMedia object
        gameMedia.setBackgroundMusic(this.backgroundMusic);
        
        //Images Variables
        SelectedColor = 0xff00ff;
       
        
///////////////////////////
///CaroseleButtons Sticker Group////
///////////////////////////
        
        if(this.game.device.desktop == true){ }
        
        //Main Button Placement
        var MainButtonsPos_x = game.width/2;
        var MainButtonsPos_y = game.height/1.6;
        var MacroButton_Scale = scaleRatio*1.3;
   
        //Placeable Buttons
        this.MainStickerButton = gameButtons.addGenericButton("0", MainButtonsPos_x, MainButtonsPos_y, this.CharacterHitOn, this,"TabButton",0); 
        this.MainStickerButton.scale.setTo(MacroButton_Scale,MacroButton_Scale);
        this.MainStickerButton.alpha = 1;
        buttongroup.add(this.MainStickerButton);
        this.MainStickerButton.x -=this.MainStickerButton.width;
        
        this.MainResetButton = gameButtons.addGenericButton("0", MainButtonsPos_x, MainButtonsPos_y, this.StickerTurnOn, this,"TabButton",0);
        this.MainResetButton.alpha = 1;
        this.MainResetButton.scale.setTo(MacroButton_Scale,MacroButton_Scale);
        buttongroup.add(this.MainResetButton);
        //Top Menu Buttons
        MenuTopButtons_Pos_x = game.width-game.width/3;     
        MenuTopButtons_Pos_y = 0;
        

        //Save Button
        this.SaveButton = gameButtons.addGenericButton("0", MenuTopButtons_Pos_x, MenuTopButtons_Pos_y+20, this.SaveClicked, this,"creativeButtons",4); 
        this.SaveButton.scale.setTo(scaleRatio,scaleRatio);
        MainButtonGroup.add(this.SaveButton);
               
        
///////////////////////////
//character Sticker Group//
///////////////////////////
//These are the sprites which the player can click to change the character they're playing with       
        
        var ButtonsPos_x = game.width/2;
        var ButtonsPos_y = game.height; 
        var ButtonsScale = scaleRatio;
        
        var CharacterButtonScale = scaleRatio/3;
        
        //character Carosels
        charactercarouselScaleOffset = 1.2;
        this.charactercarousel = game.add.sprite(game.width/2, game.height, 'characterCaroselTab');
        this.charactercarousel.anchor.x = 0.5;
        this.charactercarousel.anchor.y =  1;
        this.charactercarousel.scale.setTo(scaleRatio*carouselScaleOffset,scaleRatio*carouselScaleOffset);
        CharacterStickerGroup.add(this.charactercarousel); 
        
        //Character Rock Stickers
        this.RockCharacter = game.add.sprite(ButtonsPos_x, ButtonsPos_y , 'RockBody');   
        this.RockCharacter.inputEnabled = true;
        this.RockCharacter.events.onInputOver.add(this.RockSticker, this.RockCharacter);   
        this.RockCharacter.scale.setTo(CharacterButtonScale,CharacterButtonScale);
        CharacterStickerGroup.add(this.RockCharacter);
        
        this.RockCharacter.y = game.height-this.RockCharacter.height*1.5;  
        ButtonsPos_y = game.height-this.RockCharacter.height*1.5;  
        
        this.RockCharacter.x = game.width/2-this.RockCharacter.height*2.5;  
        ButtonsPos_x = this.RockCharacter.x;
        
        //Character Pinecone Stickers
        this.PineconeCharacter = game.add.sprite(ButtonsPos_x+this.RockCharacter.width, ButtonsPos_y , 'PineconeBody');   
        this.PineconeCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.PineconeCharacter.events.onInputOver.add(this.PineconeSticker, this.PineconeCharacter);   
        this.PineconeCharacter.scale.setTo(CharacterButtonScale,CharacterButtonScale);
        CharacterStickerGroup.add(this.PineconeCharacter);
        
        //Character Mobile Stickers
        this.MobileCharacter = game.add.sprite(ButtonsPos_x+this.RockCharacter.width*2, ButtonsPos_y , 'MobileBody');   
        this.MobileCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.MobileCharacter.events.onInputOver.add(this.MobileSticker, this.MobileCharacter);   
        this.MobileCharacter.scale.setTo(CharacterButtonScale,CharacterButtonScale);
        CharacterStickerGroup.add(this.MobileCharacter);
                
        //Character StickWand Stickers
        this.StickWandCharacter = game.add.sprite(ButtonsPos_x+this.RockCharacter.width*3, ButtonsPos_y , 'StickWandBody');   
        this.StickWandCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.StickWandCharacter.events.onInputOver.add(this.StickWandSticker, this.StickWandCharacter);   
        this.StickWandCharacter.scale.setTo(CharacterButtonScale,CharacterButtonScale);
        CharacterStickerGroup.add(this.StickWandCharacter);
        
        //Character Mobile Stickers
        this.StickWandCharacter = game.add.sprite(ButtonsPos_x+this.RockCharacter.width*4, ButtonsPos_y , 'StickWandBody');
        this.StickWandCharacter.inputEnabled = true;
        //this.PineconeBody.input.pixelPerfectOver = true; 
        this.StickWandCharacter.events.onInputOver.add(this.StickWandSticker, this.StickWandCharacter);   
        this.StickWandCharacter.scale.setTo(CharacterButtonScale,CharacterButtonScale);
        CharacterStickerGroup.add(this.StickWandCharacter);
        
        CharacterStickerGroup.visible = false;
        
        var ButtonsPos_y =-100; 
                
///////////////////////////
//Placable Sticker Group///
///////////////////////////

        //Sticker Carosels        
        this.charactercarousel = game.add.sprite(game.width/2, game.height, 'StickerCaroselTab');
        this.charactercarousel.anchor.x = 0.5;
        this.charactercarousel.anchor.y =  1;
        this.charactercarousel.scale.setTo(scaleRatio*carouselScaleOffset,scaleRatio*carouselScaleOffset);
        //StickerGroup.add(this.charactercarousel);  

        GroupRefArrayCounter = 0;
        
        ImageGroupReference[0] = StickerGroup_1;
        ImageGroupReference[1] = StickerGroup_2;
        ImageGroupReference[2] = StickerGroup_3;
        ImageGroupReference[3] = StickerGroup_4;
        ImageGroupReference[4] = StickerGroup_5;
        ImageGroupReference[5] = StickerGroup_6;
        
        ImageGroupReference[0].visible = false;
        ImageGroupReference[1].visible = false;
        ImageGroupReference[2].visible = false;
        ImageGroupReference[3].visible = false;
        ImageGroupReference[4].visible = false;
        ImageGroupReference[5].visible = false;
        ImageGroupReference[GroupRefArrayCounter].visible = true;
        
        //Sticker Vars
        OGPose_X = -100;
        OGPose_Y = -100;
        
///////////////////////////
////First Sticker Group////
///////////////////////////
        
        //Pinecone Body
        this.PineconeBody = game.add.sprite(GameCenter_x, GameCenter_y+StickerDepth[0], ImageAssetArray[0]);
        this.PineconeBody.anchor.x = 0.5;
        this.PineconeBody.anchor.y = 0.5;
        this.PineconeBody.scale.setTo(scaleRatio,scaleRatio);
        StickerBody.add(this.PineconeBody);
        
        //Sticker_1_1
        this.Sticker_1 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[1], ImageAssetArray[0]);  
        this.Sticker_1.alpha = 0;
        this.Sticker_1.anchor.x = 0.5;
        this.Sticker_1.anchor.y = 0.5;
        this.Sticker_1.z =-1;
        this.Sticker_1.inputEnabled = true;
        this.Sticker_1.input.pixelPerfectOver = true;
        this.Sticker_1.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_1, param2: 1});
        this.Sticker_1.scale.setTo(scaleRatio,scaleRatio);        
        //Character.add(this.Sticker_1);  
            if(StickerDepth[0]== false)
            {
            StickersUnderBody.add(this.Sticker_1);
            }
                else
                {
                StickersAboveBody.add(this.Sticker_1);
                }
         
        //Sticker_2      
        this.Sticker_2 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[2], ImageAssetArray[0]);
        this.Sticker_2.alpha = 0;
        this.Sticker_2.anchor.x = 0.5;
        this.Sticker_2.anchor.y = 0.5;
        this.Sticker_2.inputEnabled = true;
        this.Sticker_2.input.pixelPerfectOver = true;
        this.Sticker_2.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_2, param2: 2});
        this.Sticker_2.scale.setTo(scaleRatio,scaleRatio);   
        //Character.add(this.Sticker_2);
            if(StickerDepth[1]== false)
            {
            StickersUnderBody.add(this.Sticker_2);
            }
                else
                {
                StickersAboveBody.add(this.Sticker_2);
                }
                 
        //Sticker_3
        this.Sticker_3 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[3], ImageAssetArray[0]);
        this.Sticker_3.alpha = 0;
        this.Sticker_3.anchor.x = 0.5;
        this.Sticker_3.anchor.y = 0.5;
        this.Sticker_3.inputEnabled = true;
        this.Sticker_3.input.pixelPerfectOver = true; 
        this.Sticker_3.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_3, param2: 3});
        this.Sticker_3.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_3);
            if(StickerDepth[2]== false)
            {
            StickersUnderBody.add(this.Sticker_3);
            }
                else
                {
                StickersAboveBody.add(this.Sticker_3);
                }
                
        //Sticker_4
        this.Sticker_4 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[4], ImageAssetArray[0]);
        this.Sticker_4.alpha = 0;
        this.Sticker_4.anchor.x = 0.5;
        this.Sticker_4.anchor.y = 0.5;
        this.Sticker_4.inputEnabled = true;
        this.Sticker_4.input.pixelPerfectOver = true;
        this.Sticker_4.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_4, param2: 4});
        this.Sticker_4.scale.setTo(scaleRatio,scaleRatio); 
        //Character.add(this.Sticker_4);
            if(StickerDepth[3]== false)
            {
            StickersUnderBody.add(this.Sticker_4);
            }
                else
                {
                StickersAboveBody.add(this.Sticker_4);
                }

        //Sticker_5
        this.Sticker_5 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[5], ImageAssetArray[0]);        
        this.Sticker_5.alpha = 0;
        this.Sticker_5.anchor.x = 0.5;
        this.Sticker_5.anchor.y = 0.5;
        this.Sticker_5.inputEnabled = true;
        this.Sticker_5.input.pixelPerfectOver = true;
        this.Sticker_5.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_5, param2: 5});
        this.Sticker_5.scale.setTo(scaleRatio,scaleRatio);   
        //Character.add(this.Sticker_5);      
            if(StickerDepth[4]== false)
            {
            StickersUnderBody.add(this.Sticker_5);
            }
                else
                {
                StickersAboveBody.add(this.Sticker_5);
                }

        //Sticker_6      
        this.Sticker_6 = game.add.sprite(OGPose_X, OGPose_Y+StickerDepth[6], ImageAssetArray[0]);
        this.Sticker_6.alpha = 0;
        this.Sticker_6.anchor.x = 0.5;
        this.Sticker_6.anchor.y = 0.5;
        this.Sticker_6.inputEnabled = true;
        this.Sticker_6.input.pixelPerfectOver = true;
        this.Sticker_6.events.onInputOver.add(this.sticker_Click, {param1: this.Sticker_6, param2: 6});
        this.Sticker_6.scale.setTo(scaleRatio,scaleRatio);
        //Character.add(this.Sticker_6);  
            if(StickerDepth[5]== false)
            {
            StickersUnderBody.add(this.Sticker_6);
            }
                else
                {
                StickersAboveBody.add(this.Sticker_6);
                }
        
///////////////////////////
////First Sticker Group////
///////////////////////////
        //Sticker_Place, {param1: this.StickerButton1, param2: 2, }
        //Wings
        this.StickerButton1 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y, this.Sticker_1_Place, this,0,StickerAssigner_set1);         
        this.StickerButton1.scale.setTo(ButtonsScale,ButtonsScale);      
        StickerGroup_1.add(this.StickerButton1);
        
        //Readjust the Postiotions
        this.StickerButton1.y = game.height-this.StickerButton1.height*1.5;  
        var ButtonsPos_y = this.StickerButton1.y;
        //Readjust the Postiotions
        this.StickerButton1.x = game.width/2-this.StickerButton1.width*2;  
        var ButtonsPos_x = this.StickerButton1.x;
       
        this.StickerButton2 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y, this.Sticker_2_Place, this,1,StickerAssigner_set1); 
        this.StickerButton2.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_1.add(this.StickerButton2);
        
        this.StickerButton3 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y, 
        this.Sticker_3_Place, this,2,StickerAssigner_set1);  
        this.StickerButton3.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_1.add(this.StickerButton3);
        
        this.StickerButton4 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y, 
        this.Sticker_4_Place, this,3,StickerAssigner_set1);
        this.StickerButton4.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_1.add(this.StickerButton4);
        
///////////////////////////
////Second Sticker Group///
/////////////////////////// 
        
        //feet
        this.StickerButton5 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y, this.Sticker_5_Place, this,4,StickerAssigner_set1); 
        this.StickerButton5.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_2.add(this.StickerButton5);
        
        this.StickerButton6 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y, this.Sticker_6_Place, this,5,StickerAssigner_set1); 
        this.StickerButton6.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_2.add(this.StickerButton6);
        
        //Clothing
        this.StickerButton7 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_7_Place, this,6,StickerAssigner_set1);  
        this.StickerButton7.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_2.add(this.StickerButton7);
        
        this.StickerButton8 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y, this.Sticker_8_Place, this,7,StickerAssigner_set1);
        this.StickerButton8.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_2.add(this.StickerButton8);
        
///////////////////////////
////Third Sticker Group////
///////////////////////////
        
        this.StickerButton9 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y, this.Sticker_9_Place, this,8,StickerAssigner_set1); 
        this.StickerButton9.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_3.add(this.StickerButton9);
       
        this.StickerButton10 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y, this.Sticker_10_Place, this,9,StickerAssigner_set1); 
        this.StickerButton10.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_3.add(this.StickerButton10);
        
        this.StickerButton11 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_11_Place, this,10,StickerAssigner_set1);  
        this.StickerButton11.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_3.add(this.StickerButton11);
        
        this.StickerButton12 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y, this.Sticker_12_Place, this,11,StickerAssigner_set1);
        this.StickerButton12.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_3.add(this.StickerButton12);
        
//////////////////////////
////Four Sticker Group////
//////////////////////////
        
        this.StickerButton13 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y, this.Sticker_13_Place, this,12,StickerAssigner_set1); 
        this.StickerButton13.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_4.add(this.StickerButton13);
        
        this.StickerButton14 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y, this.Sticker_14_Place, this,13,StickerAssigner_set1); 
        this.StickerButton14.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_4.add(this.StickerButton14);
        
        this.StickerButton15 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_15_Place, this,14,StickerAssigner_set1);  
        this.StickerButton15.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_4.add(this.StickerButton15);
        
        this.StickerButton16 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y, this.Sticker_16_Place, this,15,StickerAssigner_set1);
        this.StickerButton16.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_4.add(this.StickerButton16);
        
///////////////////////////
/////Five Sticker Group/////
///////////////////////////

        this.StickerButton17 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y,this.Sticker_17_Place, this,16,StickerAssigner_set1); 
        this.StickerButton17.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_5.add(this.StickerButton17);
       
        this.StickerButton18 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y, this.Sticker_18_Place, this,17,StickerAssigner_set1); 
        this.StickerButton18.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_5.add(this.StickerButton18);
        
        this.StickerButton19 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_19_Place, this,18,StickerAssigner_set1);  
        this.StickerButton19.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_5.add(this.StickerButton19);
        
        this.StickerButton20 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y, this.Sticker_20_Place, this,19,StickerAssigner_set1);
        this.StickerButton20.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_5.add(this.StickerButton20);
        
///////////////////////////
/////Six Sticker Group/////
///////////////////////////
        
        this.StickerButton21 = gameButtons.addStickerButton("0", ButtonsPos_x, ButtonsPos_y, this.Sticker_21_Place, this,20,StickerAssigner_set1); 
        this.StickerButton21.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_6.add(this.StickerButton21);
        
        this.StickerButton22 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width, ButtonsPos_y, this.Sticker_22_Place, this,21,StickerAssigner_set1); 
        this.StickerButton22.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_6.add(this.StickerButton22);
        
        this.StickerButton23 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*2, ButtonsPos_y, this.Sticker_23_Place, this,22,StickerAssigner_set1);  
        this.StickerButton23.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_6.add(this.StickerButton23);
        
        this.StickerButton24 = gameButtons.addStickerButton("0", ButtonsPos_x+this.StickerButton1.width*3, ButtonsPos_y, this.Sticker_24_Place, this,23,StickerAssigner_set1);
        this.StickerButton24.scale.setTo(ButtonsScale,ButtonsScale);
        StickerGroup_6.add(this.StickerButton24);
        
        
        Arrow_Y = game.height-this.StickerButton1.height;
        
        //Carosels Left
        this.CaroselArrow_Left = gameButtons.addGenericButton("0", ButtonsPos_x, Arrow_Y, this.Carosel_Left, this,"CaroselArrows",0); 
        this.CaroselArrow_Left.anchor.x = 1;
        this.CaroselArrow_Left.scale.setTo(scaleRatio,scaleRatio);
        //StickerGroup.add(this.CaroselArrow_Left);
        
        //Carosels Right
        this.CaroselArrow_Right = gameButtons.addGenericButton("0", ButtonsPos_x+this.StickerButton1.width*4, Arrow_Y, this.Carosel_Right, this,"CaroselArrows",1); 
        this.CaroselArrow_Right.scale.setTo(scaleRatio,scaleRatio);
        //StickerGroup.add(this.CaroselArrow_Right);
        
        Character.sort();

                //StickersUnderBody = game.add.group();
        //StickerBody = game.add.group();
        //StickersAboveBody = game.add.group();
        
        
        game.world.bringToTop(StickersUnderBody);
        game.world.bringToTop(StickerBody);
        game.world.bringToTop(StickersAboveBody);
        
        game.world.bringToTop(StickerGroup_6);
        game.world.bringToTop(StickerGroup_5);       
        game.world.bringToTop(StickerGroup_4);
        game.world.bringToTop(StickerGroup_3);
        game.world.bringToTop(StickerGroup_2);
        game.world.bringToTop(StickerGroup_1);
        game.world.bringToTop(MainButtonGroup);
        game.world.bringToTop(CharacterStickerGroup);
        game.world.bringToTop(buttongroup);
        //init the music
        gameMedia.updateMusic();        
        //init the sound buttons
        gameButtons.updateButtons();
        //Set the outrovideo
        vidGroup = game.add.group();
        //Set the Episoderovideo
        vidGroup_Ep = game.add.group();

        this.SelectedButton = this.PineconeBody;
        
          //////////////////////
        //New Coloring Tools//
        //////////////////////
        var bmd;
        var loop;

        //	This is the sprite we're going to be drawing onto the BitmapData
        //	We use game.make because we don't need it displayed, we just need it to exist
        this.loop = game.make.sprite(0, 0, 'PaintDot');
        this.loop.tint = 0xFE7805;
        this.loop.alpha = 0.5;   
        this.loop.anchor.set(0.5);
        this.loop.blendMode = PIXI.blendModes.ADD;
        //	Note that any properties you set here will be replicated when the Sprite is drawn
        // this.loop.scale.set(2);

        //this.crab = game.make.sprite(0, 0,'PineconeBody');

        //	This is the BitmapData we're going to be drawing to
        this.bmd = game.add.bitmapData(game.width, game.height);
        this.bmd.addToWorld();

        //	Disables anti-aliasing when we draw sprites to the BitmapData
        this.bmd.smoothed = true;

        //this.bmd.draw(this.crab, 10, 10);

        game.input.addMoveCallback(this.paint, this);  
        
        game.world.bringToTop(this.bmd);
        //////////////////////
        //////////////////////

        //window.open(game.canvas.toDataURL('image/png'));


    },      
    
    RockSticker: function () {
//Turn on the loading mechanisim. 
    IsPlacingRock = true;
//////////////////////////
////Sticker Depths////////
//////////////////////////
        StickerDepth[0]=true;
        StickerDepth[1]=true;
        StickerDepth[2]=true;
        StickerDepth[3]=false;
        StickerDepth[4]=true;
        StickerDepth[5]=true;
///////////////////////////
////Pivot Positions////////
///////////////////////////
    



        game.state.start("StateMain");
    },
    
PineconeSticker: function () {
//Turn on the loading mechanisim. 
    IsPlacingPineCone = true;
//////////////////////////
////Sticker Depths////////
//////////////////////////
        StickerDepth[0]=true;
        StickerDepth[1]=true;
        StickerDepth[2]=true;
        StickerDepth[3]=false;
        StickerDepth[4]=false;
        StickerDepth[5]=true;
///////////////////////////
////Pivot Positions////////
///////////////////////////
       
       

        game.state.start("StateMain");
    },
    
    MobileSticker: function () {
//Turn on the loading mechanisim. 
    IsPlacingMobile = true;
//////////////////////////
////Sticker Depths////////
//////////////////////////
        StickerDepth[0]=true;
        StickerDepth[1]=true;
        StickerDepth[2]=true;
        StickerDepth[3]=false;
        StickerDepth[4]=false;
        StickerDepth[5]=true;
///////////////////////////
////Pivot Positions////////
///////////////////////////




        game.state.start("StateMain");
    },
    
    StickWandSticker: function () {
    //Turn on the loading mechanisim. 
        IsPlacingStickWand = true;

        game.state.start("StateMain");
    },
     
    StickWandSticker: function () {
    //Turn on the loading mechanisim. 
        IsPlacingStickWand = true;

        game.state.start("StateMain");
    },
    
    p: function (pointer) {

    // console.log(pointer.);
    //console.log(pointer.event);

    },
    
    render: function () {
    game.debug.text( this.SelectedButton.anchor.x, 100, 380 );
    game.debug.text( this.SelectedButton.anchor.y, 100, 390 ); 
    
    game.debug.text( Pivot_X[0], 100, 380 );
    game.debug.text( Pivot_Y[0], 100, 390 );     
        
    },

    update: function () { 
        if(isClickDragging == true) 
        {//If the player is dragging the image onto the 
            if( game.input.activePointer.isDown == true )
            {////this.PineconeBody.alpha = 0;
                this.SelectedButton.x = game.input.x;
                this.SelectedButton.y = game.input.y;
                isMovingSticker = true;
            }
                else
                {
                    isMovingSticker = false;
                    isClickDragging = false;
                    this.SelectedButton.x = GameCenter_x;
                    this.SelectedButton.y = GameCenter_y;
                }
        }
        
    Character.sort('y', Phaser.Group.SORT_DESCENDING);  
    }, 
    
    paint: function (pointer, x, y) {

        if (pointer.isDown && isAddingPaint  == true)
        {
            
            this.bmd.draw(this.loop, x, y);
        }
    },
    
    Carosel_Left: function()
    {   
         ImageGroupReference[GroupRefArrayCounter].visible = false;
            if(GroupRefArrayCounter>0)
            {
            GroupRefArrayCounter-=1;
            }
                else
                {
                GroupRefArrayCounter=ImageGroupReference.length-1;
                }
        ImageGroupReference[GroupRefArrayCounter].visible = true;
    },
    
    Carosel_Right: function()
    {
         ImageGroupReference[GroupRefArrayCounter].visible = false;
            if(GroupRefArrayCounter<ImageGroupReference.length-1)
            {
            GroupRefArrayCounter+=1;
            }
                else
                {
                GroupRefArrayCounter=0;
                }
        ImageGroupReference[GroupRefArrayCounter].visible = true;
    },
           
//////////////////////////////////
////First Sticker Button Group////
//////////////////////////////////
    
    sticker_Click: function()
    {
        isClickDragging = true;
        this.SelectedButton = this.param1;
        PositionArrayIndicator = this.param2;   
    },

    
    Sticker_Place: function () {    
    isClickDragging = true;
    this.SelectedButton = this.param1;
    this.param1.frame = this.param2;   
    this.param1.alpha = 1;  
    },  
    
//////////////////////////////////
////First Sticker Button Group////
//////////////////////////////////
    Sticker_1_Place: function () {    
    isClickDragging = true; 
    this.SelectedButton = this.Sticker_1;
    this.Sticker_1.loadTexture(ImageAssetArray[1]);   
    this.Sticker_1.alpha = 1;  
    //Image Reference for placement section
    ImageReference[1]=ImageAssetArray[1];
    //Pivot 
    this.Sticker_1.anchor.x = Pivot_X[0];
    this.Sticker_1.anchor.y = Pivot_Y[0];
    //Data storage 
    PositionArrayIndicator = 1;
    testArrayAlpha[1] = 1;
    },
    
    Sticker_2_Place: function () {
    isClickDragging = true;
    this.Sticker_1.loadTexture(ImageAssetArray[2]); 
    this.Sticker_1.alpha = 1;  
    this.SelectedButton = this.Sticker_1;
    //Image Reference for placement section
    ImageReference[1]=ImageAssetArray[2];
    //Pivot 
    this.Sticker_1.anchor.x = Pivot_X[1];
    this.Sticker_1.anchor.y = Pivot_Y[1];
    //Data storage 
    PositionArrayIndicator = 2;
    testArrayAlpha[1] = 1;
    },
    
    Sticker_3_Place: function () {
    isClickDragging = true;
    this.Sticker_1.loadTexture(ImageAssetArray[3]);
    this.Sticker_1.alpha = 1;
    this.SelectedButton = this.Sticker_1;
    //Image Reference for placement section
    ImageReference[1]=ImageAssetArray[3];
    //Pivot 
    this.Sticker_1.anchor.x = Pivot_X[2];
    this.Sticker_1.anchor.y = Pivot_Y[2];
    //Data storage 
    PositionArrayIndicator = 3;
    testArrayAlpha[1] = 1;
    },
    
    Sticker_4_Place: function () {
    isClickDragging = true;
    this.Sticker_1.loadTexture(ImageAssetArray[4]);
    this.Sticker_1.alpha = 1;
    this.SelectedButton = this.Sticker_1;
    //Image Reference for placement section
    ImageReference[1]=ImageAssetArray[4];
    //Pivot 
    this.Sticker_1.anchor.x = Pivot_X[3];
    this.Sticker_1.anchor.y = Pivot_Y[3];
    //Data storage 
    PositionArrayIndicator = 4;
    testArrayAlpha[1] = 1;
    }, 
    
///////////////////////////
///Second Sticker Group////
///////////////////////////
    
    Sticker_5_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_2;
    this.Sticker_2.loadTexture(ImageAssetArray[5]);
    this.Sticker_2.alpha = 1; 
    //Image Reference for placement section
    ImageReference[2]=ImageAssetArray[5];
    //Pivot 
    this.Sticker_2.anchor.x = Pivot_X[4];
    this.Sticker_2.anchor.y = Pivot_Y[4];
    //Data storage 
    PositionArrayIndicator = 5;
    testArrayAlpha[2] = 1;
    }, 
        
    Sticker_6_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_2;
    this.Sticker_2.loadTexture(ImageAssetArray[6]);
    this.Sticker_2.alpha = 1; 
    //Image Reference for placement section
    ImageReference[2]=ImageAssetArray[6];
    //Pivot 
    this.Sticker_2.anchor.x = Pivot_X[5];
    this.Sticker_2.anchor.y = Pivot_Y[5];
    //Data storage 
    PositionArrayIndicator = 6;
    testArrayAlpha[2] = 1;
    }, 
            
    Sticker_7_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_2;
    this.Sticker_2.loadTexture(ImageAssetArray[7]);
    this.Sticker_2.alpha = 1;  
    //Image Reference for placemnt section
    ImageReference[2]=ImageAssetArray[7];
    //Pivot 
    this.Sticker_2.anchor.x = Pivot_X[6];
    this.Sticker_2.anchor.y = Pivot_Y[6];
    //Data storage 
    PositionArrayIndicator = 7;
    testArrayAlpha[2] = 1;
    }, 
             
    Sticker_8_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_2;
    this.Sticker_2.loadTexture(ImageAssetArray[8]);
    this.Sticker_2.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[2]=ImageAssetArray[8];
    //Pivot 
    this.Sticker_2.anchor.x = Pivot_X[7];
    this.Sticker_2.anchor.y = Pivot_Y[7];
    //Data storage
    PositionArrayIndicator = 8;
    testArrayAlpha[2] = 1;
    }, 

///////////////////////////
////Third Sticker Group////
///////////////////////////
    
    Sticker_9_Place: function () {    
    isClickDragging = true;
    this.SelectedButton = this.Sticker_3;
    this.Sticker_3.loadTexture(ImageAssetArray[9]);
    this.Sticker_3.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[3]=ImageAssetArray[9];
    //Pivot 
    this.Sticker_3.anchor.x = Pivot_X[8];
    this.Sticker_3.anchor.y = Pivot_Y[8];
    //Data storage
    PositionArrayIndicator = 9;
    testArrayAlpha[3] = 1;
    },  
    
    Sticker_10_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_3;
    this.Sticker_3.loadTexture(ImageAssetArray[10]);
    this.Sticker_3.alpha = 1;  
    //Image Reference for placemnt section
    ImageReference[3]=ImageAssetArray[10];
    //Pivot 
    this.Sticker_3.anchor.x = Pivot_X[9];
    this.Sticker_3.anchor.y = Pivot_Y[9];
    //Data storage
    PositionArrayIndicator = 10;
    testArrayAlpha[3] = 1;
    }, 
    
    Sticker_11_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_3;
    this.Sticker_3.loadTexture(ImageAssetArray[11]);
    this.Sticker_3.alpha = 1;
    //Image Reference for placemnt section
    ImageReference[3]=ImageAssetArray[11];
    //Pivot 
    this.Sticker_3.anchor.x = Pivot_X[10];
    this.Sticker_3.anchor.y = Pivot_Y[10];
    //Data storage
    PositionArrayIndicator = 11;
    testArrayAlpha[3] = 1;
    },   
    
    Sticker_12_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_3;
    this.Sticker_3.loadTexture(ImageAssetArray[12]);
    this.Sticker_3.alpha = 1;   
    //Image Reference for placemnt section
    ImageReference[3]=ImageAssetArray[12];
    //Pivot 
    this.Sticker_3.anchor.x = Pivot_X[11];
    this.Sticker_3.anchor.y = Pivot_Y[11];
    //Data storage
    PositionArrayIndicator = 12;
    testArrayAlpha[3] = 1;
    }, 
    
    
///////////////////////////
////Fourth Sticker Group///
///////////////////////////   
    
    Sticker_13_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_4;
    this.Sticker_4.loadTexture(ImageAssetArray[13]);
    this.Sticker_4.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[4]=ImageAssetArray[13];
    //Pivot 
    this.Sticker_4.anchor.x = Pivot_X[12];
    this.Sticker_4.anchor.y = Pivot_Y[12];
    //Data storage
    PositionArrayIndicator = 13;
    testArrayAlpha[4] = 1;
    }, 
        
    Sticker_14_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_4;
    this.Sticker_4.loadTexture(ImageAssetArray[14]);
    this.Sticker_4.alpha = 1;
    //Image Reference for placemnt section
    ImageReference[4]=ImageAssetArray[14];
    //Pivot 
    this.Sticker_4.anchor.x = Pivot_X[13];
    this.Sticker_4.anchor.y = Pivot_Y[13];
    //Data storage
    PositionArrayIndicator = 14;
    testArrayAlpha[4] = 1;
    }, 
            
    Sticker_15_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_4;
    this.Sticker_4.loadTexture(ImageAssetArray[15]);
    this.Sticker_4.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[4]=ImageAssetArray[15];
    //Pivot 
    this.Sticker_4.anchor.x = Pivot_X[14];
    this.Sticker_4.anchor.y = Pivot_Y[14];
    //Data storage
    PositionArrayIndicator = 15;
    testArrayAlpha[4] = 1;
    }, 
             
    Sticker_16_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_4;
    this.Sticker_4.loadTexture(ImageAssetArray[16]);
    this.Sticker_4.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[4]=ImageAssetArray[16];
    //Pivot 
    this.Sticker_4.anchor.x = Pivot_X[15];
    this.Sticker_4.anchor.y = Pivot_Y[15];
    //Data storage
    PositionArrayIndicator = 16;
    testArrayAlpha[4] = 1;
    }, 

///////////////////////////
////Fifth Sticker Group///
///////////////////////////  
    
    Sticker_17_Place: function () {    
    isClickDragging = true;
    this.SelectedButton = this.Sticker_5;
    this.Sticker_5.loadTexture(ImageAssetArray[17]);
    this.Sticker_5.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[5]=ImageAssetArray[17];
    //Pivot 
    this.Sticker_5.anchor.x = Pivot_X[16];
    this.Sticker_5.anchor.y = Pivot_Y[16];
    //Data storage
    PositionArrayIndicator = 17;
    testArrayAlpha[5] = 1;
    },  
    
    Sticker_18_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_5;
    this.Sticker_5.loadTexture(ImageAssetArray[18]);
    this.Sticker_5.alpha = 1;
    //Image Reference for placemnt section
    ImageReference[5]=ImageAssetArray[18];
    //Pivot 
    this.Sticker_5.anchor.x = Pivot_X[17];
    this.Sticker_5.anchor.y = Pivot_Y[17];
    //Data storage
    PositionArrayIndicator = 18;
    testArrayAlpha[5] = 1;
    }, 
    
    Sticker_19_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_5;
    this.Sticker_5.loadTexture(ImageAssetArray[19]);
    this.Sticker_5.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[5]=ImageAssetArray[19];
    //Pivot 
    this.Sticker_5.anchor.x = Pivot_X[18];
    this.Sticker_5.anchor.y = Pivot_Y[18];
    //Data storage
    PositionArrayIndicator = 19;
    testArrayAlpha[5] = 1;
    },   
    
    Sticker_20_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_5;
    this.Sticker_5.loadTexture(ImageAssetArray[20]);
    this.Sticker_5.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[5]=ImageAssetArray[20];
    //Pivot 
    this.Sticker_5.anchor.x = Pivot_X[19];
    this.Sticker_5.anchor.y = Pivot_Y[19];
    //Data storage
    PositionArrayIndicator = 20;
    testArrayAlpha[5] = 1;
    }, 
    
    
///////////////////////////
////Six Sticker Group////
///////////////////////////
    
    Sticker_21_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_6;
    this.Sticker_6.loadTexture(ImageAssetArray[21]);
    this.Sticker_6.alpha = 1; 
    //Image Reference for placemnt section
    ImageReference[6]=ImageAssetArray[21];
    //Pivot 
    this.Sticker_6.anchor.x = Pivot_X[20];
    this.Sticker_6.anchor.y = Pivot_Y[20];
    //Data storage
    PositionArrayIndicator = 21;
    testArrayAlpha[6] = 1;
    }, 
        
    Sticker_22_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_6;
    this.Sticker_6.loadTexture(ImageAssetArray[22]);
    this.Sticker_6.alpha = 1;
    //Image Reference for placemnt section
    ImageReference[6]=ImageAssetArray[22];
    //Pivot 
    this.Sticker_6.anchor.x = Pivot_X[21];
    this.Sticker_6.anchor.y = Pivot_Y[21];
    //Data storage
    PositionArrayIndicator = 22;
    testArrayAlpha[6] = 1;
    }, 
            
    Sticker_23_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_6;
    this.Sticker_6.loadTexture(ImageAssetArray[23]);
    this.Sticker_6.alpha = 1;
    //Image Reference for placemnt section
    ImageReference[6]=ImageAssetArray[23];
    //Pivot 
    this.Sticker_6.anchor.x = Pivot_X[22];
    this.Sticker_6.anchor.y = Pivot_Y[22];
    //Data storage
    PositionArrayIndicator = 23;
    testArrayAlpha[6] = 1;
    }, 
             
    Sticker_24_Place: function () {
    isClickDragging = true;
    this.SelectedButton = this.Sticker_6;
    this.Sticker_6.loadTexture(ImageAssetArray[24]);
    this.Sticker_6.alpha = 1;
    //Image Reference for placemnt section
    ImageReference[6]=ImageAssetArray[24];
    //Pivot 
    this.Sticker_6.anchor.x = Pivot_X[23];
    this.Sticker_6.anchor.y = Pivot_Y[23];
    //Data storage
    PositionArrayIndicator = 24;
    testArrayAlpha[6] = 1;
    },   
////////////////////
//Section Sticekrs//
////////////////////
    StickerTurnOn: function () {
        CharacterStickerGroup.visible = false;
        isAddingPaint = false;
        isAddingSticker = true;
        },
    
    
    CharacterHitOn: function () {
        CharacterStickerGroup.visible = true;
        isAddingPaint = false;
        isAddingSticker = false;
    },
    
    SaveClicked: function () { 

        game.cache.addBitmapData(this.DrawnSprite, this.bmd);
        game.state.start("StateOuttro");
    },
    
    BackToCharacterSelect: function () {game.state.start("StateCharacterSelect")},
        
    ImageClick: function () {
    this.param1.animations.play(this.param2, 30, false);
    }, 
    
    onResize: function(){
		// this function is called each time the browser is resized, and re-positions
		// game elements to keep them in their right position according to game size
    
        Character.x = Math.round((game.width)/2); 
        Character.x = Math.round((game.height)/2); 
        StickerGroup.x = Math.round((game.width-320)/2);
        StickerGroup.y = Math.round((game.height-320)/2);
        ColorGroup.x = Math.round((game.width-320)/2); 
        ColorGroup.y = Math.round((game.width-320)/2);
        BackgroundGroup.x = Math.round((game.width)/2); 
        BackgroundGroup.y = Math.round((game.height)/2); 
	}
}