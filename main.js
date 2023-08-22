// // local storage
// console.log(localStorage)
// console.log(typeof localStorage)
// localStorage.setItem("color","red")
// localStorage.setItem("color2","red")
// localStorage.getItem("color")
// localStorage.key(0)
// localStorage.length
// localStorage.removeItem("color2")
// localStorage.clear()
// session storge is the same attributes

// making tasks local storge assignment
let txt =document.getElementById("txt");
let summit = document.getElementById("send");
let resaultsDiv = document.getElementById("tasks");
let deleteAllTasks = document.getElementById("clear")

summit.addEventListener("click",function(e){
    // stop if empty 
    if(txt.value === ""){
      return
    }
    // add text to task and make delete task
    let deleteTask = document.createElement("button");
    deleteTask.textContent = "remove task"
    deleteTask.className = "deleteTask"
    let p = document.createElement("p");
    p.textContent = txt.value;
    resaultsDiv.append(p)

    // add task to local storge
    Object.values(resaultsDiv.children).forEach(function(curr , index){
        if(curr.className.includes("deleteTask")){
            console.log("ok")
            return
        }
        localStorage.setItem(index,curr.textContent)
    })
    
        // delete task function
    deleteTask.addEventListener("click",function(){
        p.style.display = "none";
        deleteTask.style.display ="none";
    })
    txt.value = "";
});
// clear all
deleteAllTasks.onclick = function(){
    resaultsDiv.innerHTML = ""
    localStorage.clear()
}
// send tasks from localStorge to div
window.onload = function(){
    for(let i =0;i<localStorage.length;i++){
        let tryO = localStorage.getItem(i);
        let p =document.createElement("p");
        p.append(tryO)
        resaultsDiv.append(p)
    }
    console.log(localStorage.length)
}
// [1] send text to div
// [2] send text to local storge
// [3] get text from loacal storge to p in div
// [4] add delete button in every p 

