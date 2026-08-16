// fetching the data from the api: 
// "https://apis.scrimba.com/jsonplaceholder/posts"

let postArray = []

function renderPost() {
    let emptyArr = ""
    for (let post of postArray) {
        emptyArr += `
         <h3>${post.title}</h3>
         <p>${post.body}</p>
         <hr />
        `
    }
    document.getElementById('blog-list').innerHTML = emptyArr
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(res => res.json())
.then(data => {
    // slice to 5
    postArray = data.slice(0, 5)
    renderPost()
   
})

// Add event listener to form
document.getElementById("new-post").addEventListener('submit', function(e) {
    e.preventDefault();
    const postTitle = document.getElementById('post-title').value
    const postBody = document.getElementById('post-body').value
    
    if (!postTitle || !postBody) {
        alert("Please fill in both title and body");
        return;
    }
    
    const data = {
        title: postTitle, 
        body: postBody   
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then(res => res.json())
    .then(post => {
      postArray.unshift(post)
      renderPost()
      document.getElementById('new-post').reset();
    });
});