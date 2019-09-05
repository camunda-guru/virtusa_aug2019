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
	     
	     //create connection
	     ajaxObject.open("get","../ViewVehicleServlet",true); 
	     ajaxObject.setRequestHeader("Content-Type","application/json"); 
	     ajaxObject.send(null);
	     
	     // receive response
	     ajaxObject.onreadystatechange=function()
         {
        	 if((ajaxObject.readyState==4)&&(ajaxObject.status==200))
        		 {
        		       //console.log(ajaxObject.responseText);
        		       
        		       data=JSON.parse(ajaxObject.responseText);        		       
        		       
        		       var tableRef=document.querySelector("table");
        		       row=document.createElement("tr");
        		       
        		       for(var innerpos in data[0])
        		    	   {
        		    	   console.log(innerpos)
        		    	   col=document.createElement("th");
  		    	    	    
   	    	    		textNode=document.createTextNode(innerpos.toUpperCase());  
  		    	    	    col.appendChild(textNode);
  		    	    	    row.appendChild(col);
        		    	   }
    		    	  
        		       tableRef.appendChild(row);
        		       
        		       
        		       for(var pos in data)
        		    	   {
        		    	   
        		    	     // console.log(data[pos]);
        		    	      row=document.createElement("tr");
        		    	      for(var innerpos in data[pos])
        		    	    	  {
        		    	    	    //console.log(data[pos][innerpos]);
        		    	    	    //console.log(typeof(data[pos][innerpos]));
        		    	    	    if(typeof(data[pos][innerpos])=='object')
        		    	    	    	{
        		    	    	    	var date="";
        		    	    	    	for(var innermost in data[pos][innerpos])
			       		    	    	    	 {
        		    	    	    		       
        		    	    	    		       if(innermost!='day')
        		    	    	    		         date=date+data[pos][innerpos][innermost]+"/";
        		    	    	    		       else
        		    	    	    		    	   date=date+data[pos][innerpos][innermost];
			       		    	    	    	 }      		    	    	    	
        		    	    	    	
        		    	    	    	col=document.createElement("td");
	           		    	    	    
    		    	    	    		textNode=document.createTextNode(
	           		    	    	    		date);  
	           		    	    	    col.appendChild(textNode);
	           		    	    	    row.appendChild(col);
        		    	    	    	}
        		    	    	    else
        		    	    	    	{       		    	    	    
        		    	    	    
        		    	    	    col=document.createElement("td");
        		    	    	    textNode=document.createTextNode(data[pos][innerpos]);
        		    	    	    col.appendChild(textNode);
        		    	    	    row.appendChild(col);
        		    	    	    	}
        		    	    	  }
        		    	        tableRef.appendChild(row);
        		    	   
        		    	   }
        		       
        		       
        		 }
        		 
         }		 
	     
	     
	     
	     
	
		});
