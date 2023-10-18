let add = document.querySelector("button");
let li = document.querySelector("li");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
add.addEventListener("click", ()=> {
    if(input.value != ""){
        let li = document.createElement("li");
        
        console.log(input.value);
        li.innerText = input.value + " ";
        ul.appendChild(li);
        input.value = "";
        let del = document.createElement("button");
        del.classList.add(".del");
        del.classList.add(".btn-outline-*")
        del.textContent = "Delete Task";
        li.append(del);
        del.addEventListener("click",()=>{
            li.remove();
        });
    }else{
        alert("Please Enter a Task to Add!!!");
    }
});
