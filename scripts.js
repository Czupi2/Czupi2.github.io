let currentPhoto=0;
let image_text="";
let photo_directory="./elemek/";
let pictures_data=[
    {photo:"20090530_145522MiramareKastely.jpg",title:"Miramare Kastély",description:"Ez a kis kastély kedvence pihenő helye volt Sziszinek és ezért a magyar turisták is gyakran látogatják Olaszországi útjaik során."},
    {photo:"20090530_211434Monselice.jpg",title:"Monselice",description:"szöveg2"},
    {photo:"20090531_131020FirenzeUffizi.jpg",title:"Firenze Uffici képtár",description:"szöveg3"},
    {photo:"20090531_140544FirenzePitti.jpg",title:"Firenze Pitti ",description:"szöveg4"},
    {photo:"20090531_143828FirenzeUffizi.jpg",title:"Firenze Uffici képtár",description:"szöveg5"},
    {photo:"20090531_154650FirenzeKatedralisEsHarangTorony.jpg",title:"Firenzei katedrális a harangtoronnyal",description:"szöveg6"},
    {photo:"20090601_114756RomaForumRomanum.jpg",title:"Róma Forum Romanum",description:"szöveg7"},
    {photo:"20090601_115930RomaRomulusEsRemus.jpg",title:"Róma Romulus és Remus közös szobra",description:"szöveg8"},
    {photo:"20090601_123440RomaPantheon.jpg",title:"Róma Pantheon",description:"szöveg9"},
    {photo:"20090601_130930RomaAngyalvar.jpg",title:"Róma Angyalvár",description:"szöveg10"},
    {photo:"20090601_131948VatikanSzentPeterBazilika.jpg",title:"Vatikán Szent Péter Bazilika",description:"szöveg11"},
];
let max_picture_number=pictures_data.length;

function main_picture_draw(picture_target) {
     $(".main_picture").attr('src',photo_directory+picture_target);
};
set_the_things;
pictures_data.forEach((pict,index) => {
    image_text='<div class="thumb_nails"><img src="'+photo_directory+pict.photo+'" data-index="'+index+'" alt="'+pict.title+'" class="thumb_pictures"></img>';
    image_text=image_text+'<p class="title">'+pict.title+'</p><div>';
    $("container").append(image_text);
    if (index===currentPhoto) {
        $('.thumb_pictures[data-index="'+index+'"]').css('background-color','black');
    } else {
        $('.thumb_pictures[data-index="'+index+'"]').css('background-color','beige');
    };
});



$("container").on('click','.thumb_pictures', function(event) {
    $('.thumb_pictures[data-index="'+currentPhoto+'"]').css('background-color','beige');
    currentPhoto=$(event.target).attr('data-index');
    set_the_things();                    
});

function set_the_things() {
    if (currentPhoto<0) {currentPhoto=max_picture_number-1} else 
        if (currentPhoto>=max_picture_number) {currentPhoto=0};
    main_picture_draw(pictures_data[currentPhoto].photo);
    $(".title_text").text(pictures_data[currentPhoto].title);
    $(".description_text").text(pictures_data[currentPhoto].description);
    $('.thumb_pictures[data-index="'+currentPhoto+'"]').css('background-color','black');
};
$("#left_arrow").click(() => {
    $('.thumb_pictures[data-index="'+currentPhoto+'"]').css('background-color','beige');
    currentPhoto--;
    set_the_things();
});
$("#right_arrow").click(() => {
    $('.thumb_pictures[data-index="'+currentPhoto+'"]').css('background-color','beige');
    currentPhoto++;
    set_the_things();
});