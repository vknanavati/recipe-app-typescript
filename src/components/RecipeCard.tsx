import React from 'react';
import { Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/joy/IconButton';
import { FavoriteOutlined } from '@mui/icons-material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Recipe } from '../types'
interface RecipeCardProps {
    recipe: Recipe
    addFavorite: (recipe: Recipe) => void
    addMakeRecipe: (recipe: Recipe) => void
    favorites: Recipe[]
}

export function RecipeCard ({recipe, addFavorite, addMakeRecipe, favorites}: RecipeCardProps) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const isFavorite = favorites && favorites.some(item => item.label === recipe.label);

  // console.log("recipe", recipe)
  return (
      <Grid
          sx={{
            width: isMobile ? {xs: "100%",
            sm: "50%"} : "370px",
            boxShadow: 6,
            margin: 4,
            padding: 2,
            textAlign: "center",
            height: "auto",
            borderRadius: 3,
            backgroundColor: "white"
          }}
      >
        {isFavorite ? (
            <IconButton
            variant="plain"
            onClick={()=>addFavorite(recipe)}
          >
            <FavoriteOutlined sx={{ color: "red" }}/>
          </IconButton>
        ):(
          <IconButton onClick={()=>addFavorite(recipe)}>
            <FavoriteBorder/>
          </IconButton>
        )}
        <Grid>
          <Button
            onClick={()=>addMakeRecipe(recipe)}
          >
            Make Recipe
          </Button>
        </Grid>
        <Typography variant="h6" >{recipe.label}</Typography>
        <img
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
            margin: "0 auto",
          }}
          alt="food-photo"
          src={recipe.image}
        />
        <Typography sx={{wordWrap: "break-word", marginTop: 2}}>
            <a href={recipe.url} target="_blank" rel="noopener noreferrer">
          Full Recipe
            </a>
        </Typography>
    </Grid>
  )
}