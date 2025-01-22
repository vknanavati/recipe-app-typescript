import React from 'react';
import { Recipe, GroceryList, AddGrocery, Notes, NotesList, FilteredRecipe, AddMakeRecipe, HandleSubmit, HandleNoteChange, HandleRemoveNote } from '../types'
import { Typography, Button, Box, useTheme, useMediaQuery} from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import Grid from '@mui/material/Grid2';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/joy/IconButton';
import { MakeRecipeCard } from "./MakeRecipeCard";

interface DisplayFilteredProps {
    makeRecipe: Recipe
    groceryList: GroceryList
    addGrocery: AddGrocery
    notes: Notes
    notesList: NotesList
    filteredRecipe: FilteredRecipe
    addMakeRecipe: AddMakeRecipe
    handleSubmit: HandleSubmit
    handleNoteChange: HandleNoteChange
    handleRemoveNote: HandleRemoveNote

}

export function DisplayFiltered({
    makeRecipe,
    groceryList,
    addGrocery,
    notes,
    notesList,
    handleSubmit,
    handleNoteChange,
    addMakeRecipe,
    handleRemoveNote,
    filteredRecipe
}: DisplayFilteredProps) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (

        <Grid
            container
            direction="column"
            alignItems="center"
            sx={{ width: "100%", boxSizing: "border-box" }}
        >

        <Box
            display="flex"
            justifyContent={"flex-end"}
            sx={{
                width: "100%",
                maxWidth: "100%",
                padding: 2
            }}
        >
            <Button
                variant="contained"
                sx={{
                    marginLeft: "auto",
                    backgroundColor: "#F61297",
                    marginRight: isMobile ? 5 : 0,
                    maxWidth: "100%",
                    padding: "10px 20px",
                    boxSizing: "border-box"
                }}
                onClick={()=>addMakeRecipe(makeRecipe)}
                >
                Remove Recipe
            </Button>
        </Box>

        <Grid container justifyContent="center" sx={{ marginTop: 2, width: "100%", maxWidth: "100%" }}>
            <MakeRecipeCard
                recipe={makeRecipe}
                addGrocery={addGrocery}
                key={makeRecipe.label}
                groceryList={groceryList}
                sx={{
                    width: isMobile ? "90%" : "60%",
                    maxWidth: "100%",
                    margin: "0 auto",
                    boxSizing: "border-box"
                  }}
            />
        </Grid>

        {/* switched makeRecipe.length to makeRecipe otherwise notes and grocery list wouldn't render*/}
        {makeRecipe && (
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
                    <Typography
                        variant="h5"
                        sx={{marginBottom: 3}}
                    >
                        Grocery List
                    </Typography>
                    {groceryList[makeRecipe.label] && groceryList[makeRecipe.label].length > 0 && (
                        <ol>
                            {groceryList[makeRecipe.label].map((item, i)=>{
                                return (
                                <Grid container>
                                    <Grid>
                                        <li><Typography sx={{fontSize: 20}} key={i}>{item}</Typography></li>
                                    </Grid>
                                </Grid>
                                )
                            })}
                        </ol>
                    )}

                    {notesList[makeRecipe.label] && notesList[makeRecipe.label].length > 0 && (
                        <ul>
                        {notesList[makeRecipe.label].map((userNote, i) => {
                            return (

                            <Grid container alignItems={"center"} justifyContent="center">
                                <Grid>
                                    <li><Typography sx={{ fontSize: 20, textAlign: "center"}}>{userNote}</Typography></li>
                                </Grid>
                                <Grid>
                                    <IconButton onClick={() => handleRemoveNote(userNote, makeRecipe.label)}>
                                        <RemoveCircleIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            )
                        })}
                        </ul>
                    )}
                </Grid>

                    <form onSubmit={(e)=>handleSubmit(e, makeRecipe.label)}>
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
                            <Typography variant="h5" sx={{ marginBottom: 2 }}>Notes</Typography>
                            <Textarea
                                value={notes}
                                onChange={(e)=>handleNoteChange(e)}
                                placeholder="Recipe notes"
                                sx={{ width: "100%", marginBottom: 2 }}
                                 />
                            <Button type="submit">Save</Button>
                        </Grid>
                    </form>

            </Grid>
        )}
</Grid>
    )
}