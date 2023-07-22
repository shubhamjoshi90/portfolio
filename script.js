//togle icon nacbar

let menuicon = document.querySelector('#manu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}




//scroll section

let section = document.querySelectorAll('section');
let navlinks = document.querySelector('header nav a');

window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset  = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*' + id + ']').classList.add('active');
            })
        }
    })
}


//scrol section

window.onscroll = () => {
    //stiky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


menuicon.classList.remove('bx-x');
navbar.classList.remove('active');
}