import useScript from '../hooks/useScript';
import styles from '../styles/Home.module.css'

export default function Reviews({ children }) {
  useScript('https://www.yelp.com/embed/widgets.js');
  return (
    <div className={styles.reviews}>
      <span class="yelp-review" className={styles.yelp} data-review-id="it8ian67OIQ9kLnJFyL6yw" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=XDLcZd2cBmCeJ8KWRpyknw" rel="nofollow noopener">George B.</a>'s <a href="https://www.yelp.com/biz/billys-autoglass-repair-simi-valley?hrid=it8ian67OIQ9kLnJFyL6yw" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/EKkg_MDoqUBnysrS9awUEQ" rel="nofollow noopener">Billy's Autoglass Repair</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a></span>
      <span class="yelp-review" className={styles.yelp} data-review-id="f3jgN95LFr0rc0KrTQBj4Q" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=y3CAnIexES3F97aN8EZ64g" rel="nofollow noopener">E M.</a>'s <a href="https://www.yelp.com/biz/billys-autoglass-repair-simi-valley?hrid=f3jgN95LFr0rc0KrTQBj4Q" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/EKkg_MDoqUBnysrS9awUEQ" rel="nofollow noopener">Billy's Autoglass Repair</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a></span>
    </div>
  );
}
