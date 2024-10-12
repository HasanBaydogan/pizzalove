//375
import pizzaOne375 from "../assets/images/menu-slider/pizza-one-375.webp";
import pizzaTwo375 from "../assets/images/menu-slider/pizza-two-375.webp";
import pizzaThree375 from "../assets/images/menu-slider/pizza-three-375.webp";
import SalmonPoke375 from "../assets/images/menu-slider/sushi-one-375.webp";
import VeggiePoke375 from "../assets/images/menu-slider/sushi-two-375.webp";
import MiniSalmon375 from "../assets/images/menu-slider/sushi-three-375.webp";
import ChickenAlfredo375 from "../assets/images/menu-slider/pasta-one-375.webp";
import AllaGricia375 from "../assets/images/menu-slider/pasta-two-375.webp";
import SheetPan375 from "../assets/images/menu-slider/pasta-three-375.webp";
//700
import pizzaOne700 from "../assets/images/menu-slider/pizza-one-700.webp";
import pizzaTwo700 from "../assets/images/menu-slider/pizza-two-700.webp";
import pizzaThree700 from "../assets/images/menu-slider/pizza-three-700.webp";
import SalmonPoke700 from "../assets/images/menu-slider/sushi-one-700.webp";
import VeggiePoke700 from "../assets/images/menu-slider/sushi-two-700.webp";
import MiniSalmon700 from "../assets/images/menu-slider/sushi-three-700.webp";
import ChickenAlfredo700 from "../assets/images/menu-slider/pasta-one-700.webp";
import AllaGricia700 from "../assets/images/menu-slider/pasta-two-700.webp";
import SheetPan700 from "../assets/images/menu-slider/pasta-three-700.webp";

const menuSliderCategories = [
  {
    name: "pizza",
    id: "pizza",
  },
  {
    name: "sushi",
    id: "sushi",
  },
  {
    name: "Makarna",
    id: "Makarna",
  },
];
const menuSliderProducts = [
  {
    id: "pepperoni-pizza",
    name: "Biberli Pizza",
    description:
      "Pizza hamuru maya, pepperoni, domates sosu, mozzarella peyniri, şeker.",
    price: (150).toFixed(2),
    img375: pizzaOne375,
    img700: pizzaOne700,
    category: "pizza",
  },
  {
    id: "bbq-chicken-pizza",
    name: "BBQ Tavuklu Pizza",
    description:
      "Döner tavuk, pizza hamuru, barbekü sos, dumanlı cheddar peyniri, mozzarella peyniri.",
    price: (200).toFixed(2),
    img375: pizzaTwo375,
    img700: pizzaTwo700,
    category: "pizza",
  },
  {
    id: "cheese-pizza",
    name: "Peynirli Pizza",
    description: "Pizza hamuru, pizza sosu, provolone peyniri, mozzarella.",
    price: (180).toFixed(2),
    img375: pizzaThree375,
    img700: pizzaThree700,
    category: "pizza",
  },
  {
    id: "salmon-poke",
    img375: SalmonPoke375,
    img700: SalmonPoke700,
    name: "Somon Poke",
    description: "Somon, Avokado, Pirinç, Lahana, Havuç, Yeşil soğan, Susam.",
    price: (200).toFixed(2),
    category: "sushi",
  },
  {
    id: "veggie-poke",
    img375: VeggiePoke375,
    img700: VeggiePoke700,
    name: "Sebzeli Poke",
    description:
      "Pirinç, Avokado, Lahana, Havuç, Zencefil, Yeşil Soğan, Susam.",
    price: (160).toFixed(2),
    category: "sushi",
  },
  {
    id: "mini-salmon-set-22-pcs",
    img375: MiniSalmon375,
    img700: MiniSalmon700,
    name: "Mini Somon Seti",
    description:
      "İkili Somon Roll, Californication, Somon Nigiri - 2 Adet, Yılanbalığı Nigiri - 2 Adet, Vulcan Gunkan - 2 Adet",
    price: (700).toFixed(2),
    category: "sushi",
  },
  {
    id: "chicken-alfredo",
    img375: ChickenAlfredo375,
    img700: ChickenAlfredo700,
    name: "Tavuklu Alfredo",
    description:
      "Tavuk göğsü, krema, zeytinyağı, parmigiano reggiano, karabiber.",
    price: (240).toFixed(2),
    category: "pasta",
  },
  {
    id: "pasta-alla-gricia",
    img375: AllaGricia375,
    img700: AllaGricia700,
    name: "Pasta Alla Gricia",
    description:
      "Rigatoni makarna, pancetta, zeytinyağı, pecorino romano peyniri, karabiber.",
    price: (180).toFixed(2),
    category: "pasta",
  },
  {
    id: "sheet-pan-burrata-caprese-gnocchi",
    img375: SheetPan375,
    img700: SheetPan700,
    name: "Burrata Caprese Gnocchi",
    description:
      "Penne makarna, ekşi krema, döner tavuk, kiraz domates, kıvırcık lahana.",
    price: (100).toFixed(2),
    category: "pasta",
  },
];

export { menuSliderProducts, menuSliderCategories };
