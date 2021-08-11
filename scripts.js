let currentPhoto=0;
let current_thumb_color='grey';
let background_color='beige';
let image_text="";
let photo_directory="./elemek/";
let pictures_data=[
    {photo:"20090530_145522MiramareKastely.jpg",title:"Miramare Kastély",description:"Ez a kis kastély kedvence pihenő helye volt Sziszinek és ezért a magyar turisták is gyakran látogatják Olaszországi útjaik során. A parti köveken a vízi madarak vannak előnyben."},
    {photo:"20090530_211434Monselice.jpg",title:"Monselice",description:"Kellemes kisváros Velencéhez közel, ahol zarándokhely is található."},
    {photo:"20090531_131020FirenzeUffizi.jpg",title:"Firenze: Uffici képtár",description:"Firenzében található az Uffici Képtár. A bejutáshoz hosszú sorokat kell végigállnia a kiváncsi turistának."},
    {photo:"20090531_140544FirenzePitti.jpg",title:"Firenze: Pitti ",description:"A Pitti-palota olasz reneszánsz műemlék Firenze történelmi központjában, mely 1982 óta az UNESCO világörökség része."},
    {photo:"20090531_143828FirenzeUffizi.jpg",title:"Firenze: Uffici képtár2",description:"Az Uffizi Képtárat 1581-ben alapították Firenze történelmi központjában. Az első gyűjteményeket a Mediciek bőkezű mecenatúrája hozta létre."},
    {photo:"20090531_154650FirenzeKatedralisEsHarangTorony.jpg",title:"Firenzei katedrális a harangtoronnyal",description:"A firenzei dóm elég érdekes neogót homlokzattal rendelkezik, amelynek mintáját a torony is átvette."},
    {photo:"20090601_114756RomaForumRomanum.jpg",title:"Róma: Forum Romanum",description:"A Forum Romanumnál ókori régészeti maradványokat láthatunk."},
    {photo:"20090601_115930RomaRomulusEsRemus.jpg",title:"Róma: Romulus és Remus szobra",description:"Rómában központi helyen áll a hagyomány szerinti városalapítók szobra. A történet igazságáról alatta mindenki elmélázhat."},
    {photo:"20090601_123440RomaPantheon.jpg",title:"Róma: Pantheon",description:"A Pantheonba nem csak az antik világ nagy embereit temették, hanem a XX. század olasz szocialistáit is megtalálhatjuk."},
    {photo:"20090601_130930RomaAngyalvar.jpg",title:"Róma: Angyalvár",description:"A valamikori pápai fellegvár, ma már múzeumként szolgál Rómában."},
    {photo:"20090601_131948VatikanSzentPeterBazilika.jpg",title:"Vatikán: Szent Péter Bazilika",description:"A katolikus egyház központja, a Pápa székhelye egyben a legmagasabb egyházi épület a világon."},
];
let max_picture_number=pictures_data.length;

function main_picture_draw(picture_target) {
     $(".main_picture").attr('src',photo_directory+picture_target);
};
set_the_things();
pictures_data.forEach((pict,index) => {
    image_text='<div class="thumb_nails"><img src="'+photo_directory+pict.photo+'" data-index="'+index+'" alt="'+pict.title+'" class="thumb_pictures"></img>';
    image_text=image_text+'<p class="title">'+pict.title+'</p><div>';
    $("container").append(image_text);
    if (index===currentPhoto) {
        $('.thumb_pictures[data-index="'+index+'"]').css('background-color',current_thumb_color);
    } else {
        $('.thumb_pictures[data-index="'+index+'"]').css('background-color',background_color);
    };
});



$("container").on('click','.thumb_pictures', function(event) {
    $('.thumb_pictures[data-index="'+currentPhoto+'"]').css('background-color',background_color);
    currentPhoto=$(event.target).attr('data-index');
    set_the_things();                    
});

function set_the_things() {
    if (currentPhoto<0) {currentPhoto=max_picture_number-1} else 
        if (currentPhoto>=max_picture_number) {currentPhoto=0};
    main_picture_draw(pictures_data[currentPhoto].photo);
    $(".title_text").text(pictures_data[currentPhoto].title);
    $(".description_text").text(pictures_data[currentPhoto].description);
    $('.thumb_pictures[data-index="'+currentPhoto+'"]').css('background-color',current_thumb_color);
};
$("#left_arrow").click(() => {
    $('.thumb_pictures[data-index="'+currentPhoto+'"]').css('background-color',background_color);
    currentPhoto--;
    set_the_things();
});
$("#right_arrow").click(() => {
    $('.thumb_pictures[data-index="'+currentPhoto+'"]').css('background-color',background_color);
    currentPhoto++;
    set_the_things();
});