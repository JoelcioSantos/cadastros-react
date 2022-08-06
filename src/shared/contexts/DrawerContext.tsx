import { useCallback, useContext, useState, createContext } from 'react';

interface IDrowerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IDrowerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

interface IDrawerProviderProps {
    children: React.ReactNode
}

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    return (
        <DrawerContext.Provider value = {{ isDrawerOpen, toggleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    );
};