import React, { useState, useContext } from 'react';
import FilterButtons from '../components/FilterButtons';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import AppContext from '../context/AppContext';

function Bebidas() {
  const [title] = useState('Bebidas');
  const [haveSearch] = useState(true);
  const { resultsDrinkApi, toggle,
    filterCategoryDrink,
    btnFilterCategoryDrinks } = useContext(AppContext);

  function mapRecipeCards() {
    const TWELVE = 12;
    if (resultsDrinkApi) {
      if (resultsDrinkApi.length > 1 && resultsDrinkApi.length > TWELVE) {
        const limitedArray = resultsDrinkApi;
        limitedArray.splice(TWELVE);
        return limitedArray.map(
          (result, index) => (
            <RecipeCard
              key={ index }
              info={ result }
              index={ index }
            />),
        );
      }
      if (resultsDrinkApi.length > 1 && resultsDrinkApi.length <= TWELVE) {
        return resultsDrinkApi.map(
          (result, index) => (
            <RecipeCard
              key={ index }
              index={ index }
              info={ result }
            />
          ),
        );
      }
    }
  }
  function filterCategoryDrinkCards() {
    if (filterCategoryDrink && !btnFilterCategoryDrinks) {
      return filterCategoryDrink.map((categorieResult, index) => (
        <RecipeCard
          key={ index }
          info={ categorieResult }
          index={ index }
        />
      ));
    }
  }
  return (
    <>
      <Header title={ title } haveSearch={ haveSearch } />
      <FilterButtons />
      {toggle ? filterCategoryDrinkCards() : mapRecipeCards() }
      <Footer />
    </>
  );
}

export default Bebidas;
