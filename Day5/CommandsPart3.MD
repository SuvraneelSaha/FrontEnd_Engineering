## Commands Part 3 

~~~
Contents 

1. How to print the Head of a file ie first few lines of a file 
2. How to print the Tail of a file ie the last few lines of a file 
3. Why is it different from Cat and why is it needed 
4. Dumping Command for a word or any commands into a file but not in the console 
~~~

~~~
How to print the Tail of a file ie last few lines of a file 
use command 
Tail 
Example 
Tail O1.java
~~~

~~~
How to print the Tail of a file (a specific number of a line)

use Command

Tail -n 10 O1.java
then it will print the last 10 lines 
~~~

~~~
How to print the Head of a file ie first few lines of a file 
use command 

head O1.java
~~~

~~~
How to print the Head of a file (a specific number of a line)
use command 

head -n 10 O1.java
~~~

~~~
Why is it different from Cat and why is it needed 
in case of cat it prints the whole file all the lines 
but say in case of a log file which logs each day 100s of lines 
then it will be difficult to search a single log to find an issue which happened in the last few days 

so in that case whenever we interact from the terminal it is better to use the tail command to see 

the last few lines of a log file in that case or any other file 


~~~

~~~
You actually wants to see the file the tail portion 
the head does not supports -f flag  

Example 
tail -f O1.java 
~~~

~~~
For printing a word or string in the console 
Use Command : 
echo 
Example : echo "Sanket Singh is a good teacher is guess his teaching style is great"

~~~

~~~
How to dump a text or words inside of a folder 
use command 
> 
Example : 
echo "Sanket Singh is a good teacher is guess his teaching style is great" > dump.txt

this will take the whole string "Sanket Singh is a good teacher is guess his teaching style is great"
and will dump it inside of that dump.txt file 


The thing is that it will replace whatever that is present inside the dump.txt 
~~~

~~~
To Append the dumping 
use >> 

Example 
echo "Sanket Singh is a good teacher is guess his teaching style is great" > dump.txt
then we do 
ls >> dump.txt 

whatever is the output of the ls it will be appended inside of the dump.txt file at the end 
~~~

~~~
ONE THING TO REMEMBER THESE ALL cd , ls , mkdir , mv , cp , rm , these ALL ARE SHELL SCRIPT SYNTAX 
WE CAN MAKE A SCRIPT OUT OF THESE 
EVEN WE CAN MAKE A FOR LOOP AND WHAT NOT 
SO THIS IS THE BEGINNING OUR OUR SHELL SCRIPTING LEARNING JOURNEY 


~~~