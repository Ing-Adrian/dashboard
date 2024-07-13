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
                padding: 1.5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
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
            <Grid container alignItems='center'>
                <Grid item>
                    {IconWithStyles}
                </Grid>
                <Grid item>
                    <Typography sx={{
                        marginLeft: 1,
                        width: "1vw",
                        fontWeight: 'bolder',
                        fontFamily: 'sans-serif',
                        opacity: isActive ? 1 : 0.5
                    }}
                    >
                        {title}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SidebarItem;
