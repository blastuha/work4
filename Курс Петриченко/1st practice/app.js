// console.log({answer, answer2, answer3})

const personalMovieDB = {
  count: undefined,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}


function personalMovieDBFilling(obj) {
  const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')
  const lastFilm = prompt('Какой один из последних просмотренных фильмов?')
  const lastFilm2 = prompt('Какой один из последних просмотренных фильмов?')
  const mark = +prompt('На сколько оцените его?')
  const mark2 = +prompt('На сколько оцените его?')

  obj.count = numberOfFilms
  // obj.movies = {[lastFilm]: mark},
  // obj.movies = {...obj.movies, [lastFilm2]: mark2}
  obj.movies[lastFilm] = mark
  obj.movies[lastFilm2] = mark2


  return obj
}

console.log(personalMovieDBFilling(personalMovieDB))