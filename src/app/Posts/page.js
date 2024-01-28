// POSTS page js //



// importing some black market's hot stuff needed for project, below: // 

import Link from "next/link";



// !!! Below I export all the necessary things !!! //

// Below I export metadata which allow me to make tab name looks the way I describe inside the curly brackets below://

export const metadata = {
    title: "Choose a meme", // This will be title of my tab for this page // every tab title for specific post will be in [id] folder //
};



// Below I code default function which should (SHOULD) fetch posts from API //
export default async function Posts () { // START of a default function Posts //

    const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // I used jsonplaceholder temporarily instead any SQL API //
    const posts = await response.json();


    return ( // Start of returning in default function Posts //
    
        <div>
            <h1>OUR CHOICE OF JOKES AND MEMES:</h1>
            <p>Main ones:</p>
            {posts.map((post) => {
                return <div key={post.id}>

                        <h4>
                            <Link href={`/Posts/${post.id}`}>{post.title}</Link>
                        </h4>
                    </div>

            })}
        </div>


    ) // End of returning in default function Posts //

} // END of a default function Posts //