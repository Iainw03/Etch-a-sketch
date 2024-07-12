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

CreateDiv(18);

const grids = document.querySelectorAll(".rows");
grids.forEach(grid => {
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor="black";
    });
});




