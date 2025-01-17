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