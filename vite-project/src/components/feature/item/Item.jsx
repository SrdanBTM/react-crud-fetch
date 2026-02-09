

import styles from './item.module.css'


export default function Item({ item }) {

  return (
    <li className={styles.container}>
      <article>
        <span>{item.title}</span>
      </article>
    </li>
  )
}


