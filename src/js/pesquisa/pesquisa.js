async function getPages() {
    try {
        const res = await fetch(`http://localhost:3000/pages`);
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

async function searchPages() {
    try {
        const pages = await getPages();
        const search = document.querySelector('#search-input').value;
        console.log(search);
        pages.map(page => {
            if (page.title.toLowerCase().includes(search.toLowerCase())) {
                window.location.href = `http://localhost:3000/pages/${page.page}`;
            }
        });
        displayPages(filteredPages);
    } catch (error) {
        throw new Error(error);
    }
}

