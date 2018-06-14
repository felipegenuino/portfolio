angular.module("meuModulo")
.controller("indexController", function($scope){
  $scope.titulo = "Home";
})

.controller("contactController", function($scope){
  $scope.titulo = "Contact";
})

.controller("worksController", function($scope){
  $scope.titulo = "works";

})

.controller("404Controller", function($scope){
  $scope.titulo = "404";
})




.directive("headroom", ["$interval", function($interval) {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
          (function() {
           var header = document.querySelector(".header-main");

           if(window.location.hash) {
             header.classList.add("headroom--unpinned");
           }

           var headroom = new Headroom(header, {
               tolerance: {
                 down : 10,
                 up : 20
               },
               offset : 205
           });
           headroom.init();

        }());
        }
    }
}]);
