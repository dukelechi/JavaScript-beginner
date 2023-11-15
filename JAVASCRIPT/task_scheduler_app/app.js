document.addEventListener("DOMContentLoaded", function(){
    let form = document.forms[0];
    form.addEventListener("submit", submitForm);
    function submitForm(e){
        e.preventDefault();
        let title = e.target[0].value;
        let desc = e.target[1].value;
        let cat = e.target[2].value;
        let date = e.target[3].value;

        document.querySelectorAll(".error_message").forEach((elem)=>{elem.remove()});

        if(title.trim() ===""){
            let node = document.createElement("span");
            node.textContent = "field must be specified";
            node.className ="error_message";
            e.target[0].insertAdjacentElement("afterend", node);
        }

        if(desc.trim() ===""){
            let node = document.createElement("span");
            node.textContent = "field must be specified";
            node.className ="error_message";
            e.target[1].insertAdjacentElement("afterend", node);
        }

        if(cat.trim() ===""){
            let node = document.createElement("span");
            node.textContent = "field must be specified";
            node.className ="error_message";
            e.target[2].insertAdjacentElement("afterend", node);
        }

        if(date.trim() ===""){
            let node = document.createElement("span");
            node.textContent = "field must be specified";
            node.className ="error_message";
            e.target[3].insertAdjacentElement("afterend", node);
        }



        let taskTab = document.getElementById("task-tab");
        let element = document.createElement("div");
        element.className = "task";
        element.innerHTML = `<h1>${title}</h1>
                             <p>${desc}</p>
                             <i>${cat}</i>
                             <center>${date}</center>`
    let done = document.createElement("button");
    let close = document.createElement("button");
    done.textContent = "undone";
    done.className = "done";
    done.onclick = (e) =>{e.target.textContent = "done"};
    element.insertAdjacentElement("beforeend", done);
    close.innerHTML = "&times;";
    close.className = "close";
    close.onclick = (e)=>{
        e.target.parentElement.remove();
    }
    element.insertAdjacentElement("beforeend", close);
    taskTab.insertAdjacentElement("afterbegin", element);


        console.log(date);
    }
})


            