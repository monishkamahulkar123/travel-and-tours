body{margin: 0;
    background-image: url(https://i.pinimg.com/originals/96/6a/7b/966a7b0fa51a0e145aa6b2fe8cd56923.jpg);
    background-size:cover;height: 100%;}
.logo{background-color: rgb(70, 212,180);
     height: 100px; 
     position:fixed;
     top: 0;}
     content{
        position:absolute;
        width: 100%;
        height: 100vh;}
header{height:150px;}
#lo{margin-left:10px; }
h1{ text-align:center;
    font-size: 3em;}
#navbar{ z-index: 1;
    height: 50px;
    width: 100%;
    position: fixed;
    top: 100px;
    left: 0;
    background-color: rgb(33,185,197);}
a:hover{color:red ;}
.navgbar{color: rgb(255, 247, 0); margin-left: 100px;
    text-decoration: none;
    font-size: 1.5em;}
#main{display:inline;
    position: absolute;
    top: 10%; 
    left: 50%;
    height: 500px;
    width: 700px;
    background-size: cover;
    animation-name: example;
    animation-duration: 10s;
    animation-iteration-count: infinite;}
@keyframes example { 0%{background-image: url(https://media.oralhealthgroup.com/uploads/2024/10/iStock-1356510492-e1727874227825-1024x577.jpg);}
    25%{background-image: url(https://blog.therunexperience.com/blog/content/images/wordpress/2020/01/treadmill-feature-image-e1582216975620.png);}
    50%{background-image: url(https://img.freepik.com/premium-photo/man-is-lifting-barbell-with-words-back_501705-25235.jpg);}
    75%{background-image: url(https://assets.clevelandclinic.org/transform/9bd145bb-f77b-42b7-9c93-312c2a86a429/elliptical-gym-group-1411330458);}
    100%{background-image: url(https://media.oralhealthgroup.com/uploads/2024/10/iStock-1356510492-e1727874227825-1024x577.jpg);}}
#tag{color:red;
position:absolute; bottom: 0%;}
#maincon{position: absolute; top:10px; left:50px;
    width:500px;}
#other{width: 50%;
    color:lightsalmon;
    height: auto;
    position:absolute;
    top: 600px;
    left: 5%;
}
footer{
 display: flex;
 justify-content: space-evenly;
}
#joinus{width:50%;
    height:210px;
    position: absolute;
    top: 15px;
    left: 25%;
    background-color:chartreuse ;
    transition: all 2s linear ;
}
#joinus:hover{
    transform: scale(1.5,1.5);
    color: red;
}
button{
    position: fixed;
    right: 2%;
    top: 100px;
}
form{
    position:absolute;
    left:25%;
    top: 500px;width: 700px; height: 500px;
    border: solid red 10px;
}
.reg{
    color: bisque;   
}
#form{
    position: absolute;
    top: 10px;
    width: 100%;
    text-align: center;
    font-size: 1.5em; 
}