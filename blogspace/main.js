// fetcing the data from the api: 
// "https://apis.scrimba.com/jsonplaceholder/posts"


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        // slice to 5
        const itemList = data.slice(0, 5)
        console.log(itemList);

        //  display the `title` and `body` properties of the first 5 posts on the browser page.

        let emptyArr = "";   // empty string

        // looping and build the HTML string
        itemList.forEach(post => {
            emptyArr += 
            `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            `
        });

        document.getElementById("posts").innerHTML = emptyArr;
    })

    // form handling

    const form = document.getElementById('post-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('post-title').value;
        const body = document.getElementById('post-body').value;

        const post = {
            title,
            body
        };

        console.log(post);
    })
