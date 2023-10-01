## Vim Navigation 

~~~
Contents : 
1. How to create a file and open it (if it does not exists)
2. how to save a file in vim
3. how to exit without saving in vim 
4. how to exit a file in vim
5. what is normal mode 
6. what is insert mode 
7. what is command mode 
8. how to navigate up down left right in normal mode 
9. how to delete a line from the normal mode 
10. Game for learning vim -- Vim adventures 
~~~

~~~
How to create a file and open it (if it does not exists)

vim Example.txt 
or we can use 
vi Example.txt 

If the Example.txt file does not exists then it will make it and open it in normal mode

otherwise it will open it in normal mode 
~~~

~~~
how to save a file in vim

command : 
First we need to press ESC key to enter into the normal mode 
then we need to type : (colon) to enter into the command mode 
then we need to type wq 

:wq 
~~~

~~~
how to exit without saving in vim

if some changes have been done in a file 
and the user wants to exit without saving it 
then 

we use 

:q! (! is used for override)
~~~

~~~
how to exit a file in vim

if no changes have been done then we can exit vim using 

:q
~~~

~~~
what is normal mode 

normal mode is the mode in which we cannot insert anything nor we can use any commands 
we can just navigate in the file 
~~~

~~~
what is insert mode 

insert mode is the mode in which we can edit or add changes to a file 
~~~

~~~
what is command mode 

command mode is the mode in which we can give commands only 

Ex - to exit a file , save a file 
~~~

~~~
 how to navigate up down left right in normal mode 

 right - l 
 left - h
 up - k 
 down - j

 Remember navigation can be done only in the normal mode 

~~~

~~~
how to delete a line from the normal mode 

delete a line - dd 

it will delete the line the cursor is currently at 
~~~

~~~
Learn vim by playing a game 
vim adventures 
~~~

[vim Adventures](https://vim-adventures.com/)