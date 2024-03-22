// change comma to dot
app.config(['$provide', function($provide) {
  $provide.decorator('$locale', ['$delegate', function($delegate) {
      $delegate.NUMBER_FORMATS.DECIMAL_SEP = '.';
      $delegate.NUMBER_FORMATS.GROUP_SEP = '.';
      return $delegate;
  }]);
}])
// short description
app.filter("cutDes", function(){
  return function(input){
    let output = input.split(" ");
    if(output.length > 15){
      let realstring = output.slice(0, output.length / 2)      
      return realstring.join(" ")      
    }else return output.join(" ")
  }
});

// gender filter
app.filter("genderFil", function(){
  return function(input, unisex, men, women){
    var output = []
    if(men == true || women == true || unisex == true){
      if(men == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].gender == 'men')[
            output.push(input[i])
          ]
        }      
      }
      if(women == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].gender == 'women')[
            output.push(input[i])
          ]
        }      
      }
      if(unisex == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].gender == 'unisex')[
            output.push(input[i])
          ]
        }      
      }     
      trueLength = output.length  
      return output;
    }else return input;            
  }
});

// shoes filter
app.filter("shoesFil", function(){
  return function(input, allstar, chuck70, elevation){
    var output = []
    if(allstar == true || chuck70 == true || elevation == true){
      if(allstar == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].type == 'All Star')[
            output.push(input[i])
          ]
        }      
      }
      if(chuck70 == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].type == 'Chuck 70')[
            output.push(input[i])
          ]
        }      
      }
      if(elevation == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].type == 'Elevation')[
            output.push(input[i])
          ]
        }      
      }
      return output;
    }else return input;            
  }
});

// type filter
app.filter("typeFil", function(){
  return function(input, elevation, hightop){
    var output = []
    if(elevation == true || hightop == true){
      if(elevation == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].shoestyle == 'elevation')[
            output.push(input[i])
          ]
        }      
      }
      if(hightop == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].shoestyle == 'hightop')[
            output.push(input[i])
          ]
        }      
      }
      return output;
    }else return input;            
  }
});

// catagories filter
app.filter("catagoriesFil", function(){
  return function(input, shoes, clothing, accessories){
    var output = []
    if(shoes == true || clothing == true || accessories == true){
      if(shoes == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].catagories == 'shoes')[
            output.push(input[i])
          ]
        }      
      }
      if(clothing == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].catagories == 'clothing')[
            output.push(input[i])
          ]
        }      
      }
      if(accessories == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].catagories == 'accessories')[
            output.push(input[i])
          ]
        }      
      }
      return output;
    }else return input;            
  }
});

// SIZE SHOES filter
app.filter("sizeShoesFil", function(){
  return function(input, US55, US65, US75, US8, US9, US5, US45, US7, US6, US10){
    var output = []
    if(US55 == true || US65 == true || US75 == true || US8 == true || US9 == true || US5 == true || US45 == true || US7 == true || US6 == true || US10 == true){
      if(US55 == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == 5.5)[
              output.push(input[i])
            ]
          }
        }      
      }
      if(US65 == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == 6.5)[
              output.push(input[i])
            ]
          }
        }      
      }
      if(US75 == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == 7.5)[
              output.push(input[i])
            ]
          }
        }      
      }
      if(US8 == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == 8)[
              output.push(input[i])
            ]
          }
        }      
      }
      if(US9 == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == 9)[
              output.push(input[i])
            ]
          }
        }      
      }
      if(US5 == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == 5)[
              output.push(input[i])
            ]
          }
        }      
      }
      if(US45 == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == 4.5)[
              output.push(input[i])
            ]
          }
        }      
      }
      if(US7 == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == 7)[
              output.push(input[i])
            ]
          }
        }      
      }
      if(US6 == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == 6)[
              output.push(input[i])
            ]
          }
        }      
      }
      if(US10 == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == 10)[
              output.push(input[i])
            ]
          }
        }      
      }          
      return output;
    }else return input;            
  }
});

