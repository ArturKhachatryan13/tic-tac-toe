import { View, StyleSheet } from "react-native";
import { useState } from "react";
import Board from "./Board";

const startData = Array(16).fill(null);

export default function Game() {
  const [board, setBoard] = useState(startData);
  const [XorO, setXorO] = useState(true);
  const [count, setCount] = useState(0);

  function findWinner(arr) {
    if (
      arr[0] !== null &&
      arr[0] === arr[1] &&
      arr[0] === arr[2] &&
      arr[0] === arr[3]
    ) {
      return alert("WIN");
    } else if (
      arr[4] !== null &&
      arr[4] === arr[5] &&
      arr[4] === arr[6] &&
      arr[4] === arr[7]
    ) {
      return alert("WIN");
    } else if (
      arr[8] !== null &&
      arr[8] === arr[9] &&
      arr[8] === arr[10] &&
      arr[8] === arr[11]
    ) {
      return alert("WIN");
    } else if (
      arr[0] !== null &&
      arr[0] === arr[4] &&
      arr[0] === arr[8] &&
      arr[0] === arr[12]
    ) {
      return alert("WIN");
    } else if (
      arr[1] !== null &&
      arr[1] === arr[5] &&
      arr[1] === arr[9] &&
      arr[1] === arr[13]
    ) {
      return alert("WIN");
    } else if (
      arr[2] !== null &&
      arr[2] === arr[6] &&
      arr[2] === arr[10] &&
      arr[2] === arr[14]
    ) {
      return alert("WIN");
    } else if (
      arr[3] !== null &&
      arr[3] === arr[7] &&
      arr[3] === arr[11] &&
      arr[3] === arr[15]
    ) {
      return alert("WIN");
    } else if (
      arr[0] !== null &&
      arr[0] === arr[5] &&
      arr[0] === arr[10] &&
      arr[0] === arr[15]
    ) {
      return alert("WIN");
    } else if (
      arr[3] !== null &&
      arr[3] === arr[6] &&
      arr[3] === arr[9] &&
      arr[3] === arr[12]
    ) {
      return alert("WIN");
    }
    return null;
  }
  function getWinner(index) {
    const newBoard = [...board];
    if (newBoard[index]) return null;
    newBoard[index] = XorO ? "X" : "O";
    setBoard(newBoard);
    setCount(count+1); 
    setXorO(!XorO);
    console.log(board)
    if (count > 5) {
      findWinner(newBoard);
    }
  }

  // const [board, setBoard] = useState(startData);
  // const [XorO, setXorO] = useState(true);
  // const winCombination = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  // ];
  // function findWinner(surface) {

  //     for (let i = 0; i < winCombination.length; i++) {
  //         const [a, b, c] = winCombination[i];

  //         if ((surface[a] !== null) && surface[a] === surface[b]
  //          && surface[a] === surface[c]) {
  //            return alert("WIN");
  //          }

  //     }
  //     return null;
  // }

  // function getWinner(index) {
  //     const newBoard = [...board];
  //     if (newBoard[index])  {
  //         return null;
  //      }
  //     newBoard[index] = XorO ? "X" : "O";
  //     setBoard(newBoard);
  //     setXorO(!XorO);
  //     findWinner(newBoard);
  // }

  return (
    <View style={styles.gameContainer}>
      <Board getWinnter={getWinner} board={board} />
    </View>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderWidth: 1,
    borderRadius: 6,
  },
});