import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CourseList from './components/CourseList';
import courseData from './components/courseData';
import MyDrawer from './navigation/Drawer';
import MyStack from './navigation/StackNavigation';

const Main = () => {
    return (
            <MyDrawer/>
    )
}

  export default Main;