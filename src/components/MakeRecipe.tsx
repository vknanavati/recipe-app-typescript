import React from 'react';
import { useEffect, useState } from 'react';
import { makeRecipe, AddGrocery, GroceryList, FilteredRecipe, AddMakeRecipe, Notes, NotesList, SetFilteredRecipe, HandleSubmit, HandleNoteChange, HandleRemoveNote } from '../types'
import { DisplayFiltered } from './DisplayFiltered';
import { FirstRecipe } from './FirstRecipe';
import Grid from '@mui/material/Grid2';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Container, Drawer, List, ListItemButton, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';

interface MakeRecipeProps {
    makeRecipe: makeRecipe
    addGrocery: AddGrocery
    groceryList: GroceryList
    filteredRecipe: FilteredRecipe
    addMakeRecipe: AddMakeRecipe
    notes: Notes
    notesList: NotesList
    setFilteredRecipe: SetFilteredRecipe
    handleSubmit: HandleSubmit
    handleNoteChange: HandleNoteChange
    handleRemoveNote: HandleRemoveNote
}
export function MakeRecipe({
    makeRecipe,
    addGrocery,
    groceryList,
    filteredRecipe,
    setFilteredRecipe,
    notes,
    notesList,
    addMakeRecipe,
    handleSubmit,
    handleNoteChange,
    handleRemoveNote}: MakeRecipeProps) {

    const [openDrawer, setOpenDrawer] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    const handleToggleDrawer = () => {
        setOpenDrawer(prevState => !prevState)
    }

    useEffect(() => {
        console.log("filteredRecipe updated: ", JSON.stringify(filteredRecipe));
        console.log("filteredRecipe length: ", filteredRecipe.length)
        console.log("notesList: ", notesList)

    }, [filteredRecipe, notesList]);


    //triggered when you click on a recipe in the side drawer
    const selectedRecipe = (choice: string) => {
        const filtered = makeRecipe.filter(item => item.label.includes(choice));
        console.log("choice: ", choice);
        setFilteredRecipe(filtered);
        console.log("filtered:", filtered);
    }

    // const handleNoteChange: HandleNoteChange = (e) => {
    //     const input = e.target.value
    //     setNotes(input)
    //     console.log("NOTES: ", notes)
    // }
    // // recipe is the recipe name
    // const handleSubmit: HandleSubmit = (e, recipe) => {
    //     e.preventDefault();
    //     setNotes("");

    //     setNotesList((notesObject) => {
    //         //currentNotes is the value for the key recipe
    //         //this checks if recipe exists in notesObject. If yes it returns the value if not truthy it sets value to empty brackets
    //         const currentNotes = notesObject[recipe] || [];
    //         console.log("currentNotes: ", currentNotes);
    //         console.log("notesObject", notesObject)
    //         console.log("recipe passed to handleSubmit: ", recipe)

    //         return {...notesObject, [recipe] : [...currentNotes, notes]}
    //     })
    // }

    // const handleRemoveNote: HandleRemoveNote = (note, recipe) =>{

    //  setNotesList((notesObject)=>{

    //     const currentNotes = notesObject[recipe] || [];
    //     //create new array of notes without the note to be deleted
    //     const updatedNotes = currentNotes.filter((item)=> item !== note)
    //     console.log("note removed handleRemoveNote: ", note);
    //     console.log("recipe in handleRemoveNote: ", recipe);
    //     //set updatedNotes for the recipe passed through function
    //     return {...notesObject, [recipe]: updatedNotes}

    //  })
    // }

    return (
        <Container sx={{ paddingTop: "170px" }}>

            {isMobile && (
                    <IconButton
                        onClick={handleToggleDrawer}
                        sx={{
                            position: "fixed",
                            left: "16p",
                            zIndex: 1200,
                            color: "#00FFFF",
                            backgroundColor: "#140A26F2",
                            '&:hover': {
                                backgroundColor: "#06052B",
                            }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                )}

            <Drawer
                variant={isMobile ? "temporary" : "permanent"}
                open={isMobile ? openDrawer : false}
                // onClose={handleToggleDrawer}
                onClick={() => setOpenDrawer(false)}
                anchor="left"
                sx={{
                    '& .MuiDrawer-paper': {
                        width: isMobile ? (openDrawer ? 240 : 56) : 240,
                        marginTop: isMobile ? "230px" : "190px",
                        // height: 'calc(100% - 64px)',
                        background: "linear-gradient(145deg, #140A26F2, #580F58E6)",
                    }
                }}
            >
                <List>
                    {makeRecipe && (
                        makeRecipe.map((title, i) => (
                            <ListItem key={i}>
                                <ListItemButton
                                    sx={{
                                        backgroundColor: "#0D0D19B3",
                                        fontFamily: "'Tilt Neon', sans-serif",
                                        backdropFilter: "blur(8px)",
                                        borderRadius: "12px",
                                        padding: "12px",
                                        margin: "8px 0",
                                        color: "#FFF",
                                        '&:hover': {
                                            backgroundColor: "#06052B",
                                            color: "#FF00FF",
                                            transform: "translateY(-1px)",
                                            boxShadow: `
                                                0 0 10px #FF00ff4D,
                                                0 0 20px #FF00FF33,
                                                0 0 30px #FF00FF1A
                                            `,
                                            textShadow: `
                                                0 0 8px #FF00FF,
                                                0 0 12px #FF00FF,
                                                0 0 16px #FF00FF
                                          `
                                        }
                                    }}
                                    onClick={() => selectedRecipe(title.label)}>
                                    <ListItemText sx={{fontSize: 25}} disableTypography>
                                        {title.label}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))
                    )}
                </List>
            </Drawer>

            <Grid container justifyContent={"center"} direction={"column"} alignItems={"center"} sx={{marginTop: 6}}>
                {filteredRecipe.length === 0 && makeRecipe && (
                    <FirstRecipe
                        makeRecipe={makeRecipe}
                        groceryList={groceryList}
                        addGrocery={addGrocery}
                        notes={notes}
                        notesList={notesList}
                        handleSubmit={handleSubmit}
                        handleNoteChange={handleNoteChange}
                        addMakeRecipe={addMakeRecipe}
                        handleRemoveNote={handleRemoveNote}
                    />
                )}

                {filteredRecipe.length > 0 && makeRecipe && (
                    filteredRecipe.map((recipeChoice, index)=> (
                        <DisplayFiltered
                            key={index}
                            makeRecipe={recipeChoice}
                            groceryList={groceryList}
                            addGrocery={addGrocery}
                            notes={notes}
                            notesList={notesList}
                            handleSubmit={handleSubmit}
                            handleNoteChange={handleNoteChange}
                            addMakeRecipe={addMakeRecipe}
                            handleRemoveNote={handleRemoveNote}
                            filteredRecipe={filteredRecipe}
                        />
                    ))
                )}
            </Grid>
        </Container>
    );
}
