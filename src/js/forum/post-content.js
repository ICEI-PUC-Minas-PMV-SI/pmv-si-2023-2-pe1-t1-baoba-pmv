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
        const comments = await getPostComments(postId);
		await renderPost(post, comments);
	} catch (error) {
		throw new Error(error);
	}
}

async function renderPost(post, comments) {
    const postContainer = document.querySelector("#post__content-container");

    let htmlContent = `
        <div class="post-content__main">
                <span>${post.title}</span>
                <span>${post.content}</span>
        </div>`

        if(comments.length > 0) {
            for(let i = 0; i < comments.length; i++) {
                htmlContent += `
                <div class="post-content__comment" >
                    <div class="post-content__user-icon" >
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="post-content__comment-items">
                        <span>${comments[i].author}</span>
                        <span>${comments[i].body}</span>
                    </div>
                </div>`;
            }
        }

    postContainer.innerHTML = htmlContent;
} 
