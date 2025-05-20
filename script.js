let inp = document.getElementById("task");
let list = document.getElementById("tasks");
let btn  = document.getElementById("btn");
let Timer = document.getElementById("time");

btn.addEventListener("click",function(){
    let val = inp.value;
    let chkbox = document.createElement("input");
    chkbox.type = "checkbox";

    let label = document.createElement("label");
    label.textContent = val;

    let newElement = document.createElement("div");
    const timeText = document.createTextNode(Timer.value+' : ');
    newElement.appendChild(chkbox);   
    newElement.appendChild(timeText);
    newElement.appendChild(label);    

    chkbox.addEventListener("change",function(){
        if(chkbox.checked){
            chkbox.parentElement.remove();
        }
    })

    list.appendChild(newElement);     
});

// Setting Notification Functionality

btn.addEventListener("click",function(){
    const taskTitle = inp.value.trim() || "ToDoList";

    timeValue = Timer.value;
    const [hours, minutes] = timeValue.split(":").map(Number);
    let t = hours*3600 + minutes*60;
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    const currTime = hour*3600+minute*60;

    let timeleft = (t-currTime)*1000;  
    if(timeleft<=0){
        alert("Select time is in past!");
        return ;
    }

    setTimeout(function(){
        showNotification();
    },timeleft);

    // this function will tell whether permission is granted or not ?
    function getNotificationPermission(){
        alert(Notification.permission);
    }

// this function will ask for permission
    function requestPermissionForNotification(){
        Notification.requestPermission().then((result) => {
            console.log("Permission : ",result);
        })
        .catch(e=>console.log("error ",e)); 
    }
// this is the function when called give you notification
    function showNotification(){
        let notificationObject = new Notification(taskTitle,{
            body : "Task InCompleted"
        });
    }
});


 

// due date and timing addition
// notification
// Editing of tasks



