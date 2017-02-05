class TicTacToe {
    constructor() {

    this.CurrentPlayerSymbol='x';
        
    this.matrix = new Array(3);
          for (var i=0; i<this.matrix.length;i++)
               this.matrix[i]=new Array(3);

          for (var row=0; row<this.matrix.length;row++){
              for (var col=0; col<this.matrix.length;col++){
                   this.matrix[row][col]=0;
              }
           }   
    }

    getCurrentPlayerSymbol() {
          return this.CurrentPlayerSymbol;
    }

    nextTurn(row,col) {
		
          if (this.matrix[row][col]==""){
           this.matrix[row][col]=this.CurrentPlayerSymbol;
               if (this.CurrentPlayerSymbol=='x')
                   return this.CurrentPlayerSymbol='o';
               else if (this.CurrentPlayerSymbol=='o')
                   return this.CurrentPlayerSymbol='x';
          }
         else return  this.CurrentPlayerSymbol;
    }

    isFinished() {
         if  ( this.getWinner()!=null || this.isDraw()==true || this.noMoreTurns()==true)
           return true;
         return false;
    }

    getWinner() {
   
    if ((this.matrix[2][0]==this.matrix[1][1])&&(this.matrix[2][0]==this.matrix[0][2])&&(this.matrix[2][0]!= ""))
          return this.matrix[2][0];
   
    else  if((this.matrix[2][2]==this.matrix[1][1])&&(this.matrix[2][2]==this.matrix[0][0])&&(this.matrix[2][2]!= ""))
          return this.matrix[2][2];

    else  if((this.matrix[0][0]==this.matrix[1][0])&&(this.matrix[0][0]==this.matrix[2][0])&&(this.matrix[0][0]!=""))
          return this.matrix[0][0]; 

    else if((this.matrix[0][1]==this.matrix[1][1])&&(this.matrix[0][1]==this.matrix[2][1])&&(this.matrix[0][1]!=""))
          return this.matrix[0][1]; 

    else if((this.matrix[0][2]==this.matrix[1][2])&&(this.matrix[0][2]==this.matrix[2][2])&&(this.matrix[0][2]!=""))
          return this.matrix[0][2]; 

    else if((this.matrix[0][0]==this.matrix[0][1])&&(this.matrix[0][0]==this.matrix[0][2])&&(this.matrix[0][0]!=""))
          return this.matrix[0][0];

    else if((this.matrix[1][0]==this.matrix[1][1])&&(this.matrix[1][0]==this.matrix[1][2])&&(this.matrix[1][0]!= ""))
          return this.matrix[1][0]; 

    else if((this.matrix[2][0]==this.matrix[2][1])&&(this.matrix[2][0]==this.matrix[2][2])&&(this.matrix[2][0]!= ""))
          return this.matrix[2][0];
    else return null;        
    }

    noMoreTurns() {
      if (this.matrix[0][0]!="" && this.matrix[0][1]!="" && this.matrix[0][2]!="" && 
          this.matrix[1][0]!="" && this.matrix[1][1]!="" && this.matrix[1][2]!="" && 
          this.matrix[2][0]!="" && this.matrix[2][1]!="" && this.matrix[2][2]!="") 
	return true;
      return false;			
    }

    isDraw() {
      if (this.getWinner()==null && this.noMoreTurns()==true)
          return true;
      return false;
    }


    getFieldValue(row, col) { 
        if  (this.matrix[row][col] !='')
             return this.matrix[row][col];
      return null;
    }
}

module.exports = TicTacToe;



