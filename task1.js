console.log("hello task1");
const rectangle={
    width : 0,
    height: 0 ,
    area: function() {
        return this.width * this.height;
      },
    perimeter: function() {
        return 2*(this.width + this.height);
      },
      displayInfo : function() {
      console.log ( "width ",this.width ,"\nheight ",this.height ,"\narea ",this.area() ,"\nperimeter ",this.perimeter() );  
      }
    };

    rectangle.width = 5 ; 
    rectangle.height = 10 ; 
    rectangle.displayInfo();