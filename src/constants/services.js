import React from "react"
import { GrGamepad } from "react-icons/gr"
import { GiFallingRocks, GiCarrot } from "react-icons/gi"
export default [
  {
    id: 1,
    icon: <GiCarrot className="service-icon" />,
    title: "Gardening",
    text: `I took an interest in gardening at the beginning of 2020. To date I've grown pumpkins, squash, spring onions, potatoes, courgettes and a whole host of herbs!`,
  },
  {
    id: 2,
    icon: <GiFallingRocks className="service-icon" />,
    title: "Climbing",
    text: `You'll regularly find me at local quarries and in the Peaks falling off rocks. In the process of building a woody in my backgarden 👀`,
  },
  {
    id: 3,
    icon: <GrGamepad className="service-icon" />,
    title: "Video Games",
    text: `Big fan of videogames and boardgames. I'm terrible at FPS's and MOBA's but continue to grind at them nonetheless... Valorant is my current favourite multiplayer game.`,
  },
]