// SIZE CLOTHING filter
app.filter("sizeClothingFil", function(){
  return function(input, USXS, UUS, USM, USL, ASIAS, ASIAM, ASIAL, ASIAXL, M, L){
    var output = []
    if(USXS == true || UUS == true || USM == true || USL == true || ASIAS == true || ASIAM == true || ASIAL == true || ASIAXL == true || M == true || L == true){
      if(USXS == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == "US XS")[
              output.push(input[i])
            ]
          }
        }      
      }
      if(UUS == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == "US S")[
              output.push(input[i])
            ]
          }
        }      
      }
      if(USM == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == "US M")[
              output.push(input[i])
            ]
          }
        }      
      }
      if(USL == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == "US L")[
              output.push(input[i])
            ]
          }
        }      
      }
      if(ASIAS == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == "ASIA S")[
              output.push(input[i])
            ]
          }
        }      
      }
      if(ASIAM == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == "ASIA M")[
              output.push(input[i])
            ]
          }
        }      
      }
      if(ASIAL == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == "ASIA L")[
              output.push(input[i])
            ]
          }
        }      
      }
      if(ASIAXL == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == "ASIA XL")[
              output.push(input[i])
            ]
          }
        }      
      }
      if(M == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == "M")[
              output.push(input[i])
            ]
          }
        }      
      }
      if(L == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == "L")[
              output.push(input[i])
            ]
          }
        }      
      }          
      return output;
    }else return input;            
  }
});

// SIZE ACCESSORIES filter
app.filter("sizeAccessoriesFil", function(){
  return function(input, ONESIZE, OSFA, SM, ML){
    var output = []
    if(ONESIZE == true || OSFA == true || SM == true || ML == true){
      if(ONESIZE == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == "ONE SIZE")[
              output.push(input[i])
            ]
          }
        }      
      }
      if(OSFA == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == "OSFA")[
              output.push(input[i])
            ]
          }
        }      
      }
      if(SM == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == "S/M")[
              output.push(input[i])
            ]
          }
        }      
      }
      if(ML == true){
        for(let i = 0; i < input.length; i++){
          for(let j = 0; j < input[i].size.length; j++){
            if(input[i].size[j] == "M/L")[
              output.push(input[i])
            ]
          }
        }      
      }       
      return output;
    }else return input;            
  }
});

// SHOES STYLE filter
app.filter("shoesStyleFil", function(){
  return function(input, elevation, hightop){
    var output = []
    if(elevation == true || hightop == true){
      if(elevation == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].shoestyle == "elevation")[
            output.push(input[i])
          ]
        }      
      }    
      if(hightop == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].shoestyle == "hightop")[
            output.push(input[i])
          ]
        }      
      }      
      return output;
    }else return input;            
  }
});

// SIZE CLOTHING filter
app.filter("colorFil", function(){
  return function(input, cBlack, cWhite, cRed, cBlackblue, cBrown, cCyan, cPink, cDarkblue, cPurple, cMoss, cGray, cGreen){
    var output = []
    if(cBlack == true || cWhite == true || cRed == true || cBlackblue == true || cBrown == true || cCyan == true || cPink == true || cDarkblue == true || cPurple == true || cMoss == true || cGray == true || cGreen == true){
      if(cBlack == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].color == "Black"){
            output.push(input[i])
          }   
        }      
      }     
      if(cWhite == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].color == "White"){
            output.push(input[i])
          }   
        }      
      }    
      if(cRed == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].color == "Red"){
            output.push(input[i])
          }   
        }      
      }    
      if(cBlackblue == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].color == "Black Blue"){
            output.push(input[i])
          }   
        }      
      }    
      if(cBrown == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].color == "Brown"){
            output.push(input[i])
          }   
        }      
      }    
      if(cCyan == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].color == "Cyan"){
            output.push(input[i])
          }   
        }      
      }    
      if(cPink == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].color == "Pink"){
            output.push(input[i])
          }   
        }      
      }    
      if(cDarkblue == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].color == "Dark Blue"){
            output.push(input[i])
          }   
        }      
      }    
      if(cPurple == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].color == "Purple"){
            output.push(input[i])
          }   
        }      
      }    
      if(cMoss == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].color == "Moss"){
            output.push(input[i])
          }   
        }      
      }      
      if(cGray == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].color == "Gray"){
            output.push(input[i])
          }   
        }      
      }    
      if(cGreen == true){
        for(let i = 0; i < input.length; i++){
          if(input[i].color == "Green"){
            output.push(input[i])
          }   
        }      
      }       
      return output;
    }else return input;            
  }
});

// RANGE  filter
app.filter("rangeFil", function(){
  return function(input, range){
    var output = []
    if(range > 0){      
      for(let i = 0; i < input.length; i++){
        if(input[i].price <= range)[
          output.push(input[i])
        ]
      }                  
      return output;
    }else return input;            
  }
});