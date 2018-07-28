angular.module('myApp').controller('mainController', function ($scope) {


    
    
  
    $scope.visibleTaskArr = [
        { checkedStatus: true, text: 'i am a task' },
        { checkedStatus: false, text: 'i am also a task' }
    ];
   
    

    /**
     * 
     * @param {*} taskIndex index of task in the list
     * @param {*} currentCheckedStatus  checked status of the clicked checkbox
     * @desc changes the cuurrentCheckedStatus of the selected checkbox
     */
    $scope.handleCheckboxClick = function(taskIndex, currentCheckedStatus){
        if(taskIndex === undefined){
            throw 'task index is invalid';
        }
        if(currentCheckedStatus === undefined){
            throw 'currentCheckedStatus is invalid';
        }
        $scope.visibleTaskArr[taskIndex].checkedStatus = !currentCheckedStatus;
    }
    $scope.toAdd = function(){
        $scope.visibleTaskArr.push({text: $scope.todoInput, checkedStatus:$scope.handleCheckboxClick});
        $scope.todoInput = "";
    };
 
    $scope.remove = function() {
        var oldList = $scope.visibleTaskArr;
        $scope.visibleTaskArr = [ ];
        angular.forEach(oldList, function(x) {
            if (!x.checkedStatus) $scope.visibleTaskArr.push(x);
        });
    };
    $scope.openGroup = function(groupNumber) {
        var i;
        var x = document.getElementsByClassName("group");
        for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";  
        }
        document.getElementById(groupNumber).style.display = "block";  
    }

});