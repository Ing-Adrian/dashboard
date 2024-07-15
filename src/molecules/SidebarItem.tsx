import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

interface SidebarItemProps {
    icon: React.ReactNode;
    title: string;
    isActive: boolean;
    onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, title, isActive, onClick }) => {
    const IconWithStyles = React.cloneElement(icon as React.ReactElement, { style: { width: '4vw', height: '4vh', opacity: isActive ? '1' : '0.5' } });

    return (
        <Box
            sx={{
                marginBottom: 2,
                cursor: 'pointer',
                width: '10vw',
                padding: 1.5,
                display: 'flex',
                alignItems: 'center',
                opacity: isActive ? 1 : 0.5,
                color: isActive ? '#2d60ff' : '',
                background: isActive ? 'linear-gradient(to right, #2d60ff 3%,transparent 3%)' : 'transparent',
                '&:hover': {
                    color: '#2d60ff',
                    opacity: 1
                },
            }}
            onClick={onClick}
        >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {IconWithStyles}
            </Box>
            <Typography
                sx={{
                    marginLeft: 1,
                    fontSize: '1.2vw',
                    fontWeight: 'bolder',
                    fontFamily: 'sans-serif',
                    opacity: isActive ? 1 : 0.5,
                }}
            >
                {title}
            </Typography>
        </Box>
    );
};

export default SidebarItem;
