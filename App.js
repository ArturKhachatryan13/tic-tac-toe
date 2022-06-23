import { View, Text, StyleSheet}  from 'react-native';
import Game from './components/Game';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <Game/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    flexDirection:"column",
  
  }
})