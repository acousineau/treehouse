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
        
        // Add formatter to convert markdown into HTML
        // From data to user
        var converter = new Showdown.converter();
        var formatter = function (markdown) {
          return converter.makeHtml(markdown);
        }
        
        // Add formatter to $formatters Array
        ngModelCtrl.$formatters.push(formatter);
        
        // Add parser to ensure the BIO is stored in markdown after editing
        // From user to data
        var parser = function (html) {
          return toMarkdown(html);
        }
        
        // Add parser to $parsers Array
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