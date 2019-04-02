//import defaultMember from "./script.js";
import './styles/style.css';
import './styles/style.scss';

//defaultMember();

const drinks = document.querySelectorAll(".drinks__list>li");
const thumbnails = document.querySelectorAll(".thumbnails__thumbnail>img");
const thumbnails_titles = document.querySelectorAll(".thumbnails__thumbnail__title");

drinks.forEach(
    function(e){
        e.addEventListener("click",function(ev){
            drinks.forEach(function(el){
                el.className="drinks__list__drink";
            });
            e.className="drinks__list__drink--active";
        });
    }
);

thumbnails.forEach(
    function(e){
        e.addEventListener("click",function(ev){
            thumbnails.forEach(function(el){
                el.className="thumbnails__thumbnail__image";
            });
            e.className="thumbnails__thumbnail__image--selected";
        });
    }
);

thumbnails_titles.forEach(
    function(e){
        e.addEventListener("click",function(ev){
            thumbnails.forEach(function(el){
                el.parentNode.querySelector("img").className="thumbnails__thumbnail__image";
            });
            e.parentNode.querySelector("img").className="thumbnails__thumbnail__image--selected";
        });
    }
);