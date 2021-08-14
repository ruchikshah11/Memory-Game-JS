 
var a =[];



function validateForm(){
    var data=document.getElementById("game").value;

    if(data==""||data==null){
        document.getElementById('Err0').style.visibility="visible";
        document.getElementById('Err0').innerHTML="<b>Memory Game Must Not Be Blank!!!</b>"; 
    }

    var addrow=document.getElementById('myTable');
        var newrow=addrow.insertRow();
    for(var value in data){
        //console.log(data[value]);
        var cel1=newrow.insertCell();
        cel1.innerHTML='<input type="button" value="'+data[value]+'" onclick="getdata(this)" class="btn btn-info"/>'; 
    }
    
    alert("Press Any Key JS BOT Will Remember It!!!");
    return false
}
function getdata(d){



   selectedRow=null;
    selectedRow=d.value;
   
        if(!a.includes(selectedRow)){
            for(i=0;i<selectedRow.length;i++){
               a.push(selectedRow);
                return false;
            }
           
    }else{
        console.log("Exist");
        document.write("YOUR SELECTED VALUES ARE STORE BY JS BOT THEY ARE AS FOLLOW <br>")
        for(i=0;i<a.length;i++){
            // document.getElementById("string").innerHTML="String:"+a[i];
            document.write( a[i] +",");
          
        }
       document.write("\n Score=>"+a.length);
       
    }
  resetForm();
    return false;
  }
  
function resetForm(){
    document.getElementById("game").value = "";
}




