import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SliderData } from "../../utils/SliderData";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = SliderData.length;
  const timeout = useRef(null);

  useEffect(() => {
    timeout.current = setTimeout(nextSlide, 5000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrentSlide((current) => (current === length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrentSlide((current) => (current === 0 ? length - 1 : current - 1));
  };

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : images.length - 1);
    } else {
      setIndex(index !== images.length - 1 ? index + 1 : 0);
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroWrapper}>
        {SliderData.map((slide, i) => {
          return (
            <div className={styles.heroSlide} key={i}>
              {i === currentSlide && (
                <div className={styles.heroSlider}>
                  <Image
                    className={styles.heroImage}
                    src={slide.image}
                    alt={slide.alt}
                    layout="fill"
                  />
                  <div className={styles.heroContent}>
                    <h1>{slide.title}</h1>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div className={styles.slideButtons}>
          <div>
            <FaArrowLeft onClick={prevSlide} />
          </div>
          <div>
            <FaArrowRight onClick={nextSlide} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
