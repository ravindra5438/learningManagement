import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';


import Main from './Main';

export default function App() {
  return (
          <NavigationContainer>
            <PaperProvider>
                <Main/>
            </PaperProvider>
          </NavigationContainer>
  );
}