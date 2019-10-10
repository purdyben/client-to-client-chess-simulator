import React, {Component} from 'react';

class GameBoard extends Component{
    constructor(props){
        super(props);

    }
    state = {
        board: popTile(),
            // ['testPawn','testPawn','testPawn','testPawn','testPawn','testPawn',
            // 'testPawn','testPawn','testPawn','testPawn','testPawn','testPawn','testPawn'],
        time: 10,
        players: [{
           player: 1,
           type: 'white'
         },{
           player: 2 ,
           type: 'black'
        }]


    };
    SetBoard = () =>{

        while(this.i < 64){
            this.setState((previousState) => ({
                board: [...previousState.board, 'testPawn']
            }));
            this.state.board.push('testPawn')
        }
        return this.arrays
    };

    render(){

        return(
            <div>
                {/*{this.SetBoard}*/}
                <h1>{this.state.board.length} this is my board length</h1>
                {
                    <div className="grid-container">
                        {this.state.board.map(board =>(
                            <img className={"testPawn"}
                                src = {'./images/testPawn.png'}/>
                            ))}
                    </div>
                }
            </div>

        )

    }
}
export default GameBoard;
function pop() {
    var tileArr;
    var i;
    tileArr = [];
    for(i = 0; i < 64; i++){
        tileArr.push("testPawn")
    }
    console.log(tileArr);
    return(tileArr);
}
function popTile(){
    var tileArr:any = [];
    var i;
    for(i = 0; i < 64; i++) {
        if (i % 2 === 0) {

            tileArr.push(new tile({
                Id: i,
                piece: "null",
                color: "light",
            }));
        }
        else{
            tileArr.push(new tile({
                Id: i,
                piece: "null",
                color: "dark",
            }));
        }


    }
    return tileArr;
}

class tile extends Component{
    state = {
        Id:"",
        piece: "",
        color: null,

    };
    getState(Name) {
        if(Name === "id"){
            return(this.state.Id);
        }else if(Name === "piece"){
            return(this.state.piece);
        }
        else{
            return(this.state.color);
        }
    }
}