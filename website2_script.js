function scrolltrigger(){
    gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
scrolltrigger();
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers: false,
        start:"top 30%",
        end: "top 0",
        scrub:2,
    }
      })
tl.to(".page1 h1",{
    x:-80,
    duration:3,
    
},"sync")
tl.to(".page1 h2",{
    x:80,
    duration:3
},"sync")
gsap.to(".page2", {
  scrollTrigger: {
      trigger: ".page2", // When page2 is reached in the scroll
      scroller: ".main",
      start: "top 100%", // Trigger when page2 enters the viewport
      end: "top 50%", // End when page2 is in the middle of the viewport
      scrub: 2, // Smooth scroll effect (optional)
      markers: false, // Optional: add markers for debugging
  },
  opacity: 1, // For example, animate the opacity of page 2
  ease: "power2.out"
});