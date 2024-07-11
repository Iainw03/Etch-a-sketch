function CreateDiv(divs){
    const container = document.querySelector("#container");
for(let i = 0;i<divs;i++){
const content = document.createElement("div");
content.classList.add("grid");
container.appendChild(content);

for(let j=0;j<16;j++){
const row = document.createElement("div");
row.classList.add("rows");
content.appendChild(row);
}
}

}

CreateDiv(16);

const grids = document.querySelectorAll(".rows");
grids.forEach(grid => {
    grid.addEventListener("mouseover", () => {
        grid.setAttribute("style", "background-color: black;");
    });
});




