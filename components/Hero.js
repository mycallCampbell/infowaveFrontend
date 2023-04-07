import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        src="/hero_image.png"
        alt="Hero Background"
        width={1344}
        height={896}
        quality={100}
      />
      <div className={styles.overlay}>
        <h1 className={styles.title}>TECH PODCAST</h1>
        <p className={styles.subtitle}>FREQUENTLY INCREASING YOUR FREQUENCY</p>
      </div>
    </div>
  );
};

export default Hero;
