import React from 'react'

function Practicimg() {
    const Imgdata = [
        {
            Title : "Image1",
            Poster:"https://e1.pxfuel.com/desktop-wallpaper/384/844/desktop-wallpaper-rrr-movie-on-twitter-rrr-poster.jpg"
        },
        {
            Title : "Image2",
            Poster: "https://filmfare.wwmindia.com/content/2021/aug/motivational-movie-bhaag-milkha-bhaag.jpg"
        },
        {
            Title : "Image3",
            Poster: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/eaf1ca46868561.5867c943745d0.jpg"
        },
        {
            Title : "Image4",
            Poster: "https://xl.movieposterdb.com/23_09/2022/10698680/xl_kgf-chapter-2-movie-poster_c89d5120.jpg"
        },
        {
            Title : "Image5",
            Poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/1/2023_1$largeimg_265360720.jpg"
        },
        {
            Title : "Image6",
            Poster: "https://cdn.cinematerial.com/p/297x/dnrlokic/major-indian-movie-poster-md.jpg?v=1617570332"
        },
        {
            Title : "Image7",
            Poster: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2018/02/rajinikanths-kaala-fierce-poster-will-definetly-make-curious-movie-1.jpg"
        },
        {
            Title : "Image8",
            Poster:"https://w0.peakpx.com/wallpaper/532/815/HD-wallpaper-surya-the-soldier-smoke-allu-arjun-actor-thumbnail.jpg"
        },
       
    ]
  return (
    <>
    <div className="container-fluid">
    <div className="row">
        {
            Imgdata.map((v,i)=> (
                <div className="col-3 position-relative mb-4"> 
                    <img src={v.Poster} height={"420px"} width={330} />
                    <h1 className='position-absolute top-0 border border-1 border-primary py-1 px-2 text-white '>{v.Title}</h1>
                </div>
            ))
        }
    </div>
    </div>
    </>
  )
}

export default Practicimg