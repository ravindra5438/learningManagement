import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ref, onValue } from "firebase/database";
import { db } from '../config/FirebaseConfig';
import { Button ,ActivityIndicator} from 'react-native-paper';



const CourseList = () => {
  const navigation = useNavigation();
  const [courseList,setCourseList] = useState(null);



  const getData = () => {
    const courseCountRef = ref(db, '/');
    onValue(courseCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setCourseList(data);
    });
  }

  useEffect(() => {
    getData();
  },[])

  if(!courseList) {
    return(
      <ActivityIndicator style={{flex:1}} size='large'/>
    )
  }

  return (
    <View>
      <FlatList
        data={courseList}
        keyExtractor={(course) => course.id.toString()}
        renderItem={({ item,index }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CourseDetails', { course: item ,index});
            }}
          >
            <View style={{ marginBottom: 20 ,padding:8,borderRadius:16,backgroundColor:'#FFFFDD'}}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' ,alignSelf:'center',color:'#89CFF3',textDecorationLine:'underline'}}>{item.name}</Text>
              <Text>Instructor:{item.instructor}</Text>
              <Text>Description: {item.description}</Text>
              {/* Add other course information here */}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CourseList;
