import './App.css';

function App() {
  const title = 'Welcome to the new Blog';
  const likes = 50;
  // const person = {name:'Yoshi', age: 30}
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title}</h1>
        <p>Liked { likes } times</p>
        {/* <p>{ person }</p> //nu putem afisa obiecte */}

      <p>10</p>
      <p>{"Hello Ninja"}</p>
      <p>[1,2,3,]</p>
      <p>{Math.random() *10 }</p>

      <a href={link}>Google site</a>
      </div>
    </div>
  );
}

export default App;
