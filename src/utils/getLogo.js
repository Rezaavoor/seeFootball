import axios from "axios";

export default async function getLogo(name) {
  name = name.replace(" ", "%");
  const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${name}`;
  const { data } = await axios.get(url);
  try {
    return data.teams[0].strTeamBadge;
  } catch {
    return "https://www.konfest.com/wp-content/uploads/2019/05/Konfest-PNG-JPG-Image-Pic-Photo-Free-Download-Royalty-Unlimited-clip-art-sticker-Question-Mark-Symbol-Sign-Black-White-11.png";
  }
}
