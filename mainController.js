angular.module('myApp').controller('mainController', function ($scope) {


    
    $scope.groupArr = [
        { name: Group-4, taskArr:[{ checkedStatus: true, text: 'i am a task' }, {checkedStatus: false, text: 'i am also a task' }]},
        { name: Group-5, taskArr:[{ checkedStatus: true, text: 'i am a task' }, {checkedStatus: false, text: 'i am also a task' }]}

        
    ];
  
    $scope.visibleTaskArr = [
        { checkedStatus: true, text: 'i am a task' },
        { checkedStatus: false, text: 'i am also a task' }
    ];
    $scope.groupAdd = function(){
        $scope.groupArr.push({name=$scope.groupnameInput});
        $scope.groupnameInput = "";
    };
    $scope.selectedGroup(selectedGroupIndex) = function() {
        visibleTaskArr = selectedGroup.TaskArr;
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
        $scope.taskArr[taskIndex].checkedStatus = !currentCheckedStatus;
    }
    $scope.toAdd = function(){
        $scope.taskArr.push({text: $scope.todoInput, checkedStatus:$scope.handleCheckboxClick});
        $scope.todoInput = "";
    };
 
    $scope.remove = function() {
        var oldList = $scope.taskArr;
        $scope.taskArr = [ ];
        angular.forEach(oldList, function(x) {
            if (!x.checkedStatus) $scope.taskArr.push(x);
        });
    };
    function openGroup(groupNumber) {
        var i;
        var x = document.getElementsByClassName("group");
        for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";  
        }
        document.getElementById(groupNumber).style.display = "block";  
    }

});