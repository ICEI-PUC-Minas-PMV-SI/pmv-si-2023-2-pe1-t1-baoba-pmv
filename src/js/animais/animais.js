async function getAnimals() {
	try {
		const res = await fetch("http://localhost:3000/animals");
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function getAnimalsByBiome(bioma) {
	try {
		const res = await fetch(`http://localhost:3000/animals?biome=${bioma}`);
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function setAnimals(biome, elementId) {
	try {
		const animals = await getAnimalsByBiome(biome);

		let htmlContent = ``;

		for (let i = 0; i < animals.length; i++) {
			htmlContent += `
        <div class="animais-extincao-tundra">
            <img
              width="382"
              height="240"
              src="${animals[i].img_url}"
              alt="${animals[i].name}"
            />
            <div class="card-opaco-tundra">
              <p>${animals[i].name}</p>
            </div>
          </div>
        `;
		}

		document.querySelector(`#${elementId}`).innerHTML = htmlContent;
	} catch (error) {
		throw new Error(error);
	}
}
