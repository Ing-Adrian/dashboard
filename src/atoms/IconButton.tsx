import React from 'react';
import { IconButton as MUIIconButton, SxProps, Theme } from '@mui/material';

interface IconButtonProps {
    onClick: () => void;
    icon: React.ReactNode;
    ariaLabel: string;
    sx?: SxProps<Theme>;
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, icon, ariaLabel, sx }) => {
    return (
        <MUIIconButton onClick={onClick} aria-label={ariaLabel} sx={sx}>
            {icon}
        </MUIIconButton>
    );
};

export default IconButton;