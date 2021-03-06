import React, { Component } from "react";
import CardCarousel from "../../components/CardCarousel";
import styles from "./Animals.module.scss";
import animals from "../../data/animals";

class Animals extends Component {
  render() {
    return (
      <div className={styles.animalPage}>
        <h3>Some random animals to cheer you up!</h3>
        <section className={styles.carousel}>
          <CardCarousel data={animals} />
        </section>
      </div>
    );
  }
}

export default Animals;
