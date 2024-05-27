import { StateCreator } from 'zustand';
import {
  getCategories,
  getRecipeById,
  getRecipes,
} from '../services/RecipeService';
import type { Categories, Drink, Drinks, Recipe, searchFIiter } from '../types';

export type RecipesSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFIiters: searchFIiter) => Promise<void>;
  selectRecipe: (id: Drink['idDrink']) => Promise<void>;
  closeModal: () => void;
};

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  selectedRecipe: {} as Recipe,
  modal: false,
  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories: categories,
    });
  },
  searchRecipes: async (search) => {
    const drinks = await getRecipes(search);
    set({
      drinks: drinks,
    });
  },
  selectRecipe: async (id) => {
    const recipe = await getRecipeById(id);
    set({
      selectedRecipe: recipe,
      modal: true,
    });
  },
  closeModal: () => {
    set({
      modal: false,
      selectedRecipe: {} as Recipe,
    });
  },
});
