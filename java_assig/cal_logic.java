import java.util.*;
import java.util.Scanner.*;
import java.io.FileWriter;
import java.io.IOException;
class cal_logic{
	
 public static void main(String args[]){
	 Scanner sc=new Scanner(System.in);
	 System.out.println("Enter String");
	 String str=sc.next();
	 int end=0,strt=0,i,u=0,c=1;
	 ArrayList<String> list=new ArrayList<String>();
	  for (i=0;i<str.length();i++)
        {
           char p=str.charAt(i);
            if (p=='+'||p=='-'||p=='*'||p=='/')
				{
				end= i;
				list.add(str.substring(strt,end));
				list.add(Character.toString(p));
				strt=i+1;
            }
         }
			
			end=str.length();
			list.add(str.substring(strt,end));
			System.out.println("list:"+list);
			

		try{    
           FileWriter fw=new FileWriter("E:/bootcamp_task/java_assig/calculatr.txt",true);    
           fw.write("Entered String="+str+"\n");    
		   
			fw.close();    
          }
		  catch(Exception e){
			  System.out.println(e);
			}    
          System.out.println("Success...");    
			  
					while(list.contains("/")){
						logic("/",list,c++);
						
						}
							while(list.contains("*")){
							logic("*",list,c++);
						}
					while(list.contains("+")){
						logic("+",list,c++);
						}
							while(list.contains("-")){
							logic("-",list,c++);
						}
	}
					static void logic(String ch,List<String> list,int f){
						int m=0;
						int pos=list.indexOf(ch);
						//System.out.println("+ found at"+pos);
						String ele=list.get(pos-1).toString();
						String ele1=list.get(pos+1).toString();
						float cal=0.0f;
						if (ch.equals("/")){
						cal=Float.parseFloat(ele)/Float.parseFloat(ele1);
						}
						else if (ch.equals("*")){
						 cal=Float.parseFloat(ele)*Float.parseFloat(ele1);
						}
						else if (ch.equals("+")){
						 cal=Float.parseFloat(ele)+Float.parseFloat(ele1);
						}
						else if (ch.equals("-")){
						 cal=Float.parseFloat(ele)-Float.parseFloat(ele1);
						}
						String ele2=Float.toString(cal);
						/*System.out.println("prev ele:"+ele);
						System.out.println("next ele:"+ele1);
						System.out.println("resu:"+cal);
						System.out.println("list:"+list);*/
						while (m<3){
							list.remove(pos-1);
							m++;
						}
						list.add (pos-1,ele2);
						//System.out.println("position"+pos);
						//System.out.println("list:"+list);
						String val="Action"+f;
						
						try{    
							FileWriter fw=new FileWriter("E:/bootcamp_task/java_assig/calculatr.txt",true);    
							fw.write(val+":"+ele+ch+ele1+"="+ele2+"\n"); 
						
							fw.close();    
						}
						catch(Exception e){
							System.out.println(e);
						}    
							
	}
	
	
} 