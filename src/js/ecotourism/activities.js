function setActivitiesId(id) {
    sessionStorage.setItem('activities_id', id);
    window.location.href = 'atividades.html';
}

async function getEcotourismActivities() {
    try {
		const res = await fetch(`http://localhost:3000/ecotourism`);
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function setEcotourismActivities() {
    try {
		const ecotourismActivities = await getEcotourismActivities();
        
        let htmlContent = ``;

        for(let i = 0; i < ecotourismActivities.length; i++) {
            htmlContent += `
            <div class="carousel-item" onclick="setActivitiesId(${ecotourismActivities[i].id})">
            <a href="atividades.html">
              <img style="width: 380px; height: 285px"
                src="${ecotourismActivities[i].img_url}"
                alt="${ecotourismActivities[i].name}"
              />
            </a>
            <div class="card-opaco">
              <p>${ecotourismActivities[i].name}</p>
            </div>
          </div>
            `
        }

        document.querySelector('#carousel-items-container').innerHTML = htmlContent;
        document.addEventListener('DOMContentLoaded', setActivitiesId);

	} catch (error) {
		throw new Error(error);
	}
}
