const DESSERTDISHES_DATA = [
  {
    title: "Torta de Amaretto",
    description:
      "Un postre italiano decadente y aromático hecho con una base de bizcocho de almendra empapado en licor de Amaretto, relleno de crema de almendra y cubierto con láminas de almendra tostada. Una indulgencia celestial para los amantes del dulce con un toque italiano.",
    image: "../img/imgCards/dessertDishes/amarettoCake.jpg",
    price: "$6500",
  },
  {
    title: "Helado casero",
    description:
      "Una selección artesanal de sabores cremosos y refrescantes, elaborados con ingredientes frescos y naturales como frutas de temporada, vainilla de Madagascar y chocolate belga. Una delicia helada que captura la esencia de la tradición italiana en cada cucharada.",
    image: "../img/imgCards/dessertDishes/gelatto.jpg",
    price: "$4500",
  },
  {
    title: "Torta de Naranja",
    description:
      "Un postre italiano delicadamente esponjoso, elaborado con una mezcla de harina, huevos, azúcar y ralladura de naranja fresca. Horneada hasta obtener un dorado perfecto y cubierta con un glaseado de naranja, esta torta ofrece un equilibrio perfecto entre lo dulce y lo cítrico, una delicia para los amantes de los postres.",
    image: "../img/imgCards/dessertDishes/OrangeCake.jpg",
    price: "$6800",
  },
  {
    title: "Galletas de Tiramisú",
    description:
      "Deliciosas galletas italianas impregnadas con el sabor característico del café y el licor Amaretto, rellenas con una suave crema de mascarpone y espolvoreadas con cacao en polvo. Un dulce capricho que captura la esencia del famoso postre italiano en cada bocado.",
    image: "../img/imgCards/dessertDishes/tiramisu-cookies.jpg",
    price: "$4500",
  },
  {
    title: "Tiramisú",
    description:
      "Un clásico postre italiano compuesto por capas de bizcocho de soletilla empapado en café, alternadas con una cremosa mezcla de mascarpone, huevos y azúcar, espolvoreado con cacao en polvo. Una experiencia decadente que deleita los sentidos con su combinación única de sabores y texturas.",
    image: "../img/imgCards/dessertDishes/tiramisu.jpg",
    price: "$6500",
  },
  {
    title: "Panna Cotta de Vainilla",
    description:
      "Un postre italiano sedoso y delicado, hecho con crema de leche, azúcar y vainilla natural, adornado con una suave salsa de frutos rojos. Una indulgencia cremosa que deleitará tu paladar con su suavidad y sabor delicado.",
    image: "../img/imgCards/dessertDishes/VanillaPannaCotta.jpg",
    price: "$5500",
  },
  {
    title: "Puffs Sfogliatelle",
    description:
      "Deliciosos pastelitos italianos de hojaldre crujiente, rellenos de una mezcla dulce y aromática de ricotta, azúcar, ralladura de limón y canela. Un bocado de textura ligera y sabores tradicionales que evocan la auténtica repostería italiana.",
    image: "../img/imgCards/dessertDishes/puff-sfogliatelle-italian-food.jpg",
    price: "$6000",
  },
];

const dessertCardGroup = document.getElementById("dessertCardGroup");

DESSERTDISHES_DATA.forEach((card) => {
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

  const flag = document.createElement("div");
  flag.classList.add("Card__Flag");

  const price = document.createElement("div");
  price.classList.add("Card__Price");
  price.textContent = card.price;

  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(flag);
  content.appendChild(price);

  cardBody.appendChild(imageWrapper);
  cardBody.appendChild(content);

  cardContainer.appendChild(cardBody);

  dessertCardGroup.appendChild(cardContainer);
});
