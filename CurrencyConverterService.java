package org.currencyservice;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.Hashtable;
import java.util.Iterator;

import javax.net.ssl.HttpsURLConnection;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

/**
 * currency conversion!
 *
 */
public class CurrencyConverterService 
{
    
	public Hashtable<String,Double> getConversionRate()
	{
		String uri="https://api.exchangerate-api.com/v4/latest/USD";
		Hashtable<String,Double> currencies=new Hashtable<String,Double>();
		 try { 
		    URL obj = new URL(uri);	    
			HttpsURLConnection con = (HttpsURLConnection) obj.openConnection();
			//add request header
	        con.setRequestMethod("GET");
	        int responseCode = con.getResponseCode();
	        System.out.println("Response Code : " + responseCode);	        
	        BufferedReader in = new BufferedReader(
	                new InputStreamReader(con.getInputStream()));
	                String inputLine;
	                StringBuffer response = new StringBuffer();
	         
	                while ((inputLine = in.readLine()) != null) {
	                    response.append(inputLine);
	                }
	                in.close();
	         
	                //print result
	               // System.out.println(response.toString());
	                JSONParser parser = new JSONParser();
	                String key,innerKey=null;
					 Object value,innerValue=null;
					 
	                try {
						JSONObject json = (JSONObject) parser.parse(response.toString());
						//System.out.println(json.get("rates"));						
						 Iterator<String> keysItr = json.keySet().iterator();
						
						 
						    while(keysItr.hasNext()) {
						   
						        key = keysItr.next();
						        if(key.equals("rates"))
						        {
						           value = json.get(key);
						           JSONObject innerjson = (JSONObject) parser.parse(value.toString()); 
						           Iterator<String> innerkeysItr = innerjson.keySet().iterator();
						           while(innerkeysItr.hasNext()) {
						        	   innerKey = innerkeysItr.next();
						        	   innerValue=innerjson.get(innerKey);
						        	  // System.out.println(innerKey+","+innerValue);
						        	   currencies.put(innerKey, Double.parseDouble(innerValue.toString()));
						        	   
						           }
						        }
						        
						    }
					} catch (ParseException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 
		 return currencies;
	}
	
}
