## Commands Part 4 

~~~
ls | grep python 

this will actually pass the o/p of ls an an input to the grep and 
the grep will act as a substring search of python on the output of ls and the result will be 
printed on console 
~~~

~~~
ls > new.txt 

here the result of the the ls commands will be dumped inside the new.txt file 
if there is something that is present inside of the new.txt file then it will be 
replaced 
~~~

~~~
ls >> new.txt 
here the result of ls will be appended inside of the new.txt file 
if something is present it will stay there 
but the new result will be added at the end of the file of the new.txt file
~~~

~~~
<command1> && <command2> 
this will act as an and operator 
if the 1st command runs then and then only the 2nd commmand will run 
ie 
command1 followed by command2 considering command1 has no errors 
~~~
