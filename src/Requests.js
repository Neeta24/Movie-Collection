const key = '38e61227f85671163c275f9bd95a8803'
 const requests ={
    popular:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1`,
    recomended:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    classic:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`
 }

 export default requests;