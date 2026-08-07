*{
box-sizing:border-box;
font-family:Arial, sans-serif;
}


body{

margin:0;

min-height:100vh;

display:flex;

justify-content:center;

align-items:center;

background:linear-gradient(
135deg,
#d9f99d,
#86efac
);

padding:20px;

}



.container{

background:white;

width:100%;

max-width:600px;

padding:30px;

border-radius:25px;

box-shadow:0 10px 30px rgba(0,0,0,0.15);

}



h1{

text-align:center;

color:#166534;

font-size:clamp(24px,5vw,36px);

}



.intro{

text-align:center;

color:#555;

margin-bottom:25px;

}



label{

display:block;

margin-top:18px;

font-weight:bold;

color:#14532d;

}



input,select{

width:100%;

padding:12px;

margin-top:8px;

border-radius:10px;

border:2px solid #bbf7d0;

font-size:16px;

}



button{

width:100%;

margin-top:30px;

padding:15px;

border:none;

border-radius:15px;

background:#16a34a;

color:white;

font-size:18px;

font-weight:bold;

cursor:pointer;

}



button:hover{

background:#15803d;

}



#result{

margin-top:25px;

padding:20px;

border-radius:15px;

background:#f0fdf4;

font-size:18px;

text-align:center;

display:none;

color:#14532d;

}



@media(max-width:500px){

.container{

padding:20px;

border-radius:18px;

}


h1{

font-size:26px;

}


button{

font-size:16px;

}

}
