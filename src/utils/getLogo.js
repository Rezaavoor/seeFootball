import axios from "axios";
import cheerio from "cheerio";

const getLogoTransferMarket = async name => {
  try {
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
  } catch {
    return "https://www.konfest.com/wp-content/uploads/2019/05/Konfest-PNG-JPG-Image-Pic-Photo-Free-Download-Royalty-Unlimited-clip-art-sticker-Question-Mark-Symbol-Sign-Black-White-11.png";
  }
};
const getLogoFotmob = async name => {
  if (name) {
    name = name
      .replace("FC", "")
      .replace("CF", "")
      .replace("FSV", "")
      .replace("SD", "")
      .replace("WS", "");
    const { data } = await axios.get(
      `https://apigw.fotmob.com/searchapi/suggest?term=${name}`
    );
    if (data.teamSuggest) {
      const [teamName, teamId] = data.teamSuggest[0].options[0].text.split("|");
      const logo = `https://images.fotmob.com/image_resources/logo/teamlogo/${teamId}.png`;
      return logo;
    } else {
      return await getLogoTransferMarket(name);
    }
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
