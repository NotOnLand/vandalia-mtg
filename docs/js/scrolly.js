/*jshint esversion: 6 */

let sections = document.querySelectorAll('#factions section');
let navLinks = document.querySelectorAll('#faction-buttons a');
window.onscroll = () => {
  //console.log(sections);
  //console.log(navLinks);
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('#faction-buttons a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};
