import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages';
import { useAppThemeContext, useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {

    /*const { toggleTheme } = useAppThemeContext();*/
    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                label: 'Página inicial',
                icon: 'home',
                path: '/pagina-inicial',
            }
            
        ]);
    }, []);

    return (
        <Routes>
            {/* <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleTheme}> Toggle theme </Button>} /> */}
            <Route path="/pagina-inicial" element={<Dashboard/>} />
            <Route path="*" element={<Navigate to="/pagina-inicial" />}/>
        </Routes>
    );
};