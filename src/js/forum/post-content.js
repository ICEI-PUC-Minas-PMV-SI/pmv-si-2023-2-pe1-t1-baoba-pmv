async function getPostContent(postId) {
	try {
		const res = await fetch(`http://localhost:3000/posts/${postId}`);
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function getPostComments(postId) {
	try {
		const res = await fetch(`http://localhost:3000/comments?postId=${postId}`);
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function loadPostContent() {
	try {
		const postId = sessionStorage.getItem("post_id");
		const post = await getPostContent(postId);
		console.log(post);
	} catch (error) {
		throw new Error(error);
	}
}
