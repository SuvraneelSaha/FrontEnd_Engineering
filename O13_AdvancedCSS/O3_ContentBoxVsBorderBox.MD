## Content Box vs Border Box 

~~~
Content box :
The size of the content = width 

Border Box :
size of the content + padding + border = width 

html{
  box-sizing : border-box;
}
*,*:before,*:after{
  box-sizing:inherit;
}

so in the first css rule 
inside of the html element all the elements will be of border box due to box-sizing property 

if any component ie element changes itself to content box then it wont be allowed and the border-box 
will be applied 

why ? 
cause 

*,*:before,*:after{
  box-sizing:inherit;
}

the properties of the parent element will be inherited using the pseudo class selectors 







~~~

[Border Box Inherit](https://css-tricks.com/almanac/properties/b/box-sizing/#:~:text=padding%2Dbox%20%3A%20Width%20and%20height,content%2C%20padding%2C%20and%20border.)

[Box Sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)


~~~
Experiment of box-sizing property : 

<style>
    html{
      box-sizing: border-box;
    }
    *, *:before, *:after
    {
      box-sizing: inherit;
    }


    .demo1{
      border: 5px solid red;
      width: 500px;
      margin: 0px auto;
      
    }
    .demo2{
      border: 5px solid cyan;
      width: 500px;
      margin: 0px auto;
      box-sizing: content-box;
    }
  .demo1_inside{
      border: 5px solid black;
      width: 50px;
      margin: 0px auto;
      
  }

  
  if there is a parent div and in the css style it has been defined as content-box then the child will inherit it 
  so the child will be of content-box 

  simple thats it 
  otherwise 
  so if no box-sizing css property is given manually then all the elements will have the border box due to universal selector 


~~~