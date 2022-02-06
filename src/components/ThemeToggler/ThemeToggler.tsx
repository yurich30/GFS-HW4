import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const ThemeToggler = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return <button onClick={() => setIsDark(!isDark)}>Change theme</button>;
};

export default ThemeToggler;
