import React, { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';

export const Header = () => {
  const { pathname } = useLocation();

  const [search, setSearch] = useState({
    ingredient: '',
    category: '',
  });

  const isHome = useMemo(() => pathname === '/', [pathname]);

  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories);
  const searchRecipes = useAppStore((state) => state.searchRecipes);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value, name } = e.target;

    setSearch({
      ...search,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(search).includes('')) {
      console.log('Todos los campos son obligatorios');
      return;
    }
    searchRecipes(search);
  };

  return (
    <header
      className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}
    >
      <div className='mx-auto container px-5 py-16'>
        <div className='flex justify-between items-center'>
          <div>
            <img className='w-32' src='/logo.svg' alt='logotipo' />
          </div>
          <nav
            className='flex gap-5
          '
          >
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 uppercase font-bold'
                  : 'text-white uppercase font-bold'
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to={'/favoritos'}
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 uppercase font-bold'
                  : 'text-white uppercase font-bold'
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form
            className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6'
            onSubmit={handleSubmit}
          >
            <div className='space-y-4'>
              <label
                htmlFor='ingredient'
                className='block text-white uppercase font-extrabold text-lg'
              >
                Nombres o Ingredientes
              </label>
              <input
                type='text'
                id='ingredient'
                name='ingredient'
                className='p-3 w-full rounded-lg focus:outline-none'
                placeholder='Nombre o Ingrediente. Ej. Vodka, tequilas,Cafe'
                onChange={handleChange}
                value={search.ingredient}
              />
            </div>
            <div className='space-y-4'>
              <label
                htmlFor='category'
                className='block text-white uppercase font-extrabold text-lg'
              >
                Categoria
              </label>
              <select
                name='category'
                id='category'
                className='p-3 w-full rounded-lg focus:outline-none'
                onChange={handleChange}
                value={search.category}
              >
                <option value=''>--Seleccione--</option>
                {categories.drinks.map((elem) => (
                  <option value={elem.strCategory} key={elem.strCategory}>
                    {elem.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <input
              type='submit'
              value='Buscar Recetas'
              className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full rounded-lg uppercase p-2'
            />
          </form>
        )}
      </div>
    </header>
  );
};
