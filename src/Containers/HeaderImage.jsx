import React from "react";
import PropTypes from "prop-types";

HeaderImage.propTypes = {
  children: PropTypes.node.isRequired,
};

function HeaderImage({ children }) {
  const [activeImage, setActiveImage] = React.useState(0);
  const [images, setImages] = React.useState([]);
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
