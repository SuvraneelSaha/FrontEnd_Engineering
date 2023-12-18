## Abstract Operation ToNumber

~~~

the abstract operations act as a protocol for which the type conversion takes place . 
it depends upon the type of the input ie the argument on which the output will be generated 

Example: 

10 - null is equal to 10 - 0 
which is equal to 10 

as there are two operands 10 and null 
the abstract operation of ToNumber takes place ie for the operands 10 and null 
for 10 it becomes 10 and for null it becomes +0 

so when 10 - null which means 
10 - 0 = 10 is the ans 

Example 2 : 

10 - undefined 
here the two operands are 10 and undefined 

so the abstract operation happens for both the operands ie for 10 and undefined 

10 becomes 10 and the undefined becomes Nan ie Not a number 

so 10 - NaN = NaN 
as infinite - 10 = infinite just like that 10 - NaN = NaN 


~~~

