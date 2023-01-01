import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(prop){
    const [enteredGoalText,setGoalText] = useState('');

    function goalInputHandler(enteredText){
        setGoalText(enteredText);
      }
     
    function addGoalHandler(){
        prop.onAddGoal(enteredGoalText);
        setGoalText('');
    }  

    return (
    <Modal visible={prop.isItVisible} animationType={"slide"}>
      <View style ={styles.inputContainer}>
        <Image style={styles.image}  source={require('../assets/images/target.png')} />
        <TextInput 
         style={styles.textinputContainer} 
         placeholder ="Add a mission"
         placeholderTextColor={'#120430'}
         onChangeText={goalInputHandler}
         value={enteredGoalText} 
         />
         <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title = "Add" onPress={addGoalHandler} color={'#c7ea46'}/>
          </View>
          <View style={styles.button}>
            <Button style={styles.button} title = 'Cancel' onPress={prop.onCancel} color={'#f31282'}/>
          </View>
         </View> 
      </View>    
    </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:16,
        backgroundColor:'#311b6b'
      },
      textinputContainer:{
        borderWidth:1,
        borderColor:'#e4d0ff',
        backgroundColor:'#e4d0ff',
        borderRadius:6,
        padding:8,
        width:'100%',
        marginTop:20,
        color:'#120438',
      },
      image:{
        width:100,
        height:100,
      },
      buttonContainer:{
        flexDirection:'row',
        marginTop:16,
      },
      button:{
        width:100,
        marginHorizontal:8
      }
});