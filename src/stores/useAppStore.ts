import { create } from 'zustand';
import { RecipesSliceType, createRecipesSlice } from './recipeSlice';
import { devtools } from 'zustand/middleware';
import { createFavoriteSlice, FavoriteSliceType } from './favoriteSlice';

export const useAppStore = create<RecipesSliceType & FavoriteSliceType>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
  }))
);
