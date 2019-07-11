var slideIndex=0;
var menuShow=false;
var position=0;
var btnMenu=document.querySelector(".btn-menu");
var EventDay=document.querySelector(".day");
var DaySchedule=document.querySelector(".day-schedule");
var slides=document.getElementsByClassName("slides");
var timer = setTimeout(nextSlide, 7500);

window.onload=function(){
    document.querySelector(".btn-menu").addEventListener("click", sideMenu);
    var button=document.getElementsByClassName("button");
    for(var i=0; i<button.length; i++){
        button[i].addEventListener("click", buttonSlideChange.bind(null,i));
    }
    document.querySelector(".left-arrow").addEventListener("click", previousSlide);
    document.querySelector(".right-arrow").addEventListener("click", nextSlide)
    var tableData=document.getElementsByTagName("td");
    for(var i=0; i<tableData.length; i++){
        tableData[i].addEventListener("click", opacityDisappear.bind(null, i));
    }
}

window.onscroll=function(){
    if(pageYOffset>200){
        btnMenu.classList.add("btn-menu-show");
    }
    if(pageYOffset==0){
        btnMenu.classList.remove("btn-menu-show");
        menuShow=true;
        sideMenu();
    }
    if(pageYOffset!=position){
        menuShow=true;
        sideMenu();
    }
}

