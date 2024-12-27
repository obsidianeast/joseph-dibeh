setTimeout(() => {
    document.getElementById('UserJoseph').classList.add("userJoseph-anim");
    document.getElementById('UserOlivia').classList.add("userOlivia-anim");
    document.getElementById('UserLana').classList.add("userLana-anim");
   document.getElementById('sel').classList.add("selection-anim");

}, 10000);

setTimeout(() => {
    document.getElementById('UserJoseph').style.display = "none";
    document.getElementById('UserOlivia').style.display = "none";
    document.getElementById('UserLana').style.display = "none";
    document.getElementById('sel').style.display = "none";
}, 16000);


 

function openMenu(){
    x = document.getElementById('normal');
    y = document.getElementById('clicked');
    backgroundMenu = document.getElementById('menu-background'); 
    menu = document.getElementById('menu');

    if(x.style.display == "block"){
    
    backgroundMenu.style.background = "var(--sys-light-selection, rgba(7, 98, 200, 0.16))";
    
    menu.style.display = "flex";
        // setTimeout(() => {
            x.style.display = "none";
            y.style.display = "block";
            
            menu.style.opacity = 1;
        // }, 50); 
    
    
} else {
    
    
    backgroundMenu.style.background = "var(--sys-light-surface-variant, #FFF)";
    menu.style.opacity = 0;
    setTimeout(() => {
        x.style.display = "block";
        y.style.display = "none";
        menu.style.display = "none";
    }, 50);
}
}



function change(value){
    ds = document.getElementById("DesignSystem");
    ft = document.getElementById("features");
    def = document.getElementById("def");
    ds1 = document.getElementById("DesignSystem-info");
    ft1 = document.getElementById("Features-info");
    //Features
    if (value == 1){
    ds.style.color = "#2A2B2D";
    ft.style.color = "#EFF0F0";
    def.style.left = "74%";
    ds1.style.display = "none";
    ft1.style.display = "block";
    ft.style.fontWeight = "700";
    ds.style.fontWeight = "400";
    
    } //Design Systems
    else if(value == 0) {
        ds.style.color = "#EFF0F0";
    ft.style.color = "#2A2B2D";
    def.style.left = "26%";
    ds1.style.display = "block";
    ft1.style.display = "none";
    ft.style.fontWeight = "400";
    ds.style.fontWeight = "700";
    }
}



window.addEventListener('load', function() {
    var infoContainer = document.querySelector('.info-container');
    var headerHeight = document.querySelector('header').offsetHeight;

    window.addEventListener('scroll', function() {
        var containerTop = infoContainer.getBoundingClientRect().top;

        if (containerTop <= headerHeight) {
            infoContainer.classList.add('sticky');
        } else {
            infoContainer.classList.remove('sticky');
        }
    });
});




