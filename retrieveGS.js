function init() {
Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1jYoSo23Z6hJ96SVxl6HK4F03_D-ZxsqHnZkm-5I1jwk/edit?usp=sharing',
callback: function(data, tabletop) {
console.log(data)
},
simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
