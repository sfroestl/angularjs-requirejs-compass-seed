define(function () {
  function twitterCtrl ($scope, twitterService) {
    $scope.twitterUser = 'angularjs';
    fetchTimeline();


    function fetchTimeline() {
      var res = twitterService.getTimeLine($scope.twitterUser);
      console.log(">> fetchTimeline()");
      res.then(function(data) {
        console.log("resp:",data);
        $scope.timeline = data;
      }, function(error){
      });
    }
  }
  return twitterCtrl;
});