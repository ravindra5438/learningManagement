import { createStackNavigator } from '@react-navigation/stack';
import Courses from '../screens/courses/Courses';
import CourseDetails from '../screens/courseDetails/CourseDetails';
import {
  DrawerToggleButton
} from '@react-navigation/drawer';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="CourseList">
        <Stack.Screen name="CourseList" component={Courses} options={{ title: 'Courses',headerLeft:() => <DrawerToggleButton/> }} />
        <Stack.Screen name="CourseDetails" component={CourseDetails} options={({ route }) => ({ title: route.params.course.name })} />
      </Stack.Navigator>
  );
}

export default MyStack