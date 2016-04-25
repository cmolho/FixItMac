/**
 * Created by codymolho on 2/23/16.
 */

angular.module('starter.controllers', [])

  .controller('MainCtrl', function($scope, $state, $stateParams, Printers, LocationCategories) {
    Printers.query().$promise.then(function(data) {
      $scope.printers = data;
    });
    //console.log($scope.printers); //debugging

    LocationCategories.query().$promise.then(function(data) {
      $scope.locationCategories = data;
    });
    //console.log($scope.locationCategories); //debugging

    //Spinning refresh pull down
    $scope.doRefresh = function() {
      Printers.query().$promise.then(function(data) {
        $scope.printers = data;
      });

      LocationCategories.query().$promise.then(function(data) {
        $scope.locationCategories = data;
      });

      $scope.$broadcast('scroll.refreshComplete');
    }
  })

  .controller('ProfileCtrl', function($scope, $stateParams, $ionicPopup, Printers, Status, SetIssue, Email) {
    Printers.get({id:$stateParams.id}).$promise.then(function(data) {
      //console.log($scope);
      $scope.printer = data;
    });
    //console.log($scope.printer); //debugging

    Status.get({id:$stateParams.id}).$promise.then(function(data) {
      //console.log($scope);
      $scope.status = data;
    });
    //console.log($scope.status);

    $scope.showConfirm = function(paper, ink, jam, other) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Are you sure?',
        template: 'An automatic email will be generated to ITS if you report.',
        cancelText:'Cancel',
        okText: 'Yes'
      });

      //User confirms they want to report issue. Email generated and then user redirected to random reward page
      confirmPopup.then(function(result) {
        if(result) {
          var emailText = "The following printer issue has been reported to FixItMac:\n"
            +"\nLocation: " + $scope.printer.printerLocation
            +"\nPrinter Name: " + $scope.printer.printerName
            +"\nProblem(s): \n";
          if (paper) {
            SetIssue.post({id:$stateParams.id,issue:"paperStatus"});
            emailText = emailText + "\tOut Of Paper\n";
          }
          if (ink) {
            SetIssue.post({id:$stateParams.id,issue:"inkStatus"});
            emailText = emailText + "\tOut Of Ink\n"
          }
          if (jam) {
            SetIssue.post({id:$stateParams.id,issue:"jamStatus"});
            emailText = emailText + "\tPaper Jam\n"
          }
          if (other) {
            SetIssue.post({id:$stateParams.id,issue:"otherStatus"});
            emailText = emailText + "\tOther Issue\n"
          }
          var link = "http://fixitmac.herokuapp.com/printers/"+$scope.printer.printerID+"/setworking";
          emailText = emailText + "\nPlease click the link below when the problem is fixed:\n\t"
            + link + "\n\nThank you!\n\nBest,\nFixItMac";
          //var emailAddress = "cmolho@macalester.edu";
          //Email.send({text:emailText, address:emailAddress}); ///TODO uncomment to send email
          document.location.href= "#/reward/";
        }
      });
    };
  })

  .controller('RewardCtrl', function($scope, $state, $stateParams) {



    //Sends the user to a random rewards page
    numbs = [1, 2, 3, 4, 5, 6, 7, 8];
    var rand = numbs[Math.floor(Math.random() * numbs.length)];
    if (rand === 1) {
      $scope.rewardImg = "img/cat.jpg";
      $scope.textToShow = "Here is a picture of a kitty for reporting the issue.";
    }
    else if (rand === 2) {
      $scope.rewardImg = 'img/printerJoke.png';
      $scope.textToShow = "Please enjoy this joke as our thanks for reporting the issue!";
    }
    else if (rand === 3) {
      $scope.rewardImg = 'img/copierJoke.jpeg';
      $scope.textToShow = "Please enjoy this joke as our thanks for reporting the issue!";
    }
    else if (rand === 4) {
      $scope.rewardImg = 'img/puppy.png';
      $scope.textToShow = "Here is a picture of a puppy for reporting the issue.";
    }
    else if (rand === 5) {
      $scope.rewardImg = 'img/squirrel.jpg';
      $scope.textToShow = "Here is a picture of a mischievous squirrel for reporting the issue!";
    }
      else if (rand === 6) {
      $scope.rewardImg = 'img/1.jpg';
      $scope.textToShow = "Here is a fortune cookie as our thanks for reporting the issue!";
    }
      else if (rand === 7) {
      $scope.rewardImg = 'img/2.jpg';
      $scope.textToShow = "Here is a fortune cookie as our thanks for reporting the issue!";
    }
      else if(rand === 8) {
      $scope.rewardImg = 'img/6.jpg';
      $scope.textToShow = "Here is a fortune cookie as our thanks for reporting the issue!";
    }
    else {
      $scope.rewardImg = 'img/tonerJoke.jpg';
      $scope.textToShow = "Please enjoy this joke as our thanks for reporting the issue!";
    }

  })
  .controller('InfoCtrl', function($scope, $state, $stateParams) {})
;
