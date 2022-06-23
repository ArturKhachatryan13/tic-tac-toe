import { View, Text, Pressable, StyleSheet } from "react-native";

export default function Square(props) {
    return (
     
            <Pressable onPress={props.getWinnter} style={styles.square}>
                <Text style={styles.text}>
                    {props.value}
                </Text>
            </Pressable>
    
    );
}

const styles = StyleSheet.create({
    square: {
        width:80,
        height:80,       
        backgroundColor: "white",
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderRadius:5,
    },
    text:{
        fontSize: 30,
    }
})
