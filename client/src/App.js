import './App.css';
import React, {useState, useEffect} from "react";
import Photo from './components/Photo.js'

function App() {

  const [photos, setPhotos] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPhotos, setFilteredPhotos] = useState([])
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/')            
    .then(res => res.json())
    .then(data => setPhotos(data.photos.photo))
   
  }, [])

  /* Search */

  useEffect( () => {

    const filterPhotos = (photo) =>{
      if (photo.title.toLowerCase().includes(searchTerm.toLowerCase())) return true
      if (photo.description['_content'].toLowerCase().includes(searchTerm.toLowerCase())) return true
      if (photo.tags.toLowerCase().includes(searchTerm.toLowerCase())) return true
    }

    console.log(searchTerm)

    if (searchTerm !==""){
      const filtered = photos.filter(filterPhotos)
      setFilteredPhotos(filtered)
    } else {
      setFilteredPhotos(photos)
    }

  }, [searchTerm, photos])


  const list_of_photos = filteredPhotos.map((photo, i) => {
    return (<Photo key={i} photo={photo} position={i+1}/>);
  })


  return (
    <div className="App">
      <header className="App-header">
        <h1>My Flickr App</h1>
      </header>
      <article>
        <label id="search-label" htmlFor="search" alt="search">Search</label> 
            <input id="search" name ="search" type="search" placeholder="Search Photos" onChange={e => {setSearchTerm(e.target.value)}}/>
        <ul>{list_of_photos}</ul>
      </article>
    </div>
  );
}

export default App;

  /* Scroll 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    const scrollTop = (document.documentElement
      && document.documentElement.scrollTop)
      || document.body.scrollTop;
    const scrollHeight = (document.documentElement
      && document.documentElement.scrollHeight)
      || document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 50 >= scrollHeight){
      setIsBottom(true);
    }
  }

  useEffect(() => {
    if (isBottom) {
      addItems();
    }
  }, [isBottom]);

  const addItems = () => {
    if (state.stocks.length !== 0) {
      setStocksToDisplay(prevState => ({
        page: prevState.page + 1,
        stocksToDisplay: prevState.stocksToDisplay.concat(
          state.stocks.slice(
            (prevState.page + 1) * 30,
            (prevState.page + 1) * 30 + 30,
          ),
        ),
      }));
      setIsBottom(false);
    }
  };

  */