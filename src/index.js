//import defaultMember from "./script.js";
import './styles/style.css';
import './styles/style.scss';

//defaultMember();

const categories = document.querySelectorAll(".drinks__list>li");

categories.forEach(
    function(e){
        e.addEventListener("click",function(ev){
            categories.forEach(function(el){
                el.className="drinks__list__drink";
            });
            e.className="drinks__list__drink--active";
        });
    }
);