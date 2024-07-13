// src/layouts/MainLayout.tsx
import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import Sidebar from '@/organisms/Sidebar';
import Header from '@/organisms/Header';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Box display="flex" height="100vh">
            <Sidebar />
            <Box flexGrow={1} marginLeft={25} marginTop={8}>
                <Header />
                <Box padding={2}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

export default MainLayout;
