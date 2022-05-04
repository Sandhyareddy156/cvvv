function CheckFormData(){

    var message  = "";
    var message1=document.getElementById("input_name").value;
    var message2=document.getElementById("Birthday").value;
   var message3=document.getElementById("Birth Month").value;
  
   var message4=document.getElementById("Birth Year").value;
   var message5=document.getElementById( "input_Age").value;
   var message6=document.getElementById("input_email").value;
   var message7=document.getElementById("input_number").value;
   var message8=document.getElementById("input_address").value;
   var message9=document.getElementById("input_section").value;
   var message10=document.getElementById("input_rollno").value;
   var message11=document.getElementById("select_class").value;
   var message12=document.getElementById("select_class1").value;
   // var message13=document.getElementById("radio_male").value;
   //var message14=document.getElementById("radio_female").value;
   var gendermale=document.getElementById("radio_male");
   var genderfemale=document.getElementById("radio_female");
   // var message18=document.getElementById("textarea1").value;
   var schoolbus=document.getElementById("checkbox_bus");
   var collegebus=document.getElementById("checkbox_bus1");
   var hostalfacility=document.getElementById("checkbox_bus2");
   var textarea1=document.getElementById("textarea1").value;

   
   var gender = "";
   if(gendermale.checked){
     gender = "male"
   }
   if(genderfemale.checked){
     gender = "female"
   }

   var checkbox = ""
                    if(schoolbus.checked){
                      checkbox += " schoolbus "
                    }if(collegebus.checked){
                      checkbox += " college bus "
                    }if(hostalfacility.checked){
                      checkbox += " hostal facility "
                    }


   message="Full name :" +message1 +"<br>";
   message+="Date of Birth :"+message2+"<br>";

//    message+="tbirthday"+"<br>";
   message="Date of Birth :"+message3+"<br>";
//    message+="tbirthmonth"+"<br>";
//    message+="tbirthyear"+"<br>";
   message+="Dat of Birth :"+message4+"<br>";
   message+="Age :" +message5+"<br>";
   message+="Email :" +message6+"<br>";
   message+="Mobile Number :" +message7+"<br>";
   message+="Address :" +message8+"<br>";
   message+="Section :" +message9+"<br>";
   message+="Roll no :" +message10+"<br>";
   message+="Applying for :"+message11+"<br>";
   message12+="Applying for :"+message12+"<br>";
   message+="gender :"+gender+"</br>"
   // var gender =document.getElementById('radio_male').checked;
   
   // var gender =document.getElemenById('radio_female').checked;
   message+="special needs: "+checkbox+"<br>";
   message+="comments: "+textarea1+"<br>";
    
   document.getElementById("tmessage").innerHTML=message;

}