/**
 * 
 */

//create ajax object
window.addEventListener('load',function()
		{
	
	         var ajaxObject=null;
	         
	         try
	         {
	         ajaxObject= new XMLHttpRequest(); 
	         }
	         catch(e)
	         {
	        	 
	        	 try
	        	 {
	        		 ajaxObject=new ActiveXObject("Msxml2.XMLHTTP3.0"); 
 
	        	 }
	        	 catch(e)
	        	 {
	        		 alert("Ajax object support not available");
	        	 }
	         }
	         
	         //form reference
	         
	      document.querySelector("form").addEventListener('submit', function()
	    		  {
	    	  
	    	      //call the servlet		         
		         ajaxObject.open("post","../AddVehicleServlet",true);  
		         //read the form values
		         var regNo=document.querySelector("#registrationNo").value;
		         var maker=document.querySelector("#maker").value;
		         var chasisNo=document.querySelector("#chasisNo").value;
		         var engineNo=document.querySelector("#engineNo").value;
		         var color=document.querySelector("#color").value;
		         var dor=document.querySelector("#dor").value;
		         var fuelType=document.querySelector("#fuelType").value;
		         ajaxObject.setRequestHeader("Content-Type","application/x-www-form-urlencoded;"); 
		         //send parameters
		         ajaxObject.send("regNo="+regNo+"&maker="+maker+"&chasisNo="+chasisNo
		        		 +"&engineNo="+engineNo+"&color="+color+"&dor="+dor
		        		 +"&fuelType="+fuelType);
		         //use the ready state change event
		         ajaxObject.onreadystatechange=function()
		         {
		        	 if((ajaxObject.readyState==4)&&(ajaxObject.status==200))
		                   console.log(ajaxObject.responseText);
		         }
		         
	    	     return false;
	    	  
	    		  });   
	         
	         
	         
	         
	         
	         
	         
	         
	         
	         
	         
	         
	         
	         
	         
	         
	         
	         
	         
	         
	       
	
		});