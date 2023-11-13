async function onPageLoad() {
    const posts = await getPosts();
    setPosts(posts);
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

function setPosts(posts) {
    let htmlPostsForum = ``;
    for (let i = 0; i < posts.length; i++) {
        htmlPostsForum += `<div class="forum__post-item">
        <span>${posts[i].title}</span>
        <div class="forum__post-item--options">
            <div class="forum__options--first">
                <i><img src="../img/svg/arrow-up.svg"></i>
                <span>${posts[i].likes}</span>
                <i><img src="../img/svg/arrow-down.svg"></i>
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

async function createPost() {
    const title = document.querySelector("#new-post-title").value;
    const content = document.querySelector("#new-post-content").value;
    const likes = 0;
    const comments = 0;
    const post = {
        title,
        content,
        likes,
        comments
    };
    try {
        const res = await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
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
            method: "DELETE"
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
        content
    };
    try {
        const res = await fetch(`http://localhost:3000/posts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

async function onSubmit() {
    const post = await createPost();
    const posts = await getPosts();
    setPosts(posts);
}
