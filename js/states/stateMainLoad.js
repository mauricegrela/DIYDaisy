var stateMainLoad = {

    preload: function () {
        
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
                game.load.image('Mobile_25', 'images/Mobile/Mobile_25.png');
                game.load.image('Mobile_26', 'images/Mobile/Mobile_26.png');
                game.load.image('Mobile_27', 'images/Mobile/Mobile_27.png');
                game.load.image('Mobile_28', 'images/Mobile/Mobile_28.png');
                
                game.load.spritesheet("Mobile_stickers", "images/ui/Mobile_stickers.png", 182, 125, 28);
                CaroselGroupNumber = 6;
                StickerAssigner_set1 = "Mobile_stickers";
                
                //Reset the references to the body
                    ImageReference[0] = 'MobileBody';
                    ImageReference[1] = 'MobileBody';
                    ImageReference[2] = 'MobileBody';
                    ImageReference[3] = 'MobileBody';
                    ImageReference[4] = 'MobileBody';
                    ImageReference[5] = 'MobileBody';
                    ImageReference[6] = 'MobileBody';

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
                ///////////////////////////
                ///Seventh Sticker Group///
                ///////////////////////////
                        ImageAssetArray[25]='Mobile_25';
                        ImageAssetArray[26]='Mobile_26';
                        ImageAssetArray[27]='Mobile_27';
                        ImageAssetArray[28]='Mobile_28';
                

                //////////////////////////
                ////Sticker Depths////////
                //////////////////////////
                        StickerDepth[0]=true;
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


                
                game.load.video('Episode', 'videos/Forest_Mobile/DaisyGBK_ForestMob_720.mp4');
                
                //Turn this off in case it gets loaded again
                IsPlacingMobile=false;
                
                
            }

            if(IsPlacingPinecone == true)
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
           
                game.load.spritesheet("Pinecone_Stickers", "images/ui/Pinecone_stickers.png", 182, 125, 24);
                CaroselGroupNumber = 4;
                StickerAssigner_set1 = "Pinecone_Stickers"; 
                
                //Reset the references to the body
                    ImageReference[0] = 'PineconeBody';
                    ImageReference[1] = 'PineconeBody';
                    ImageReference[2] = 'PineconeBody';
                    ImageReference[3] = 'PineconeBody';
                    ImageReference[4] = 'PineconeBody';
                    ImageReference[5] = 'PineconeBody';
                    ImageReference[6] = 'PineconeBody';
                
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


                game.load.video('Episode', 'videos/PineCone_Animal/DaisyGBK_PineCon_Ani_720.mp4');

                //Turn this off in case it gets loaded again        
                IsPlacingPinecone=false;
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
            game.load.image('RockFeet_2', 'images/Rock/RockFeet_2.png');
            game.load.image('RockFeet_3', 'images/Rock/RockFeet_3.png');
            game.load.image('RockFeet_4', 'images/Rock/RockFeet_4.png');
            
            game.load.spritesheet("Rock_Stickers_1", "images/ui/Rock_stickers.png", 182, 125, 20);
            CaroselGroupNumber = 4;
            StickerAssigner_set1 = "Rock_Stickers_1";

            //Reset the references to the body
                ImageReference[0] = 'RockBody';
                ImageReference[1] = 'RockBody';
                ImageReference[2] = 'RockBody';
                ImageReference[3] = 'RockBody';
                ImageReference[4] = 'RockBody';
                ImageReference[5] = 'RockBody';
                ImageReference[6] = 'RockBody';
                
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
            //////////////////////////
            ////Sticker Depths////////
            //////////////////////////
                    StickerDepth[0]=true;
                    StickerDepth[1]=true;
                    StickerDepth[2]=true;
                    StickerDepth[3]=false;
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



                game.load.spritesheet("Leaf_Stickers", "images/ui/Leaf_stickers.png", 182, 125, 16);  
                CaroselGroupNumber = 3;
                StickerAssigner_set1 = "Leaf_Stickers";
                
            //Reset the references to the body
                ImageReference[0] = 'LeafBody';
                ImageReference[1] = 'LeafBody';
                ImageReference[2] = 'LeafBody';
                ImageReference[3] = 'LeafBody';
                ImageReference[4] = 'LeafBody';
                ImageReference[5] = 'LeafBody';
                ImageReference[6] = 'LeafBody';
                

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
                    ImageAssetArray[9]='LeafHeadgear_1';
                    ImageAssetArray[10]='LeafHeadgear_2';
                    ImageAssetArray[11]='LeafHeadgear_3';
                    ImageAssetArray[12]='LeafHeadgear_4';
            ///////////////////////////
            ////Fourth Sticker Group///
            ///////////////////////////
                    ImageAssetArray[13]='LeafClothing_1';
                    ImageAssetArray[14]='LeafClothing_2';
                    ImageAssetArray[15]='LeafClothing_3';  
                    ImageAssetArray[16]='LeafClothing_4';
            //////////////////////////
            ////Sticker Depths////////
            //////////////////////////
                    StickerDepth[0]=false;
                    StickerDepth[1]=true;
                    StickerDepth[2]=true;
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
                
                
                StickerAssigner_set1 = "Leaf_Stickers";

                game.load.video('Episode', 'videos/Flower_Petal/DaisyGBK_FlowerPetArt_720.mp4');


                IsPlacingLeaf = false;

            }

            if(IsPlacingStickWand == true)
            {

                game.load.image('StickWandBase_1', 'images/StickWand/StickWandBase_1.png');
                game.load.image('StickWandBase_2', 'images/StickWand/StickWandBase_2.png');      
                game.load.image('StickWandBase_3', 'images/StickWand/StickWandBase_3.png');
                game.load.image('StickWandBase_4', 'images/StickWand/StickWandBase_4.png'); 
                                
                game.load.image('StickWandClothing_1', 'images/StickWand/StickWandClothing_1.png');
                game.load.image('StickWandClothing_2', 'images/StickWand/StickWandClothing_2.png');
                game.load.image('StickWandClothing_3', 'images/StickWand/StickWandClothing_3.png');
                game.load.image('StickWandClothing_4', 'images/StickWand/StickWandClothing_4.png');

                game.load.image('StickWandBase_1', 'images/StickWand/StickWandBase_1.png');
                game.load.image('StickWandBase_2', 'images/StickWand/StickWandBase_2.png');      
                game.load.image('StickWandBase_3', 'images/StickWand/StickWandBase_3.png');
                game.load.image('StickWandBase_4', 'images/StickWand/StickWandBase_4.png'); 

                game.load.image('StickWandFace_1', 'images/StickWand/StickWandFace_1.png');
                game.load.image('StickWandFace_2', 'images/StickWand/StickWandFace_2.png');
                game.load.image('StickWandFace_3', 'images/StickWand/StickWandFace_3.png');
                game.load.image('StickWandFace_4', 'images/StickWand/StickWandFace_4.png');
                
                game.load.image('StickWandFeet_1', 'images/StickWand/StickWandFeet_1.png');
                game.load.image('StickWandFeet_3', 'images/StickWand/StickWandFeet_3.png');
                game.load.image('StickWandFeet_2', 'images/StickWand/StickWandFeet_2.png');
                game.load.image('StickWandFeet_4', 'images/StickWand/StickWandFeet_4.png');
               
                game.load.image('StickWandHeadgear_1', 'images/StickWand/StickWandHeadgear_1.png');
                game.load.image('StickWandHeadgear_2', 'images/StickWand/StickWandHeadgear_2.png');
                game.load.image('StickWandHeadgear_3', 'images/StickWand/StickWandHeadgear_3.png');
                game.load.image('StickWandHeadgear_4', 'images/StickWand/StickWandHeadgear_4.png');

                game.load.spritesheet("StickWand_stickers", "images/ui/StickWand_stickers.png", 182, 125, 24);  
                CaroselGroupNumber = 4;
                StickerAssigner_set1 = "StickWand_stickers";
                
                
                //game.load.spritesheet("StickWand_Stickers_1", "images/ui/StickWand_stickers.png", 365, 250, 24);

                //Reset the references to the body
                ImageReference[0] = 'StickWandBody';
                ImageReference[1] = 'StickWandBody';
                ImageReference[2] = 'StickWandBody';
                ImageReference[3] = 'StickWandBody';
                ImageReference[4] = 'StickWandBody';
                ImageReference[5] = 'StickWandBody';
                ImageReference[6] = 'StickWandBody';
                

            ///////////////////////////
            ////Sticker Body//////////
            ///////////////////////////
                    ImageAssetArray[0]='StickWandBody';
            ///////////////////////////
            ////First Sticker Group////
            ///////////////////////////
                    ImageAssetArray[1]='StickWandBase_1';
                    ImageAssetArray[2]='StickWandBase_2'; 
                    ImageAssetArray[3]='StickWandBase_3';
                    ImageAssetArray[4]='StickWandBase_4';
            ///////////////////////////
            ////Second Sticker Group///
            ///////////////////////////
                    ImageAssetArray[5]='StickWandFace_1';
                    ImageAssetArray[6]='StickWandFace_2';
                    ImageAssetArray[7]='StickWandFace_3';
                    ImageAssetArray[8]='StickWandFace_4';
            ///////////////////////////
            ////Third Sticker Group////
            ///////////////////////////
                    ImageAssetArray[9]='StickWandHeadgear_1';
                    ImageAssetArray[10]='StickWandHeadgear_2';
                    ImageAssetArray[11]='StickWandHeadgear_3';
                    ImageAssetArray[12]='StickWandHeadgear_4';
            ///////////////////////////
            ////Fourth Sticker Group///
            ///////////////////////////
                    ImageAssetArray[13]='StickWandFeet_1';
                    ImageAssetArray[14]='StickWandFeet_2';
                    ImageAssetArray[15]='StickWandFeet_3';
                    ImageAssetArray[16]='StickWandFeet_4';
            ///////////////////////////
            ////Fifth Sticker Group////
            ///////////////////////////
                    ImageAssetArray[17]='StickWandClothing_1';
                    ImageAssetArray[18]='StickWandClothing_2';
                    ImageAssetArray[19]='StickWandClothing_3';
                    ImageAssetArray[20]='StickWandClothing_4';
                //////////////////////////
                ////Sticker Depths////////
                //////////////////////////
                        StickerDepth[0]=true;
                        StickerDepth[1]=true;
                        StickerDepth[2]=true;
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
                

                game.load.video('Episode', 'videos/Forest_Mobile/DaisyGBK_ForestMob_720.mp4');
                
                IsPlacingStickWand = false;
                
            }
        
        game.load.audio("drop",'audio/sfx/drop.mp3');
        
        //Loading screen assets
        var loadingBackground = game.add.image(0, 0, "loadingBackground");  
        loadingBackground.anchor.set(0, 0);
        loadingBackground.height = this.game.height;
        loadingBackground.width = this.game.width;  
        //loadingBackground.scale.set(scaleRatio,scaleRatio);
        //Loading Variables      
        var empty = game.add.image(0, 0, "loadingEmpty");
        var full = game.add.image(0, 0, "loadingFull");

        //center(empty);
        full.anchor.set(0, 0.5);
        full.x = this.game.width - full.width*1.35;
        full.y = this.game.height/2 + this.game.height/6;
        //center(empty);
        empty.anchor.set(0, 0.5);
        empty.x = this.game.width - full.width*1.35;
        empty.y = this.game.height/2 + this.game.height/6;

        game.load.setPreloadSprite(full);
        
        
        this.logo = this.add.sprite( full.x, full.y, 'LoadscreenAnim');
        this.logo.anchor.set(0.9,0.5);
        this.logo.x = empty.x;
        this.logo.y = empty.y-this.logo.width/3;
        //this.logo.scale.set(scaleRatio,scaleRatio);
        this.logo.animations.add('shake');
        this.logo.animations.play('shake', 15, true)
    },

    create: function () {
        game.state.start("StateMain");
    },

    update: function () {
        
    }

}