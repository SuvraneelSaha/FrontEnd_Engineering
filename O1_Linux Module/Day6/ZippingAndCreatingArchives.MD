## Zipping and creating Archives 

~~~
What is an Archive : 
Archive or Zip is a file in which many files can be stored in a compressed manner 
ie we can club many files of different types into a single file 
~~~

~~~
How to Archive files to a zip file 
use command 
tar -cf Archive.zip dump.txt Text.txt

What happens here is that tar commands starts zipping the files inside of the specified file 
ie here it is Archive.zip 
we also can use different zip file extensions 
~~~

~~~
How to Archive to a zip file and also compress the size of the zip file 

use Command 
tar -zcf Archive1.zip dump.txt Text.txt
~~~

~~~
How to see the contents inside of a zip file or an archive file 

use Command 
tar -tf Archive1.zip

this will list out all the contents that is present inside the archive file in the console


~~~
~~~
How to Extract the files present inside of a archive file 
use Command
tar -xf Archive.zip 
~~~

~~~
How to Extract the files present inside of an Archive file and extract to a folder or to a destination 

tar -xf Archive.zip -C extract 

here the extract folder will have all the contents of the Archive.zip file 
the tar command will first extract all the contents inside of the Archive.zip file 
to the extract folder 
~~~

~~~
Where it can be useful to use the zipping 

when there is a large file and we need to download it 
we can first zip it then download it locally for our usage 
~~~