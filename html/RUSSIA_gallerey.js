var imagesarray=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg"]
var i=0;
function header()
{
    if(i>=11)
    {
        i=0;
        document.getElementById("header").style.backgroundImage=`url(../assets/images/RUSSIA/${imagesarray[i]})`

    }
    else{
        document.getElementById("header").style.backgroundImage=`url(../assets/images/RUSSIA/${imagesarray[i]})`

    }
    i++;
    var time=setTimeout(header,2000)
        
}
function right()
{
    i++;
    if(i>imagesarray.lenght-1)
    {
        i=0;
        document.getElementById("header").style.backgroundImage=`url(../assets/images/RUSSIA/${imagesarray[i]})`

    }
    else{
        document.getElementById("header").style.backgroundImage=`url(../assets/images/RUSSIA/${imagesarray[i]})`

    }
}
function left()
{
    i--;
    if(i<0)
    {
        i=imagesarray.lenght-1;
        document.getElementById("header").style.backgroundImage=`url(../assets/images/RUSSIA/${imagesarray[i]})`

    }
    else{
        document.getElementById("header").style.backgroundImage=`url(../assets/images/RUSSIA/${imagesarray[i]})`

    }
}
// gallery code 
        var img=document.getElementsByClassName("images");
        console.log(img)
        for(i=0;i<img.length;i++)
        {
            img[i].src=`../assets/images/RUSSIA/${i}.jpg`
            img[i].style.width="20vw"
            img[i].style.height="40vh"
        }
function closeTheImage()
{
    document.getElementById("bigimage").setAttribute("style","display:none")
}
function openTheImage(img,matter,par){
    console.log(img)
    document.getElementById("bigimg").setAttribute("src",`../assets/images/RUSSIA/${img}.jpg`)
    document.getElementById("bigimage").removeAttribute("style")
    document.getElementById("matter").innerHTML=matter
    document.getElementById("par").innerHTML=par


}