import Data from './Data.json';
import { useState } from 'react';

function Apimilan() {

    const[Milandata,setMilandata] = useState (Data.Milandata)
    console.log(Milandata);

  return (
    <>
        <div className="row">
            {
                Milandata.map((v,i)=> (
                    <div className="col-3">
                        <img src={v.Poster} alt="" height={"200px"} width={200} />
                        <h1>{v.Year}</h1>
                        <p>{v.Title}</p>
                        <p>{v.imdbID}</p>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Apimilan;