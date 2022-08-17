const APIF1 = "https://formula-18.p.rapidapi.com/driverStanding?year=2022";

const content = null || document.getElementById("content");

const optionsF1 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "82a9dc311emshd311de7bdeb856bp106d1fjsn32ee1c59fee6",
    "X-RapidAPI-Host": "formula-18.p.rapidapi.com",
  },
};

const fetchData = async (urlAPI, options) => {
  const response = await fetch(urlAPI, options);
  const data = await response.json();
  return data;
};

(async () => {
  try {
    const drivers = await fetchData(APIF1, optionsF1);
    let view = `
    ${drivers
      .map(
        (driver) =>
          `
          <div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="./assets/images/drivers/${driver.Name}_${driver.Country}.webp" alt="${driver.Name}" onerror="this.src='https://graffica.info/wp-content/uploads/2017/11/F1_Unveil_Images_Final-1000-1200x675.jpg';" class="w-full">
              <span class="font-bold text-sm absolute inset-2">${driver.POS}</span>
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-gray-500">
                <span aria-hidden="true" class="absolute inset-0"></span>
                <p class="font-bold text-sm">${driver.Name}</p>
                <p class="text-sm">${driver.Car}</p>
                <p class="font-bold">${driver.PTS}</p>
              </h3>
              <img src="https://countryflagsapi.com/png/${driver.Country}" alt="${driver.Country}" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/d/d4/World_Flag_%282004%29.svg';" class="w-1/6 object-contain">
            </div>
          </div>
        `
      )
      .join("")}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();
