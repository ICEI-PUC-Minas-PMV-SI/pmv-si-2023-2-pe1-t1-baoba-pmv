async function getBiomeData(id) {
	try {
		const res = await fetch(`http://localhost:3000/biomes/${id}`);
		if (!res.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await res.json();
		return data;
	} catch (error) {
        console.error('Error fetching biome data:', error);
		throw new Error(error);
	}
}
async function setBiomesData() {
	try {
		const biomesId = sessionStorage.getItem("biomes_id");
        if (!biomesId) {
            throw new Error('Biome ID not found in sessionStorage.');
        }


		const biomesData = await getBiomesData(biomesId);

		let htmlContent = `
        <div class="text-and-image-conteudo-biomas">
          <div class="text-conteudo-biomas">
            <h1>${biomesData.name}</h1>
            <p>
              ${biomesData.about}
            </p>
          </div>
          
        </div>
      <div class="caixa-texto-dest">
        ${biomesData.preservation}
      </div>
      <div>
      </div>
      <div class="image-conteudo-biomas">
            <img
              src="${biomesData.img_url}"
              alt="${biomesData.name}"
            />
          </div>
        </div>

        `;

		sessionStorage.setItem("lat", biomesData.lat);
		sessionStorage.setItem("lon", biomesData.lon);

        const biomesContentElement = document.querySelector("#biomes-content");
        if (biomesContentElement) {
            biomesContentElement.innerHTML = htmlContent;
        } else {
            console.error('Element with ID #biomes-content not found.');
        }

	} catch (error) {
		console.error('Error in setBiomesData:', error);
	}
}