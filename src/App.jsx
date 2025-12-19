import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {


  let [Turn, setTurn] = useState('X');
  let [arr, setarr] = useState([[ '', '', ''],
                                 [ '', '', ''],
                                 [ '', '', '']]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    winnercheck();
  }, [Turn,arr]);

  useEffect(() => {
    if(winner){
        alert(`${winner} has won the game`);
        start();
        setWinner(null);
      }
  }, [winner]);
  

  function winnercheck(){

    console.log('Winner Check Called');
    console.log(winner);

    const patterns=[[[0,0],[0,1],[0,2]],
                    [[1,0],[1,1],[1,2]],
                    [[2,0],[2,1],[2,2]],
                    [[0,0],[1,0],[2,0]],
                    [[0,1],[1,1],[2,1]],
                    [[0,2],[1,2],[2,2]],
                    [[0,0],[1,1],[2,2]],
                    [[0,2],[1,1],[2,0]]];

    for(let pattern of patterns){
      if(arr[pattern[0][0]][pattern[0][1]]==='X' &&
         arr[pattern[1][0]][pattern[1][1]]==='X' &&
         arr[pattern[2][0]][pattern[2][1]]==='X'){
          setWinner('X');
          break;
         }
      else if(arr[pattern[0][0]][pattern[0][1]]==='O' &&
              arr[pattern[1][0]][pattern[1][1]]==='O' &&
              arr[pattern[2][0]][pattern[2][1]]==='O'){
                setWinner('O');
                break;
              }
      }
      if(arr.find(a=>a.includes(''))===undefined) setWinner('No one');
  }

  function start(){
    console.log('Game Started');
    let arr2=[['','',''],
                ['','',''],
                ['','','']];
    setarr(arr2);
  }

  function boxClick(row,col){
    if(arr[row][col]!==''){
      alert('Box already filled');
      return;
    }
    console.log(row,col);

    let arr2=[...arr];
    arr2[row][col]=Turn;
    console.log(arr);

    setarr(arr2);

    Turn==='X'?setTurn('O'):setTurn('X');
  }
  return (
    <div className="container">
      <div className="Turn">{Turn}'s Turn</div>
      <div className="playground">

        {arr.map((row,i)=> 
          row.map((col,j)=>
            <div key={`${i}-${j}`} className="boxes" onClick={()=>boxClick(i,j)}>
              {arr[i][j]}
            </div>
          )
        )}
      </div>
      <button onClick={start}>Start</button>
    </div>
  )
}

export default App

//ayush op in the chat guys