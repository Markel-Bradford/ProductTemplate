import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import styles from "../global.module.scss";

function Carditems(props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <li
        ref={ref}
        className={`${styles.cardsItem} ${
          inView ? styles.fadeIn : styles.hidden
        }`}
        onClick={() => props.onClick(props.product)}>
        <Link className="cardsItemLink" to={props.path}>
          <figure className="cardItemPicWrap" data-category={props.label}>
            <img src={props.src} alt="Menu photos" className="cardItemImg" />
          </figure>
          <div className="cardsItemInfo">
            <h5 className="cardsItemText">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Carditems;
