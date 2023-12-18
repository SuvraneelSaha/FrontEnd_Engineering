## ToNumber on Strings 

~~~

con.log(2-7)
= -5

con.log(2-null)
= 2- 0 = 0 

con.log(2-undefined)
=
2-NaN = NaN
as undefined is equal to NaN

con.log(1-"453")
=-452


con.log(1-"324oasd11") 
= 1-NaN 
= NaN cause Js cannot transform(the string) it into a valid Number 

~~~

[ToNumber Js](https://262.ecma-international.org/14.0/#sec-tonumeric)