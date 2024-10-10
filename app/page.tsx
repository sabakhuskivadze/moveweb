import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/Header/Header";
import Carousel1 from "./components/carousel/carousel";


export default function Home() {
  return (
    <>
      <div className={styles.mainContainer}>
     <Header/>
     <div className={styles.carousel}>

     </div>
      </div>

    </>
  );
}
