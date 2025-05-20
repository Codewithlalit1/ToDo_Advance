let inp = document.getElementById("task");
let list = document.getElementById("tasks");
let btn  = document.getElementById("btn");

btn.addEventListener("click",function(){
    let val = inp.value;

    let chkbox = document.createElement("input");
    chkbox.type = "checkbox";

    let label = document.createElement("label");
    label.textContent = val;

    let newElement = document.createElement("div");
    newElement.appendChild(chkbox);   
    newElement.appendChild(label);    

    chkbox.addEventListener("change",function(){
        if(chkbox.checked){
            chkbox.parentElement.remove();
        }
    })

    list.appendChild(newElement);     
});


// due date and timing addition
// notification
// Editing of tasks



