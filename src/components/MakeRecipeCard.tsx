import React from 'react';
import { Recipe, AddGrocery, GroceryList } from '../types';
import Grid from '@mui/material/Grid2';
import { Typography, useTheme, useMediaQuery, SxProps, Theme } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/joy/IconButton';

interface MakeRecipeCardProps {
    recipe: Recipe
    addGrocery: AddGrocery
    groceryList: GroceryList
    sx?: SxProps<Theme>
}
export function MakeRecipeCard({recipe, addGrocery, groceryList}: MakeRecipeCardProps) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return(
        <Grid
            sx={{
                width: isMobile ? {sm: "66.67%"} : "370px",
                boxShadow: 6,
                margin: 4,
                padding: 2,
                textAlign: "center",
                height: "auto",
                borderRadius: 3,
                backgroundColor: "white"
            }}
        >
            <Typography variant="h5" sx={{marginBottom: 2}}>{recipe.label}</Typography>
            <img
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    display: "block",
                    margin: "0 auto",
                }}
                alt="food-photo" src={recipe.image}
            />
            <Grid sx={{marginTop: 2, marginBottom: 2}}>
                <Typography variant="subtitle1" sx={{fontWeight: 700, fontSize: 20}}>Ingredients:</Typography>
            </Grid>
            {recipe.ingredients.map((ingredient, i)=>{
                return (
                <Grid key={i} container justifyContent={"center"} alignItems={"center"}>
                    <Grid>
                        <Typography key={i}>{ingredient.food}</Typography>
                    </Grid>
                    <Grid sx={{marginLeft: 2}}>
                        {groceryList[recipe.label] && groceryList[recipe.label].includes(ingredient.food) ? (
                            <IconButton variant="plain">
                                <RemoveCircleIcon onClick={() => addGrocery(recipe.label, ingredient.food)}/>
                            </IconButton>
                        ) : (
                            <IconButton variant="plain">
                                <AddCircleIcon onClick={() => addGrocery(recipe.label, ingredient.food)}/>
                            </IconButton>
                        )}
                    </Grid>
                </Grid>
                )
            })}
            <Typography sx={{wordWrap: "break-word", marginTop: 2}}>
              <a href={recipe.url} target="_blank" rel="noopener noreferrer">
            Full Recipe
              </a>
          </Typography>
        </Grid>
    )
}