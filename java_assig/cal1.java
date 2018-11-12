import java.lang.*;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.Calendar;

class cal1{

 public static void main(String args[]){
	 
	String days[] 	= 	{"","MON","TUE","WED","THUR","FRI",""};
	String mt_name[]={"JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEP","OCT","NOV","DEC"};
	int mt_days[]={31,28,31,30,31,30,31,31,30,31,30,31};
	int arr[][]=new int[10][10];
	int arr1[]=new int[100],u=0;
	int i,j,col=0,m=0,temp;
	Calendar c = Calendar.getInstance();
	int day_no= c.get(Calendar.DAY_OF_WEEK); 
	int year= c.get(Calendar.YEAR); 
	int month_no= c.get(Calendar.MONTH); 
	int date= c.get(Calendar.DATE); 
	
	
	for(i=0;i<days.length;i++)
		{
			System.out.print(days[i]+"\t");
		}
	System.out.println();
	
	
	
	while(month_no<mt_days.length){
		System.out.println();
				System.out.println();
						
		
		for (i=date;i<=mt_days[month_no];i++){
			arr1[u++]=i;
		}	
	for (i=1;i<day_no;i++){
		System.out.print("\t");
	}
	j=day_no;
	
	
	
	
	m=0;
	
	while(m<u){
		
		
		if (j>1&&j<7){
			col=j;
			j++;
			System.out.print(arr1[m]+mt_name[month_no]+"\t");
		}
		else if (j==7){
			j=1;
			col=j;
			System.out.println();
		}
		else{
			col=j;
			j++;
			System.out.print("\t");
		}
		m++;
		
		
	}
	day_no=col+1;
	
	date=1;
	month_no++;
	u=0;
	
	}
	
	
	

 
 }
 }
 