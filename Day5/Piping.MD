## Piping 

~~~
Piping acts as a pipe or a medium through which we can send the output of one command to the next command 

it works on all the commands 

Example 

ls | grep java 

here the grep acts as a substring search 
so 
what happens here is that 
the ls lists out all the contents inside of a folder 
then 

the pipe command which is | 
channels or passes the output to the grep java 
here 

the grep acts as a substring search and searches for the word with java 
and 
whatever that matches the substring will be output in the console 


~~~

~~~
Another Example 

ps aux | grep chrome 

here the ps aux command 
shows all the process that are running 

and using the pipe 
we are passing the o/p to the grep chrome 
to search for the substring chrome so that 
it shows the process only with the chrome 
~~~

~~~
why piping is needed and why grep is needed 

Say for example we are inside of a server and there are millions and millions of folders 
so what we will do 
in that case we need to search for a particular folder then 

the piping and the grep will come in handy 


~~~