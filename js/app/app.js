angular.module("meuModulo", ['ngRoute'])

.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when("/", {
      templateUrl: "templates/home2.html",
      controller: "indexController"
    })
    .when("/contato", {
      templateUrl: "templates/contact.html",
      controller: "contactController"
    })
    .when("/works", {
      templateUrl: "templates/works.html",
      controller: "worksController"
    })

    // .when("/404", {
    //   templateUrl: "templates/404.html",
    //   controller: "404Controller"
    // })

    //redireciona quando não encontrar a rota
    $routeProvider.otherwise({redirectTo:"/"});

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
})
