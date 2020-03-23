import React, {memo} from 'react';
import {Screen, Text} from '@shoutem/ui';

const login: React.FC = () => {
  return (
    <Screen>
      <Text>Login</Text>
    </Screen>
  );
};

export default memo(login);
