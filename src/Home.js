import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
                            // when the state changes, triggers a rerender -> useEffect ->triggers useState ->triggers a useEffect   .... it can be a continous loop
    const [blogs, setBlog] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const [name, setName] = useState("mario")

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( (blog) => blog.id !== id )
        setBlog(newBlogs)
    }

    // every time there is a rerender ,the callback function will run.First at initial load, then every time the state(useState) changes. Useful for fetching data
    useEffect( () => {
        console.log('use effect ran!')
        console.log(name)
    },[name] )
    // [] = empty dependancy arrays makes sure that this hook useEffect ran only once, at first render!
    // [name] = useEffect will ran at firs render and then everytime when the name changes

    return ( 
        <div className="home">
                        {/* here is the object props defined in arguments of the child */}
            <BlogList blogs ={blogs} title="All Blogs!" handleDelete={handleDelete} />  
            <button onClick={ () => setName("luigi") }>Change name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;