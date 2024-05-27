import axios from 'axios';
import {
  CategoriesAPISchema,
  DrinksApiResponse,
  RecipeAPIResponseSchema,
} from '../utils/recipes-schema';
import { Drink, searchFIiter } from '../types';

export async function getCategories() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const { data } = await axios(url);
  const result = CategoriesAPISchema.safeParse(data);

  if (result.success) {
    return result.data;
  }
}

export async function getRecipes(search: searchFIiter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${search.category}&i=${search.ingredient}`;
  const { data } = await axios(url);
  const result = DrinksApiResponse.safeParse(data);

  if (result.success) {
    return result.data;
  }
}

export async function getRecipeById(id: Drink['idDrink']) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data } = await axios(url);
  console.log(data);
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);

  if (result.success) {
    return result.data;
  }
}
