console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log("bad request");
    } else {
      const data = await response.json();
      // log of the whole object
      console.log(data);
      // log of the values
      console.log(data.results[4].name, data.results[4].height);
      console.log(data.results[2].name, data.results[2].height);

      //bonus log the eye color of R2-D2
      console.log(data.results[2].eye_color);
    }
  } catch (e) {
    console.error(e);
  }
}

fetchData();
