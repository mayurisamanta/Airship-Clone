import { navbar1 , navbar2 } from "../Components/navbar.js";

document.querySelector("#navbar1").innerHTML=navbar1();
document.querySelector("#navbar2").innerHTML=navbar2();


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
import{myFunction,myFunction1} from "../Components/fetch.js";

document.querySelector("#quemark").addEventListener("click" , myFunction1);

document.querySelector("#profile").addEventListener("click" , myFunction);

let clientProjectData = JSON.parse(localStorage.getItem("projectData"));

console.log(clientProjectData);

let byDefault = [

    {
        projectName : "1st Flight",
        icon : "https://s3.amazonaws.com/com.urbanairship.appicons/YpFwh7-pT8yy-pgBt44YTQ/icon.PNG?1658472879.43763",
        type : "DEMO"
    },
    {
        projectName : "Dell Flight",
        icon : "https://s3.amazonaws.com/com.urbanairship.appicons/YpFwh7-pT8yy-pgBt44YTQ/icon.PNG?1658472879.43763",
        type : "Test"
    },
    {
        projectName : "Airasia Flight",
        icon : "https://s3.amazonaws.com/com.urbanairship.appicons/YpFwh7-pT8yy-pgBt44YTQ/icon.PNG?1658472879.43763",
        type : "Live"
    }
]
let abc =0;
if(abc==0){
    for(let i=0;i<byDefault.length;i++){
        clientProjectData.push(byDefault[i]);
    }
    
    abc++;
}

let clientData = (data)=>{
    document.querySelector("#container").innerHTML="";
    data.forEach((ele)=>{
        let div = document.createElement("div");
        div.setAttribute("class","cards");

        let img = document.createElement("img");
        img.src=ele.icon;
        img.setAttribute("class","default");

        let title = document.createElement("h2");
        title.innerText=ele.projectName;
        title.setAttribute("class","title");

        let type = document.createElement("p");
        type.innerText=ele.type;
        type.setAttribute("class","type , type1");
        // type.setAttribute("class","");
        let con = document.createElement("p");
        con.innerText="NOT CONFIGURED";
        con.setAttribute("class","type, type2");

        div.append(img,title,type,con);

        document.querySelector("#container").append(div);
    })
}

clientData(clientProjectData);

let count=0;
let sortByName = ()=>{
    if(count==0){
        clientProjectData = clientProjectData.sort((c,d)=>{
            if(c.projectName < d.projectName) return -1;
            if(c.projectName > d.projectName) return 1;
            return 0;
        })
        console.log(clientProjectData,count);
        
        clientData(clientProjectData);
       
        count++;
    }else if(count==1){
        clientProjectData = clientProjectData.sort((a,b)=>{
            if(a.projectName > b.projectName) return -1;
            if(a.projectName < b.projectName) return 1;
            return 0;
        });
        console.log(clientProjectData,count);
    
      
        clientData(clientProjectData);
       
        count=0;
    }
    //console.log("sort data by name");
    cancelButton();
}
document.querySelector("#sortByName").addEventListener("click", sortByName);

let searchDebunnce;
document.querySelector("#sortByDate").addEventListener("click",()=>{
    clientData(data); 
    cancelButton();
})
document.querySelector("#filterByTest").addEventListener("click",()=>{
    let data = clientProjectData.filter((ele)=>{
        return ele.type === "Test";
    })
    //console.log(data);
    clientData(data); 
    cancelButton();
})
document.querySelector("#filterByLive").addEventListener("click",()=>{
    let data = clientProjectData.filter((ele)=>{
        return ele.type === "Live";
    })
    //console.log(data);
    clientData(data); 
    cancelButton();
})

let cancelButton = (()=>{
    document.querySelector("#appendbtn").innerHTML="";
    let btn = document.createElement("button");
    btn.innerText = "Cancel all";
    btn.setAttribute("id","cancel");
    btn.addEventListener("click" ,()=>{
        clientData(clientProjectData);
        document.querySelector("#appendbtn").innerHTML="";
    })
    let b = document.querySelector("#appendbtn");
    b.append(btn);
})




let searchData = ()=>{
    cancelButton();
    console.log("hellooo")
    let query = document.querySelector("#searchBar").value;
    console.log(query);
    let data = clientProjectData.filter((ele)=>{
        return ele.projectName === query;
    })
    // console.log(data);
    clientData(data); 
    cancelButton();
}


document.querySelector("#searchBar").addEventListener("search",searchData);
// function timeOut(func,delay){
//     console.log("hi...")
//     if(searchDebunnce){
//         clearTimeout(searchDebunnce);
//     }
//     searchDebunnce = setTimeout(function(){
//         func;
//     },delay);
// }