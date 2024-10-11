
const $circle = document.getElementById('circle');
export const mouseMove = () => {
    gsap.set($circle, {
        yPercent: -50,
        xPercent: -50,
        zIndex: 5,
    })

    const xTo = gsap.quickTo($circle, 'x', {
        duration: 0.5,
        ease: 'elastic'
    })
    const yTo = gsap.quickTo($circle, 'y', {
        duration: 0.5
    });

    window.addEventListener('mousemove', (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
    })
}

export default mouseMove;