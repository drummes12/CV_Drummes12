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
          <div class="w-60 relative group snap-always snap-center shrink-0 first:pl-8 last:pr-8 rounded-xl hover:drop-shadow-2xl">
            <div
              class="bg-gray-200 rounded-md overflow-hidden">
              <img src="./assets/images/drivers/${driver.Name}_${driver.Country}.webp" alt="${driver.Name}" onerror="this.src='https://graffica.info/wp-content/uploads/2017/11/F1_Unveil_Images_Final-1000-1200x675.jpg';" class="object-cover">
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
    content.innerHTML = `
      <div class="snap-center shrink-0">
        <div class="shrink-0 w-4 sm:w-20"></div>
      </div>
      ${view}
      <div class="snap-center shrink-0">
        <div class="shrink-0 w-4 sm:w-20"></div>
      </div>
    `;
  } catch (error) {
    console.error(error);
  }
})();
