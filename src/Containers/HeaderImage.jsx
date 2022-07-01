import React from "react";
import PropTypes from "prop-types";
import selector1 from "../Assets/selector1.webp";
import selector2 from "../Assets/selector2.webp";
import selector3 from "../Assets/selector3.jpg";
import selector4 from "../Assets/selector4.jpg";
import selector5 from "../Assets/selector5.jpeg";
import selector6 from "../Assets/selector6.jpg";
import selector7 from "../Assets/selector7.jpg";

HeaderImage.propTypes = {
  children: PropTypes.node.isRequired,
};

function HeaderImage({ children }) {
  const images = [
    {
      src: selector1,
      alt: "selector1",
      title: "Tapabocas",
    },
    {
      src: selector2,
      alt: "selector2",
      title: "Silla de ruedas",
    },
    {
      src: selector3,
      alt: "selector3",
      title: "Ayuda para la marcha",
    },
    {
      src: selector4,
      alt: "selector4",
      title: "Terapias respiratorias",
    },
    {
      src: selector5,
      alt: "selector5",
      title: "Tapabocas",
    },
    {
      src: selector6,
      alt: "selector6",
      title: "Silla de ruedas",
    },
    {
      src: selector7,
      alt: "selector7",
      title: "Ayuda para la marcha",
    },
  ];
  const [activeImage, setActiveImage] = React.useState(images[0].src);

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          activeImage,
          setActiveImage,
          images,
        });
      })}
    </>
  );
}

export default HeaderImage;
