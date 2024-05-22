import React from 'react';
import {A11yProvider} from 'react-native-a11y';
import Button from '../../components/button';

const App = () => {
  return (
    <A11yProvider>
      <Button />
    </A11yProvider>
  );
};

export default App;
