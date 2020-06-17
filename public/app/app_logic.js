app.controller('EmpCtrl', function($scope, Emp, User, ngProgress, toaster) {

$scope.emp = new Emp();
$scope.resultCtrl = false;
$scope.fillCtrl = true;

// Login related
$scope.user = new User();
$scope.login = true;
$scope.isValidated=false;
$scope.login_error=false;
$scope.signup_error=false;


var refresh = function() {
  $scope.emps = Emp.query(); 
  $scope.emp ="";
}

$scope.add = function(emp) {

  Emp.save(emp,function(emp){
    refresh();
  });
};

$scope.update = function(emp) {
  emp.$update(function(){
    refresh();
  });
};

$scope.remove = function(emp) {
  emp.$delete(function(){
    refresh();
  });
};

$scope.edit = function(id) {
  $scope.emp = Emp.get({ id: id });
  $scope.resultCtrl = false;
  $scope.fillCtrl = true;
  $scope.viewCtrl = false;
};  

$scope.view = function(id) {
  $scope.resultCtrl = false;
  $scope.fillCtrl = false;
  $scope.viewCtrl = true;
  $scope.emp = Emp.get({ id:id });
}

$scope.deselect = function() {
  $scope.emp = "";
}

$scope.ShowFill = function(){
  $scope.emp ="";
  $scope.resultCtrl = false;
  $scope.fillCtrl = true;
  $scope.viewCtrl = false;
  //refresh();
}

$scope.ShowResult = function(){
  $scope.resultCtrl = true;
  $scope.fillCtrl = false;
  $scope.viewCtrl = false;
  //refresh();
}

$scope.log = function(){
  $scope.login=true;
}

$scope.signup = function(){
  $scope.login=false;
}
var refreshlogin = function() {
  $scope.users = User.query(); 
  $scope.user ="";
}
refreshlogin();


$scope.Validate = function(){

  $scope.temp = $scope.users.filter(function(usr){
    return (usr.manager_id == $scope.user.manager_id && usr.password== $scope.user.password)
  })

  if($scope.temp.length != 0){
    console.log('success');
    $scope.isValidated=true;
    $scope.login_error=false;
    refresh();
    }else{
    $scope.login_error=true;
  }

}

$scope.AddUser = function(){
  User.save($scope.user,function(user){
    $scope.login=true;
    refreshlogin();
  });
}

});