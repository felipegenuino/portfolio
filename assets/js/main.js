//TweenMax.to(target, duration, {vars});


// $("a").click(function(event) {
//     event.preventDefault();
// });



window.onload = function() {

    TweenMax.from(".brand", 0.7, {
        left: 0,
        x: 0,
        y: 0,
        rotation: 360,
        scale: 1,
        opacity: 1
    });

    TweenMax.staggerFrom(".work__card", 0.4, {
        y: 0,
        scale: 0.6,
        opacity: 0,
        delay: 1.3,
        //ease: Back.easeOut,
    }, 0.1);

    TweenMax.staggerFrom(".work__card__title", 0.2, {
        x: -80,
        scale: 0.6,
        opacity: 0,
        delay: 1.6,
    }, 0.1);

}