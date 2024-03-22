let app = angular.module("myapp", ["ngRoute"]);

// link
app.config(function ($routeProvider){
  $routeProvider
  .when ("/home", {
    templateUrl: "home.html"
  })
  .when ("/forgotpw", {
    templateUrl: "forgotpw.html"
  })
  .when ("/allproducts/:idp", {
    templateUrl: "allproducts.html",
    controller: "allproductsCTRL"
  })
  .when ("/detail/:idp", {
    templateUrl: "detail.html",
    controller: "detailCTRL"
  })
  .when ("/favorite", {
    templateUrl: "favorite.html",
    controller: "favoriteCTRL"
  })
  .when ("/myaccount", {
    templateUrl: "myaccount.html",
    controller: "myaccountCTRL"
  })
  .when ("/accountinfo", {
    templateUrl: "accountinfo.html",
    controller: "accountinfoCTRL"
  })
  .when ("/checkout", {
    templateUrl: "checkout.html",
    controller: "checkoutCTRL"
})
  .when ("/signin", {
    templateUrl: "signin.html",
    controller: "signinCTRL"
  })
  .otherwise ({
    redirectTo: "/home"
  })
});


app.controller('mCtrl1', function($scope, $rootScope, $http, $window, $anchorScroll){ 
  // read data
  $window.scrollTo(300, 800);
  $scope.ScrollTo = function () {
      // Scroll to Top of Page.
      $anchorScroll();
  }
  
  $rootScope.productsLen = 0;
  $scope.products = [];
  $rootScope.cart = [];
  $rootScope.user = [
    {
      fName: "Huy",
      lName: "Pham",
      birth: new Date("2022-03-25"),
      gender: "Male",
      pNumber: 84902993398,
      email: "huypgps30606@fpt.edu.vn",
      passWord: 123
    }
  ];
  $rootScope.favorite = [
    {
      email: "huypgps30606@fpt.edu.vn",      
      id: 15
    },
    {
      email: "huypgps30606@fpt.edu.vn",      
      id: 1
    },
    {
      email: "huypgps30606@fpt.edu.vn",      
      id: 21
    },
    {
      email: "huypgps30606@fpt.edu.vn",      
      id: 16
    },
    {
      email: "huypgps30606@fpt.edu.vn",      
      id: 2
    },
    {
      email: "huypgps30606@fpt.edu.vn",      
      id: 22
    },
    {
      email: "huypgps30606@fpt.edu.vn",      
      id: 17
    },
    {
      email: "huypgps30606@fpt.edu.vn",      
      id: 3
    },
    {
      email: "huypgps30606@fpt.edu.vn",      
      id: 23
    },
    {
      email: "huypgps30606@fpt.edu.vn",      
      id: 18
    },
    {
      email: "huypgps30606@fpt.edu.vn",      
      id: 4
    },
    {
      email: "huypgps30606@fpt.edu.vn",      
      id: 24
    },
    {
      email: "huypgps30606@fpt.edu",      
      id: 22
    }
  ];

  $http.get("./json/main.json")
  .then(function (response){             
    $scope.products = response.data;
    // color variant    
    $scope.colorVari = function(sp){   
      let me = 1   
      for (let i = 0; i < $scope.products.length; i++) {
          if($scope.products[i].name == sp.name && $scope.products[i].id != sp.id && $scope.products[i].shoestyle == sp.shoestyle){
            me++            
          }
      }            
      return me
    }        
  }).catch(function(err){
    console.log(err);
  });


  // password filter and backgournd color
  $scope.passWordFilter = function(input){
    if(input != undefined){
      if(input.length < 9){      
        return "Password Weak"    
      }else if(input.length >= 9){      
        return "Password Strong"    
      }
    }else return "No Password"      
  }
  $scope.passWordFilterBG = function(input){
    if(input != undefined){
      if(input.length < 9){      
        return "bg-danger-subtle"    
      }else if(input.length >= 9){      
        return "bg-success-subtle"    
      }
    }else return "bg-transparent"      
  }
  // cal total
  $scope.calTotal = function(){
    let total = 0
    for (let i = 0; i < $scope.cart.length; i++) {
      total += $scope.cart[i].price * $scope.cart[i].quantity  
    }  
    return total;
  }
  // cal quantity
  $scope.calQuantity = function(){
    let total = 0
    for (let i = 0; i < $scope.cart.length; i++) {
      total += $scope.cart[i].quantity  
    }  
    return total;
  }

  // delete cart
  $scope.deleteCart = function(sp){            
    for(let i = 0; i < $scope.cart.length; i++){
        if($scope.cart[i].id == sp.id){                    
            $scope.cart.splice(i, 1);
            break
        }
    }
  }

  //sign in
  $scope.checkValid = true
  $scope.checkValidUser = true
  $scope.currentUser = {};
  const myModal = new bootstrap.Modal('#exampleModal')  
  
  $scope.checkLogInEmpty = function(){
    if($scope.signEmail == undefined || $scope.signPW == undefined){
      return true
    }else return false
  }

  $scope.logIn = function(){
    for(let i = 0; i < $rootScope.user.length; i++){
      if($scope.signEmail == $rootScope.user[i].email && $scope.signPW == $rootScope.user[i].passWord){        
        $scope.checkValid = true
        $scope.checkValidUser = false
        $scope.currentUser = $rootScope.user[i]                                
        myModal.hide()
        return     
      }
    } 
    console.log("fail");
    $scope.checkValid = false    
    $scope.checkValidUser = true
  }

  $scope.logOut = function(){
    $scope.checkValidUser = true
    $scope.currentUser = {};
  }

  // check out
  $scope.checkOutCheck = function(){
    myModal.show()
  }
});

