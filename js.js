
function LayersChoice(){
var src = new Array();

var kfx = false;
var locality = false;
var road = false;
var borders = false;

src[4]= "https://timgislab.nextgis.com/resource/64/display/tiny?base=basemap_0&lon=130.8252&lat=61.5349&angle=0&zoom=7&styles=58&linkMainMap=true&events=false";
src[1]= "https://timgislab.nextgis.com/resource/64/display/tiny?base=basemap_0&lon=130.8252&lat=61.5349&angle=0&zoom=7&styles=56&linkMainMap=true&events=false";
src[2]= "https://timgislab.nextgis.com/resource/64/display/tiny?base=basemap_0&lon=130.8252&lat=61.5349&angle=0&zoom=7&styles=60&linkMainMap=true&events=false";
src[3]= "https://timgislab.nextgis.com/resource/64/display/tiny?base=basemap_0&lon=130.8252&lat=61.5349&angle=0&zoom=7&styles=62&linkMainMap=true&events=false";
src[0]= "https://timgislab.nextgis.com/resource/64/display/tiny?base=basemap_0&lon=131.0065&lat=61.5898&angle=0&zoom=8&styles=&linkMainMap=true&events=false" ;
src[5]= "https://timgislab.nextgis.com/resource/64/display/tiny?base=basemap_0&lon=130.8252&lat=61.5349&angle=0&zoom=7&styles=58%2C60&linkMainMap=true&events=false"
src[6]= "https://timgislab.nextgis.com/resource/64/display/tiny?base=basemap_0&lon=130.8252&lat=61.5349&angle=0&zoom=7&styles=56%2C58&linkMainMap=true&events=false"
src[7]= "https://timgislab.nextgis.com/resource/64/display/tiny?base=basemap_0&lon=130.8252&lat=61.5349&angle=0&zoom=7&styles=58%2C62&linkMainMap=true&events=false"
src[8]= "https://timgislab.nextgis.com/resource/64/display/tiny?base=basemap_0&lon=130.8252&lat=61.5349&angle=0&zoom=7&styles=56%2C60&linkMainMap=true&events=false"
src[9]= "https://timgislab.nextgis.com/resource/64/display/tiny?base=basemap_0&lon=130.8252&lat=61.5349&angle=0&zoom=7&styles=56%2C62&linkMainMap=true&events=false"
src[10]= "https://timgislab.nextgis.com/resource/64/display/tiny?base=basemap_0&lon=130.8252&lat=61.5349&angle=0&zoom=7&styles=60%2C62&linkMainMap=true&events=false"
src[11]= "https://timgislab.nextgis.com/resource/64/display/tiny?base=basemap_0&lon=130.8252&lat=61.5349&angle=0&zoom=7&styles=56%2C58%2C60&linkMainMap=true&events=false"
src[12]= "https://timgislab.nextgis.com/resource/64/display/tiny?base=basemap_0&lon=130.8252&lat=61.5349&angle=0&zoom=7&styles=56%2C58%2C62&linkMainMap=true&events=false"
src[13]= "https://timgislab.nextgis.com/resource/64/display/tiny?base=basemap_0&lon=130.8252&lat=61.5349&angle=0&zoom=7&styles=58%2C60%2C62&linkMainMap=true&events=false"
src[14]= "https://timgislab.nextgis.com/resource/64/display/tiny?base=basemap_0&lon=130.8252&lat=61.5349&angle=0&zoom=7&styles=56%2C60%2C62&linkMainMap=true&events=false"
src[15]= "https://timgislab.nextgis.com/resource/64/display/tiny?base=basemap_0&lon=130.8252&lat=61.5349&angle=0&zoom=7&styles=56%2C58%2C60%2C62&linkMainMap=true&events=false"

var check_kfx = document.getElementById('check_kfx');
check_kfx.onclick=function(){
    if(kfx==true){kfx=false; check_kfx.style.borderColor='red'}
    else{kfx=true; check_kfx.style.borderColor='green'};
    if(kfx==true && locality==false && road==false && borders==false){document.getElementById('map').src = src[4];}
    if(kfx==false && locality==true && road==false && borders==false){document.getElementById('map').src = src[1];}
    if(kfx==false && locality==false && road==true && borders==false){document.getElementById('map').src = src[2];}
    if(kfx==false && locality==false && road==false && borders==true){document.getElementById('map').src = src[3];}
    if(kfx==true && locality==false && road==true && borders==false){document.getElementById('map').src = src[5];}
    if(kfx==true && locality==true && road==false && borders==false){document.getElementById('map').src = src[6];}
    if(kfx==true && locality==false && road==false && borders==true){document.getElementById('map').src = src[7];}
    if(kfx==false && locality==true && road==true && borders==false){document.getElementById('map').src = src[8];}
    if(kfx==false && locality==true && road==false && borders==true){document.getElementById('map').src = src[9];}
    if(kfx==false && locality==false && road==true && borders==true){document.getElementById('map').src = src[10];}
    if(kfx==true && locality==true && road==true && borders==false){document.getElementById('map').src = src[11];}
    if(kfx==true && locality==true && road==false && borders==true){document.getElementById('map').src = src[12];}
    if(kfx==true && locality==false && road==true && borders==true){document.getElementById('map').src = src[13];}
    if(kfx==false && locality==true && road==true && borders==true){document.getElementById('map').src = src[14];}
    if(kfx==true && locality==true && road==true && borders==true){document.getElementById('map').src = src[15];}
    if(kfx==false && locality==false && road==false && borders==false){document.getElementById('map').src = src[0];}
}

var check_road = document.getElementById('check_road');
check_road.onclick=function(){
    if(road==true){road=false; check_road.style.borderColor='red'}
    else{road=true; check_road.style.borderColor='green'};
    if(kfx==true && locality==false && road==false && borders==false){document.getElementById('map').src = src[4];}
    if(kfx==false && locality==true && road==false && borders==false){document.getElementById('map').src = src[1];}
    if(kfx==false && locality==false && road==true && borders==false){document.getElementById('map').src = src[2];}
    if(kfx==false && locality==false && road==false && borders==true){document.getElementById('map').src = src[3];}
    if(kfx==true && locality==false && road==true && borders==false){document.getElementById('map').src = src[5];}
    if(kfx==true && locality==true && road==false && borders==false){document.getElementById('map').src = src[6];}
    if(kfx==true && locality==false && road==false && borders==true){document.getElementById('map').src = src[7];}
    if(kfx==false && locality==true && road==true && borders==false){document.getElementById('map').src = src[8];}
    if(kfx==false && locality==true && road==false && borders==true){document.getElementById('map').src = src[9];}
    if(kfx==false && locality==false && road==true && borders==true){document.getElementById('map').src = src[10];}
    if(kfx==true && locality==true && road==true && borders==false){document.getElementById('map').src = src[11];}
    if(kfx==true && locality==true && road==false && borders==true){document.getElementById('map').src = src[12];}
    if(kfx==true && locality==false && road==true && borders==true){document.getElementById('map').src = src[13];}
    if(kfx==false && locality==true && road==true && borders==true){document.getElementById('map').src = src[14];}
    if(kfx==true && locality==true && road==true && borders==true){document.getElementById('map').src = src[15];}
    if(kfx==false && locality==false && road==false && borders==false){document.getElementById('map').src = src[0];}
} 

var check_locality = document.getElementById('check_locality');
check_locality.onclick=function(){
    if(locality==true){locality=false; check_locality.style.borderColor='red'}
    else{locality=true; check_locality.style.borderColor='green'};
    if(kfx==true && locality==false && road==false && borders==false){document.getElementById('map').src = src[4];}
    if(kfx==false && locality==true && road==false && borders==false){document.getElementById('map').src = src[1];}
    if(kfx==false && locality==false && road==true && borders==false){document.getElementById('map').src = src[2];}
    if(kfx==false && locality==false && road==false && borders==true){document.getElementById('map').src = src[3];}
    if(kfx==true && locality==false && road==true && borders==false){document.getElementById('map').src = src[5];}
    if(kfx==true && locality==true && road==false && borders==false){document.getElementById('map').src = src[6];}
    if(kfx==true && locality==false && road==false && borders==true){document.getElementById('map').src = src[7];}
    if(kfx==false && locality==true && road==true && borders==false){document.getElementById('map').src = src[8];}
    if(kfx==false && locality==true && road==false && borders==true){document.getElementById('map').src = src[9];}
    if(kfx==false && locality==false && road==true && borders==true){document.getElementById('map').src = src[10];}
    if(kfx==true && locality==true && road==true && borders==false){document.getElementById('map').src = src[11];}
    if(kfx==true && locality==true && road==false && borders==true){document.getElementById('map').src = src[12];}
    if(kfx==true && locality==false && road==true && borders==true){document.getElementById('map').src = src[13];}
    if(kfx==false && locality==true && road==true && borders==true){document.getElementById('map').src = src[14];}
    if(kfx==true && locality==true && road==true && borders==true){document.getElementById('map').src = src[15];}
    if(kfx==false && locality==false && road==false && borders==false){document.getElementById('map').src = src[0];}
}

var check_borders = document.getElementById('check_borders');
check_borders.onclick=function(){
    if(borders==true){borders=false; check_borders.style.borderColor='red'}
    else{borders=true; check_borders.style.borderColor='green'};
    if(kfx==true && locality==false && road==false && borders==false){document.getElementById('map').src = src[4];}
    if(kfx==false && locality==true && road==false && borders==false){document.getElementById('map').src = src[1];}
    if(kfx==false && locality==false && road==true && borders==false){document.getElementById('map').src = src[2];}
    if(kfx==false && locality==false && road==false && borders==true){document.getElementById('map').src = src[3];}
    if(kfx==true && locality==false && road==true && borders==false){document.getElementById('map').src = src[5];}
    if(kfx==true && locality==true && road==false && borders==false){document.getElementById('map').src = src[6];}
    if(kfx==true && locality==false && road==false && borders==true){document.getElementById('map').src = src[7];}
    if(kfx==false && locality==true && road==true && borders==false){document.getElementById('map').src = src[8];}
    if(kfx==false && locality==true && road==false && borders==true){document.getElementById('map').src = src[9];}
    if(kfx==false && locality==false && road==true && borders==true){document.getElementById('map').src = src[10];}
    if(kfx==true && locality==true && road==true && borders==false){document.getElementById('map').src = src[11];}
    if(kfx==true && locality==true && road==false && borders==true){document.getElementById('map').src = src[12];}
    if(kfx==true && locality==false && road==true && borders==true){document.getElementById('map').src = src[13];}
    if(kfx==false && locality==true && road==true && borders==true){document.getElementById('map').src = src[14];}
    if(kfx==true && locality==true && road==true && borders==true){document.getElementById('map').src = src[15];}
    if(kfx==false && locality==false && road==false && borders==false){document.getElementById('map').src = src[0];}
}
}
