import React from 'react';
import { Recipe, GroceryList, AddGrocery, Notes, NotesList, AddMakeRecipe, HandleSubmit, HandleNoteChange, HandleRemoveNote } from '../types'
import { Typography, Button, Box, useTheme, useMediaQuery } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/joy/IconButton';
import { MakeRecipeCard } from './MakeRecipeCard';
import Grid from '@mui/material/Grid2';

interface FirstRecipeProps {
    makeRecipe: Recipe[]
    groceryList: GroceryList
    addGrocery: AddGrocery
    notes: Notes
    notesList: NotesList
    addMakeRecipe: AddMakeRecipe
    handleSubmit: HandleSubmit
    handleNoteChange: HandleNoteChange
    handleRemoveNote: HandleRemoveNote
}

export function FirstRecipe({
    makeRecipe,
    groceryList,
    addGrocery,
    notes,
    notesList,
    handleSubmit,
    handleNoteChange,
    addMakeRecipe,
    handleRemoveNote
}: FirstRecipeProps) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    if (!makeRecipe || makeRecipe.length === 0) {
    return null;
}

    const firstRecipe = makeRecipe[0];
    console.log("firstRecipe: ", firstRecipe);

    return (
        <Grid container direction="column" alignItems="center" sx={{ width: "100%", boxSizing: "border-box" }}>

            <Box display="flex" justifyContent="flex-end" sx={{ width: "100%", maxWidth: "100%", padding: 2 }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#F61297",
                        marginLeft: "auto",
                        marginRight: isMobile ? 5 : 0,
                        maxWidth: "100%",
                        padding: "10px 20px",
                        boxSizing: "border-box"
                    }}
                    onClick={() => addMakeRecipe(firstRecipe)}
                >
                    Remove Recipe
                </Button>
            </Box>

            <Grid container justifyContent="center" sx={{ marginTop: 2, width: "100%", maxWidth: "100%" }}>
                <MakeRecipeCard
                recipe={firstRecipe}
                addGrocery={addGrocery}
                key={firstRecipe.label}
                groceryList={groceryList}
                sx={{
                    width: isMobile ? "90%" : "60%",
                    maxWidth: "100%",
                    margin: "0 auto",
                    boxSizing: "border-box"
                }}
                />
            </Grid>

            {makeRecipe.length > 0 && (
                <Grid container justifyContent="center" sx={{ width: "100%", maxWidth: "100%", marginTop: 4, gap: isMobile ? 0 : 3 }}>
                    <Grid
                        justifyContent="center"
                        sx={{
                            boxShadow: 6,
                            padding: 2,
                            textAlign: "center",
                            width: isMobile ? "90%" : "370px",
                            height: "auto",
                            marginBottom: 10,
                            borderRadius: 3,
                            backgroundColor: "white",
                            maxWidth: "100%",
                            boxSizing: "border-box"
                        }}
                    >
                        <Typography variant="h5" sx={{ marginBottom: 3 }}>
                            Grocery List
                        </Typography>
                        {groceryList[firstRecipe.label] && groceryList[firstRecipe.label].length > 0 && (
                            <ol>
                                {groceryList[firstRecipe.label].map((item, i) => (
                                <Grid container key={i}>
                                    <Grid>
                                        <li><Typography sx={{ fontSize: 20}}>{item}</Typography></li>
                                    </Grid>
                                </Grid>
                                ))}
                            </ol>
                        )}

                        {notesList[firstRecipe.label] && notesList[firstRecipe.label].length > 0 && (
                            <ul>
                                {notesList[firstRecipe.label].map((userNote, i) => (
                                <Grid container alignItems="center" justifyContent="center" key={i}>
                                    <Grid>
                                        <li><Typography sx={{ fontSize: 20, textAlign: "center" }}>{userNote}</Typography></li>
                                    </Grid>
                                    <Grid>
                                        <IconButton onClick={() => handleRemoveNote(userNote, firstRecipe.label)}>
                                            <RemoveCircleIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                                ))}
                            </ul>
                        )}
                    </Grid>

                    <form onSubmit={(e) => handleSubmit(e, firstRecipe.label)}>
                        <Grid
                            container
                            justifyContent="center"
                            sx={{
                                boxShadow: 6,
                                padding: 2,
                                textAlign: "center",
                                width: isMobile ? "90%" : "370px",
                                height: "auto",
                                marginBottom: 10,
                                borderRadius: 3,
                                backgroundColor: "white",
                                maxWidth: "100%",
                                boxSizing: "border-box"
                            }}
                        >
                        <Typography variant="h5" sx={{ marginBottom: 2 }}>
                            Notes
                        </Typography>
                        <Textarea
                            value={notes}
                            onChange={(e) => handleNoteChange(e)}
                            placeholder="Recipe notes"
                            sx={{ width: "100%", marginBottom: 2 }}
                        />
                        <Button type="submit" variant="contained" sx={{ backgroundColor: "#F61297" }}>
                            Save
                        </Button>
                        </Grid>
                    </form>
                </Grid>
            )}

        </Grid>
    );
}
