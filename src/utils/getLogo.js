import axios from "axios";
import cheerio from "cheerio";
import getTeamId from "./getTeamId";

const getLogoTransferMarket = async name => {
  name = name.replace(" ", "%");
  const url = `https://cors-anywhere.herokuapp.com/https://www.transfermarkt.com/schnellsuche/ergebnis/schnellsuche?query=${name}`;
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const tables = Object.values($(".table-header"));
  let imgSrc;
  const fetchData = table => {
    imgSrc =
      table.parent.children[3].children[1].children[3].children[2].next
        .children[0].next.children[0].next.children[0].attribs.src;
  };
  tables.forEach((table, index) => {
    try {
      table.children[0].data.includes("Clubs") && fetchData(tables[index]);
    } catch {}
  });
  return imgSrc && imgSrc;
};
const getLogoTheSportDb = async name => {
  const theName = name.replace(" ", "%");
  const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${theName}`;
  const { data } = await axios.get(url);
  if (data.teams) {
    return data.teams[0].strTeamBadge;
  } else return getLogoTransferMarket(name);
};
const getLogoFotmob = async name => {
  if (name) {
    const teamId = getTeamId(name.toLowerCase());
    if (teamId) {
      const logo = `https://images.fotmob.com/image_resources/logo/teamlogo/${teamId}.png`;
      return logo;
    } else return await getLogoTheSportDb(name);
  }
};
export default async function getLogo(name) {
  let imgSrc = getLogoFotmob(name);
  try {
    return imgSrc;
  } catch {
    return "https://www.konfest.com/wp-content/uploads/2019/05/Konfest-PNG-JPG-Image-Pic-Photo-Free-Download-Royalty-Unlimited-clip-art-sticker-Question-Mark-Symbol-Sign-Black-White-11.png";
  }
}
