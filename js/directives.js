(function() {
  var app = angular.module('cv');

  function controllerFn() {
    this.toggle = false;
    this.show = function() {
      this.toggle = true;
    };
    this.hide = function() {
      this.toggle = false;
    };
  }

  // ------- cv-personalinfo DIRECTIVE
  app.directive('cvInfo', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/cv-info.html'
    };
  });

  // ------- cv-summary DIRECTIVE
  app.directive('cvSummary', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/cv-summary.html',
      controller: controllerFn,
      controllerAs: 'summaryCtrl'
    };
  });

  // ------- cv-experiences DIRECTIVE
  app.directive('cvExperiences', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/cv-experiences.html',
      controller: controllerFn,
      controllerAs: 'experiencesCtrl'
    };
  });

  // ------- cv-projects DIRECTIVE
  app.directive('cvProjects', [function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/cv-projects.html',
      controller: controllerFn,
      controllerAs: 'projectsCtrl'
    };
  }]);

  // ------- cv-education DIRECTIVE
  app.directive('cvEducation', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/cv-education.html',
      controller: controllerFn,
      controllerAs: 'educationCtrl'
    };
  });
  // ------- cv-skills DIRECTIVE
  app.directive('cvSkills', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/cv-skills.html',
      controller: controllerFn,
      controllerAs: 'skillsCtrl'
    };
  });

  // ------- cv-certifications DIRECTIVE
  app.directive('cvCertifications', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/cv-certifications.html',
      controller: controllerFn,
      controllerAs: 'certificationsCtrl'
    };
  });
  // ------- cv-languages DIRECTIVE
  app.directive('cvLanguages', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/cv-languages.html',
      controller: controllerFn,
      controllerAs: 'languagesCtrl'
    };
  });

})();
