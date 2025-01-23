import React from 'react';
import { useEffect } from 'react';
import { Recipe, Hits, FoodData } from '../types';
import { Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { RecipeCard } from './RecipeCard';

interface HomeRecipeProps {
    recipeData: Hits[]
    setRecipeData: (data: Recipe[]) => void
    addFavorite: (recipe: Recipe) => void
    foodData: FoodData
    setFoodData: (data: FoodData) => void
    addMakeRecipe: (recipe: Recipe) => void
    favorites: Recipe[]
}

export function HomeRecipe({
    recipeData,
    setRecipeData,
    addFavorite,
    foodData,
    setFoodData,
    addMakeRecipe,
    favorites
}: HomeRecipeProps) {

    console.log(process.env)

    useEffect(()=>{
      console.log("recipeData: ", recipeData)
    }, [recipeData]);

    const handleClick = (cusineType: string) => {
      console.log("Searching city: ", cusineType, process.env.REACT_APP_RECIPE_KEY, process.env.REACT_APP_ID)
      fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_RECIPE_KEY}&cuisineType=${cusineType}`, {
      })
      .then(response => response.json())
      .then(data => {
          console.log("My recipe data: ", data);
          setFoodData(data);
          setRecipeData(data.hits.map((hit: Hits) => hit.recipe));
      })
      .catch(error => console.error("Error:", error))
    }

    const handleNext = (foodData: FoodData) => {
      console.log("next link", foodData._links.next.href);

      fetch(foodData._links.next.href, {
      })
      .then(response => response.json())
      .then(data =>{
          console.log("My data: ", data);
          setFoodData(data);
          setRecipeData([...recipeData, ...data.hits]);
      })
      .catch(error => console.error("Error:", error));
    }
    return (
        <Container maxWidth={"xl"} sx={{paddingTop: "150px", paddingBottom: "64px"}}>
          <Grid container justifyContent={"center"} direction={"column"} alignItems={"center"}>
            <Typography
              sx={{
                marginTop: 11,
                marginBottom: 2,
                textShadow: "0 0 20px #00FFFF, 0 0 20px #00FFFF, 0 0 10px #00FFFF",
                fontFamily: "'Tilt Neon', sans-serif",
                fontSize: 50,
                color: "#AEFFFF",
                fontWeight: 800,
              }}
            >
              Recipe Search
            </Typography>

            <Grid>
              <Button sx={{margin: 3, backgroundColor: "#F61297", fontSize: 18}} variant="contained" onClick={()=>handleClick("american")}>American</Button>
              <Button sx={{margin: 3, backgroundColor: "#F61297", fontSize: 18}} variant="contained" onClick={()=>handleClick("british")}>British</Button>
              <Button sx={{margin: 3, backgroundColor: "#F61297", fontSize: 18}} variant="contained" onClick={()=>handleClick("caribbean")}>Caribbean</Button>
              <Button sx={{margin: 3, backgroundColor: "#F61297", fontSize: 18}} variant="contained" onClick={()=>handleClick("chinese")}>Chinese</Button>
              <Button sx={{margin: 3, backgroundColor: "#F61297", fontSize: 18}} variant="contained" onClick={()=>handleClick("eastern europe")}>Eastern Europe</Button>
              <Button sx={{margin: 3, backgroundColor: "#F61297", fontSize: 18}} variant="contained" onClick={()=>handleClick("french")}>French</Button>
            </Grid>
            <Grid>
              <Button sx={{margin: 3, backgroundColor: "#F61297", fontSize: 18}} variant="contained" onClick={()=>handleClick("greek")}>Greek</Button>
              <Button sx={{margin: 3, backgroundColor: "#F61297", fontSize: 18}} variant="contained" onClick={()=>handleClick("indian")}>Indian</Button>
              <Button sx={{margin: 3, backgroundColor: "#F61297", fontSize: 18}} variant="contained" onClick={()=>handleClick("italian")}>Italian</Button>
              <Button sx={{margin: 3, backgroundColor: "#F61297", fontSize: 18}} variant="contained" onClick={()=>handleClick("japanese")}>Japanese</Button>
              <Button sx={{margin: 3, backgroundColor: "#F61297", fontSize: 18}} variant="contained" onClick={()=>handleClick("korean")}>Korean</Button>
              <Button sx={{margin: 3, backgroundColor: "#F61297", fontSize: 18}} variant="contained" onClick={()=>handleClick("mediterranean")}>Mediterranean</Button>
            </Grid>
            <Grid>
              <Button sx={{margin: 3, backgroundColor: "#F61297", fontSize: 18}} variant="contained" onClick={()=>handleClick("mexican")}>Mexican</Button>
              <Button sx={{margin: 3, backgroundColor: "#F61297", fontSize: 18}} variant="contained" onClick={()=>handleClick("middle eastern")}>Middle Eastern</Button>
              <Button sx={{margin: 3, backgroundColor: "#F61297", fontSize: 18}} variant="contained" onClick={()=>handleClick("nordic")}>Nordic</Button>
              <Button sx={{margin: 3, backgroundColor: "#F61297", fontSize: 18}} variant="contained" onClick={()=>handleClick("south american")}>South American</Button>
            </Grid>
          </Grid>

        {recipeData.length > 0 && (
          <Grid>
            <Grid container justifyContent={"center"} sx={{marginTop: 5}}>
                {recipeData.map((hit, index) => {
                    // console.log("HIT from recipeData.map:", hit);
                  return (
                    <RecipeCard
                      key={index}
                      recipe={hit.recipe}
                      addFavorite={addFavorite}
                      addMakeRecipe={addMakeRecipe}
                      favorites={favorites}
                    />
                  )
                })}
            </Grid>
            <Grid container justifyContent={"center"}>
                <Button
                    variant="contained"
                    sx={{fontSize: 20, backgroundColor: "#F61297"}}
                    onClick={()=>handleNext(foodData)}
                >
                    Next
                </Button>
            </Grid>
          </Grid>
        )}
      </Container>
    )
  }