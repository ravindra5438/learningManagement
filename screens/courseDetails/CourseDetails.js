import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { Button ,List} from 'react-native-paper';
import { db } from '../../config/FirebaseConfig';
import {ref,update} from "firebase/database";
import { useNavigation } from '@react-navigation/native';

const CourseDetails = ({ route }) => {
    const navigation = useNavigation();
  const { course,index } = route.params;

  function calculateDueDate(creationDate, durationInWeeks) {
    const millisecondsInAWeek = 7 * 24 * 60 * 60 * 1000;
    const dueDate = new Date(creationDate.getTime() + durationInWeeks * millisecondsInAWeek);
  
    const formattedDueDate = `${dueDate.getMonth() + 1}/${dueDate.getDate()}/${dueDate.getFullYear()}`;
  
    return formattedDueDate;
  }

  
  const handleEnroll = () => {
    update(ref(db, `${index}`), {
        enrolled:`true`,
        dueDate:calculateDueDate(new Date(),course.syllabus.length)
      })
      .then(() => {
        alert('You have successfully enrolled in the course: ' + course.name);
        navigation.goBack();
      })
      .catch((error) => {
        console.log("something went wrong");
      });
  };

  const handleUnEnroll = () => {
    update(ref(db, `${index}`), {
        enrolled:`false`,
        dueDate:null,
      })
      .then(() => {
        alert('You have been successfully removed from course: ' + course.name);
        navigation.goBack();
      })
      .catch((error) => {
        console.log("something went wrong");
      });
  };

  return (
    <ScrollView>
      <Text style={styles.textMargin}>Instructor: {course.instructor}</Text>
      <Text style={styles.textMargin}>Description: {course.description}</Text>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={styles.textMargin}>Enrollment Status: {course.enrollmentStatus}</Text>
        {(course.enrollmentStatus === 'Open' && course.enrolled === "false") && <Button textColor='green' onPress={handleEnroll}>enroll</Button>}
      </View>
      <Text style={styles.textMargin}>Duration: {course.duration}</Text>
      <Text style={styles.textMargin}>Schedule: {course.schedule}</Text>
      <Text style={styles.textMargin}>Location: {course.location}</Text>
      <Text style={styles.textMargin}>Pre-requisites: {course.prerequisites.join(', ')}</Text>
      {course.enrolled === "true" && <Button mode='contained' onPress={handleUnEnroll}>unenroll from course</Button>}
      <List.Accordion
        title="Syllabus">
        {
            course.syllabus.map((item,index) => (
                <List.Accordion titleStyle={{alignSelf:'center'}} key={index} title={`Week ${item.week}`}>
                    <List.Item title={item.topic}/>
                    <List.Item title={item.content}/>
                </List.Accordion>
            ))
        }
      </List.Accordion>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    textMargin:{
        marginVertical:8,
        marginHorizontal:8
    }
})

export default CourseDetails;
