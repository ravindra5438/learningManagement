import React,{useEffect, useState} from 'react';
import { View, Text, Image, ProgressViewIOS,FlatList } from 'react-native';
import { ActivityIndicator, ProgressBar } from 'react-native-paper';
import {ref,onValue} from "firebase/database"
import { db } from '../../config/FirebaseConfig';

const StudentDashboard = () => {
    const [courseList,setCourseList] = useState(null); 





    const getData = () => {
        const courseCountRef = ref(db, '/');
        onValue(courseCountRef, (snapshot) => {
          const data = snapshot.val();
          console.log("data from dashboard\n\n\n",data);
          setCourseList(data.filter((item) => (item.enrolled === "true" && item.enrollmentStatus === "Open")))
        });
        
      }

      
    
      useEffect(() => {
        getData();
      },[])


      if(!courseList){
        return(
            <ActivityIndicator size="large"/>
        )
      }

  return (
    <View>
      <FlatList
        data={courseList}
        keyExtractor={(course) => course.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20,backgroundColor:'#FFFFDD' }}>
            <Image source={{ uri: item.thumbnail }} style={{ width: 100, height: 100 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
            <Text>Instructor: {item.instructor}</Text>
            <Text>Due Date: {item.dueDate}</Text>
            {item.progress && (
              <ProgressBar progress={item.progress}/>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default StudentDashboard;