//all products
app.controller('allproductsCTRL', function($scope, $rootScope, $routeParams){
   // price order
   $scope.priceOrders = [
    {
      pOrder: "Relevance",
      value: 'true'
    },
    {
      pOrder: "Lowest price",
      value: 'price'
    },
    {
      pOrder: "Highest price",
      value: '-price'
    },
    {
      pOrder: "Newest first",
      value: 'true'
    }];

  $scope.priceOrder = $scope.priceOrders[0];

  // hide filter
  $scope.hideFilter = true
  $scope.hideFilterCol = 'col-md-9 col-12'
  $scope.hideFilterFunc = function(){
    if($scope.hideFilter == true){
      $scope.hideFilter = false
      $scope.hideFilterCol = 'col-md-12 col-12'
    }else{
      $scope.hideFilter = true
      $scope.hideFilterCol = 'col-md-9 col-12'
    }
  }
  // nav
  $routeParams.idp; 
  $scope.navImage = '';
  $scope.navTitle = '';
  $scope.hideNavChuck70 = false
  $scope.hideNavClassic = false
  $scope.hideNavElevation = false
  $scope.hideNavMen = false
  $scope.hideNavWomen = false
  $scope.allProd = []
  switch ($routeParams.idp) {
    case '1':
      $scope.navImage = 'CTAS_CRUISE_1.jpg';
      $scope.navTitle = 'Chuck Taylor All Star Cruise';
      $scope.allProd = $scope.products
      break;
    case '2':
      $scope.navImage = 'Chuck_70_Main.jpg';
      $scope.navTitle = 'Chuck 70';
      $scope.hideNavChuck70 = true
      for (let i = 0; i < $scope.products.length; i++) {        
        if($scope.products[i].type == 'Chuck 70'){
          $scope.allProd.push($scope.products[i])
        }
      }
      break;
    case '3':
      $scope.navImage = 'classic_chuck_9.jpg';
      $scope.navTitle = 'Classic Chuck Taylor';
      $scope.hideNavClassic = true
      for (let i = 0; i < $scope.products.length; i++) {        
        if($scope.products[i].type == 'All Star'){
          $scope.allProd.push($scope.products[i])
        }
      }
      break;
    case '4':
      $scope.navImage = 'Elevation_Main.jpg';
      $scope.navTitle = 'Elevation';
      $scope.hideNavElevation = true
      for (let i = 0; i < $scope.products.length; i++) {        
        if($scope.products[i].type == 'Elevation'){
          $scope.allProd.push($scope.products[i])
        }
      }
      break;
    case '5':
      $scope.navImage = 'men.jpeg';
      $scope.navTitle = "Converse Men's Collection";
      $scope.hideNavMen = true
      for (let i = 0; i < $scope.products.length; i++) {        
        if($scope.products[i].gender == 'men' || $scope.products[i].gender == 'unisex'){
          $scope.allProd.push($scope.products[i])
        }
      }
      break;
    case '6':
      $scope.navImage = 'Women_s_Shoes_1_.jpg';
      $scope.navTitle = "Converse Women's Collection";
      $scope.hideNavWomen = true
      for (let i = 0; i < $scope.products.length; i++) {        
        if($scope.products[i].gender == 'women' || $scope.products[i].gender == 'unisex'){
          $scope.allProd.push($scope.products[i])
        }
      }
      break;  
    case '7':
      $scope.navImage = 'Unisex.jpg';
      $scope.navTitle = "Unisex";
      $scope.allProd = $scope.products
      break;  
    default:
      break;
  }

  
  
})
// detail controller
app.controller('detailCTRL', function($scope, $routeParams, $rootScope){  
  // random product
  do {
    $scope.randomPro = Math.floor(Math.random() * 13);
  } while ($scope.randomPro > 8); 
  // PUSH ITEM
  $scope.id = $routeParams.idp;  
  
  $scope.sp = {}
  for (let pd of $scope.$parent.products) {        
    if(pd.id == $scope.id){
      $scope.sp = pd;
      break
    }
  }
   // color option
  $scope.colorOption = []  
  for (let pd of $scope.$parent.products) {        
    if(pd.name == $scope.sp.name && pd.id != $scope.sp.id && pd.shoestyle == $scope.sp.shoestyle){
      $scope.colorOption.push(pd)          
    }
  }
  console.log($scope.colorOption);
    

  // add to cart
  $scope.addToCart = function(){    
    $scope.spCart = {}
    let newID = ""
    let checkSP = false;

    newID = $scope.sp.id + "SIZE" + $scope.sizeDetail;
    $scope.spCart.id = newID;      
    $scope.spCart.idPD = $scope.sp.id
    $scope.spCart.image = $scope.sp.image
    $scope.spCart.price = $scope.sp.price
    $scope.spCart.name = $scope.sp.name
    $scope.spCart.color = $scope.sp.color
    $scope.spCart.realSize = $scope.sizeDetail;
    $scope.spCart.quantity = Number($scope.quantityDetail);  
            
    for(let i = 0; i < $rootScope.cart.length; i++){
        if($rootScope.cart[i].id == $scope.spCart.id){
            checkSP = true;            
            $rootScope.cart[i].quantity += Number($scope.quantityDetail);
            break
        }
    }
    if(!checkSP){             
      $rootScope.cart.push($scope.spCart)               
    }
  }
  // add to favorite
  $scope.addToFavorite = function(){
    $scope.spFavorite = {}
    let checkSP = false;
    $scope.spFavorite.email = $scope.currentUser.email
    $scope.spFavorite.id = $scope.sp.id

    for(let i = 0; i < $rootScope.favorite.length; i++){
      if($rootScope.favorite[i].id == $scope.spFavorite.id && $rootScope.favorite[i].email == $scope.spFavorite.email){
          checkSP = true;            
          break
      }
    }
    if(!checkSP){             
      $rootScope.favorite.push($scope.spFavorite)               
    }
  }
});

