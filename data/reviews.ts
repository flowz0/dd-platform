import { StaticImageData } from "next/image";

import LaurelHerz from "@/public/reviews/LaurelHerz.png"
import PenelopeTilbury from "@/public/reviews/PenelopeTilbury.png"
import PJB from "@/public/reviews/PJB.png"
import RayRuark from "@/public/reviews/RayRuark.png"
import RebeccaGreen from "@/public/reviews/RebeccaGreen.png"
import MattScrogham from "@/public/reviews/MattScrogham.png"
import FrankieMalena from "@/public/reviews/FrankieMalena.png"
import TammyMyersHanson from "@/public/reviews/TammyMyersHanson.png"
import ChrisBryant from "@/public/reviews/ChrisBryant.png"
import JoeBlack from "@/public/reviews/JoeBlack.png"

export interface Review {
  id: number;
  name: string;
  message: string;
  avatar: StaticImageData;
}

export const topRowReviews: Review[] = [
  {
    id: 1, 
    name: "Laurel Herz",
    message: "They were awesome!! Very quick and cleaned our returns and vents very well. Highly recommend them!!",
    avatar: LaurelHerz
  },
  {
    id: 2, 
    name: "Penelope Tilbury",
    message: "Duct Daddy was efficient and professional in cleaning my vents. I was impressed with his personality and skills.",
    avatar: PenelopeTilbury
  },
  {
    id: 3, 
    name: "PJ B",
    message: "The young men did a very nice job of cleaning and sanitizing my air ducts. I highly recommend!",
    avatar: PJB
  },
  {
    id: 4, 
    name: "Ray Ruark",
    message: "They showed up , were very friendly and really helped us out. Had birds nest in a vent. Would highly recommend them.",
    avatar: RayRuark
  },
  {
    id: 5, 
    name: "Rebecca Green",
    message: "Not only did duct daddy do a great job with our vents…. The owner Was super knowledgeable and easy to work with!",
    avatar: RebeccaGreen
  },
];

export const bottomRowReviews: Review[] = [
  {
    id: 1, 
    name: "Matt Scrogham",
    message: "The Team at Duct Daddy was awesome! They went through each vent of the house and cleaned everything.",
    avatar: MattScrogham
  },
  {
    id: 2, 
    name: "Frankie Malena",
    message: "Great experience, friendly customer service and amazing results! Recommend if you need duct cleaning!",
    avatar: FrankieMalena
  },
  {
    id: 3, 
    name: "Tammy Myers Hanson",
    message: "Highly recommend!! Thorough, reliable, friendly, and responsive. Breathing easier because of him!!",
    avatar: TammyMyersHanson
  },
  {
    id: 4, 
    name: "Chris Bryant",
    message: "Great communication! Professional and efficient from start to finish. Definitely recommend",
    avatar: ChrisBryant
  },
  {
    id: 5, 
    name: "Joe Black",
    message: "Finding good honest reliable contractors of any trade is a chore. I don't think you'll go wrong here!!!",
    avatar: JoeBlack
  },
  {
    id: 6, 
    name: "Matt Scrogham",
    message: "The Team at Duct Daddy was awesome! They went through each vent of the house and cleaned everything.",
    avatar: MattScrogham
  },
];