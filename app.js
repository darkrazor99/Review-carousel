// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
// select items
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("info");
const img = document.getElementById("person-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randBtn = document.querySelector(".random-btn");
let position;
addEventListener("DOMContentLoaded", (e) => {
  const person = {
    id: 5,
    name: author.textContent,
    job: job.textContent,
    img: img.getAttribute("src"),
    text: text.textContent,
  }
  reviews.push(person);
  position = 4;
});

prevBtn.addEventListener("click", (e) => {
  position--;
  if (position === -1)
    position = reviews.length - 1;
  author.textContent = reviews[position].name;
  job.textContent = reviews[position].job;
  img.setAttribute("src", reviews[position].img);
  text.textContent = reviews[position].text;
});

nextBtn.addEventListener("click", (e) => {
  position++;
  if (position === reviews.length)
    position = 0;
  author.textContent = reviews[position].name;
  job.textContent = reviews[position].job;
  img.setAttribute("src", reviews[position].img);
  text.textContent = reviews[position].text;
});

randBtn.addEventListener("click", (e) => {
  const position = Math.floor(Math.random() * (reviews.length - 1));
  author.textContent = reviews[position].name;
  job.textContent = reviews[position].job;
  img.setAttribute("src", reviews[position].img);
  text.textContent = reviews[position].text;
});



