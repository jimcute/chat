myApp.controller('listController', ['$scope', '$http',
    function($scope, $http) {
        $scope.items_old = [{
            id: 0
        }, {
            id: 1
        }, {
            id: 2
        }, {
            id: 3
        }, {
            id: 4
        }, {
            id: 5
        }, {
            id: 6
        }, {
            id: 7
        }, {
            id: 8
        }, {
            id: 9
        }, {
            id: 10
        }, {
            id: 11
        }, {
            id: 12
        }, {
            id: 13
        }, {
            id: 14
        }, {
            id: 15
        }, {
            id: 16
        }, {
            id: 17
        }, {
            id: 18
        }, {
            id: 19
        }, {
            id: 20
        }, {
            id: 21
        }, {
            id: 22
        }, {
            id: 23
        }, {
            id: 24
        }, {
            id: 25
        }, {
            id: 26
        }, {
            id: 27
        }, {
            id: 28
        }, {
            id: 29
        }, {
            id: 30
        }, {
            id: 31
        }, {
            id: 32
        }, {
            id: 33
        }, {
            id: 34
        }, {
            id: 35
        }, {
            id: 36
        }, {
            id: 37
        }, {
            id: 38
        }, {
            id: 39
        }, {
            id: 40
        }];


        var all_users = $http.get('/all-users');

        var ids=[];

        all_users.then(function(data){
            console.log(data);

            //ids.push(data.id);
            data.data = data.data.split(',');
            $scope.items = '';

            var uu = [];
           data.data.forEach(function(obj){
                console.log(obj)
                var index = obj.indexOf(socket.id);
                if (index > -1) {
                   obj.split(',').splice(index, 1);
               }
               uu.push(obj);
            });

            $scope.items = uu;
        })

         $scope.joinChat = function(id){
            //console.log('sss');

            var check = id;
        }

    }

    
]);
