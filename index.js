/**
 * 
 */

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
     
     
     ajaxObject.open("get","https://restcountries.eu/rest/v2/all",true); 
     ajaxObject.setRequestHeader("Content-Type","application/x-www-form-urlencoded;"); 
     /*ajaxObject.setRequestHeader("Access-Control-Allow-Origin", "*");     
     ajaxObject.setRequestHeader("Access-Control-Allow-Methods", 
    		 "GET,HEAD,OPTIONS,POST,PUT");
     ajaxObject.setRequestHeader("Access-Control-Allow-Headers", 
    		 "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");*/
     ajaxObject.send(null);
     ajaxObject.onreadystatechange=function()
     {
    	 if((ajaxObject.readyState==4)&&(ajaxObject.status==200))
    		 {
    		    data= JSON.parse(ajaxObject.responseText);
    		    for(var pos in data)
    		    	{
    		    	  
    		    	  for(var inner in data[pos])
    		    		  {
    		    		    if(inner==="currencies")
    		    		    	{
    		    		         //console.log(data[pos][inner]);
    		    		         for(var innermost in data[pos][inner])
    		    		        	 {
    		    		        	  console.log(innermost);
    		    		        	   
    		    		        	  for(var value in data[pos][inner][innermost])
    		    		        		  {
    		    		        		   if(value==='name')
    		    		        		     console.log(data[pos][inner][innermost][value]);
    		    		        		  }
    		    		        	  
    		    		        	 }
    		    		    	}
    		    		  }
    		    	}
    		    
    		 }
     
    		 }
     
	
		})
		
		
		