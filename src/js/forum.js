async function onPageLoad() {
	const posts = await getPosts();
	await setPosts(posts);
}

async function setPosts(posts) {
	let htmlPostsForum = ``;
	for (let i = 0; i < posts.length; i++) {
		htmlPostsForum += `<div class="forum__post-item">
        <span>${posts[i].title}</span>
        <div class="forum__post-item--options">
            <div class="forum__options--first">
                <i class="clickableIcon" onclick="likesInteraction('${posts[i].id}', ${posts[i].likes}, 'like')"  ><img src="../img/svg/arrow-up.svg"></i>
                <span>${posts[i].likes}</span>
                <i class="clickableIcon" onclick="likesInteraction('${posts[i].id}', ${posts[i].likes}, 'dislike')" ><img src="../img/svg/arrow-down.svg"></i>
            </div>
            <div class="forum__options--second">
                <i><img src="../img/svg/bubble-chat.svg"></i>
                <span>${posts[i].comments}</span>
            </div>
            <div class="forum__options--third">
                <i><img src="../img/svg/share.svg"></i>
                <span>Compartilhar</span>
            </div>
        </div>
    </div>`;
	}
	document.querySelector("#forum__posts").innerHTML = htmlPostsForum;
}

async function likesInteraction(id, likes, action) {
	switch (action) {
		case "like":
			likes++;
			await patchPostLikes(id, likes);
			break;
		case "dislike":
			likes--;
			await patchPostLikes(id, likes);
			break;
	}
}

async function onSubmit() {
	const post = await createPost();
	const posts = await getPosts();
	await setPosts(posts);
}

async function getPosts() {
	try {
		const res = await fetch("http://localhost:3000/posts");
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function createPost() {
	const title = document.querySelector("#new-post-title").value;
	const content = document.querySelector("#new-post-content").value;
    const user = document.querySelector("#new-post-username").value;

	if (title.length === 0 || content.length === 0 || user.length === 0)
		return alert("Preencha todos os campos corretamente");

	const likes = 0;
	const comments = 0;
	const post = {
		title,
		content,
		likes,
		comments,
	};
	try {
		const res = await fetch("http://localhost:3000/posts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(post),
		});
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function deletePost(id) {
	try {
		const res = await fetch(`http://localhost:3000/posts/${id}`, {
			method: "DELETE",
		});
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function updatePost(id) {
	const title = document.querySelector("#edit-post-title").value;
	const content = document.querySelector("#edit-post-content").value;
	const post = {
		title,
		content,
	};
	try {
		const res = await fetch(`http://localhost:3000/posts/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(post),
		});
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function patchPostLikes(id, likes) {
	try {
		const res = await fetch(`http://localhost:3000/posts/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ likes: likes }),
		});
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}
