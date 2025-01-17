import React from 'react';
import { useEffect } from 'react';
import { AppBar, Container,Toolbar, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { Recipe } from '../types'
interface RecipeAppProps {
    makeRecipe: Recipe[]
    favorites: Recipe[]
}
export function RecipeApp({makeRecipe, favorites}: RecipeAppProps): JSX.Element {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const navLinkStyles = {
        color: "#00F7FF",
        textShadow: "0 0 8px #00F7FF",
        fontSize: isMobile ? 18 : 27,
        fontFamily: "'Tilt Neon', sans-serif",
        '&:hover': {
        color: "#40FBFF",
        textShadow: `
            0 0 8px #00F7FF,
            0 0 12px #00F7FF,
            0 0 16px #00F7FF,
            0 0 24px #00F7FF
        `
        }
    };

    useEffect(()=>{
        console.log("****MAKE RECIPE NAV LINK: ", makeRecipe.length > 0 ? makeRecipe.length : "No recipes")
    },[makeRecipe])

  return (
    <Container disableGutters>
      <AppBar
        position="fixed"
        sx={{
          marginTop: isMobile ? "100px" : "128px",
          background: "linear-gradient(to right, #0D0D19E6, #260D26E6)",
        }}
      >
        <Toolbar>
          <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            textAlign: "center",
            gap:2,
            ml: "auto",
            whiteSpace: "nowrap",
            overflow: "auto",
            flexShrink: 1,
          }}>
            <Typography variant="h6" component={Link} to="/recipe/homeRecipe" sx={{ textDecoration: 'none', ...navLinkStyles }}>
              Home
            </Typography>
            <Typography variant="h6" component={Link} to="/recipe/aboutRecipe" sx={{ textDecoration: 'none', ...navLinkStyles }}>
              About
            </Typography>
            <Typography variant="h6" component={Link} to="/recipe/favorites" sx={{ textDecoration: 'none', ...navLinkStyles }}>
              Favorites ({favorites !== null && (favorites.length)})
            </Typography>
            <Typography variant="h6" component={Link} to="/recipe/make" sx={{ textDecoration: 'none', ...navLinkStyles }}>
              Recipes ({makeRecipe.length !== null && (makeRecipe.length) })
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet/>
    </Container>
  );
}
