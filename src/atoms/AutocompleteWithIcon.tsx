import React from 'react';
import { Box } from '@mui/material';
import Autocomplete from '@/atoms/Autocomplete';

interface AutocompleteWithIconProps {
    options: string[];
    label: string;
    id: string;
    icon: React.ReactNode;
}

const AutocompleteWithIcon: React.FC<AutocompleteWithIconProps> = ({ options, label, id, icon }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Autocomplete
                options={options}
                label={label}
                id={id}
                icon={icon}
            />
        </Box>
    );
};

export default AutocompleteWithIcon;