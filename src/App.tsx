//========================================================================================
/*                                                                                      *
 *                           Import All essential dependencies                          *
 *                                                                                      */
//========================================================================================
import 'react-native-gesture-handler';
import React, {useReducer, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//########################################################################################

//========================================================================================
/*                                                                                      *
 *                    Import all types and helper functions                             *
 *                                                                                      */
//========================================================================================
import {RootStackParamList} from './Types/Stack';
import mainReducer from './Services/userReduces';
import {getData} from './Services/Storage';
//########################################################################################

//========================================================================================
/*                                                                                      *
 *                                Import all the screens                                *
 *                                                                                      */
//========================================================================================
import LoginScreen from './Containers/login.container';
import SpinnerScreen from './Views/Spinner.view';
//########################################################################################

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const [state, dispatch] = useReducer(mainReducer, {
    isLoading: true,
    token: null,
    message: 'Starting app...',
  });

  useEffect(() => {
    (async () => {
      dispatch({type: 'Loader_On', message: 'Starting app...'});
      const token = await getData('userData');
      if (!token) {
        dispatch({type: 'Log_Out'});
      } else {
        dispatch({type: 'Restore_Token', token});
      }
      dispatch({type: 'Loader_Off'});
      setTimeout(() => {
        dispatch({type: 'Loader_On', message: 'Hello app...'});
        console.log('lol');
      }, 4000);
    })();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {state.isLoading ? (
          <Stack.Screen
            name="Spinner"
            component={SpinnerScreen}
            initialParams={{
              message: `${state.message}`,
            }}
          />
        ) : state.token ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
