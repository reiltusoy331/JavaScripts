
function showProperties(obj){
     for (let key in obj)
        if(typeof obj[key]==='string')
            console.log(key,obj[key])

}

const movie = {
    title:'a',
    releaseYear:2018,
    rating:4.0,
    director:'b'
}

showProperties(movie);

