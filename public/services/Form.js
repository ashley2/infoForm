'use strict'

angular.module('formApp')
.factory("Form", function($http){
})

let Form = {};

Form.info = [];


Form.addInfo = (newInfo) => {
console.log('clicked')
 $http.post('/info', newInfo)
 .then(function(res){
console.log(1)
   Form.info = res.data;
 }, function(err){
   console.error(err);


 })

   return Form;
 
}