//signin controller
app.controller('signinCTRL', function($scope, $routeParams, $rootScope){
  const successModal = new bootstrap.Modal('#staticBackdrop2')  

  $scope.checkPassw = function(){
    if($scope.passWord != $scope.rePassword){
      return true
    }else return false
  }
  $scope.checkEmail = function(){
    for(let i = 0; i < $rootScope.user.length; i++){
      if($scope.email == $rootScope.user[i].email){        
        return true                
      }
    }    
    return false
  }
  $scope.register = function(){    
    $scope.newRegis = {}
    if($scope.fName != undefined && $scope.lName != undefined &&
      $scope.birth != undefined && $scope.gender != undefined && 
      $scope.pNumber != undefined && $scope.passWord != undefined &&
      $scope.rePassword != undefined && $scope.email != undefined){      
        console.log($scope.fName);
        console.log($scope.lName);
        console.log($scope.birth);
        console.log($scope.gender);
        console.log($scope.pNumber);
        console.log($scope.email);
        console.log($scope.passWord);
        console.log($scope.rePassword);

        
        if($scope.passWord == $scope.rePassword && $scope.checkEmail() == false){
          $scope.newRegis.fName = $scope.fName;
          $scope.newRegis.lName = $scope.lName;
          $scope.newRegis.birth = new Date($scope.birth);
          $scope.newRegis.gender = $scope.gender;
          $scope.newRegis.pNumber = $scope.pNumber;
          $scope.newRegis.email = $scope.email;
          $scope.newRegis.passWord = $scope.passWord;
          $rootScope.user.push($scope.newRegis)   
          console.log($rootScope.user);    
          successModal.show()        
        }
               
    }else return 0;
  }
})

