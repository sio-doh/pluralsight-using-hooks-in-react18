import {useEffect, useRef, useState} from "react";

export default function SpeakerImageToggleOnScroll({
  imageUrl,
  alt,
  thumbNail,
}) {
  const imageRef = useRef(null);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  const grayScale = inView ? "grayscale(0%)" : "grayscale(100%)";

  return (
    <img
      src={imageUrl}
      alt={alt}
      ref={imageRef}
      width={thumbNail ? 50 : 200}
      height={thumbNail ? 50 : 200}
      className={
        thumbNail
          ? "img-fluid rounded-start "
          : "img-fluid rounded-start speaker-image"
      }
      style={{ filter: `${grayScale}` }}
    />
  );
}