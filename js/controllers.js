(function() {
  var app = angular.module('cv');

  app.controller('cvCtrl', ['$scope', '$http', '$log', '$filter', '$routeParams', '$location', '$translate',
    function($scope, $http, $log, $filter, $routeParams, $location, $translate) {
      var orderBy, orderedExperiences, lang;

      angular.extend($scope, {
        informations: {},
        loadLanguage: function(lang) {
          $translate.use(lang);
          $http.get('cv-' + lang + '.json').
          success(function(data) {
            $scope.informations = data;

            orderBy = $filter('orderBy');
            orderedExperiences = $scope.informations.professional_experience;

            $scope.position = orderedExperiences[0].title;
            $scope.current_company_name = orderedExperiences[0].company.name;
            $scope.current_company_url = orderedExperiences[0].company.url;
          }).
          error(function(data, status, headers, config) {
            $log.error(status);
          });
        }
      });

      if ($routeParams.lang === 'es') {
        lang = 'es';
      } else if ($routeParams.lang === 'en') {
        lang = 'en';
      } else {
        lang = 'es';
        $location.path('/es', false);
      }

      $scope.loadLanguage(lang);
    }
  ]);

  app.controller('navBarCtrl', ['$scope', '$translate', '$location', function($scope, $translate, $location) {
    $scope.changeLanguage = function(langKey) {
      $scope.loadLanguage(langKey);
      $scope.currentLanguage = $translate.use() === 'es' ? 'T_SPANISH' : 'T_ENGLISH';
      $scope.pdfFile = 'curriculum-jesuslc-' + $translate.use() + '.pdf';
      $location.path('/' + langKey, false);
    };
    $scope.pdfFile = 'curriculum-jesuslc-' + $translate.use() + '.pdf';
    $scope.currentLanguage = $translate.use() === 'es' ? 'T_SPANISH' : 'T_ENGLISH';
  }]);
})();
