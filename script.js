var body=$("body"),
    badge=$("#badge"),
    color1=$(".color1"),
    color2=$(".color2"),
    color3=$(".color3"),
    color4=$(".color4"),
    color5=$(".color5");

TweenMax.set( badge, { transformStyle: 'preserve-3d'  });

body.mousemove(function(e) {

    // cursor axis
    var sxPos =  e.pageX / body.width()  * 100 - 50;
    var syPos =  e.pageY / body.height() * 100 - 50;


    // tilt the badge
    TweenMax.to( badge, 1, {
        rotationY: 0.25 * sxPos,
        rotationX: 0.20 * syPos,
        rotationZ: 0.10,
        transformPerspective:500,
        transformOrigin:'center center'
    });


    // If cursor goes right or top
    if (sxPos >= 0 || syPos >= 0) {
        var tl1 = new TimelineMax();

        tl1.to( color1, 0.3, {fill: "#8EABE5"})
            .to( color2, 0.3, {fill: "#BCACF3"}, 0.2)
            .to( color3, 0.3, { fill: "#FAA9B2"}, 0.15)
            .to( color4, 0.3, { fill: "#F8FCA8"}, 0.1)
            .to( color5, 0.3, { fill: "#B5DFC8"}, 0.1);
    }

    // If cursor goes left or bottom
    if (sxPos < 0 || syPos < 0)  {
        var tl2 = new TimelineMax();

        tl2.to( color1, 0.3, {fill: "#F8FCA8"})
            .to( color2, 0.3, {fill: "#8EABE5"}, 0.2)
            .to( color3, 0.3, { fill: "#B5DFC8"}, 0.15)
            .to( color4, 0.3, { fill: "#FAA9B2"}, 0.1)
            .to( color5, 0.3, { fill: "#BCACF3"}, 0.1);
    }
});



// RESSOURCES:

// Tilt effect by jim: https://codepen.io/jimthornton/pen/mErGgB

// Orginal badge: https://twitter.com/guyomtibor/status/873079434437197825