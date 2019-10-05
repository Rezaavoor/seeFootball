import axios from "axios";
import cheerio from "cheerio";

import getLogo from "./getLogo";

export default async function scraper() {
  const { data } = await axios.get(
    "https://cors-anywhere.herokuapp.com/https://www.viprow.net/sports-football-online"
  );
  const $ = cheerio.load(data);
  const allGames = $(".text-green")
    .toArray()
    .filter(game => game.children.length > 2);

  const games = allGames.map(async game => {
    return {
      id: game.attribs["data-target"],
      teams: [
        {
          name: game.attribs.title.split(" v ")[0],
          logo: await getLogo(game.attribs.title.split(" v ")[0])
        },
        {
          name: game.attribs.title.split(" v ")[1],
          logo: await getLogo(game.attribs.title.split(" v ")[1])
        }
      ],
      time: game.children[1].children[0].data,
      leage: game.children[0].attribs.class.split(" ")[1],
      link: "https://www.viprow.net" + game.attribs.href
    };
  });

  return await Promise.all(games);
}
