function initMap() {
          //------------- LATITUDE and LONGITUDE OF SPECIFIC PLACES----------\\

var northwood_latlng =new google.maps.LatLng( 44.657286,-63.591899);
var superstore_latlng =new google.maps.LatLng( 44.658522,-63.605578);
var sobeys_latlng =new google.maps.LatLng( 44.653432,-63.599177);
var micmac_latlng =new google.maps.LatLng( 44.686369,-63.559354);
var hsc_latlng =new google.maps.LatLng(  44.649249,-63.618682);
var checker_latlng = new google.maps.LatLng( 44.631310,-63.581781);
     
        //---------------END--------------\\

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: northwood_latlng 
        });
        
        var infoWindow = new google.maps.InfoWindow;
        
        //-----------------INFO-WINDOWS---------------\\
        
        var infowindow_1 = new google.maps.InfoWindow({
            content: 'NORTHWOOD'
        });
        var infowindow_2 = new google.maps.InfoWindow({
            content: 'ATLANTIC-SUPERSTORE'
        });
        var infowindow_3 = new google.maps.InfoWindow({
            content: 'SOBEYS-NORTH'
        });
        var infowindow_4 = new google.maps.InfoWindow({
            content: '<textarea placeholder="enter list"></textarea>'
        });
        
        var infowindow_5 = new google.maps.InfoWindow({
            content: 'HALIFAX SHOPPING CENTER'
        });
        
         var infowindow_6 = new google.maps.InfoWindow({
            content: 'Checker'
        });
        
        //----------------END----------------\\
        
        //----------LOCATION-MARKERS---------\\

        var marker_1 = new google.maps.Marker({
          position: northwood_latlng,
          map: map,
          title: 'Northwood'
        });
      
        var marker_2 = new google.maps.Marker({
          position: superstore_latlng,
          map: map,
          title: 'ATLANTIC SUPER-STORE'
        });
        
        var marker_3 = new google.maps.Marker({
          position: sobeys_latlng,
          map: map,
          title: 'SOBEYS NORTH'
        });
        
        var marker_4 = new google.maps.Marker({
          position: micmac_latlng,
          map: map,
          title: 'MIC-MAC MALL'
        });
        
        var marker_5 = new google.maps.Marker({
          position: hsc_latlng,
          map: map,
          title: 'HALIFAX SHOPPING CENTER'
        });
        
         var marker_6 = new google.maps.Marker({
          position: checker_latlng,
          map: map,
          title: 'Checker'
        });

        
        //-------------END--------------\\
        
        //-------------INFO-WINDOWS FUNCTIONs-----------\\
        marker_1.addListener('click', function() {
          infowindow_1.open(map, marker_1);
        });                
                 marker_2.addListener('click', function() {
          infowindow_2.open(map, marker_2);
        });
                 marker_3.addListener('click', function() {
          infowindow_3.open(map, marker_3);
        });
                 marker_4.addListener('click', function() {
          infowindow_4.open(map, marker_4);
        });
                 marker_5.addListener('click', function() {
          infowindow_5.open(map, marker_5);
        });
                 marker_6.addListener('click', function() {
          infowindow_6.open(map, marker_6);
          $('#myModal').modal('show');
        });
                 
                 //----------------END---------------\\

                 //----------GettingMy LOcation--------\\

var options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};
 
 var pos;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.watchPosition(function(position) {
             pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
             var marker1 = new google.maps.Marker({
          position: pos,
          map: map
  
        });

           infoWindow.setPosition(pos);
            infoWindow.setContent('You are Here.');
          infoWindow.open(map,marker1);
            map.setCenter(pos);
            
            
          
            
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          },options);
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
        
        //-----------CHECKER and POP-----------------\\
        
       //------------Pop Up When Destination Reached----------//

        if (navigator.geolocation){
  navigator.geolocation.watchPosition(
            function(position) {
                var latLngA = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                var t = 100;
                var distance_1 = google.maps.geometry.spherical.computeDistanceBetween(latLngA,northwood_latlng );
                 var distance_2 = google.maps.geometry.spherical.computeDistanceBetween(latLngA,superstore_latlng );
                  var distance_3 = google.maps.geometry.spherical.computeDistanceBetween(latLngA,sobeys_latlng );
                   var distance_4 = google.maps.geometry.spherical.computeDistanceBetween(latLngA,micmac_latlng );
                    var distance_5 = google.maps.geometry.spherical.computeDistanceBetween(latLngA,hsc_latlng );
                     var distance_6 = google.maps.geometry.spherical.computeDistanceBetween(latLngA,checker_latlng );
                if(distance_1<t){marker_1.setAnimation(google.maps.Animation.BOUNCE);
         infowindow_1.setContent('Destination Reached.');
     infowindow_1.open(map,marker_1);}
 
 else if(distance_2<t){marker_2.setAnimation(google.maps.Animation.BOUNCE);
         infowindow_2.setContent('Destination Reached.');
     infowindow_2.open(map,marker_2);}
 
 else if(distance_3<t){marker_3.setAnimation(google.maps.Animation.BOUNCE);
         infowindow_3.setContent('Destination Reached.');
     infowindow_3.open(map,marker_3);}
 
 else if(distance_4<t){marker_4.setAnimation(google.maps.Animation.BOUNCE);
         infowindow_4.setContent('Destination Reached.');
     infowindow_4.open(map,marker_4);}
 
 else if(distance_5<t){marker_5.setAnimation(google.maps.Animation.BOUNCE);
         infowindow_5.setContent('Destination Reached.');
     infowindow_5.open(map,marker_5);}
 
  else if(distance_6<t){marker_6.setAnimation(google.maps.Animation.BOUNCE);
         infowindow_6.setContent('Destination Reached.');
     infowindow_6.open(map,marker_6);}
     
 
 //In metres
            },
            function() {
                alert("geolocation not supported!!");
            }
    );}

            //------------END----------

};
      //END oF INNIT MAP FUNCTION------
      
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      };
      
      
      
      
      
      
      
      

    