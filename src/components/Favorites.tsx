import React from 'react';
import { RecipeCard } from './RecipeCard'
import { Recipe } from '../types';
import Grid from '@mui/material/Grid2';
import { Container, Typography, useTheme, useMediaQuery } from '@mui/material';

interface FavoritesProps {
    favorites: Recipe[]
    addFavorite: (recipe: Recipe) => void
    addMakeRecipe: (recipe: Recipe) => void
}
export function Favorites ({favorites, addFavorite, addMakeRecipe}: FavoritesProps) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container sx={{ paddingTop: "64px" }}>
            <Grid
                container
                justifyContent={"center"}
                direction={"column"}
                alignItems={"center"}
            >
                <Grid>
                    <Typography
                        variant="h4"
                        sx={{ marginTop: 11, marginBottom:2 }}
                    >
                        Favorite Recipes
                    </Typography>
                </Grid>
                {favorites.length > 0 && (
                    <Grid
                        container
                        justifyContent={ "center" }
                        sx={{
                            maxWidth: "100%",
                            flexWrap: "wrap",
                        }}
                    >
                        {favorites.map((recipe,index) => (
                            <Grid
                                sx={{
                                    width: isMobile ? { xs: "100%", sm: "50%", md: "33.33%" } : "",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                            <RecipeCard
                                key={index}
                                recipe={recipe}
                                addFavorite={addFavorite}
                                favorites={favorites}
                                addMakeRecipe={addMakeRecipe}
                            />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}