package com.bhaiti.kela.controllers;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.bhaiti.kela.beans.Student;
import com.bhaiti.kela.beans.StudentRegistration;
@Controller
public class StudentRetrieveController {
	 
	 @CrossOrigin(origins = "http://localhost:8080")
  @RequestMapping(method = RequestMethod.GET, value="/student/allstudent")
  @ResponseBody
  public List<Student> getAllStudents() {
		//JSON parser object to parse read file
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
		    return stdlist;
 // return StudentRegistration.getInstance().getStudentRecords();
  } 
	 
	 @CrossOrigin(origins = "http://localhost:8080")
	  @RequestMapping(method = RequestMethod.GET, value="/student/getOneStudent/{id}")
	  @ResponseBody
	  public Object getOneStudents(@PathVariable("id") String id) {
			//JSON parser object to parse read file
			    JSONParser jsonParser = new JSONParser();
			    JSONArray stdlist;
			    Object obj1;
			    try (FileReader reader = new FileReader("C:/xampp/htdocs/java_task_api/students.json"))
			    {
			        //Read JSON file
			        Object obj = jsonParser.parse(reader);

			         stdlist = (JSONArray) obj;
			         obj1= stdlist.get(Integer.parseInt(id));
			        System.out.println(stdlist);
			         }
			    catch (Exception e) {
			        e.printStackTrace();
			        obj1=new Student();
			        stdlist=new JSONArray();
			    } 
			    return obj1;
	 // return StudentRegistration.getInstance().getStudentRecords();
	  } 
}