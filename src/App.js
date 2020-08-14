import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/form';
import axios from 'axios';
import Song from './components/song';
import Info from './components/info';

function App() {

  //State
  const [lyricSearch, setLyricSearch] = useState({});
  const [lyric, setLyric] = useState('');
  const [information, setInformation] = useState({});

  useEffect( () => {

    if(Object.keys(lyricSearch).length === 0) return;

    const callAPIs = async () => {

      const {artist, song} = lyricSearch;
      const URL = `https://api.lyrics.ovh/v1/${artist}/${song}`
      const URL2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`

      const [lyric, information] = await Promise.all([ //Made this to wait for both calls and not one first and then after resolve call the other
        axios.get(URL), //lyric 
        axios.get(URL2) //info
      ])

      setLyric(lyric.data.lyrics);
      setInformation(information.data.artists[0]); //what i get is an object

    }

    callAPIs();
  }, [lyricSearch, information] )


  return (
    <Fragment>
      <Form 
        setLyricSearch={setLyricSearch}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info 
              information={information}
            />
          </div>
          <div className="col-md-6">
            <Song 
              lyric={lyric}
            />
          </div>
        </div>
      </div>


    </Fragment>
  );
}

export default App;
