import { createDrawerNavigator } from '@react-navigation/drawer';
import StudentDashboard from '../screens/dashboard/StudentDashboard';
import MyStack from './StackNavigation';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen options={{
        headerShown:false
      }} name="Courses" component={MyStack} />
      <Drawer.Screen name="My Dashboard" component={StudentDashboard} />
    </Drawer.Navigator>

  );
}

export default MyDrawer;