function setTimer(){
    timer = setTimeout(nextSlide, 7500);
}
function buttonSlideChange(n){
    buttonIndicator(n);
    slideIndex=n;
    changeSlide();
}
function buttonIndicator(n){
    var buttons=document.getElementsByClassName("button");
    for(var i=0;i<buttons.length;i++){
        if(i==n){
            buttons[i].classList.add("btn-active");
        }
        else{
            buttons[i].classList.remove("btn-active");
        }
    }
}
function previousSlide(){
    slideIndex--;
    if (slideIndex<0){
        slideIndex=3;
    }
    buttonIndicator(slideIndex);
    changeSlide();
}
function nextSlide(){
    slideIndex++;
    if (slideIndex>3){
        slideIndex=0;
    }
    buttonIndicator(slideIndex);
    changeSlide();
}
function changeSlide(){
    for(var i=0; i<slides.length;i++){
        if(i==slideIndex){
            slides[i].classList.add("active-slide");
        }
        if(slides[i].classList.contains("active-slide") && i!=slideIndex)
        {
            slides[i].classList.remove("active-slide")
        }
        if(slides[i].classList.contains("second-slide"))
        {
            slides[i].classList.remove("second-slide")
        }
        if(slides[i].classList.contains("third-slide"))
        {
            slides[i].classList.remove("third-slide")
        }
        if(slides[i].classList.contains("forth-slide"))
        {
            slides[i].classList.remove("forth-slide")
        }
    }
    setOtherSlides();
}
function setOtherSlides(){
    if(slideIndex==0){
        slides[3].classList.add("forth-slide");
        slides[1].classList.add("second-slide");
        slides[2].classList.add("third-slide");
    }
    if(slideIndex==1){
        slides[0].classList.add("forth-slide");
        slides[2].classList.add("second-slide");
        slides[3].classList.add("third-slide");
    }
    if(slideIndex==2){
        slides[1].classList.add("forth-slide");
        slides[3].classList.add("second-slide");
        slides[0].classList.add("third-slide");
    }
    if(slideIndex==3){
        slides[2].classList.add("forth-slide");
        slides[0].classList.add("second-slide");
        slides[1].classList.add("third-slide");
    }
    clearTimeout(timer);
    setTimer();
}
function sideMenu(){
    position=pageYOffset;
    if(menuShow==false){
        document.querySelector(".side-menu").classList.add("side-menu-show");
        btnMenu.classList.add("btn-menu-x");
        menuShow=true;
    }
    else{
        document.querySelector(".side-menu").classList.remove("side-menu-show");
        btnMenu.classList.remove("btn-menu-x");
        menuShow=false;
    }
}
function SetDay(n){
    var datelist=document.getElementsByTagName("td");
    for(var i=1; i<datelist.length-1; i++){
        if(datelist[i].classList.contains("date-active")){ datelist[i].classList.remove("date-active");}
    }
    datelist[n].classList.add("date-active");
    switch(n){
        case 1: EventDay.innerHTML="Subota 1.12."; DaySchedule.innerHTML="Nema događanja";
        break;
        case 2: EventDay.innerHTML="Nedjelja 2.12."; DaySchedule.innerHTML="17:30 sati - Službeno otvaranje Adventa u parku paljenjem prve adventske svijeće<br>19:00 sati - Vatra";
        break;
        case 3: EventDay.innerHTML="Ponedjeljak 3.12."; DaySchedule.innerHTML="Nema događanja";
        break;
        case 4: EventDay.innerHTML="Utorak 4.12."; DaySchedule.innerHTML="Nema događanja";
        break;
        case 5: EventDay.innerHTML="Srijeda 5.12."; DaySchedule.innerHTML="18:00 Čišćenje čizmica";
        break;
        case 6: EventDay.innerHTML="Četvrtak 6.12."; DaySchedule.innerHTML="19:00 Aklea Neon";
        break;
        case 7: EventDay.innerHTML="Petak 7.12."; DaySchedule.innerHTML="20:00 DJ Defunckt";
        break;
        case 8: EventDay.innerHTML="Subota 8.12."; DaySchedule.innerHTML="20:00 Belfast food";
        break;
        case 9: EventDay.innerHTML="Nedjelja 9.12."; DaySchedule.innerHTML="17:00 Coca-Cola kamion<br>18:00 Koncert Zumbići<br>19:00 Paljenje svijeće<br>20:00 Fluentes ";
        break;
        case 10: EventDay.innerHTML="Ponedjeljak 10.12."; DaySchedule.innerHTML="Nema događanja";
        break;
        case 11: EventDay.innerHTML="Utorak 11.12."; DaySchedule.innerHTML="Nema događanja";
        break;
        case 12: EventDay.innerHTML="Srijeda 12.12."; DaySchedule.innerHTML="Nema događanja";
        break;
        case 13: EventDay.innerHTML="Četvrtak 13.12."; DaySchedule.innerHTML="18:30 DJ Umbo (Rođendan Slavonskog radija)";
        break;
        case 14: EventDay.innerHTML="Petak 14.12."; DaySchedule.innerHTML="20:00 Tamburaški sastav LEGE";
        break;
        case 15: EventDay.innerHTML="Subota 15.12."; DaySchedule.innerHTML="20:00 Scifidelity orchestra";
        break;
        case 16: EventDay.innerHTML="Nedjelja 16.12."; DaySchedule.innerHTML="17:00 Radionica ukrasa<br>17:00 DUHOS Band<br>18:00 Paljenje svijeće<br>20:00 Kit Karson";
        break;
        case 17: EventDay.innerHTML="Ponedjeljak 17.12."; DaySchedule.innerHTML="Nema događanja";
        break;
        case 18: EventDay.innerHTML="Utorak 18.12."; DaySchedule.innerHTML="Nema događanja";
        break;
        case 19: EventDay.innerHTML="Srijeda 19.12."; DaySchedule.innerHTML="17:00 Baranjski stol (degustacija baranjskih specijaliteta)";
        break;
        case 20: EventDay.innerHTML="Četvrtak 20.12."; DaySchedule.innerHTML="20:00 DJ Defunct";
        break;
        case 21: EventDay.innerHTML="Petak 21.12."; DaySchedule.innerHTML="20:00 Moonshine alligators";
        break;
        case 22: EventDay.innerHTML="Subota 22.12."; DaySchedule.innerHTML="19:00 Dolazak Djeda Mraza<br>20:00 Gustafi";
        break;
        case 23: EventDay.innerHTML="Nedjelja 23.12."; DaySchedule.innerHTML="18:00 Paljenje svijeće<br>18:30 Predstava za djecu<br>19:00 Zsa Zsa";
        break;
        case 24: EventDay.innerHTML="Ponedjeljak 24.12."; DaySchedule.innerHTML="19:00 Valeri&Toth - Tradicionalni Bozićni koncert<br>20.30 DJ Noisy Boy";
        break;
        case 25: EventDay.innerHTML="Utorak 25.12."; DaySchedule.innerHTML="SRETAN BOŽIĆ!";
        break;
        case 26: EventDay.innerHTML="Srijeda 26.12."; DaySchedule.innerHTML="Nema događanja";
        break;
        case 27: EventDay.innerHTML="Četvrtak 27.12."; DaySchedule.innerHTML="20:00 DJ Omer";
        break;
        case 28: EventDay.innerHTML="Petak 28.12."; DaySchedule.innerHTML="20:00 DJ Umbo + live sax";
        break;
        case 29: EventDay.innerHTML="Subota 29.12."; DaySchedule.innerHTML="20:00 Chordonbleu uz Pan";
        break;
        case 30: EventDay.innerHTML="Nedjelja 30.12."; DaySchedule.innerHTML="Nema događanja";
        break;
        case 31: EventDay.innerHTML="Ponedjeljak 31.12."; DaySchedule.innerHTML="11:00 Doček dječje Nove godine<br>20:00 Doček Nove godine - VJ laser";
        break;
    }
    setTimeout(opacityAppear, 150);
}

function opacityDisappear(n){
    EventDay.style.opacity="0";
    DaySchedule.style.opacity="0";
    setTimeout(SetDay, 150, n);
}

function opacityAppear(){
    EventDay.style.opacity="1";
    DaySchedule.style.opacity="1";
}