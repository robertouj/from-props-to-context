import React from "react";

import styles from "./Colors.module.css";

function Colors({ items, action }) {
  return (
    <div className={styles.Colors}>
      {items.map(color => (
        <span className={styles.ColorSquareWrapper} key={color.id}>
          <span
            className={`${styles.ColorSquare} ${
              color.isSelected ? styles.ColorSquareSelected : ""
            }`}
            style={{ backgroundColor: color.id }}
            onClick={() => action(color.id)}
          />
        </span>
      ))}
    </div>
  );
}

export default Colors;

/*export default function Colors({ items, action }) {
  return (
    <div className={styles.Colors}>
      {items.map(color => (
        <span className={styles.ColorSquareWrapper}>
          <span
            key={color.id}
            className={`${styles.ColorSquare} ${
              color.isSelected ? styles.ColorSquareSelected : ""
            }`}
            style={{ backgroundColor: color.id }}
            onClick={() => action(color.id)}
          />
        </span>
      ))}
    </div>
  );
}*/
