import React, { useState } from "react";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Apples",
      price: 2.5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
    },
    {
      id: 2,
      name: "Bananas",
      price: 1.2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
    },
    {
      id: 3,
      name: "Carrots",
      price: 0.9,
      image:
        "https://media.istockphoto.com/id/545454816/photo/fresh-carrots-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=Ildkp76TfQOntsgiIMDu2cAsBt2ebHx2870MHy-4zBs=",
    },
    {
      id: 4,
      name: "Potato",
      price: 0.9,
      image:
        "https://t4.ftcdn.net/jpg/02/75/77/89/360_F_275778955_xxJe5fQvDy5oXbjupdJ162zLwU4sf3kT.jpg",
    },
    {
      id: 5,
      name: "Cucumber",
      price: 0.9,
      image:
        "https://media.istockphoto.com/id/91516166/photo/cucumber-slices-on-a-white-background.jpg?s=612x612&w=0&k=20&c=n4R8_HB2qEmTgOU3xlINv1Am2Z_Mt4CuJiITPta58vw=",
    },
    {
      id: 6,
      name: "Cauliflower",
      price: 0.9,
      image:
        "https://media.istockphoto.com/id/96223822/photo/cauliflower.jpg?s=612x612&w=0&k=20&c=18iCO8nvnsRcUYbE54Br3Iqa9eOohPT6cgQ2eZGShB0=",
    },
    {
      id: 7,
      name: "Bhindi",
      price: 0.9,
      image:
        "https://gourmetgarden.in/cdn/shop/products/Untitleddesign_4e82495a-e191-4823-a2c4-d38460de3217.png?v=1751022073",
    },
    {
      id: 8,
      name: "Onion",
      price: 0.9,
      image:
        "https://media.istockphoto.com/id/499146870/photo/red-onions.jpg?s=612x612&w=0&k=20&c=OaZUynAtxIJyPaSgAsAGWwAbpTs_EfKF5zT_UvBDpbY=",
    },
    {
      id: 9,
      name: "Garlic",
      price: 0.9,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQ9QZeW5ioQUq5Pnd7TDTSjvKyGdWWl8ivMZetavtqTE3RHhQjgdwbI-A465qdPLhRLGj0XNnNXXXLGsKXur0TPQ",
    },
    {
      id: 10,
      name: "Brinjal",
      price: 0.9,
      image:
        "https://t4.ftcdn.net/jpg/03/69/98/49/360_F_369984944_mp5bcE534T45okjhprMta7z6ujQlaYXC.jpg",
    },
    {
      id: 11,
      name: "Cabbage",
      price: 0.9,
      image:
        "https://media.istockphoto.com/id/523635727/photo/cabbage.jpg?s=612x612&w=0&k=20&c=qcIYBtX0PUDOlJ6W9kCa866YnFnDxPQmNgm7NuKaHOQ=",
    },
    {
      id: 12,
      name: "Dhanya",
      price: 0.9,
      image:
        "https://media.istockphoto.com/id/624698704/photo/parsley-bunch.jpg?s=612x612&w=0&k=20&c=KB-nSLNLPa8nSPNvVYM96N6X3WLSbz8EwFQfjCJnAlA=",
    },
    {
      id: 13,
      name: "Milk",
      price: 2.5,
      image:
        "https://t4.ftcdn.net/jpg/02/31/84/29/360_F_231842968_qThCnmslPbEAwhg7nuW9rAy8qRNhRli7.jpg",
    },
    {
      id: 14,
      name: "Curd",
      price: 1.2,
      image:
        "https://www.shutterstock.com/image-photo/sour-cream-wooden-bowl-spoon-600nw-1660349047.jpg",
    },
    {
      id: 15,
      name: "Karela (Bitter Gourd)",
      price: 0.9,
      image:
        "https://t3.ftcdn.net/jpg/03/36/29/26/360_F_336292653_D7vlCbHuMvHyoulmj1XweCihlykoEUnI.jpg",
    },
    {
      id: 16,
      name: "Pumkin",
      price: 0.9,
      image:
        "https://t4.ftcdn.net/jpg/02/83/13/63/360_F_283136302_g7keyrnAqH391XRQHj18KmTH8DEOEUjk.jpg",
    },
    {
      id: 17,
      name: "Sugar",
      price: 0.9,
      image:
        "https://images.alphacoders.com/640/thumb-350-640708.webp",
    },
    {
      id: 6,
      name: "Cauliflower",
      price: 0.9,
      image:
        "https://media.istockphoto.com/id/96223822/photo/cauliflower.jpg?s=612x612&w=0&k=20&c=18iCO8nvnsRcUYbE54Br3Iqa9eOohPT6cgQ2eZGShB0=",
    },
    {
      id: 7,
      name: "Bhindi",
      price: 0.9,
      image:
        "https://gourmetgarden.in/cdn/shop/products/Untitleddesign_4e82495a-e191-4823-a2c4-d38460de3217.png?v=1751022073",
    },
    {
      id: 8,
      name: "Onion",
      price: 0.9,
      image:
        "https://media.istockphoto.com/id/499146870/photo/red-onions.jpg?s=612x612&w=0&k=20&c=OaZUynAtxIJyPaSgAsAGWwAbpTs_EfKF5zT_UvBDpbY=",
    },
    {
      id: 9,
      name: "Garlic",
      price: 0.9,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQ9QZeW5ioQUq5Pnd7TDTSjvKyGdWWl8ivMZetavtqTE3RHhQjgdwbI-A465qdPLhRLGj0XNnNXXXLGsKXur0TPQ",
    },
    {
      id: 10,
      name: "Brinjal",
      price: 0.9,
      image:
        "https://t4.ftcdn.net/jpg/03/69/98/49/360_F_369984944_mp5bcE534T45okjhprMta7z6ujQlaYXC.jpg",
    },
    {
      id: 11,
      name: "Cabbage",
      price: 0.9,
      image:
        "https://media.istockphoto.com/id/523635727/photo/cabbage.jpg?s=612x612&w=0&k=20&c=qcIYBtX0PUDOlJ6W9kCa866YnFnDxPQmNgm7NuKaHOQ=",
    },
    {
      id: 12,
      name: "Dhanya",
      price: 0.9,
      image:
        "https://media.istockphoto.com/id/624698704/photo/parsley-bunch.jpg?s=612x612&w=0&k=20&c=KB-nSLNLPa8nSPNvVYM96N6X3WLSbz8EwFQfjCJnAlA=",
    },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Popular Products</h3>
      <ul style={styles.list}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              ...styles.item,
              ...(hoveredId === product.id ? styles.itemHover : {}),
            }}
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={product.image}
              alt={product.name}
              style={styles.image}
            />
            <h4 style={styles.name}>{product.name}</h4>
            <p style={styles.price}>${product.price.toFixed(2)}</p>
            <button style={styles.button}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  list: {
    listStyle: "none",
    padding: 0,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  item: {
    padding: "15px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
  },
  itemHover: {
    transform: "translateY(-4px)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  image: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
    borderRadius: "4px",
    marginBottom: "10px",
  },
  name: {
    fontSize: "18px",
    margin: "8px 0",
    color: "#333",
  },
  price: {
    fontSize: "16px",
    color: "#555",
  },
  button: {
    marginTop: "10px",
    padding: "8px 14px",
    border: "none",
    backgroundColor: "#4caf50",
    color: "#fff",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default ProductList;
