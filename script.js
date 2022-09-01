const Game=(()=>{
    gameboard=document.querySelectorAll('.gamePad');
    radiobuttons=document.querySelectorAll('input[type="radio"]');
    restartButton=document.querySelector('button');
    playertext=document.querySelectorAll('input[type="text"]');
    playercurrent=document.querySelectorAll('.player');
    const player = ()=>{
        let playerNumber=1;
        const click=()=>{
            for(let i=0;i<playertext.length;i++){
                playertext[i].addEventListener('change',()=>{
                    
                    playercurrent[i].textContent = playertext[i].value;
                })
            }
            restartButton.addEventListener('click',()=>{
                for(let i=0;i<gameboard.length;i++){
                    gameboard[i].textContent='';
                }
            })
            for(let i=0;i<gameboard.length;i++){
                gameboard[i].addEventListener('click',()=>{
                    if(playerNumber==1){
                        if(!gameboard[i].textContent){
                            gameboard[i].textContent='X';
                            radiobuttons[0].checked=true;
                            radiobuttons[1].checked=false;
                            playerNumber=2;
                        }
                    }
                    else{
                        if(!gameboard[i].textContent){
                            gameboard[i].textContent='O';
                            radiobuttons[0].checked=false;
                            radiobuttons[1].checked=true;
                            playerNumber=1;
                        } 
                    }

                    if(gameboard[1].textContent==gameboard[0].textContent&&gameboard[2].textContent==gameboard[0].textContent&&gameboard[0].textContent!=''){
                        gameboard[0].textContent=='X'? confirm("Player 1 Win!"):confirm("Player 2 Win!")
                        
                    }
                    if(gameboard[4].textContent==gameboard[3].textContent&&gameboard[5].textContent==gameboard[3].textContent&&gameboard[3].textContent!=''){
                        gameboard[4].textContent=='X'? confirm("Player 1 Win!"):confirm("Player 2 Win!")
                        
                    }
                    if(gameboard[7].textContent==gameboard[6].textContent&&gameboard[8].textContent==gameboard[6].textContent&&gameboard[6].textContent!=''){
                        gameboard[7].textContent=='X'? confirm("Player 1 Win!"):confirm("Player 2 Win!")
                        
                    }
                    if(gameboard[3].textContent==gameboard[0].textContent&&gameboard[6].textContent==gameboard[0].textContent&&gameboard[0].textContent!=''){
                        gameboard[3].textContent=='X'? confirm("Player 1 Win!"):confirm("Player 2 Win!")
                        
                    }
                    if(gameboard[4].textContent==gameboard[1].textContent&&gameboard[7].textContent==gameboard[1].textContent&&gameboard[1].textContent!=''){
                        gameboard[4].textContent=='X'? confirm("Player 1 Win!"):confirm("Player 2 Win!")
                        
                    }
                    if(gameboard[5].textContent==gameboard[2].textContent&&gameboard[8].textContent==gameboard[2].textContent&&gameboard[2].textContent!=''){
                        gameboard[5].textContent=='X'? confirm("Player 1 Win!"):confirm("Player 2 Win!")
                        
                    }
                    if(gameboard[4].textContent==gameboard[0].textContent&&gameboard[8].textContent==gameboard[0].textContent&&gameboard[0].textContent!=''){
                        gameboard[3].textContent=='X'? confirm("Player 1 Win!"):confirm("Player 2 Win!")
                        
                    }
                    if(gameboard[4].textContent==gameboard[2].textContent&&gameboard[6].textContent==gameboard[2].textContent&&gameboard[2].textContent!=''){
                        gameboard[4].textContent=='X'? confirm("Player 1 Win!"):confirm("Player 2 Win!")
                      
                    }                              
                })
            }
        }
        return{click}
    }
    
    return{player} 
})();

const player1=Game.player().click();
