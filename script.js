gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.star').forEach(star => {
    gsap.fromTo(star, {
        opacity: 0,
        y:100,
        rotation: 450,

    },{
        y:0,
        opacity: 1,
        rotation: 0,
        duration: 1,
        delay: .5,
        scale:1.5,
        scrollTrigger: star,
    })
});


console.log('hola');
//-----------------------------------logo

 gsap.from('.logo div', {
    opacity: .2,
    delay: .5,
    x: 100,
    letterSpacing:'2rem',


 })

gsap.from('.logo img', {
    opacity: 0,
    delay: .5,
    scale: .2,

}

)

//------------------------------------

gsap.from('.spaceShip', {
    opacity: 0,
    scale: .5,
    duration: .5,
    delay: .5
})

gsap.utils.toArray('.title').forEach(title =>{
    gsap.fromTo(title, {
        opacity: 0,
        x: -300,
        skewX: 50,
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: .5,
        skewX: 0,
        scrollTrigger: title
    })
})
gsap.utils.toArray('p').forEach(title =>{
    gsap.fromTo(title, {
        opacity: 0,
        x: -300,
        skewX: 50,
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: .5,
        skewX: 0,
        scrollTrigger: title
    })
})

//----------------------------- Line


gsap.utils.toArray('.line').forEach(line =>{
    gsap.fromTo(title, {
        opacity: 0,
        with: '0%',
    }, {
        opacity: 1,
        duration: 1,
        delay: .5,
        with: '100%',
        scrollTrigger: line
    })
})

//----------------------------- Card SPACESHIPS

gsap.utils.toArray('.img-center').forEach(imgCenter => {
    gsap.fromTo(imgCenter, {
        opacity:0,
        rotation: 360,
        scale: .2,
    }, {
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 1,
        delay: .5,
        scrollTrigger: imgCenter
    })
})