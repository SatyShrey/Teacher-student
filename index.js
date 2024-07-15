





//variable declaration for the queries
var section=document.querySelector('section');
var admin=document.getElementById('Admin');
var teacher=document.getElementById('Teacher');
var student=document.getElementById('Student');


////Go to Start page
function startPage(){
    section.innerHTML=`<div class="btnDiv">
            <button class="btn" id="Admin">Admin</button>
            <button class="btn" id="Teacher">Teacher</button>
            <button class="btn" id="Student">Student</button>
           </div>`
}

//add Event Listener for all click function
document.addEventListener('click',(e)=>{
    var clas=e.target.className;
    var id=e.target.id;

    ///Admin button
    if(id==='Admin'){
        section.innerHTML='Admin<br><button class="btnHome">Home</button>';
    }

    //Teacher button
    else if(id==='Teacher'){
        section.innerHTML='Teacher<br><button class="btnHome">Home</button>';
    }

    //Student button
    else if(id==='Student'){
        section.innerHTML='Student<br><button class="btnHome">Home</button>';
    }

    //Home button
    else if(clas==='btnHome'){
        startPage();
    }
})