// checkout ctrl
app.controller('checkoutCTRL', function($scope, $http, $rootScope){
  let activeLi = "border-top border-2 border-info"
  let activeBtn = "text-info"
  let activeSpan = "bg-info"
  let offLi = "bg-body-secondary"
  let offBtn = "text-secondary"
  let offSpan = "bg-secondary"
  $scope.fLi = activeLi
  $scope.fBtn = activeBtn
  $scope.fSpan = activeSpan

  $scope.sLi = offLi
  $scope.sBtn = offBtn
  $scope.sSpan = offSpan
  
  $scope.activeFTab = function(){
    $scope.fLi = activeLi
    $scope.fBtn = activeBtn
    $scope.fSpan = activeSpan
    $scope.fTab = "active show"   
    $scope.sTab = ""  

    $scope.sLi = offLi
    $scope.sBtn = offBtn
    $scope.sSpan = offSpan
  }

  $scope.activeSTab = function(){
    $scope.sLi = activeLi
    $scope.sBtn = activeBtn
    $scope.sSpan = activeSpan
    $scope.fTab = ""
    $scope.sTab = "active show"   

    $scope.fLi = offLi
    $scope.fBtn = offBtn
    $scope.fSpan = offSpan
  }
  $scope.fTab = "active show"   
  $scope.nextTab = function () {
    $scope.fTab = ""
    $scope.sTab = "active show"   
    
    $scope.sLi = activeLi
    $scope.sBtn = activeBtn
    $scope.sSpan = activeSpan

    $scope.fLi = offLi
    $scope.fBtn = offBtn
    $scope.fSpan = offSpan
  }
  $http.get('./json/address.json').then(
    function (res) {      
        $scope.dsAddress = res.data
    },
    function (res) {
        alert('Lỗi');
    }
  )
  $scope.checkOutCountry = "Viet Nam"
  $scope.showDis = false
  $scope.successDiscount = function(){
    $scope.discountCode = ""
    $scope.showDis = true
  }
  $scope.clearCart = function(){
    $rootScope.cart = []
  }
})
//myacount ctrl
app.controller('myaccountCTRL', function($scope, $routeParams, $rootScope){

})
// account info ctrl
app.controller('accountinfoCTRL', function($scope, $routeParams, $rootScope){ 
  $scope.checkPWShow = true
  $scope.changeAccInfo = function(){
    console.log($scope.currentUser);
    for (let index = 0; index < $rootScope.user.length; index++) {
      if ($scope.currentUser.email == $rootScope.user[index].email) {
        $rootScope.user[index] = $scope.currentUser
        console.log($rootScope.user[index]);
        break
      }
      
    }
  }
  $scope.checkPasswInfo = function(){
    if($scope.passWordInfo != $scope.rePasswordInfo){
      return true
    }else return false
  }
  $scope.changePWInfo = function(){
    if($scope.passWordInfo == $scope.rePasswordInfo && $scope.passWordInfo != $scope.currentUser.passWord){
      for (let index = 0; index < $rootScope.user.length; index++) {
        if ($scope.currentUser.email == $rootScope.user[index].email) {
          $scope.currentUser.passWord = $scope.passWordInfo
          $rootScope.user[index] = $scope.currentUser
          console.log($rootScope.user[index]);
          break
        }        
      }
    }        
  }
  $scope.checkEmailInfo = function(){
    for(let i = 0; i < $rootScope.user.length; i++){
      if($scope.emailInfo == $rootScope.user[i].email){        
        return true                
      }
    }    
    return false
  }
  $scope.changeEmailInfo = function(){    
    for (let index = 0; index < $rootScope.user.length; index++) {
      if ($scope.currentUser.email == $rootScope.user[index].email) {
        $scope.currentUser.email = $scope.emailInfo
        $rootScope.user[index] = $scope.currentUser
        console.log($rootScope.user[index]);
        break
      }        
    }    
    $scope.emailInfo = undefined
    $scope.checkEmailShow = false
  }
})
// favorite ctrl
app.controller('favoriteCTRL', function($scope, $routeParams, $rootScope){
  $scope.userFavo = [];

  for (let i = 0; i < $rootScope.favorite.length; i++) {    
    if($scope.currentUser.email == $rootScope.favorite[i].email){
      for (let j = 0; j < $scope.products.length; j++) {        
        if($rootScope.favorite[i].id == $scope.products[j].id){
          $scope.userFavo.push($scope.products[j])
        }
      }  
    }          
  }

  $scope.removeFavo = function(idFavo){
    for (let i = 0; i < $rootScope.favorite.length; i++) {    
      if($scope.currentUser.email == $rootScope.favorite[i].email && $rootScope.favorite[i].id == idFavo){
        $rootScope.favorite.splice(i, 1);
        break
      }          
    }
    console.log($rootScope.favorite);
    $scope.updateFavo();
  }
  $scope.updateFavo = function(){
    $scope.userFavo = [];
    for (let i = 0; i < $rootScope.favorite.length; i++) {    
      if($scope.currentUser.email == $rootScope.favorite[i].email){
        for (let j = 0; j < $scope.products.length; j++) {        
          if($rootScope.favorite[i].id == $scope.products[j].id){
            $scope.userFavo.push($scope.products[j])
          }
        }  
      }          
    }
  }
  // panigation
  $scope.limitOrders = [
    {
      iOrder: "10",
      value: 10
    },
    {
      iOrder: "20",
      value: 20
    },
    {
      iOrder: "50",
      value: 50
    }];

  $scope.limitOrder = $scope.limitOrders[0];


  $scope.begin = 1;
  $scope.pageCount = Math.ceil($scope.userFavo.length / 4)

  $scope.page = 1;  

  $scope.start = ($scope.page - 1) * $scope.limitOrder.value;
  $scope.tongTrang = Math.ceil($scope.userFavo.length / $scope.limitOrder.value);


  $scope.danhSachTrang = [];
  for (var i = 1; i <= $scope.tongTrang; i++) {
      $scope.danhSachTrang.push(i);
  }
  console.log($scope.danhSachTrang);
  $scope.rePage = function (){
    $scope.start = ($scope.page - 1) * $scope.limitOrder.value;
    $scope.tongTrang = Math.ceil($scope.userFavo.length / $scope.limitOrder.value);


    $scope.danhSachTrang = [];
    for (var i = 1; i <= $scope.tongTrang; i++) {
        $scope.danhSachTrang.push(i);
    }
    console.log($scope.danhSachTrang);
  }


  $scope.chonTrang = function (trang) {
      $scope.page = trang;
      $scope.start = ($scope.page - 1) * $scope.limitOrder.value;
  }
  $scope.luiTrang = function () {
      if ($scope.page > 1) {
          $scope.page--;
          console.log($scope.page);
          $scope.start = ($scope.page - 1) * $scope.limitOrder.value;
      }
      else {
          $scope.page = $scope.tongTrang;
          console.log($scope.page);
          $scope.start = ($scope.page - 1) * $scope.limitOrder.value;
      }

  }
  $scope.tangTrang = function () {
      if ($scope.page >= $scope.tongTrang) {
          $scope.page = 1;
          $scope.start = ($scope.page - 1) * $scope.limitOrder.value;
      }
      else {
          $scope.page++;
          console.log($scope.page);
          $scope.start = ($scope.page - 1) * $scope.limitOrder.value;
      }

  }
})
