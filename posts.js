const posts= [
    {title:"nodejs Lessons", paragraph:"This homework maden for nodejs lessons" , author: "Ali Kemal Bilgili"},
    {title:"nodejs Lessons", paragraph:"This homework maden for nodejs lessons" , author: "Ali Kemal Bilgili"}, 
    {title:"nodejs Lessons", paragraph:"This homework maden for nodejs lessons" , author: "Ali Kemal Bilgili"} 
]

const listPosts = () => {
    posts.map((post) => {
        console.log(post.title)
    } 
)};

const addPost = (post) =>{
    const promise1 = new Promise((resolve, reject)=> {
        posts.push(post)
        resolve(200)
    })
}

async function getPosts (){
    try {
        await addPost({title:"nodejs Lessons", paragraph:"This homework maden for nodejs lessons" , author: "Ali Kemal Bilgili"})
        listPosts();
    } catch (error) {
        console.log(error)
    }
}
getPosts()