class Post {
    constructor(post) {
        this.post = post;
        this.appendPost();
    }

    appendPost() {
        // document.querySelector('.main-content').innerHTML += `
        // <div class="content-bar">
        //     <span class="logo-icon">${this.post.id}</span>
        //     <span class="text-container">
        //         <p class="text-header">${this.post.title}</p>
        //         <p class="text-body">${this.post.body}</p>
        //     </span>
        // </div>
        // `
        const container = document.querySelector('.main-content');
        const contentBar = document.createElement('div');
        const logoIcon = document.createElement('span');
        const textContainer = document.createElement('span');
        const textHeader = document.createElement('p');
        const textBody = document.createElement('p');

        contentBar.className = "content-bar";
        logoIcon.className = "logo-icon";
        textContainer.className = "text-container";
        textHeader.className = "text-header";
        textBody.className = "text-body";

        logoIcon.style.background = this.getRandColor();
        logoIcon.style.color = this.getRandColor();

        logoIcon.innerText = this.post.id;
        textHeader.innerText = this.post.title;
        textBody.innerText = this.post.body;

        textContainer.appendChild(textHeader);
        textContainer.appendChild(textBody);
        contentBar.appendChild(logoIcon);
        contentBar.appendChild(textContainer);
        container.appendChild(contentBar);
    };

    getRandColor() {
        let r = Math.floor((Math.random() * 255));
        let g = Math.floor((Math.random() * 255));
        let b = Math.floor((Math.random() * 255));
        return `rgb(${r},${g},${b})`;
    };
}

const httpPost = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
}

const reqData = async () => {
    try {
        const res = await httpPost()
        res.forEach((post) => {
            const myPost = new Post(post)
        })
    } catch (e) {
        console.log("There was an error :(", e)
    };

}

document.querySelector('.get-posts').addEventListener('click', reqData);