import styles from "./GameDetail.module.css";
import { Carousel } from "antd";

const contentStyle = {
  margin: 0,
  width: "100%",
};

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const GameDetail = (props) => {
  const {
    title,
    date,
    publisher,
    developer,
    genre,
    poster,
    screens,
    system,
    description,
  } = props;

  return (
    <ul className={styles.list}>
      {title && (
        <li>
          <h2>{title}</h2>
        </li>
      )}
      {poster && (
        <li>
          <img src={poster} alt={title + " poster"} style={{ width: "100%" }} />
        </li>
      )}
      {description && (
        <li>
          <h3>Об этой игре</h3>
          <p>{description}</p>
        </li>
      )}
      {date && (
        <li>
          <span>Дата выхода: </span>
          <span className={styles.span}>
            {new Date(date).toLocaleString("ru", options)}
          </span>
        </li>
      )}
      {(developer || publisher) && (
        <li>
          <ul className={styles.list2}>
            {developer && (
              <li>
                <span>Разработчик: </span>
                <span className={styles.span}>{developer}</span>
              </li>
            )}
            {publisher && (
              <li>
                <span>Издатель: </span>
                <span className={styles.span}>{publisher}</span>
              </li>
            )}
          </ul>
        </li>
      )}
      {genre && (
        <li>
          <span>Жанр: </span>
          <span className={styles.span}>{genre}</span>
        </li>
      )}
      {system && (
        <li>
          <h3>Минимальные системные требования</h3>
          <ul className={styles.list2}>
            {system.os && (
              <li>
                <span>ОС: </span>
                <span className={styles.span}>{system.os}</span>
              </li>
            )}
            {system.graphics && (
              <li>
                <span>Видеокарта: </span>
                <span className={styles.span}>{system.graphics}</span>
              </li>
            )}
            {system.memory && (
              <li>
                <span>Оперативная память: </span>
                <span className={styles.span}>{system.memory}</span>
              </li>
            )}
            {system.processor && (
              <li>
                <span>Процессор: </span>
                <span className={styles.span}>{system.processor}</span>
              </li>
            )}
            {system.storage && (
              <li>
                <span>Места на жестком диске: </span>
                <span className={styles.span}>{system.storage}</span>
              </li>
            )}
          </ul>
        </li>
      )}
      {screens && (
        <li>
          <h3>Скриншоты игры</h3>
          <Carousel autoplay>
            {screens.map((el) => (
              <div key={el.id}>
                <img style={contentStyle} src={el.image} alt={el.id} />
              </div>
            ))}
          </Carousel>
        </li>
      )}
    </ul>
  );
};

export { GameDetail };
