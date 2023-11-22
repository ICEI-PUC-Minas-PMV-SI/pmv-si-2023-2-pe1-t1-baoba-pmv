async function getDestinyData(id) {
	try {
		const res = await fetch(`http://localhost:3000/ecotourism/${id}`);
		const data = await res.json();
		console.log(data);
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function setDestinyData() {
	try {
		const destinyId = sessionStorage.getItem("destiny_id");
		const destinyData = await getDestinyData(destinyId);

		let htmlContent = `
        <div class="text-and-image-destino">
          <div class="text-destino">
            <h1>${destinyData.name}</h1>
            <p>
              ${destinyData.about}
            </p>
          </div>
          <div class="image-destino">
            <img
              src="${destinyData.img_url}"
              alt="${destinyData.name}"
            />
          </div>
        </div>
      <div class="caixa-texto-dest">
        ${destinyData.text}
      </div>
        `;

		document.querySelector("#destiny-content").innerHTML = htmlContent;
	} catch (error) {
		throw new Error(error);
	}
}
