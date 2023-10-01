## Vim Rc 

~~~
Contents 
1. How to copy a whole line 
2. How to copy a word in a line 
3. How to paste 
4. How to search for a word and replace it 
5. vim configuration for theme line numbers syntax highlighting

~~~

~~~
All the below commands are needed to be done in normal mode 
and how to enter normal mode , 
by Pressing ESC 
~~~
~~~
How to copy a whole line in normal mode
Use Command : 
yy
~~~

~~~
How to copy a single word in normal mode 
Use Command : 
yw
~~~

~~~
How to paste :
p
~~~

~~~
Sometimes when we copy words and when we want to find and replace it may not work 
so search for that 
~~~

~~~
How to find a word 
use it in Command mode 
How to command mode bu using colon (:)

:%s/nameOfTheWord
~~~

~~~
How to find a pattern in a word 
in command mode 

:s/nameOfThePattern
~~~

~~~
How to find a word and replace 
in command mode

:%s/nameOfTheWord/NewWord
~~~

~~~
How to find a pattern in a word and replace 
in command mode 

:s/nameOfTheWord/NewPattern
~~~

~~~
VIM Rc Configuration File 
This file is used to configure vim according to own's choices 
like themes , line numbers , syntax highlighting etc 

As a beginner change these 
in the File: vi ~/.vimrc

we can also use 3rd party themes but that is too far fetched 
for writing and editing code in the terminal it is good to start with . 


:syntax on

set number

set autoindent

filetype plugin indent on

set tabstop=4 softtabstop=4

set shiftwidth=4

colorscheme murphy

:se mouse+=a
~~~