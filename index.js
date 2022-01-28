
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data=>showData(data))
    .catch(e=>console.log(e));

let container=document.getElementById("container");

function showData(data) {
    console.log(data);
    data.forEach(a=>{
        let div=document.createElement("div");
        div.className="box";
        let image=document.createElement("img");
        image.className="box-image";
        let title=document.createElement("p");
        title.className="box-p"
        image.src=a.image;
        title.textContent=a.title;
        div.append(image,title);
        container.append(div);
    })
}