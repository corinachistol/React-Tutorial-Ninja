import { useState } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlog] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    return ( 
        <div className="home">
                        {/* here is the object props defined in arguments of the child */}
            <BlogList blogs ={blogs} title="All Blogs!" />  
            <BlogList blogs ={blogs.filter( (blog) => blog.author === "mario" )} 
                title="Mario's Blogs!" />  
        </div>
     );
}
 
export default Home;