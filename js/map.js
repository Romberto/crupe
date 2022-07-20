window.addEventListener('load', function(){
    ymaps.ready(init); 
	var myMap;
	
	function init() {
	
		myMap = new ymaps.Map("map", {
			center: [51.368968815973616,46.11921824550337], // Координаты центра карты
			zoom: 13 // Маштаб карты
		}); 
	
		myMap.controls.add(
			new ymaps.control.ZoomControl()  // Добавление элемента управления картой
		); 
	
		myPlacemark = new ymaps.Placemark([51.368968815973616,46.11921824550337],  {
			preset: "twirl#redDotIcon" // Тип метки
		});
		
		myMap.geoObjects.add(myPlacemark); // Добавление меткa	
	};

});