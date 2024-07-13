// src/components/organisms/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
    return (
        <AppBar color='transparent' position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, marginLeft: 25, height: '13vh' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ position: 'fixed', right: '10px' }}>
                    My App
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
