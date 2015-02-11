var generateLocations = function(lat,lng){
        var numberOfPoints = randomNumber(0,15);

        var locations = [];

        for(var i=0;i<numberOfPoints;i++)
        {


            var lat = lat + randomVariation();
            var lng = lng + randomVariation();

            locations.push({lat:lat,lng:lng});

        }

        function randomVariation()
        {
          var variationScale = 0.01;
          //var variationFrom = 1*variationScale;
          //var variationTo =  10*variationScale;
          //var num = randomNumber(variationFrom,variationTo);
          var num = Math.random()*variationScale;
          num *= randomNumber(1,2) == 1 ? 1 : -1;
          return num;
        }



        function randomNumber(from,to){

          return Math.floor((Math.random() * to) + from);

        }

        return locations;


};

var getLocations = function(lat,lng){

var cabTypes = ["mini","sedan","prime"];
var result = {}

for(var i =0; i< cabTypes.length;i++){
  result[cabTypes[i]] = generateLocations(lat,lng);
}

  return result
}

module.exports = {get:getLocations};
