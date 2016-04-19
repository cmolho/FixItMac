/**
 * Created by codymolho on 2/23/16.
 */

angular.module('starter.controllers', [])

  .controller('MainCtrl', function($scope, $state, $stateParams, Printers, LocationCategories) {
    Printers.query().$promise.then(function(data) {
      console.log($scope);
      $scope.printers = data;
    });
    console.log($scope.printers);

    LocationCategories.query().$promise.then(function(data) {
      console.log($scope);
      $scope.locationCategories = data;
    });
    console.log($scope.locationCategories);
  })

  .controller('ProfileCtrl', function($scope, $stateParams, $ionicPopup, Printers, Status, SetIssue, Email) {
    Printers.get({id:$stateParams.id}).$promise.then(function(data) {
      console.log($scope);
      $scope.printer = data;
    });
    console.log($scope.printer);

    Status.get({id:$stateParams.id}).$promise.then(function(data) {
      console.log($scope);
      $scope.status = data;
    });
    console.log($scope.status);

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
          emailText = emailText + "\nPlease click the link below when the problem is fixed:\n\tLINK\n\nThank you!\n\nBest,\nFixItMac";
          //Email.send({text:emailText}); ///TODO uncomment to send email

          //Sends the user to a random rewards page
          numbs = [1,2];
          //var rand = numbs[Math.floor(Math.random() * numbs.length)];
          var rand = 2;  //TODO: use this to test out rewards pages you make
          if (rand === 1) {
            document.location.href = "#/rewardDog/";
          }
          else if (rand === 2) {
            document.location.href = "#/rewardCat/";
          }
        }
      });
    };
  })

  .controller('RewardCtrl', function($scope, $state, $stateParams) {})
  .controller('InfoCtrl', function($scope, $state, $stateParams) {})
;
