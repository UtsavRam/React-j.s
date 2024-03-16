import React from 'react';

function Crads60() {

  const prodectimg = [
    {
      
      Title: "IMAGE-1",
      Year: "2020",
      Poster: "https://www.andhrawishesh.com/images/phocagallery/Movies/Tollywood/DuvvadaJagannadhamPosters/Allu-Arjun-Duvvada-Jagannadham-New-Posters-03.jpg"
    },
    {
      
      Title: "IMAGE-2",
      Year: "2008",
      Poster: "https://filmfare.wwmindia.com/content/2021/aug/motivational-movie-bhaag-milkha-bhaag.jpg"
    },
    {
      
      Title: "IMAGE-3",
      Year: "2016",
      Poster: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/eaf1ca46868561.5867c943745d0.jpg"
    },
    {
      
      Title: "IMAGE-4",
      Year: "2012",
      Poster: "https://xl.movieposterdb.com/23_09/2022/10698680/xl_kgf-chapter-2-movie-poster_c89d5120.jpg"
    },
    {
      
      Title: "IMAGE-5",
      Year: "2022",
      Poster: "https://www.kerala9.com/wp-content/uploads/2022/04/kgf-chapter-2-photos-hd-001-1024x512.jpg"
    },
    {
      
      Title: "IMAGE-6",
      Year: "2017",
      Poster: "https://i.pinimg.com/originals/8a/a3/bd/8aa3bd641b7a7c712b7abb080e270ee6.jpg"
    },
    {
      
      Title: "IMAGE-7",
      Year: "2019",
      Poster: "https://c8.alamy.com/comp/2JP6395/madhavan-aamir-khan-sharman-joshi-poster-3-idiots-2009-2JP6395.jpg"
    },
    {
      
      Title: "IMAGE-8",
      Year: "2023",
      Poster: "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/hat.jpg"
    },
    {
      
      Title: "IMAGE-9",
      Year: "1992",
      Poster: "https://m.media-amazon.com/images/M/MV5BMzZiNWI3ZjAtNTNkYS00NDQzLTgxMWUtZTJlYWU0ODk0MTA1XkEyXkFqcGdeQXVyODY2MTUxMDA@._V1_.jpg"
    },
    {
      
      Title: "IMAGE-10",
      Year: "1977",
      Poster: "https://cdn.cinematerial.com/p/297x/dnrlokic/major-indian-movie-poster-md.jpg?v=1617570332"
    },
    {
      
      Title: "IMAGE-11",
      Year: "2017",
      Poster: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2018/02/rajinikanths-kaala-fierce-poster-will-definetly-make-curious-movie-1.jpg"
    },
    {
      
      Title: "IMAGE-12",
      Year: "2015",
      Poster: "https://e1.pxfuel.com/desktop-wallpaper/998/938/desktop-wallpaper-brahmastra-bollywood-2022-movie-poster-thumbnail.jpg"
    },
    {
      
      Title: "IMAGE-13",
      Year: "1999",
      Poster: "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201908/bhhol-new-x1280.jpg?PLTFrsX6KUq699pVxI9IMQf96TvwpsQI"
    },
    {
      
      Title: "IMAGE-14",
      Year: "2008",
      Poster: "https://tanqeed.com/wp-content/uploads/2019/03/Sooryavanshi.jpg"
    },
    {
      
      Title: "IMAGE-15",
      Year: "1980",
      Poster: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/kapil-dev-83-film-poster-template-design-aaadb3363175bedddade4ae18fdbc54a_screen.jpg?ts=1640294701"
    },
    {
      
      Title: "IMAGE-16",
      Year: "2005",
      Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdm6D0QgOPRriIwsO068CmfGCj2rt-tryGXrKzaGexUI-PGcHzilUYqn-sJiC9SI6F7ag&usqp=CAU"
    },
    {
      
      Title: "IMAGE-17",
      Year: "2023",
      Poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/1/2023_1$largeimg_265360720.jpg"
    },
    {
      Title:"IMAGE_18",
      Year: "2023",
      Poster:"https://www.mumbailive.com/images/media/images/bollywood_1674817732983.jpg?fm=webp&w=700"
    },
    {
      Title:"IMAGE_19",
      Year: "2022",
      Poster:"https://e1.pxfuel.com/desktop-wallpaper/384/844/desktop-wallpaper-rrr-movie-on-twitter-rrr-poster.jpg"
    },
    {
      Title:"IMAGE_20",
      Year: "2020",
      Poster:"https://w0.peakpx.com/wallpaper/532/815/HD-wallpaper-surya-the-soldier-smoke-allu-arjun-actor-thumbnail.jpg"
    }
    
   ]

  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {prodectimg.map((el, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img src={el.Poster} className="card-img-top" alt={el.Title} width={"33.33%"} height={"350px"} />
              <div className="card-body">
                <h5 className="card-title">{el.Title}</h5>
                <p className="card-text">{el.Year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Crads60;
