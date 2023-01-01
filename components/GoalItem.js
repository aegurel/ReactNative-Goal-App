import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(prop){
    return (
       <Pressable
          style={({pressed})=> pressed && styles.pressedItem}
          onPress={prop.onDeleteGoal.bind(this,prop.idd)}>
          <View style={styles.goalTextContainer}>
            <Text style={styles.goalText}>{prop.textValue}</Text>
          </View>
      </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalTextContainer:{
        margin:6,
        padding:10,
        alignItems:'center',
        backgroundColor:'#e4d0ff',
        borderRadius:6
      },
      pressedItem:{
        opacity:0.5
      },
      goalText:{
        color:'black'
      },
});