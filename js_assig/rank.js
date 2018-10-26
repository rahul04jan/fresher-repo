   var marks=[18,18,18,16,15];
        var i=0,j=0,temp;rank=1,c=0;
       
    
    var temp=0,k=0,m=0;
        var rank=1;
               

while (i<marks.length){
            temp =marks[i];
            for (var j=i;j<marks.length;j++){
                if (temp==marks[j]){
                    console.log(marks[j]+"-"+rank);
                    c++;
                }
            }
           rank+=c;
           k+=c;
           c=0;
        }