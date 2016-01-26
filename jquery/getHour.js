function nightMode(){

    var date = new Date();
    var Hour = date.getHours();

    console.log(Hour);

    if (Hour >= 20)
    {

        document.body.style.backgroundColor='#000';

    }
    else if(Hour <= 6)
    {

        document.body.style.backgroundColor='#000';

    }
    else
    {

        document.body.style.backgroundColor='#FFF';

    }


}