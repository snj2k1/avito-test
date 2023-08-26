import axios from "axios";
import { GAME_OPTIONS } from "../../config";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useParams } from "react-router-dom";
import { LeftOutlined, LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { GameDetail } from "../../components/GameDetail/GameDetail";
import styles from './Detail.module.css';

const antIcon = <LoadingOutlined style={{ fontSize: 48, color: "white" }} spin />

const Detail = () => {
  const {id} = useParams();
  const [cookies, setCookie] = useCookies([id]);
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    if(cookies.id){
      setData(cookies.id)
      setError(null);
    }
    else{
      axios.request({...GAME_OPTIONS, params: {id}}).then(data => {
          setData(data.data);
          setCookie(id, data.data, {
            maxAge: 300
          });
          setError(null);
        }).catch(e => setError(e))
    }
    setLoading(false);
  }, [id]);

  return(
    <>
      <Link to={'/'} className={styles.link}>
        <LeftOutlined />
      </Link>
      {
        error ? <h2>Failed to load...</h2> :
        (
          loading ? <Spin style={{ position: "absolute", top: "50%", right: "50%" }} indicator={antIcon} /> :
          <GameDetail 
            title={data.title}
            date={data.release_date}
            publisher={data.publisher}
            developer={data.developer}
            genre={data.genre}
            poster={data.thumbnail}
            screens={data.screenshots}
            system={data.minimum_system_requirements}
            description={data.description}
          />
        )
      }
    </>
  )
}

export {Detail}