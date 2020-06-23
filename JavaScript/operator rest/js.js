let movies = {
    'pirates' : {
        title: 'Piraci_XD',
        actors: []
    }
}

function addActors(movie,...actors) {
    actors.forEach((actor)=>{movies[movie].actors.push(actor)})
}

addActors('pirates',"TO ja JESTEM REŻYSEREM XD");
console.log(movies);