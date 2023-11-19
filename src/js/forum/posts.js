async function onPageLoad() {
	const posts = await getPosts();
	await setPosts(posts);
	await setTrendingPosts();
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

async function getTrendingPosts() {
	try {
		const res = await fetch("http://localhost:3000/posts?_sort=likes&_order=desc");
		const data = await res.json();
		const trendingPosts = await data.slice(0, 3);
		return trendingPosts;
	} catch (error) {
		throw new Error(error);
	}
}

async function setTrendingPosts() {
	const trendingPosts = await getTrendingPosts();
	let htmlTrendingPosts = ``;
	for (let i = 0; i < trendingPosts.length; i++) {
		htmlTrendingPosts += `<span  style="text-decoration: none;" >
        <a href="comment.html" onclick="setSessionStoragePostId(${trendingPosts[i].id})" style="text-decoration: none;">
        ${trendingPosts[i].title}</span>`;
	}
	document.querySelector("#forum__trending").innerHTML = htmlTrendingPosts;
}

async function setSessionStoragePostId(id) {
    sessionStorage.setItem("post_id", id);
}

// async function loadComment(id) {
//     const post = await getPost(id);
//     const comments = await getComments(id);
//     let htmlComments = ``;
//     for (let i = 0; i < comments.length; i++) {
//         htmlComments += `<div class="forum__comment-item">
//         <span>${comments[i].content}</span>
//     </div>`;
//     }
//     document.querySelector("#forum__comments").innerHTML = htmlComments;
//     document.querySelector("#forum__post-title").innerHTML = post.title;
//     document.querySelector("#forum__post-content").innerHTML = post.content;
// }