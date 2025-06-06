import React from 'react';

import Home from './components/Home';
import { AppProvider } from './providers/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};

export default App;
