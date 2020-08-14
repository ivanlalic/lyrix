import React, {Fragment} from 'react'

const Song = ({lyric}) => {

    if(lyric.length === 0) return null; //prevent load of empty lyrics 

    return (
        <Fragment>
            <h2>Lyrics</h2>
            <p className="letra">{lyric}</p>
        </Fragment>
    )
};
 
export default Song;