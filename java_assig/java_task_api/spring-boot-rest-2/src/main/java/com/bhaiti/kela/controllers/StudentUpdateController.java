package com.bhaiti.kela.controllers;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.bhaiti.kela.beans.Student;
import com.bhaiti.kela.beans.StudentRegistration;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
@Controller
public class StudentUpdateController {@RequestMapping(method = RequestMethod.PUT, value="/update/student/{regdNum}",produces = {"application/json", "application/xml"}
,  consumes = {"application/x-www-form-urlencoded"})
@ResponseBody
@CrossOrigin(origins = "http://localhost:8080")
public JSONArray UpdateStudentRecord(@PathVariable("regdNum") String regdNum,Student student) {
	 JSONArray stdlist = null;
	 try
    	{
      	JSONParser jsonParser = new JSONParser();
		   
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
  	
  	
  	
  	 
  	
    stdlist.remove(Integer.parseInt(regdNum));
    JSONObject json = new JSONObject();
    json.put("name", student.getName());
    json.put("age", student.getAge());
    json.put("registrationNumber", student.getRegistrationNumber());
    stdlist.add((Integer.parseInt(regdNum)),json);
      fw.write(stdlist.toJSONString());    
  	fw.close();  	
  	} 
      catch (IOException e) 
  	{
  	System.out.println("file created");
      e.printStackTrace();
  	}
   
System.out.println("In deleteStudentRecord");   

  // return StudentRegistration.getInstance().deleteStudent(regdNum);
return stdlist;
}
}