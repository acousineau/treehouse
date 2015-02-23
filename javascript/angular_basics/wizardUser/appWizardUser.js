angular.module('treehouseCourse', [])
  .controller('stageFiveCtrl', function ($scope) {
    $scope.step = 1;

    $scope.advance = function () {
      $scope.step++;
    }
  })
  .factory('User', function () {
    var user = {
      username: "",
      password: ""
    }

    return {
      get: function () {
        return user;
      }
    }
  })
  .controller('surveyCtrlOne', function ($scope, User) {
    $scope.user = User.get();
  })
  .controller('surveyCtrlTwo', function ($scope, User) {
    $scope.user = User.get();
  })
  .factory('uniqueness', function () {
    var usernames = [
      'treehouse',
      'mrvdot',
      'angular'
    ];

    return {
      taken: function (name) {
        return usernames.indexOf(name) >= 0;
      }
    }
  })
  .directive('uniqueCheck', function (uniqueness) {
    return {
      require: 'ngModel',
      link: function ($scope, $element, $attrs, ngModelCtrl) {
        //Parser that takes in a value
        var checkUnique = function (name) {
          // Determines if name is taken
          var isValid = !uniqueness.taken(name);

          // Validates name - takes 2 parameters
          // 1) Error name or type
          // 2) Whether it's valid (true or false)
          ngModelCtrl.$setValidity('unique', isValid);
          return name;
        }

        ngModelCtrl.$parsers.push(checkUnique);
      }
    }
  })
  .controller('DebugCtrl', function ($scope, User) {
    $scope.user = User.get();
  });