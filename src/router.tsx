import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { Layout } from './layouts/Layout';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path='/' element={<IndexPage></IndexPage>} index></Route>
          <Route
            path='/favoritos'
            element={<FavoritesPage></FavoritesPage>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
