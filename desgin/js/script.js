let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}

var sliders = document.getElementsByClassName("round-slider");
console.log("Sliders:", sliders);
for (let i = 0; i < sliders.length; i++) {
	sliders[i].addEventListener("click", round_slider_tune, false);
	sliders[i].addEventListener("mousedown", function(event) {
		sliders[i].onmousemove = function(event) {
			if (event.buttons == 1 || event.buttons == 3) {
				round_slider_tune(event);
			}
		}
	});
}

$(function(){
    var $select = $("#age-range");
    for (i=18;i<=60;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
    
    $("#age-range").change(function(){
        var val = parseInt($("#age-range").val());
        $("#second").html("");
        for(i=val+1; i<=60; i++) {
        	$("#second").append("<option value='" + i + "'>"+i+"</option>");
        }
    });
});
$(function(){
    var $select = $("#age-range");
    for (i=18;i<=60;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
    
    $("#age-range").change(function(){
        var val = parseInt($("#age-range").val());
        $("#second").html("");
        for(i=val+1; i<=60; i++) {
        	$("#second").append("<option value='" + i + "'>"+i+"</option>");
        }
    });
});
document.querySelector('.home-grid.box-container.box.btn').addEventListener('click', (evt) => {
   evt.target.classList.add('loading')
 
   setTimeout(() => {
     evt.target.classList.remove('loading')
   }, 3000);
 })