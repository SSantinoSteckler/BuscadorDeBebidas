import { z } from 'zod';
import {
  CategoriesAPISchema,
  DrinkApiResponse,
  DrinksApiResponse,
  RecipeAPIResponseSchema,
  searchFilterSchema,
} from '../utils/recipes-schema';

export type Categories = z.infer<typeof CategoriesAPISchema>;
export type searchFIiter = z.infer<typeof searchFilterSchema>;
export type Drinks = z.infer<typeof DrinksApiResponse>;
export type Drink = z.infer<typeof DrinkApiResponse>;
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;
