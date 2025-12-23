import { useContext, createContext } from "react";

export const ThemeContext = createContext({
  // We can pass anything in createContext which will be accesible when export ThemeContext.
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// custom hook
export default function useTheme() {
  return useContext(ThemeContext);
}
