function getword(){
    var a=document.getElementById("num").value;
    if ((a>=85)&&(a<=100)) 
        alert("A");
    else if((a>=70)&&(a<=84))
        alert("B");
    else if((a>=50)&&(a<=69))
        alert("C");
    else if((a>=40)&&(a<=49))
        alert("D");
    else if ((a>=0)&&(a<=39))
        alert("E");
    else    
        alert("nilai tidak valid.");
}
