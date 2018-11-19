package com.bhaiti.kela.controllers;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.bhaiti.kela.beans.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import java.util.LinkedHashMap; 
import java.util.Map; 
import org.json.simple.JSONArray; 
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;



@Controller
public class StudentRegistrationController {
	 
	JSONArray ja = new JSONArray();

	@CrossOrigin(origins = "http://localhost:8080")
  @RequestMapping(method = RequestMethod.POST, value="/register/student",produces = {"application/json", "application/xml"}
  ,  consumes = {"application/x-www-form-urlencoded"})
	
  
  public @ResponseBody StudentRegistrationReply registerStudent(Student student) {
  System.out.println("In registerStudent");
        StudentRegistrationReply stdregreply = new StudentRegistrationReply();           
        StudentRegistration.getInstance().add(student);
        //We are setting the below value just to reply a message back to the caller
        stdregreply.setName(student.getName());
        stdregreply.setAge(student.getAge());
        stdregreply.setRegistrationNumber(student.getRegistrationNumber());
        stdregreply.setRegistrationStatus("Successful");
      
       
        //Append data to file
        try
      	{
        	JSONParser jsonParser = new JSONParser();
		    JSONArray stdlist;
		    try (FileReader reader = new FileReader("C:/xampp/htdocs/java_task_api/students.json"))
		    {
		        //Read JSON file
		        Object obj = jsonParser.parse(reader);

		         stdlist = (JSONArray) obj;
		        System.out.println(stdlist);
		         }
		    catch (Exception e) {
		        e.printStackTrace();
		        stdlist=new JSONArray();
		    } 

    	FileWriter fw=new FileWriter("C:/xampp/htdocs/java_task_api/students.json",false);    
    	ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
    	String json = ow.writeValueAsString(student);
    	 
    	
    	
    	 
    	 Map m = new LinkedHashMap(3);
        m.put("name", student.getName());
        m.put("age", student.getAge());
        m.put("registrationNumber", student.getRegistrationNumber());
    	//jo.put("name", student.getName());
    	//jo.put("age", student.getAge());
    	//jo.put("registrationNumber", student.getRegistrationNumber());
    	//ja.add(jo);
        //ja.add(m);
        stdlist.add(m);
        fw.write(stdlist.toJSONString());    
    	fw.close();  	
    	} 
        catch (IOException e) 
    	{
    	System.out.println("file created");
        e.printStackTrace();
    	}
        return stdregreply;
}
}