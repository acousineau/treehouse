angular.module('treehouseCourse', [])
  .controller('stageCtrl', function ($scope, $http) {
    $scope.user = {
      name: "world",
      bio: ""
    };

    $http.get('markdown.md').success(function (bio) {
      $scope.user.bio = bio;
    });
  })
  .directive('hallo', function () {
    return {
      require: 'ngModel', 
      link: function ($scope, $element, $attrs, ngModelCtrl) {
        $element.hallo({
          plugins: {
            'halloformat': {},
            'halloblock': {},
            'hallojustify': {},
            'hallolists': {},
            'halloreundo': {}
          }
        });
        
        var converter = new Showdown.converter();
        var formatter = function (markdown) {
          return converter.makeHtml(markdown);
        }
        
        ngModelCtrl.$formatters.push(formatter);
        
        var parser = function (html) {
          return toMarkdown(html);
        }
        
        ngModelCtrl.$parsers.push(parser);

        ngModelCtrl.$render = function () {
          var contents = ngModelCtrl.$viewValue;
          $element.hallo('setContents', contents);
        }

        $element.on('hallomodified', function () {
          var contents = $element.hallo('getContents');
          ngModelCtrl.$setViewValue(contents);
          $scope.$digest();
        });
      }
    }
  });