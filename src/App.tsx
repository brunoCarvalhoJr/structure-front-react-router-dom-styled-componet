import { useState } from 'react'
import MainContainer from './components/main-container/mainContainer';
import { AppDrawerProvider, AppThemeProvider } from './shared/contexts';

function App() {

  return (
      <AppThemeProvider>
        <MainContainer/>
      </AppThemeProvider>
  )
}

export default App
