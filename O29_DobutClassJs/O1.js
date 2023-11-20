const player1={

 

  firstname:"virat",
  
  lastname:"kohali",
  
  notobat:2,
  
  canBowl:false,
  
  getdetails:function(){
  
  console.log(this.firstname,this.lastname,"comes at",this.notobat,)
  
  }
  
  }
  
   
  
  const obj=function(){
  
  console.log(this.getdetails());
  
  }
  
   
  
  let x=obj.bind(player1);
  
   
  
  x();