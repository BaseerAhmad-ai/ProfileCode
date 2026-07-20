import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
type Theme = "" | "dark";
interface contextType {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<contextType | undefined>(undefined);
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("");

  useEffect(() => {
    const getTheme = localStorage.getItem("color") as Theme;
    const winTheme = window.matchMedia("prefers-colore-scheme:dark").matches
      ? "dark"
      : "";
    setTheme(getTheme || winTheme);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("color", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev: Theme) => (prev === "" ? "dark" : ""));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) throw new Error("Context is undefinded");
  return context;
}
