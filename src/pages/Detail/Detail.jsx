import axios from "axios";
import { GAME_OPTIONS, GAME_URL } from "../../config";
import { useCookies } from "react-cookie";
import { Link, useParams } from "react-router-dom";
import { LeftOutlined, LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { GameDetail } from "../../components/GameDetail/GameDetail";
import styles from "./Detail.module.css";
import { useQuery } from "react-query";

const antIcon = (
  <LoadingOutlined style={{ fontSize: 48, color: "white" }} spin />
);

const Detail = () => {
  const { id } = useParams();
  const [cookies, setCookie] = useCookies([id]);
  const { data, isLoading, isError } = useQuery(
    id,
    async () => {
      if (cookies[id]) {
        return cookies[id];
      }
      const data = await axios
        .get(GAME_URL, { ...GAME_OPTIONS, params: { id } })
        .then((response) => {
          setCookie(id, response.data, {
            maxAge: 300,
          });
          return response.data;
        });
      return data;
    },
    {
      retry: 3,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  return (
    <>
      <Link to={"/"} className={styles.link}>
        <LeftOutlined />
      </Link>
      {isError ? (
        <h2>Failed to load...</h2>
      ) : isLoading ? (
        <Spin
          style={{ position: "absolute", top: "50%", right: "50%" }}
          indicator={antIcon}
        />
      ) : (
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
      )}
    </>
  );
};

export { Detail };
