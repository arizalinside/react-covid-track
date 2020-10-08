import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CardComponent from "./Card/Card";

const Cards = ({ data: { confirmed, recovered, deaths } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.confirmed}
          cardTitle="Kasus"
          value={confirmed.value}
          cardSubtitle="Jumlah angka kasus COVID-19"
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Sembuh"
          value={recovered.value}
          cardSubtitle="Jumlah angka sembuh COVID-19"
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Meninggal"
          value={deaths.value}
          cardSubtitle="Jumlah angka meninggal COVID-19"
        />
      </Grid>
    </div>
  );
};

export default Cards;
