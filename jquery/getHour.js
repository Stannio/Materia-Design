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

        document.body.style.backgroundColor='#e9eaed';

    }
}


function Egg(){

    tekst = "Jou moeder is lelijk";

    document.getElementById('lol').innerHTML = "Dummybutton";
    document.getElementById('lol2').innerHTML = "Dummybutton";
    document.getElementById('lol3').innerHTML = "Dummybutton";
    document.getElementById('lol4').innerHTML = "Dummybutton";


}
