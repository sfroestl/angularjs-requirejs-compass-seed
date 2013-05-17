define([], function () {
  function twitterServiceFactory($http, $q) {

    console.log(">> TwitterServiceFactory");

    function getTimeLine(username) {
      var twitterApiUrl = "http://api.twitter.com/1/statuses/user_timeline.json";
      var config = {
        params : {
            screen_name: username
            , callback : "JSON_CALLBACK"
            , include_rts : true
            , count: 7
            , clientsource : "TWITTERINC_WIDGET"
            , "1340767850386": "cachebus"
        }
      };
      var promise = $http.jsonp( twitterApiUrl, config ).then(function (response) {
        console.log("--> ", response);
        return response.data;
      });
      return promise;
    }
    return {
      getTimeLine : getTimeLine
    }
  }
  // twitterServiceFactory.$inject = ["$http", "$q"];
  return twitterServiceFactory;
});


