"use strick";



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
   
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
   },
   rememberMyFilms: function (){
        for (let i = 0; i < 2; i++) {

            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                i--;
                console.log('error');
            }
        }
    },
    detectPersonalLevel: function (){
        if ( personalMovieDB.count < 10){
            alert('Просмотрено довольно мало фильмов');
        }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            alert('Вы классический зритель');
        }else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        }else {
            alert('Произошла ошибка');
        }
    },

    showMyDB: function (hidden){
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    
    toggleVisibleMyDB: function () {
        if ( personalMovieDB.privat ){
            personalMovieDB.privat = false;
        }else {
            personalMovieDB.privat = true;

        }
    },

    writeYourGenres: function (){
        for(let i = 1; i < 2; i++){
            let genre = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            if (genre === '' || genre === null){
                console.log(`Вы ввели некорректные данные  или не ввели их вовсе`);
                i--;
            }else {
                personalMovieDB.genres = genre.split(', ');
                personalMovieDB.genres = genre.sort();

            }

        }

        personalMovieDB.genres.forEach((el) => {
            console.log(`Любимый жанр #${personalMovieDB.genres.indexOf(el) + 1} - это ${el}`)});
    },

    
   
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();


