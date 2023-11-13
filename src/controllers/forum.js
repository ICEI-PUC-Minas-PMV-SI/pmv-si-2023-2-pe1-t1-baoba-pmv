async function getPosts(req, res) {
  const posts = await fetch("http://localhost:3000/posts").then((data)=> {
    return data.json();
  }).catch((err) => {
    console.log(err);
    return err;
  }); 

  setPosts(posts);
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

function onPageLoad() {
    getPosts();

}
