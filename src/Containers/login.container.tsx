import React, {memo} from 'react';
// import {StackNavigationProp} from '@react-navigation/stack';
// // import {useNavigation} from '@react-navigation/native';
// import {RootStackParamList} from '../Types/Types';

import LoginView from '../Views/login.view';

// type LoginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

const login: React.FC = () => {
  // const navigation = useNavigation<LoginScreenProp>();

  return <LoginView />;
};

export default memo(login);
