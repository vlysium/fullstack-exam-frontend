import styles from "./star-rating.module.scss";

interface Props {
  rating: number;
}

const StarRating = ({ rating }: Props) => {
  const fullStars = Math.floor(rating);
  const halfStarPercentage = Math.round((rating - fullStars) * 100); // remaining percentage

  console.log(`star-${halfStarPercentage}`)

  return (
    <div className={styles.rating}>
      {[...Array(5)].map((_, index) => (
        index < fullStars ? ( // full star
          <div key={index} className={`${styles.star} ${styles.starFull}`} />
        ) : index === fullStars ? ( // half star
          <div key={index} className={`${styles.star} ${styles[`star-${halfStarPercentage}`]}`} />
        ) : ( // empty star
          <div key={index} className={`${styles.star}`} />
        )
      ))}
    </div>
  )
}

export default StarRating;