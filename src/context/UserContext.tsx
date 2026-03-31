import { createContext, useState, ReactNode } from "react";

export interface User {
  name: string;
  avata: string;
}

type Theme = "dark" | "light";

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;

  themeColor: Theme | null;
  setTheme: (color: Theme) => void;
  toggleTheme: () => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [themeColor, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((toggle) => (toggle === "light" ? "dark" : "light"));
  };
  return (
    <UserContext.Provider value={{ user, setUser, themeColor, toggleTheme }}>
      {children}
    </UserContext.Provider>
  );
};
