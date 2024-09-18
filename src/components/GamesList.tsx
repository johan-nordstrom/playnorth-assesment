import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import styles from "../styles/GamesList.module.scss";

export default function GamesList() {
  const games = useSelector((state: RootState) => state.games.games);

  return (
    <div className={styles.gamesList}>
      {games.map((game) => (
        <div key={game.id} className={styles.gameCard}>
          <img src={game.image.thumbnail.src} alt={game.image.alt} />
          <h3>{game.gameText}</h3>
          <p>{game.provider}</p>
        </div>
      ))}
    </div>
  );
}
