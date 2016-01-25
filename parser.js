var microdata = require('node-microdata-scraper');
var url       = 'https://raw.github.com/mhausenblas/schema-org-rdf/master/examples/Thing/Product/Product.microdata';
var url       = 'http://www.eldorado.ru/cat/detail/71129737/?category=1482093'; // Charset 1251
//var url       = 'https://www.mediamarkt.ru/item/1317220/sony-shake-x1d-black-minisistema-dvd';
//var url       = 'http://www.tehnosila.ru/catalog/mobilnaja_svjaz/iPhone/-/30460';
//var url       = 'http://www.re-store.ru/catalog/MJY42RU-A/';
//var url       = 'http://www.ecco-shoes.ru/women/shoes/lowboots/?art_id=244613&color=01001';

microdata.parseUrl(url, function(err, json) {
  if (!err && json) {
    //console.log(json);
    json = JSON.parse(json);
    console.log( json);
    for (var i in json) {
      var item = json[i];
      //console.log(item);
      if (item.name === 'http://schema.org/Product') {
        console.log('NAME: ', item.properties.name);
        console.log('IMAGE: ', item.properties.image);
      }
      if (item.name === 'http://schema.org/Offer') {
        console.log('PRICE: ', item.properties.price + ' ' + item.properties.priceCurrency);
      }
    }
  }
});
