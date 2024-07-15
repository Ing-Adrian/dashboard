import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import IconButton from '@/atoms/IconButton';
import { dataIconButtons } from '../../Data/IconButtonsHeader';
import Image from 'next/image';
import AutocompleteWithIcon from '@/atoms/AutocompleteWithIcon';
import { CiSearch } from 'react-icons/ci';

const Header: React.FC = () => {
    const { dataIcons } = dataIconButtons;

    return (
        <AppBar
            color='transparent'
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                marginLeft: 25,
                width: '82vw',
                height: '13vh',
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Box display={'flex'}>
                    <Typography color={'#343c6a'} sx={{ fontSize: '1.8vw', fontWeight: 'bold', marginX: '2vw' }}>
                        Overview
                    </Typography>
                </Box>
                <Box display={"flex"} sx={{ flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AutocompleteWithIcon
                            icon={<CiSearch color='#718ebf' size={30}/>}
                            id='buscador'
                            label='search for something'
                            options={['cosa1', 'cosa2']}
                        />
                        {
                            dataIcons.map((data, index) => (
                                <IconButton
                                    key={index}
                                    ariaLabel={data.ariaLabel}
                                    icon={data.icon}
                                    onClick={() => data.onClick}
                                    sx={{ margin: '0 1em', background: '#f5f7fa', height: '2em', width: '2em' }}
                                />
                            ))
                        }
                        <Image
                            src="/profile.png"
                            alt="Profile"
                            style={{ width: '5.5em', height: '5.5em', borderRadius: '50px' }}
                            width={400}
                            height={500}
                        />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
