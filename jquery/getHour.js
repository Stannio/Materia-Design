function nightMode(){

    var date = new Date();
    var Hour = date.getHours();

    console.log(Hour);

    if (Hour >= 20)
    {

        document.body.style.backgroundColor='#000d1a';

    }
    else if(Hour <= 6)
    {

        document.body.style.backgroundColor='#000d1a';

    }
    else
    {

        document.body.style.backgroundColor='#FFF';

    }
}


function Egg(){

    tekst = "Jou moeder is lelijk";

    document.getElementById('lol').innerHTML = "Jou moeder is lelijk";
    document.getElementById('lol2').innerHTML = "Jou moeder is lelijk";
    document.getElementById('lol3').innerHTML = "Jou moeder is lelijk";
    document.getElementById('lol4').innerHTML = "Jou moeder is lelijk";


}
