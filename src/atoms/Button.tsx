import React from 'react';
import { Button as MUIButton } from '@mui/material';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <MUIButton variant="contained" onClick={onClick}>
            {label}
        </MUIButton>
    );
};

export default Button;