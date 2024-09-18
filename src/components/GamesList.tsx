import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import styles from '../styles/GamesList.module.scss';

const GamesList: React.FC = () => {
  const games = useSelector((state: RootState) => state.games.games);

  return (
    <div className={styles.gamesList}>
      {games.map((game) => (
        <div key={game.id} className={styles.gameCard}>
          <img src={game.image} alt={game.name} />
          <h3>{game.name}</h3>
          <p>{game.provider}</p>
        </div>
      ))}
    </div>
  );
};

export default GamesList;