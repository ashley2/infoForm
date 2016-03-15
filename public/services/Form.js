'use strict'

angular.module('formApp')
.factory("Form", function($http){
})

let Form = {};

Form.info = [];


Form.addInfo = (newInfo) => {

 $http.post('/info', newInfo)
 .then(function(res){
   Form.info = res.data;
 }, function(err){
   console.error(err);


 })
 
}