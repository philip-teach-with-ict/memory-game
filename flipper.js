let gameTiles=[];
let answeTile=[];
let answerArray=[];
let questionArray=[];
let clickTile;
let playTile;
let click = 2;
let isQuestion = false;

questionArray.push(['<img src="img/diamond.png" style="height:150px; width:200px;" />', "Diamond"]);
questionArray.push(['<img src="img/ruby.png" style="height:150px; width:200px;" />', "Ruby"]);
questionArray.push(['<img src="img/emerald.png" style="height:150px; width:200px;" />', "Emerald"]);
questionArray.push(['<img src="img/saphire.png" style="height:150px; width:200px;" />', "Saphire"]);
questionArray.push(['<img src="img/opal.png" style="height:150px; width:200px;" />', "Opal"]);

questionArray.push(['<img src="img/crystal.png" style="height:150px; width:200px;" />', "Crystal"]);
questionArray.push(['<img src="img/garnet.png" style="height:150px; width:200px;" />', "Garnet"]);
questionArray.push(['<img src="img/malachite.png" style="height:150px; width:200px;" />', "Malechite"]);
questionArray.push(['<img src="img/lapis.png" style="height:150px; width:200px;" />', "Lapis-Lazuli"]);
questionArray.push(['<img src="img/pyrites.png" style="height:150px; width:200px;" />', "Pyrites"]);



class Tile {
            constructor(qtile, atile, question, answer){
                this.qtile = qtile;
                this.atile = atile;
                this.question = question;
                this.answer = answer;
                this.isQuestion = false;
                };
            getmatch(tileid){
                if( this.atile == tileid){this.isQuestion = false; return this;}
                else if ( this.qtile == tileid){this.isQuestion = true; return this}
                else{return false }
            }
            getans(){return this.answer};
        }

while(tileArray.length>0) {
        let tl = tileArray.length;
        let ql = questionArray.length
        let getTile1 = Math.floor(Math.random() * tl);
        let getTile2 = Math.floor(Math.random() * (tl-1));
        let getQuestion = Math.floor(Math.random() * ql);
        
        //get tiles and remove from array
        let tile1 = tileArray[getTile1];         
        tileArray.splice(getTile1,1);
        let tile2 = tileArray[getTile2];
        tileArray.splice(getTile2,1)
        let question1 = questionArray[getQuestion][0];
        let answer1 = questionArray[getQuestion][1];
        questionArray.splice(getQuestion,1)
        let tile = new Tile(tile1,tile2, question1, answer1);
        //console.log(tile);
        gameTiles.push(tile)
        //console.log(gameTiles)
    }
    //let game = new Tile("","","",""){
    let game = {
        click_tile: "",
        set choice(choice) {
            this.click_tile = choice;
        },
        get choice() {
            return this.click_tile ;
        }
        };

function tileturn(){
    let tileid = event.currentTarget.id;
    let tiletext = document.getElementById(tileid).innerText;
    let domValue = document.getElementById(tileid).value
    document.getElementById("playbox").innerText = "GAME-ON!"; 
    //get tile in play by looping through the array of tiles
    for(let i = 0; i < gameTiles.length; i++){
        if(gameTiles[i].getmatch(tileid)){ playTile = gameTiles[i]; console.log("playTile"+playTile);}
        }

    if(tileid == tiletext){
        if(playTile.isQuestion){document.getElementById(tileid).innerHTML = playTile.question; winTile = playTile.atile
        }else{document.getElementById(tileid).innerText = playTile.answer; winTile = playTile.qtile}
        }else{document.getElementById(tileid).innerText = tileid;}

        console.log(winTile);
    if (click == 2){
        game.choice = playTile;
        console.log("game.choice = "+ game.choice)
        
        click =1;
    }else if (click == 1){
        console.log("game.choice = "+ game.choice.atile)
        if(tileid == game.choice.atile || game.choice.qtile == tileid){
                document.getElementById("playbox").innerText = 'The winner is '+game.choice.answer;
        }else{ document.getElementById("playbox").innerText = "NOPE!"; 
        reset();
        }
        click =2;
// }else{console.log("problem")}
}}

function reset(){
    document.getElementById(game.choice.qtile).innerText = game.choice.qtile; 
    document.getElementById(game.choice.atile).innerText = game.choice.atile;

}