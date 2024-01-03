import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

import masasu from "../assets/images/masasu.png";
import coupleMasasu from "../assets/images/coupleMasasu.png";
import PasteurImg from "../assets/images/ercImages/pasteur.jpg";
import PasteurImgKin from "../assets/images/ercImages/pasteurKin.jpg";
import PasteurImgBunia from "../assets/images/ercImages/pasteurBunia.jpg";

export const navLinks = [
  { href: "#home", label: "Accueil" },
  { href: "#pasteurs", label: "Nos Pasteurs" },
  // { href: "#Enseignement", label: "Enseignement" },
  { href: "#Événements  ", label: "Événements  " },
  // { href: "#contact-us", label: "Contact Nous" },
];

export const statistics = [
  { value: "1k+", label: "Fideles" },
  { value: "500+", label: "Pasteurs" },
  { value: "250k+", label: "Eglises" },
];

export const pasteurs = [
  { imgURL: masasu, name: "Apotre Masasu Masengo", location: "Kigali" },
  { imgURL: PasteurImgKin, name: "Pasteur Kin", location: "Kinshasa" },
  { imgURL: PasteurImgBunia, name: "Bunia", location: "Bunia" },
  { imgURL: PasteurImg, name: "Pastor", location: "Bunia" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Evangelisation",
    subtext:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. .",
  },
  {
    imgURL: shieldTick,
    label: "L'ecole de dimanche",
    subtext:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore nam ",
  },
  {
    imgURL: support,
    label: "L'amour du prochain",
    subtext: "Jesus-Christ nous a dit de nous aimer les uns aux autres.",
  },
];

export const reviews = [
  {
    imgURL: masasu,
    customerName: "Apotre Masasu",
    rating: "Rwanda, Kigali",
    feedback:
      "Les Épîtres : Les lettres écrites par les apôtres du Nouveau Testament, comme Paul, Pierre, Jean et Jacques, contiennent également des témoignages et des enseignements sur Jésus-Christ.",
  },
  {
    imgURL: coupleMasasu,
    customerName: "Couple Masasu",
    rating: "Rwanda, Kigali",
    feedback:
      "Les Actes des Apôtres : Le livre des Actes, également dans le Nouveau Testament, raconte les débuts de l'Église chrétienne après la résurrection de Jésus et la descente du Saint-Esprit sur les apôtres.",
  },
];

export const footerLinks = [
  {
    title: "Nos Eglises",
    links: [
      { name: "ERC-Kinshasa", link: "/ercKinshasa" },
      { name: "ERC-Beni", link: "/ercBeni" },
      { name: "ERC-Ndosho", link: "/ercNdosho" },
      { name: "ERC-Katindo", link: "/ercKatindo" },
      { name: "ERC-Bunia", link: "/ercBunia" },
      { name: "ERC-Goma", link: "/ercGoma" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Predication", link: "/" },
      { name: "Choral", link: "/" },
      { name: "Evangelisation", link: "/" },
      { name: "Priere", link: "/" },
      { name: "Adoration", link: "/" },
    ],
  },
  {
    title: "Pour plus d'informations",
    links: [
      { name: "erc.congo@erc.com", link: "mailto:erc.congo@erc.com" },
      { name: "+250784545831", link: "tel:+250784545831" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
