import React from 'react';
import {Container, Typography, List, ListItem, useTheme, useMediaQuery} from '@mui/material';
import Grid from '@mui/material/Grid2';

export function AboutRecipe() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
    <Container sx={{ paddingTop: '200px'}}>
        <Grid container justifyContent={"center"} direction={"column"} alignItems={"center"}>

            <Grid
                sx={{
                    marginTop: isMobile ? 0 : 4,
                    marginBottom: 4
                }}
            >
                <Typography
                    sx={{
                        textShadow: '0 0 20px #00FFFF, 0 0 20px #00FFFF, 0 0 10px #00FFFF',
                        fontFamily: "'Tilt Neon', sans-serif",
                        fontSize: isMobile ? 35 : 50,
                        color: '#AEFFFF',
                        fontWeight: 800,
                    }}
                >
                    How to Use
                </Typography>
            </Grid>

            <Grid
                sx={{
                    background: "linear-gradient(145deg, #140A26F2, #580F58E6)",
                    fontFamily: "'Tilt Neon', sans-serif",
                    color: "#80DEEA",
                    padding: 4,
                    borderRadius: 7,
                    boxShadow: 6,
                    marginBottom: 4
                }}
            >

                <Grid sx={{ textAlign: "left"}}>
                    <Typography variant="body1" sx={{fontFamily: "'Tilt Neon', sans-serif", fontSize: isMobile ? 20 : 25}}
                    >
                        After clicking on the cusine type of your choice, recipe cards will appear.</Typography>
                </Grid>
                <Grid sx={{ textAlign: "left"}}>
                    <Typography variant="body1" sx={{fontFamily: "'Tilt Neon', sans-serif", fontSize: isMobile ? 20 : 25}}>
                        Each recipe card contains:
                        <List sx={{ listStyleType: "disc", listStylePosition: "inside", fontFamily: "'Tilt Neon', sans-serif", fontSize: isMobile ? 20 : 25}}>
                            <ListItem sx={{ display: "list-item" }}>
                                Heart icon: adds the recipe card to the Favorites page
                            </ListItem>
                            <ListItem sx={{ display: "list-item" }}>
                                Make Recipe button: adds card to Recipes page
                            </ListItem>
                            <ListItem sx={{ display: "list-item" }}>
                                Full Recipe link: opens external link to recipe's original website
                            </ListItem>
                        </List>
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                component="img"
                alt="recipe-card"
                src={`${process.env.PUBLIC_URL}/icons/recipeCard.png`}
                sx={{
                    maxWidth: isMobile ? "100%" : 370
                }}
            />

            <Grid
                sx={{
                    background: "linear-gradient(145deg, #140A26F2, #580F58E6)",
                    fontFamily: "'Tilt Neon', sans-serif",
                    color: "#80DEEA",
                    padding: 4,
                    borderRadius: 7,
                    boxShadow: 6,
                    marginBottom: 4,
                    marginTop: 4
                }}
            >
                <Typography
                    textAlign={"center"}
                    sx={{
                        fontFamily: "'Tilt Neon', sans-serif",
                        fontSize: isMobile ? 25 : 35,
                        marginBottom: 1
                    }}
                >
                    Make Recipe
                </Typography>
                <Grid sx={{ textAlign: "left"}}>
                    <Typography variant="body1" sx={{fontFamily: "'Tilt Neon', sans-serif", fontSize: isMobile ? 20 : 25}}>
                        Clicking 'Make Recipe' will store the card in the 'Recipes' page. Here you can create a grocery list
                        and add notes. Saving the note will add it under the grocery list items as a bullet point.
                        Grocery items can be removed from the list by clicking on the "remove circle icon" on the recipe card.
                        This same icon will appear next to notes added to the grocery list.
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                component="img"
                alt="make-recipe-page"
                src={`${process.env.PUBLIC_URL}/icons/makeRecipePage.png`}
                sx={{maxWidth: isMobile ? "100%" : 1000}}
            />
        </Grid>
    </Container>
    )
}