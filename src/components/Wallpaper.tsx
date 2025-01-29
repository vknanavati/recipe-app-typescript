import React from 'react';
import { ReactNode } from 'react';
import { Box } from '@mui/material';
import BACKGROUND from '../images/background.png'

interface WallpaperProps {
    children: ReactNode
}

export function Wallpaper({children}: WallpaperProps) {
    return (
        <Box
            sx={{
                backgroundImage: `url(${BACKGROUND})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                backgroundAttachment: { xs: "scroll", sm: "fixed" }
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    overflowX: "hidden",
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                {children}
            </Box>
        </Box>
    )
}