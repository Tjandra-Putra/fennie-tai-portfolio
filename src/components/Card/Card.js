import React from "react";

import style from "./Card.module.css";
import Badge from "../Badge/Badge";

const Card = ({ category, index, data }) => {
  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <Badge title={category} theme="dark" />
        <div className={style.cardNumber}>#{index}</div>
      </div>

      {data?.map((item, index) => (
        <div className={style.cardBody} key={index}>
          <div className={style.cardBodyTop}>
            <div className={style.title}>{item.title}</div>
            <div className={style.date}>{item.date}</div>
          </div>

          <ul className={style.list}>
            {item.descriptions?.map((i, index) => (
              <React.Fragment>
                {i?.main?.length > 0 && <li>{i?.main}</li>}
                <ul className={style.list}>
                  {i.sub?.map((i, index) => (
                    <li>{i}</li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Card;
