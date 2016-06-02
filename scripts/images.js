"use strict";
var links = ["https://upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg","https://upload.wikimedia.org/wikipedia/commons/8/88/Haus_am_Checkpoint_Charlie_museum.jpg",
"https://www.enjoyhotel.de/wp-content/uploads/2015/03/Elefantentor-Querformat_Zoo-Berlin_Mai-2014_Carlos-Frey-33.jpg","https://photoeverywhere.co.uk/west/berlin/berlinwall0970.jpg","https://upload.wikimedia.org/wikipedia/commons/e/e8/Neuschwanstein_Castle_LOC_print_rotated.jpg","https://upload.wikimedia.org/wikipedia/commons/0/0d/Berlin_reichstag_west_panorama_2.jpg","https://listings.thatsmags.com/uploads/picture/201409/1410319508_20837.jpeg","https://upload.wikimedia.org/wikipedia/commons/1/1f/Deutsche_Fu%C3%9Fballnationalmannschaft_2011-06-03_(01).jpg","https://www.benzinsider.com/wp-content/uploads/2013/01/12C1411_02.jpg","https://ecx.images-amazon.com/images/I/81n%2BXVl8G0L._UL1500_.jpg","https://discovermagazine.com/~/media/Images/Issues/2013/June/beer.jpg", "https://lh6.ggpht.com/jVHaz_W-X3vYnz22GZO6D81U7KGu1oG-_otdrsOatJeUij4k9V7x58wjI5-kgnQyM6Q5=h900 ", "https://travel.gunaxin.com/wp-content/uploads/gallery/oktoberfest-photos-2013/oktoberfest-2013-09.jpg", "https://www.viewsoftheworld.net/wp-content/uploads/2014/10/Germany_FederalStatesMap.jpg",
"https://goingtolalaland.files.wordpress.com/2011/09/chocolateisawesome.jpg", 
"https://www.australiannationalreview.com/wp-content/uploads/2015/12/angela-merkel.jpg","https://www.imagestreetclassics.com/wp-content/uploads/2015/04/BMW-M3-E30-DTM-02-%C2%A9-MIKE-ROELOFS-final-16-9.jpg","https://www.trbimg.com/img-530d0e84/turbine/ct-strip-autobahn-jpg-20140225/2048/2048x1361", "http://cx.aos.ask.com/question/aq/1400px-788px/what-is-germany-national-animal_51e3d307-f5fd-484d-815a-af05e1812280.jpg","http://www.paigamflorist.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_27021.jpg"];

function getRandomImage() {
    if(links.length == 0) {
        return "end";
    }
    var i = Math.floor(Math.random() * links.length);
    var temp = links[i];
    links.splice(i, 1);
    return temp;
}