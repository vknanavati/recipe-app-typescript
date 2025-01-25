  export interface Ingredient {
    food: string
  }
  export interface Recipe {
    label: string
    ingredients: Ingredient[]
    url: string,
    image: string
  }

  export interface GroceryList {
    [key: string]: string[]
  }

  export type AddGrocery = (recipeName: string, ingredient: string) => void

  export type makeRecipe = Recipe[]

  export type AddMakeRecipe = (recipe: Recipe) => void

  export type Notes = string

  export interface NotesList {
    [key: string]: Notes[]
  }

  export type FilteredRecipe = Recipe[]

  export type SetFilteredRecipe = React.Dispatch<React.SetStateAction<Recipe[]>>

  export type SetNotesList = React.Dispatch<React.SetStateAction<NotesList>>

  export type SetNotes = React.Dispatch<React.SetStateAction<Notes>>

  export type HandleSubmit = (e: React.FormEvent<HTMLFormElement>, recipe: string) => void

  export type HandleNoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void

  export type HandleRemoveNote = (note: string, recipe: string) => void

  export interface Hits {
    recipe: Recipe
}

export interface FoodData {
    hits: Hits[]
    _links: {
        next: {
          href: string;
        };
    }
}

export type RecipeData = Hits[]