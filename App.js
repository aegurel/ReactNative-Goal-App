import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() { 
  const [goalList,setGoalList]=useState([]);
  const [modalIsVisible,setModalVisible] = useState(false);

  function addGoalHandler(enteredGoalText){
    setGoalList((currentGoalList)=>[
      ...currentGoalList,
      {text:enteredGoalText,id:Math.random().toString()}
    ]);
    setModalVisible(false)
  }

  function deleteGoalHandler(id){
    setGoalList((currentGoalList)=>{
      return currentGoalList.filter((goal)=>goal.id !== id);
    })
  }

  function modalVisibleHandler(){
    if(modalIsVisible)
      setModalVisible(false);
    else
      setModalVisible(true);  
  }


  return (
<>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>MY GOAL APP</Text>
      </View>
      <Button 
        title='Add New Goal' 
        onPress={modalVisibleHandler}
        /> 
      <GoalInput 
      isItVisible={modalIsVisible}
      onAddGoal={addGoalHandler}
      onCancel={modalVisibleHandler}
      />
        <View style={styles.textContainer}>
          <FlatList alwaysBounceVertical={false}  
            data={goalList}
            renderItem={(itemdata)=>{
            return(
             <GoalItem 
             textValue={itemdata.item.text}
             idd={itemdata.item.id}
             onDeleteGoal={deleteGoalHandler}
            />);
           }}
           keyExtractor={(item,index)=>{
            return item.id;
           }}
          />
        </View>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:25,
    paddingHorizontal:8
  },
  titleContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },  
  textContainer:{
    flex:10,
  },
  titleText:{
    color:'#e4d0ff'
  }
});
