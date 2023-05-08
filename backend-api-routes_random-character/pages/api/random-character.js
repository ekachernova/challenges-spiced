import Chance from "chance";

export default function hendler(request, response) {
  const chance = new Chance();

  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
  };

  response.status(200).json(character);
}
