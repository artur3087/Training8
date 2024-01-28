// [Id] page js //


// Below I export all the necessary functions // 

export async function generateMetadata ( { params } ) { // START of generateMetadata () //

// Variables:

const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${params.id}`);

// response and return below: //
const post = await response.json();

    return { // START of returning //
    
        title: post.title,
        description: post.body,
    
    
    } // END of returning //

} // END of generateMetadata () //


export default async function OnePost ( {params} ) { // START OF function OnePost //

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    const post = await response.json();

    return ( // START of OnePost function return //
    
    <div>
        <h2>
            {post.title}
        </h2>
        <p>
            {post.body}
        </p>
    </div>
    
    ) // END of ONePost function return ..//



}  // END of function OnePost //