import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import SidebarItem from '@/molecules/SidebarItem';
import { BsCreditCard2Back } from "react-icons/bs";
import { dataSidebar } from '../../Data/SidebarData';

const Sidebar: React.FC = () => {
    const { data } = dataSidebar;
    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <Box
            sx={{
                width: '18vw',
                backgroundColor: '#fff',
                position: 'fixed',
                height: '100vh',
                overflow: 'auto',
                scrollbarWidth: 'thin',
                top: 0,
                left: 0,
                border: '1px solid silver',
                zIndex: (theme) => theme.zIndex.drawer + 2,
            }}
        >
            <Box
                sx={{
                    height: '13vh',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly'
                }}
            >
                <BsCreditCard2Back color='#0023c4' style={{ width: '1.8vw', height: '3vh' }} />
                <Typography color={'#343c6a'} sx={{ fontSize: '1.8vw', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                    BankDash.
                </Typography>
            </Box>
            {
                data.map((dato, index) => (
                    <SidebarItem
                        key={index}
                        icon={dato.icon}
                        title={dato.title}
                        isActive={index === activeIndex}
                        onClick={() => {
                            setActiveIndex(index);
                            dato.onClick();
                        }}
                    />
                ))
            }
        </Box>
    );
};

export default Sidebar;
