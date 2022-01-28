var timeId;
let list_box=document.getElementById("search-items");

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

function debounce(func,delay) {
    
    if(timeId){
        clearInterval(timeId);
    }

    timeId=setTimeout(()=>{
        func();
    },delay)
}

async function main(){
    let name=document.getElementById("in").value;
    if(name.length>0){
        
        let res=await search(name);
        let data=res.Search;
        listAppend(data);
    }else{
        list_box.style.visibility="hidden";
    }

}

async function search(name){
    try{
        let res = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=4b125d6`);
        let data=await res.json();
        return data;
    }catch(e){
        console.log("Error: " + e)
    }
}

function listAppend(data){
    list_box.style.visibility="visible";
    list_box.innerHTML=null;
    data.forEach(a=>{
        let list=document.createElement("li");
        list.textContent =a.Title;
        list_box.append(list)
    })

}

