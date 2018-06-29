angular.module('myApp').controller('mainController', function ($scope) {



    $scope.taskArr = [
        { checkedStatus: true, text: 'i am a task' },
        { checkedStatus: false, text: '2 i am also a task' }
    ];

});