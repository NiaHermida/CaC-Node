const MAINDISHES_DATA = [
  {
    title: "Calzone",
    description:
      "Una masa de pizza perfectamente horneada y rellena con una combinación de ingredientes frescos como jamón, queso mozzarella, ricotta y tomate. Servido caliente, este plato es una explosión de sabores en cada bocado, ideal para satisfacer tus antojos italianos.",
    image: "./img/calzone.jpg",
  },
  {
    title: "Espaguetis con salsa boloñesa",
    description:
      "Fideos al dente bañados en una seductora salsa de tomate casera, enriquecida con hierbas frescas y un toque de ajo. Un plato clásico italiano que combina simplicidad y sabor, garantizando una experiencia reconfortante para el paladar exigente.",
    image: "/img/fideos.jpg",
  },
  {
    title: "Gnocchi",
    description:
      "Ñoquis de origen italiano, suaves y esponjosos, acompañados de una exquisita salsa de tomate casera y coronados con queso parmesano recién rallado. Una deliciosa experiencia gastronómica que deleitará tu paladar con cada bocado.",
    image: "/img/gnocchi.jpg",
  },
  {
    title: "Lasagna",
    description:
      "Capas de pasta fresca intercaladas con una mezcla abundante de carne de res sazonada, salsa de tomate, queso ricotta, mozzarella y parmesano. Horneada a la perfección para lograr una textura cremosa y un sabor reconfortante que te transportará a la mesa de una auténtica trattoria italiana.",
    image: "/img/lasagna.jpg",
  },
  {
    title: "Pizza",
    description:
      "Una base de masa crujiente y esponjosa, cubierta con salsa de tomate fresca, queso mozzarella de calidad y una selección de ingredientes premium como pepperoni, champiñones, aceitunas y albahaca. Horneada a la perfección en nuestro horno de piedra, cada bocado es una explosión de sabores que te transportará a las calles de Nápoles.",
    image: "/img/pizza.jpg",
  },
  {
    title: "Sorrentinos",
    description:
      "Sorrentinos rellenos de ricotta y espinacas, bañados en una suave salsa de tomate casera y adornados con hojas frescas de albahaca y queso parmesano rallado. Una deliciosa combinación de sabores que te transportará a la costa de Sorrento con cada bocado.",
    image: "/img/sorrentinos.jpg",
  },
  {
    title: "Antipasto",
    description:
      "una generosa selección de embutidos finos, quesos artesanales, aceitunas marinadas, verduras en escabeche y focaccia recién horneada. Una entrada perfecta para compartir y disfrutar de una experiencia culinaria auténtica italiana.",
    image: "/img/antipasti.jpg",
  },
  {
    title: "Risotto",
    description:
      "una generosa selección de embutidos finos, quesos artesanales, aceitunas marinadas, verduras en escabeche y focaccia recién horneada. Una entrada perfecta para compartir y disfrutar de una experiencia culinaria auténtica italiana.",
    image: "/img/antipasti.jpg",
  },
  {
    title: "Sopa Minestrone",
    description:
      "una generosa selección de embutidos finos, quesos artesanales, aceitunas marinadas, verduras en escabeche y focaccia recién horneada. Una entrada perfecta para compartir y disfrutar de una experiencia culinaria auténtica italiana.",
    image: "/img/antipasti.jpg",
  },
  {
    title: "Carbonara",
    description:
      "una generosa selección de embutidos finos, quesos artesanales, aceitunas marinadas, verduras en escabeche y focaccia recién horneada. Una entrada perfecta para compartir y disfrutar de una experiencia culinaria auténtica italiana.",
    image: "/img/antipasti.jpg",
  },
  {
    title: "Ensalada Caprese",
    description:
      "una generosa selección de embutidos finos, quesos artesanales, aceitunas marinadas, verduras en escabeche y focaccia recién horneada. Una entrada perfecta para compartir y disfrutar de una experiencia culinaria auténtica italiana.",
    image: "/img/antipasti.jpg",
  },
  {
    title: "Carpaccio",
    description:
      "una generosa selección de embutidos finos, quesos artesanales, aceitunas marinadas, verduras en escabeche y focaccia recién horneada. Una entrada perfecta para compartir y disfrutar de una experiencia culinaria auténtica italiana.",
    image: "/img/antipasti.jpg",
  },
  {
    title: "Vitello tonnato",
    description:
      "una generosa selección de embutidos finos, quesos artesanales, aceitunas marinadas, verduras en escabeche y focaccia recién horneada. Una entrada perfecta para compartir y disfrutar de una experiencia culinaria auténtica italiana.",
    image: "/img/antipasti.jpg",
  },
];

const cardGroup = document.getElementById("cardGroup");

CARD_DATA.forEach((card) => {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("Card__Container");

  const cardBody = document.createElement("div");
  cardBody.classList.add("Card__Body");

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("Card__Image__Wrapper");

  const image = document.createElement("div");
  image.classList.add("Card__Image");
  const img = document.createElement("img");
  img.src = card.image;
  img.alt = card.title;
  image.appendChild(img);

  imageWrapper.appendChild(image);

  const content = document.createElement("div");
  content.classList.add("Card__Content");

  const title = document.createElement("div");
  title.classList.add("Card__Title");
  title.textContent = card.title;

  const description = document.createElement("div");
  description.classList.add("Card__Description");
  description.textContent = card.description;

  content.appendChild(title);
  content.appendChild(description);

  cardBody.appendChild(imageWrapper);
  cardBody.appendChild(content);

  cardContainer.appendChild(cardBody);

  cardGroup.appendChild(cardContainer);
});
