import { View, StyleSheet } from "react-native";
import Square from "./Square";

export default function Board({ getWinnter, board }) {
  return (
    <View style={styles.boardContainer}>
      {board.map((item, index) => (
        <Square key={index} value={item} getWinnter={() => getWinnter(index)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  boardContainer: {
    padding: 0,
    margin: 0,
    width: 322,
    height: 320,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "red",
    borderWidth: 1,
  },
});