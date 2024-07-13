import React, { useEffect, useState } from "react";
import Carditems from "./Carditems";
import styles from "../global.module.scss";
import { useInView } from "react-intersection-observer";
import ProductPreviewPopup from "./ProductPreview";
import "../Styles/Cards.css"

function MensCards() {
  const [selectedProduct, setselectedProduct] = useState(null);
  const cardData = [
    {
      src: "/ProductTemplate/assets/abstractshirt.jpeg",
      text: "Platinum White T",
      description: "Classic T-shirt for men. Comfortable and stylish.",
      label: "T-Shirt",
    },
    {
      src: "/ProductTemplate/assets/abstractshirt.jpeg",
      text: "Platinum White T",
      description: "Trendy skinny jeans for a modern look.",
      label: "T-Shirt",
    },
    {
      src: "/ProductTemplate/assets/abstractshirt.jpeg",
      text: "Platinum White T",
      description: "Classic T-shirt for men. Comfortable and stylish.",
      label: "T-Shirt",
    },
    {
      src: "/ProductTemplate/assets/abstractshirt.jpeg",
      text: "Platinum White T",
      description: "Classic T-shirt for men. Comfortable and stylish.",
      label: "T-Shirt",
    },
    {
      src: "/ProductTemplate/assets/abstractshirt.jpeg",
      text: "Platinum White T",
      description: "Classic T-shirt for men. Comfortable and stylish.",
      label: "T-Shirt",
    },
    {
      src: "/ProductTemplate/assets/abstractshirt.jpeg",
      text: "Platinum White T",
      description: "Classic T-shirt for men. Comfortable and stylish.",
      label: "T-Shirt",
    },
    {
      src: "/ProductTemplate/assets/abstractshirt.jpeg",
      text: "Platinum Joggers",
      description: "Classic T-shirt for men. Comfortable and stylish.",
      label: "Joggers",
    },
    {
      src: "/ProductTemplate/assets/abstractshirt.jpeg",
      text: "Platinum Joggers",
      description: "Classic T-shirt for men. Comfortable and stylish.",
      label: "Joggers",
    },
    {
      src: "/ProductTemplate/assets/abstractshirt.jpeg",
      text: "Platinum Joggers",
      description: "Classic T-shirt for men. Comfortable and stylish.",
      label: "Joggers",
    },
    {
      src: "/ProductTemplate/assets/abstractshirt.jpeg",
      text: "Platinum Skinny's",
      description: "Classic T-shirt for men. Comfortable and stylish.",
      label: "Jeans",
    },
    {
      src: "/ProductTemplate/assets/abstractshirt.jpeg",
      text: "Platinum Skinny's",
      description: "Classic T-shirt for men. Comfortable and stylish.",
      label: "Jeans",
    },
    {
      src: "/ProductTemplate/assets/abstractshirt.jpeg",
      text: "Platinum Skinny's",
      description: "Classic T-shirt for men. Comfortable and stylish.",
      label: "Jeans",
    },
    {
      src: "/ProductTemplate/assets/abstractshirt.jpeg",
      text: "Platinum Skinny's",
      description: "Classic T-shirt for men. Comfortable and stylish.",
      label: "Jeans",
    },
    {
      src: "/ProductTemplate/assets/abstractshirt.jpeg",
      text: "Platinum Skinny's",
      description: "Classic T-shirt for men. Comfortable and stylish.",
      label: "Jeans",
    },
    {
      src: "/ProductTemplate/assets/abstractshirt.jpeg",
      text: "Platinum Leather",
      description: "Classic T-shirt for men. Comfortable and stylish.",
      label: "Jacket",
    },
    {
      src: "/ProductTemplate/assets/abstractshirt.jpeg",
      text: "Platinum Leather",
      description: "Classic T-shirt for men. Comfortable and stylish.",
      label: "Jacket",
    },
  ];

  useEffect(() => {
    // Preload all images
    const preloadImages = (images) => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image.src;
      });
    };

    preloadImages(cardData);
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const { ref: cards, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  function showPreview(product) {
    // Set the state to the selected product
    setselectedProduct(product);
  }

  function hidePreview() {
    // Reset the state to null
    setselectedProduct(null);
  }

  return (
    <div className="cards">
      <div ref={ref}></div>
      <div ref={cards} className={`${styles.cardsContainer}`}>
        <div
          className={`${styles.cardsWrapper} ${
            cardsInView ? styles.animationFade : styles.hidden
          }`}>
          <ul className="cardsItems">
            {cardData.map((card, index) => (
              <Carditems
                key={index}
                product={card}
                src={card.src}
                text={card.text}
                label={card.label}
                description={card.description}
                onClick={showPreview}
              />
            ))}
          </ul>
        </div>
      </div>
      {selectedProduct && (
        <ProductPreviewPopup product={selectedProduct} onClose={hidePreview} />
      )}
    </div>
  );
}

export default MensCards;
