   var marks=[15,16,19,18,18,18,16,15];
        var i=0,j=0,temp=0,rank=1,c=0;
  marks.sort(function(a, b){return b-a});
	console.log(marks);
    while (i<marks.length){
            temp =marks[i];
            for (var j=i;j<marks.length;j++){
                if (temp==marks[j]){
                    console.log(marks[i]+"-"+rank);
                    c++;
                }
            }
           rank+=c;
           i+=c;
           c=0;
        }