first_array = new Array();
second_array = new Array();
final_string = new Array();

function alphaOnly(event)
{
  var key = event.keyCode;
  return (key > 64 && key < 91);
};

function checkNum()
{
if ((event.keyCode > 0 && event.keyCode < 9))
{
   return true;
}
else
   {
       alert("Please enter only characters. don't enter any symbols it may cause wrong calculations.");
       return false;
   }
};

function compare(form)
{
 name1 = (form.fname.value);
 name2 = (form.sname.value);

if(name1 == "" || name2 == "")
{
document.getElementById("result").innerHTML='<font style="color: red;">First enter your names and then click on Check button!!!</font>';
return false;
}
else
{
   first_array = name1.toLowerCase().replace(/ /gi,"").split('');
 second_array = name2.toLowerCase().replace(/ /gi,"").split('');

 for(i in first_array)
 {
  for(j in second_array)
  {
   if((first_array[i] == second_array[j]) && (first_array[i]!='') && (second_array[j]!=''))
   {
    first_array[i] = '';
    second_array[j] = '';
   }
  }
 }

for(i=0; i<=first_array.length; i++)
{
 if(first_array[i]=='')
 {
  first_array.splice(i,1);
 }
}

for(j=0; j<=second_array.length; j++)
{
 if(second_array[j]=='')
 {
  second_array.splice(j,1);
 }
}
final_string = first_array.toString().replace(/,/gi,"") + second_array.toString().replace(/,/gi,"");
l = final_string.length;
result(l);
};

function result(n)
{
 string = "flames";
 number = n;
 process = new Array();

 while(string.length>=2)
 {
  var j=0;
  process = [];
  position = number%string.length;

  if(position!=0)
  {
   for(i=position+1; i<=string.length; i++)
   {
    process[j] = string.charAt(i-1);
    j++;
   }

   for(i=0; i<=position-2; i++)
   {
    process[j] = string.charAt(i);
    j++;
   }
   string = process.toString().replace(/,/gi,"");
  }
  else
  {
   string = string.slice(0,-1);
  }
 }
 display(string,name1,name2);
}
};

function display(n,n1,n2)
{
var n1='<font style="color:green;"><b>'+n1.toUpperCase ()+'</b></font>';
var n2='<font style="color:green;"><b>'+n2.toUpperCase ()+'</b></font>';
var f='<font style="color:red;"><b>FRIENDS</b></font>';
var l='<font style="color:red;"><b>LOVERS</b></font>';
var a='<font style="color:red;"><b>ATTRACTION</b></font>';
var m='<font style="color:red;"><b >MARRIAGE</b></font>';
var e='<font style="color:red;"><b>ENEMIES</b></font>';
var s='<font style="color:red;"><b>SIBILINGS</b></font>';
 if(n=='f')
 {
document.getElementById("result").innerHTML="Relationship between "+n1+" and "+n2+" is "+f;
 }
 if(n=='l')
 {
document.getElementById("result").innerHTML="Relationship between "+n1+" and "+n2+" is "+l;
 }
 if(n=='a')
{
document.getElementById("result").innerHTML="Relationship between "+n1+" and "+n2+" is "+a;
 }
if(n=='m')
{
document.getElementById("result").innerHTML="Relationship between "+n1+" and "+n2+" is "+m;
 }
 if(n=='e')
 {
document.getElementById("result").innerHTML="Relationship between "+n1+" and "+n2+" is "+e;
 }
 if(n=='s')
{
document.getElementById("result").innerHTML="Relationship between "+n1+" and "+n2+" is "+s;
 }
};

function clr(form)
{
form.fname.value="";
form.sname.value="";
document.getElementById("result").innerHTML="Please enter he and his names and click the check button. if you want to check another names click reset button.";
};
