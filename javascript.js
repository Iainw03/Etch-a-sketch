function CreateDiv(divs){
    const container = document.querySelector("#container");
for(let i = 0;i<divs;i++){
const content = document.createElement("div");
content.classList.add("grid");
container.appendChild(content);

for(let i=0;i<16;i++){
const row = document.createElement("div");
row.classList.add("rows");
content.appendChild(row);
}
}

}

CreateDiv(16);


