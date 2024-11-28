

const inp=document.getElementById("inp")
const btn=document.getElementById("submit")
let container =document.querySelector(".tasks")
let arr=[]

if(localStorage.getItem("tasks")){

arr=json.parse(localStorage.getItem("tasks"))
 
}
btn.addEventListener("click",()=>{
    
    let ob={
        title:inp.value,
        id:Date.now()
    }
    arr.push(ob)
    addtoloc(arr)
    add()
    
inp.value=""
console.log(arr)
    

    
    

    
})
function add (){
    arr.map((x)=>{
        let divv =document.createElement("div")
        let text =document.createTextNode(x.title)
        divv.className="divv";
        divv.setAttribute("id-data",x.id)
      
        divv.appendChild(text)
        container.appendChild(divv)
        let span=document.createElement("span")
        let tex=document.createTextNode("x")
        span.className="span"
        span.appendChild(tex)
        divv.appendChild(span)
        
        
        
        
    
    
    }

    )
   
}
function addtoloc(tasks){
    localStorage.setItem("task",JSON.stringify(tasks))
}
function dele(id){
   arr.filter((x)=>x.id!==id)
  addtoloc(arr.filter((x)=>x.id!==id)
  )
  
}
container.addEventListener("click",(e)=>{
    if(e.target.classList.contains("span")){
        e.target.parentElement.remove()
        dele(e.target.parentElement.getAttribute("id-data"))
        
    }else{
        console.log("tr")
    }
})