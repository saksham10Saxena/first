angular.module('myApp').controller('mainController', function ($scope) {


    
    
  
    $scope.visibleTaskArr = [
        { checkedStatus: true, text: 'i am a task' },
        { checkedStatus: false, text: 'i am also a task' }
    ];
   
    $scope.groupArr = [
        { name: Group-1, taskArr:[{ checkedStatus: true, text: 'i am a task' }, {checkedStatus: false, text: 'i am also a task' }]},
        { name: Group-2, taskArr:[{ checkedStatus: true, text: 'i am a task' }, {checkedStatus: false, text: 'i am also a task' }]}
    ];

    $scope.groupAdd = function(){
        $scope.groupArr.push({name=$scope.groupnameInput});
        $scope.groupnameInput = "";
    };
    $scope.selectedGroup(selectedGroupIndex) = function() {
        $scope.visibleTaskArr = selectedGroup.taskArr;
    }


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
 

});