import styles from './GamesItem.module.css'

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const GamesItem = (props) => {
  const { 
    title,
    publisher,
    date,
    genre,
    img,
  } = props;

  return(
    <li className={styles.item}>
      <img className={styles.img} src={img} alt={title + ' poster'} />
      <div className={styles.info}>
        <h4>{title}</h4>
        <div className={styles.desc}>
          <span>Издатель: {publisher}</span>
          <span>Жанр: {genre}</span>
          <span>Дата издания: {new Date(date).toLocaleString('ru', options)}</span>
        </div>
      </div>
    </li>
  )
}

export {GamesItem}