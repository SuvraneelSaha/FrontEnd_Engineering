## Vim Introduction 

~~~
Contents : 
We will learn how to open a file using Vim 

We will learn how to create and open a file using Vim 

We will learn how to save a file and exit Vim 

We will learn how to exit Vim 

~~~

~~~
how to open a file using Vim 

cmd - vim file.txt 
~~~

~~~
how to create a file and open it using Vim 

cmd : vim file1.txt 
~~~

~~~
How to save a file and exit Vim 
cmd : First we need to press ESC key to enter into the command mode 
then we have to type 
: (colon) then wq for saving the file and exit 

so Cmd -->  ESC first then --> :wq --> press enter 
~~~

~~~
How to exit VIm

cmd --> ESC first then --> :q (for exit without saving)
or 
Cmd --> ESC first then --> :q! (for exit forcefully )
~~~

~~~
This is a list below 
~~~

~~~
Hit the Esc key to enter "Normal mode". Then you can type : to enter "Command-line mode". A colon (:) will appear at the bottom of the screen and you can type in one of the following commands. To execute a command, press the Enter key.

:q to quit (short for :quit)
:q! to quit without saving (short for :quit!)
:wq to write and quit
:wq! to write and quit, attempting to force the write if the file lacks write permission
:x to write and quit; like :wq but writes only if modified (short for :exit)
:qa to quit all (short for :quitall)
:cq to quit, without saving, with a nonzero exit code to indicate failure (short for :cquit)
You can also quit Vim directly from "Normal mode" by typing ZZ to save and quit (same as :x) or ZQ to just quit (same as :q!). (Note that case is important here. ZZ and zz do not mean the same thing.)

Vim has extensive help - that you can access with the :help command - where you can find answers to all your questions and a tutorial for beginners.
~~~
