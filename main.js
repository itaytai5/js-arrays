/*
1. מערך פשוט:
צרו מערך עם 5 שמות של תלמידים והדפיסו לקונסול את השמות.
*/

var Students = [
     'alex',
     'mike',
     'arik',
     'kobe',
     'dani',
]


 for(var i = 0; i < 5; i++){
    console.log(Students[i]);
 }   
 
 /*
  2. לוח הכפל מתוחכם:
צרו את לוח הכפל באמצעות  JAVASCRIPT. הדגישו (באמצעות javascript) 
את המספרים 50,100,72
 */
/*
var strArray = [100][10]
for(i=1; i<100;i++)
    for(j=1; j<=10; j++)
    {
        strArray[i][j] = i*j;
    }
for(i=1; i<=10; i++)
   for(j=1; j<=10; j++){
     console.log(strArray[i][j])
   }   
 */   

   /*
  3.
להלן מובא הקוד הבא:
  var answer = prompt('Please type a number')
  console.log(answer)
תריצו אותו.
   */
var answer = prompt('Please type a number');
  console.log(answer)

/*
מופיע חלון 
שמקבל נתונים אשר המשתמש 
prompt 
מכניס
*/  

/*
4.צרו לולאת while שתעצור רק אם המשתמש רושם STOP
*/

var  word = stop;
var answer = "";
 
while(stop == answer)
{
    answer = prompt('please enter word');
}

/*
6.עם מערך התלמידים צרו "תוכנת חיפוש" שבה המשתמש מזין שם והתוכנה אומרת אם התלמיד נמצא במערך.
*/

var Students =  Students[5]

var answer = ""; var count = 0;

for(i=0; i < 5; i++)
{
    answer = prompt("please enter name");
    if(Students[i] === answer)
    {
        count++;
    }
    if(count !== 0){
        console.log("in the array");
    }
}

/*
7.צרו ריבוע עם לולאה וקונסולים

*****
*****
*****
*****
*****
*/

for( var i=0; i < 4; i++)
   for(var j=0; j<4; j++){
     console.log('*');
   }

/*
9.ציירו משולש כזה באמצעות לולאה וקונסולים.
(**אתגר** ייצרו באמצעות לולאה אחת)
*
**
***
****
***
**
*
*/

var num =1;
for(i=0; i < 5;i++){
    for(j=0; j<num ;j++)
    {
        console.log('*');
    }
    num++;
}






 
 