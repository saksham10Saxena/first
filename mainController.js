angular.module('myApp').controller('mainController', function ($scope) {



    $scope.taskArr = [
        { checkedStatus: true, text: 'i am a task' },
        { checkedStatus: false, text: '2 i am also a task' }
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
        $scope.taskArr[taskIndex].checkedStatus = !currentCheckedStatus;
    }


});