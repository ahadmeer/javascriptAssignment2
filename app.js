
//=================== frist chapter==============
// Q: 1

// var a = [
//     ['Work', 9],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', 7]
// ];

// document.write(a)


// Q:2

// var a = [
//     [0,1,2,3 ],
//     [ 1,0,1,2 ],
//     [2,1,0,1],
  
// ];

// document.write(a[0][0] +" "+ a[0][1] +" "+ a[0][2] +" "+ a[0][3] +"<br>");
// document.write(a[1][0] +" "+ a[1][1] +" "+ a[1][2] +" "+ a[1][3] +"<br>");
// document.write(a[2][0] +" "+ a[2][1] +" "+ a[2][2] +" "+ a[2][3] +"<br>");


// Q:3
//  for (var i = 1 ; i <= 10 ; i++){
// document.write("<br>")
// document.write(i)
//  }



// Q:4
// var tableNumber = +prompt ("enter table number")
// var tableLength = +prompt ("enter table length")
// for(var i = tableNumber ; i <= tableLength ; i++){
   
//     document.write(tableNumber + "x" + i + "="+ tableNumber*i +"<br>");
                       

// }


// Q:5

// var fruits = ["apple", "banana", "mango", "orange", "strawbery"]

                    
// for(var i=0;i<fruits.length;i++)
//        {
//     document.write("Element at index  "+ i +" is  "+fruits[i]+" <br>");
                             
// }



// Q:6
// document.write("<h1>" + " counting " + "</h1>")
// for (var i = 0 ; i <= 15 ; i++){
//     document.write(i + "  ")


// }

// document.write("<h1>" + "  reverse counting " + "</h1>")
// for(var i = 10 ; i >= 1 ; i--){
//     document.write(i + "  ")
// }



// document.write("<h1>" + " Even number " + "</h1>")
// for (var i = 0 ; i <= 20 ; i++){


//     if(i%2==0)
//     {
//      document.write(i + "  ")
//     }
  

// }

// document.write("<h1>" + " Odd  number " + "</h1>")
// for (var i = 0 ; i <= 19 ; i++){


//     if(i%2==1)
//     {
//      document.write(i + "  ")
//     }
  

// }

// document.write("<h1>" + " series " + "</h1>")
// for (var i = 1 ; i <= 20 ; i++){


//         if(i%2==0)
//         {
//          document.write(i +"k" + "  ")
//         }
      
    
//     }


// Q:7
// var a = ["cake" , "apple pie" , "cookie" , "chips" , "patties"]
// var userInput = prompt("Enter a value to search");
// var flag =0;
// for(var i=0;i<a.length ;i++)
// {
//     if(userInput===a[i])
//     {
//         document.write("<br> Value exists at index "+i+ " ",a[i]);
//         flag++;
//         break;
//     }

// }


// if(flag===0)
// {
//     document.write("<br> value does not exist");
// }


// Q:8
//  var a = [24, 53 , 78 , 91 , 12]
// document.write("Array items :" + [a] + "<br>")
// document.write("The largest number is " + a [3])



// Q:9
// var b = [24, 53 , 78 , 91 , 12]
// document.write("Array items :" + [b] + "<br>")
// document.write("The smallest number is " + b [4])





// Q:10


// for(var i=1;i<=20;i++)
// {
//     document.write(i*5 +" ");
// }


// ================== first chap end =================



// ==================== second chap  =======================

// Q:1
//literal notaion array//
// var array = [];

// Q:2
//object notation array//

// var array = new Array();


// Q:3
// var string = ["ahad", "age" , "football"]

// document.write(string)

// Q:4
// var num = [1,2,3,4,5,6,]

// document.write(num)

// Q:5
// var boolean = [true,false]
// document.write(boolean)

// Q:6
// var mixedarray = ["ahad", 1 , true , null , undefined ]
// document.write(mixedarray)

// Q:7
// var array = ["SSC" , "HCS" , "BCS" , "BS" , "BCOM" , "MS" , "M.PHIL" , "PHD"]
// for(var i = 0 ; i < array.length ; i++)
// {
// document.write(array[i] +"<br>" )
              

// }
// Q:8
// var studentName = ["micheal " ," John " , " tony "]

// var score = [320,230,480]

// // document.write("score of " + studentName [0] + " is " + score [0]  + " perventage "  + score[0]/500*100 + " <br>")
// // document.write("score of " + studentName[1] + " is " + score [1]   + " perventage "  + score[1]/500*100 + " <br>")
// // document.write("score of " + studentName[2] + " is " + score [2]   + " perventage "  + score[2]/500*100 + " <br>")
              
// for(var i=0;i<3;i++) i=3
// {
//     document.write("score of " + studentName [i] + " is " + score [i]  + " perventage "  + score[i]/500*100 + " <br>")
// }                                


// Q:10
// var scoreOfsutdents = ["320" , "230" , "480" , "120"]

// document.write("score of students " + scoreOfsutdents + "<br>")

// scoreOfsutdents.sort();

// document.write(scoreOfsutdents)


// Q:11

// var CitiesList = [" Karachi " , " Lahore " , " Islamabad " , " Quetta " , "Peshawar"];
// document.write(" CitiesList: " + CitiesList + "<br>")

// var selectedCititeslist = CitiesList.slice(2 , 4)
// document.write(" Selectedcitieslist: " + selectedCititeslist)


// Q:12

// var a = [" This" ,"is" , "my" , "cat"]

// document.write("Array :" + a +"<br>");

// var b = a.join (" ")

// document.write(" String :" +b)





// Q:13 //FiFo //


// var a = ['keyboard','mouse','printer','monitor']


// for(var i=0;i<4;i++)
// {
//     document.write("<br>" + " Out: "+ a.shift())
// }

 

// Q:14 //LiFo //


// var a = ['keyboard','mouse','printer','monitor']


// // for(var i=0;i<4;i++)
// // {
// //     document.write("<br>" + " Out: "+ a.pop())
// // }




// // Q:15
// var arr  = ["Apple", " Samsung " , " Motorola " , " Nokia " , "Sony and Haier"]
    
//     document.write( " <Select> <option> "+arr[0]+" </option> <option> "+arr[1]+" </option> <option> "+arr[2]+" </option> <option> "+arr[3]+" </option> <option> "+arr[4]+" </option>  <select> ");



// ======================= second chap end ===============================


 