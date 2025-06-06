import React, { ReactNode } from 'react';

export interface AppProps {
  word: string[];
  setWord: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCharIndex: number;
  setSelectedCharIndex: React.Dispatch<React.SetStateAction<number>>;
  hasEnglishWord: boolean;
  setHasEnglishWord: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = React.createContext<AppProps>({} as AppProps);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [word, setWord] = React.useState<string[]>(['', '', '', '', '']);
  const [selectedCharIndex, setSelectedCharIndex] = React.useState<number>(0);
  const [hasEnglishWord, setHasEnglishWord] = React.useState<boolean>(false);

  const value = { word, setWord, selectedCharIndex, setSelectedCharIndex, hasEnglishWord, setHasEnglishWord };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppProps => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
