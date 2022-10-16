import main from './script/view/main.js';
import './style/style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

//home animation
$('#name').slideDown(850);
$('#description').fadeIn(3000);

//agent animation
$(".filter").click(function() {
    const attr = $(this).attr("data-li");

    $(".filter").removeClass("active");
    $(this).addClass("active");

    $("agent-item").hide();

    if (attr == "duelist") {
        $("." + attr).fadeIn(200);
    } else if (attr == "initiator") {
        $("." + attr).fadeIn(200);
    } else if (attr == "sentinel") {
        $("." + attr).fadeIn(200);
    } else if (attr == "controller") {
        $("." + attr).fadeIn(200);
    } else {
        $("agent-item").fadeIn(200);
    }
});

//main
$(document).ready(main);