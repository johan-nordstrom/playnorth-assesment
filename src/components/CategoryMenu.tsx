import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../lib/store';
import { fetchGames } from '../redux/gameSlice';
import styles from '../styles/CategoryMenu.module.scss';

const CategoryMenu: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.games.categories);

  const handleCategoryClick = (categoryId: string) => {
    dispatch(fetchGames({ category: categoryId }));
  };

  return (
    <nav className={styles.categoryMenu}>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button onClick={() => handleCategoryClick(category.id)}>{category.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryMenu;