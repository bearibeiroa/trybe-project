import React, { useState, useContext } from 'react';
import FilterButtons from '../components/FilterButtons';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import AppContext from '../context/AppContext';

function Comidas() {
  const [title] = useState('Comidas');
  const [haveSearch] = useState(true);
  const { resultsFoodApi, isFetch,
    filterCategoryFood, btnFilterCategory } = useContext(AppContext);

  function mapRecipeCards() {
    const TWELVE = 12;
    if (resultsFoodApi && btnFilterCategory) {
      if (resultsFoodApi.length > 1 && resultsFoodApi.length > TWELVE) {
        const limitedArray = resultsFoodApi;
        limitedArray.splice(TWELVE);
        return limitedArray.map(
          (result, index) => <RecipeCard key={ index } index={ index } info={ result } />,
        );
      }
      if (resultsFoodApi.length > 1 && resultsFoodApi.length <= TWELVE) {
        return resultsFoodApi.map(
          (result, index) => (
            <RecipeCard
              key={ index }
              info={ result }
              index={ index }
            />
          ),
        );
      }
    }
    if (filterCategoryFood && !btnFilterCategory) {
      return filterCategoryFood.map((categorieResult, index) => (
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
      { isFetch ? mapRecipeCards() : null }
      <Footer />
    </>
  );
}

export default Comidas;
