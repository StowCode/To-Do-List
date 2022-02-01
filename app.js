/* Alert and add task Function */

document.querySelector('#push').onclick = function(){
    if (document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML
        += `
        <div class="task">
            <span contenteditable="true" id="#taskname">
                ${document.querySelector
                ('#newtask input').value}
            </span>
            <div id=button-cluster>
                <button class="deletebutton">
                    <i class="fas fa-trash"></i>
                </button>
                <button class="checkbutton">
                    <i class="fas fa-check"></i>
                </button>
            </div>
        </div>
    `;

/* deleting */

        var current_tasks = document.querySelectorAll('.deletebutton');

        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentElement.parentElement.remove();
            }
        }

/* marking task */

        var check = document.querySelectorAll(".checkbutton");

        for(var i=0; i<check.length; i++){
            check[i].onclick = function(){
                this.parentElement.parentElement.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}
