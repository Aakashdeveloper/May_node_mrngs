<html>
    <head>

    </head>
    <body>
        <button onclick="geolocation()">
            Get Location
        </button>
        <p id="output"></p>
        <script>
            var x = document.getElementById('output')
            function geolocation(){
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(showPosition)
                }else{
                    x.innerText="GeoLocation is not supported"
                }
            }

            function showPosition(position){
                x.innerHTML=`Latitide: ${position.coords.latitude} Longitude ${position.coords.longitude}    `
            }
        </script>
    </body>
</html>