import React from 'react';
import { Autocomplete as MUIAutocomplete, TextField, InputAdornment } from '@mui/material';

interface AutocompleteProps {
    options: string[];
    label: string;
    id: string;
    icon?: React.ReactNode;
}

const AutocompleteWithIcon: React.FC<AutocompleteProps> = ({ options, label, id, icon }) => {
    return (
        <MUIAutocomplete
            id={id}
            freeSolo
            options={options}
            sx={{
                width: '15em',
                background: '#f5f7fa',
                borderRadius: '30px',
                color: '#718ebf',
                '& .MuiOutlinedInput-root': {
                    borderRadius: '30px%',
                    '& fieldset': {
                        border: 'none',
                    },
                },
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: icon ? (
                            <InputAdornment position="start">
                                {icon}
                            </InputAdornment>
                        ) : null,
                        sx: {
                            '&:focus .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                        },
                    }}
                />
            )}
        />
    );
};

export default AutocompleteWithIcon;
