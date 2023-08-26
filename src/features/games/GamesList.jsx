import React from 'react';
import styles from './GamesList.module.css';
import { useGames } from './use-games';
import { GamesItem } from '../../components/GamesItem/Gamesitem';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';

const antIcon = <LoadingOutlined style={{ fontSize: 48, color: "white" }} spin />

const GamesList = () => {
  const [countries, {error, status}] = useGames();

  return(
    <>
      {error && <h2>Failed to load...</h2>}
      {status === 'loading' && <Spin style={{ position: "absolute", top: "50%", right: "50%" }} indicator={antIcon} />}
      {status === 'recieved' && 
        <ul className={styles.list}>
          {countries.map(item => 
            <Link to={`/${item.id}`} key={item.id} className={styles.link}>
              <GamesItem 
                key={item.id} 
                title={item.title} 
                publisher={item.publisher} 
                date={item.release_date}
                genre={item.genre}
                img={item.thumbnail}
              />
            </Link>
          )}
        </ul>
        }
    </>
  ) 
}
export {GamesList};