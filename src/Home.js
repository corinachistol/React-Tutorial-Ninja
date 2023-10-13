const Home = () => {

    const  handleclick = (e) => {
        console.log('Hello ninjas',e)
    }
    const  handleclickAgain = (name,e) => {
        console.log('hello' + name,e)
    }



    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick = { handleclick }>Click me</button>
            <button onClick={ (e) => handleclickAgain('mario',e)}>Click me again</button>
        </div>
     );
}
 
export default Home;