

function calculateTax(income, expenses) {
    if(income<0||expenses<0||expenses>income)
    {
        return  "Invalid Input";


    }
    else
    {
        var def=income-expenses;
        var result=def*0.20;
        return result;
    }
          
}




function sendNotification(email) {
    var str1="";
    var cnt=0;
    var len=email.length;

    var flag=0;
    for(i of email)
    {
        if(i==="@")
        {
            flag=1;
        }
    }
    for(i of email)
    {
        if(i==="@")
        {
            break;
        }
        else
        {
            str1=str1+i;
            cnt++;

        }
        
    }


    var str2=email.slice(cnt+1,len);

    if(flag!=1)
    {
       return "Invalid Email"
    }
   else
   {
    return str1+" sent you an email from "+str2;
   }
  

}









function checkDigitsInName(name) {

    var flag=0;
    if(typeof name==="string")
    {
       
       for(i of name)
       {
        
        if (i >= '0' && i <= '9')
        {
            return true;
        }

       }
       return false;


    }
    else
    {
        return "Invalid Input";
    }
    
}






function calculateFinalScore(obj) {
   

    if(typeof obj==="object")
    {

        
    var sum=0;
    if(obj.isFFamily===true)
    {
        sum=20+obj.testScore+obj.schoolGrade;
    }
    else
    {
        sum=obj.testScore+obj.schoolGrade;

    }

    if(sum>=80)
    {
        return true;
    }
    else
    {
        return false;
    }




    }
    else
    {
        return "Invalid Input";
    }


}


// console.log(
//     calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));

//     console.log(
//         calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }));

// console.log(calculateFinalScore("hello"));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));









