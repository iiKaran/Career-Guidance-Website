
const self = document.querySelector(".self-emp-btn");
const job = document.querySelector(".job-btn");
const move = document.querySelector(".mov-btn");
const jobcont = document.querySelector("#job-cont");
const selfcont = document.querySelector("#self-emp-cont");

console.log(self, job);
self.addEventListener("click", () => {
  console.log("done");
  move.classList.add("moveright");
  move.innerHTML = "Being Self Employed";
  console.log(selfcont);
  selfcont.classList.add("self-emp");
  jobcont.classList.remove("job");
});
job.addEventListener("click", () => {
  console.log("done 2");
  move.classList.remove("moveright");
  move.innerHTML = "Best Paying Jobs ";
  selfcont.classList.remove("self-emp");
  jobcont.classList.add("job");
});
burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightnav = document.querySelector('.right-nav-btn');

burger.addEventListener('click' , ()=> {
  navList.classList.toggle('v-class');
  rightnav.classList.toggle('v-class');
  navbar.classList.toggle('h-nav');
});

const swiper = new Swiper('.swiper', {
      autoplay : {
       delay: 3000,
       displayOnInterction: false,
      },
      
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});
// const sigup = document.getElementsBy
