function CreateDiv(divs){
    
    const container = document.querySelector("#container");
for(let i = 0;i<divs;i++){
const content = document.createElement("div");
content.classList.add("grid");
content.style.height = (100 / divs) + "%";
container.appendChild(content);

for(let j=0;j<divs;j++){
const row = document.createElement("div");
row.classList.add("rows");
row.style.width = (100 / divs) + "%";
content.appendChild(row);

}
}

}


function addMouseover(){
    const grids = document.querySelectorAll(".rows");
grids.forEach(grid => {
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor="black";
    });
});
}


CreateDiv(18);

addMouseover();



const btn = document.querySelector("#gridbutton");

    btn.addEventListener("click", () =>{
        container.innerHTML = " ";
        let divs = prompt("Choose a grid size(number between 1 and 100)");

        if(divs>100){
            CreateDiv(100);
            addMouseover();
        }
        else{
        CreateDiv(divs);
        addMouseover();
        }

        const grids = document.querySelectorAll(".rows");


    });
    //parentNode.removeChild(child)

  




