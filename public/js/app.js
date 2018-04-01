const app = angular.module("MovieApp", []);

app.controller("MainController", ["$http", function($http) {
    this.appName = "MyMovies";

    this.baseURL = "http://www.omdbapi.com/?";
    this.apikey = "apikey=" + "dc292b86";
    this.query = "s=";
    // this.movies = "";
    this.searchURL = this.baseURL + this.apikey + "&" + this.query;

    // console.log(this.searchURL);

    this.movies = [];

    this.getMovies = () => {
        $http({
            method: 'GET',
            url: this.searchURL + this.movieTitle
        }).then((response) => {
            this.movies = response.data.Search;
            console.log(this.movies);
        }, (error) => {
            console.error(error);
        }).catch((err) => console.error('Catch: ', err));
    }

    this.myMovies = [];

    this.addMovie = (movie) => {
        $http({
            method: "POST",
            url: "/movies",
            data: {
                name: movie.Title,
                year: movie.Year,
                poster: movie.Poster
            }
        }).then((response) => {
            // this.myMovies = response.data
            this.myMovies.push(response.data)
            console.log(this.myMovies);
        }, (error) => {
            console.error(error);
        }).catch((err) => console.error('Catch: ', err));
    }

}]); //closes app.controller
