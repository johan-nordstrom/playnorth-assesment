"use client";
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../lib/store';
import { fetchCategories, fetchGames } from '../redux/gameSlice';
import CategoryMenu from '../components/CategoryMenu';
import GamesList from '../components/GamesList';
import SearchBar from '../components/SearchBar';
import styles from '../styles/Home.module.scss';

import { Provider } from 'react-redux';
import { store } from '../lib/store';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGames({}));
  }, [dispatch]);

  return (
      <div className={styles.container}>
        <h1>Game Lobby</h1>
        <SearchBar />
        <div className={styles.content}>
          <CategoryMenu />
          <GamesList />
        </div>
      </div>
  );
};

export default Home;
