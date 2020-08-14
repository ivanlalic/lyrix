import React, {useState} from 'react';

const Form = ({setLyricSearch}) => {

    const [search, setSearch] = useState({
        artist: '',
        song: ''
    });

    const [error, setError] = useState(false);

    const { artist, song} = search;

    //function to read its content
    const updateState = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    //Call API
    const handleSubmit = e => {
        e.preventDefault();

        if (artist.trim === '' || song.trim() === '') {
            setError(true);
            return;
        } 
        setError(false);

        //Then pass it to app.js
        setLyricSearch(search); //object

    }

    return ( 
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2">Inputs requiered</p> : null}
            <div className="container">
                <div className="row">

                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={handleSubmit}
                    >
                        <fieldset>
                            <legend
                                className="text-center"
                            >Lyrics Finder</legend>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artist</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="artist"
                                        placeholder="Name of the artist"
                                        onChange={updateState}
                                        value={artist}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Song</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="song"
                                        placeholder="Name of the song"
                                        onChange={updateState}
                                        value={song}
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary float-right"
                        >Search</button>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Form;
