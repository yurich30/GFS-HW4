import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/themes';
import Header from './components/Header/Header';
import DescriptionComponent from './components/DescriptionComponent/DescriptionComponent';
import BlogList from './components/BlogList/BlogList';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Layout>
          <>
            <Header />
            <DescriptionComponent />
            <BlogList />
          </>
        </Layout>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
