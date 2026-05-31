anime({
    targets:'.hero-title',
    translateY:[-100,0],
    opacity:[0,1],
    duration:2000,
    easing:'easeOutExpo'
});

anime({
    targets:'.hero-subtitle',
    opacity:[0,1],
    delay:1000,
    duration:2000
});

anime({
    targets:'.book-btn',
    scale:[0,1],
    delay:1500,
    duration:1500
});

anime({
    targets:'.feature-card',
    translateY:[100,0],
    opacity:[0,1],
    delay:anime.stagger(300),
    duration:1500
});