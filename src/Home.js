import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
                            // when the state changes, triggers a rerender -> useEffect ->triggers useState ->triggers a useEffect   .... it can be a continous loop
    const [blogs, setBlog] = useState(null)

   
    // every time there is a rerender ,the callback function will run.First at initial load, then every time the state(useState) changes. Useful for fetching data
    useEffect( () => {
       fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            setBlog(data)
        });
    },[] )
    // [] = empty dependancy arrays makes sure that this hook useEffect ran only once, at first render!
    // [name] = useEffect will ran at firs render and then everytime when the name changes

    return ( 
        <div className="home">
           {blogs && <BlogList blogs ={blogs} title="All Blogs!" /> }
        </div>
     );
}
 
export default Home;