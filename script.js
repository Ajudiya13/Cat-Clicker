var model = {
	currentCat: null,
	cats: [
		{
			clickCount: 0,
			name: 'Tabby',
			src: 'img/434164568_fea0ad4013_z.jpg',
		},

		{
			clickCount: 0,
			name: 'Tiger',
			src: 'img/4154543904_6e2428c421_z.jpg',
		},

		{
			clickCount: 0,
			name: 'Scaredy',
			src: 'img/22252709_010df3379e_z.jpg',
		},

		{
			clickCount: 0,
			name: 'Shadow',
			src: 'img/1413379559_412a540d29_z.jpg',
		},

		{
			clickCount: 0,
			name: 'Sleepy',
			src: 'img/9648464288_2516b35537_z.jpg',
		},
	],
};


var controller = {
	init: function(){
		model.currentCat = model.cats[0];
		catListView.init();
		catView.init();

	},

	getCurrentCat: function(){
		return model.currentCat;
	},


	getCats: function(){
		return model.cats;
	},

	setCurrentCat: function(cat){
		model.currentCat = cat;
	},

	incrementCounter: function(){
		model.currentCat.clickCount++;
		catView.render();
	}
};

var catView = {
	init: function(){
		this.catElem = document.getElementsByClassName('cat')[0];
		this.catNameElem = document.getElementsByClassName('cat-name')[0];	
		this.catCountElem = document.getElementsByClassName('cat-click-count')[0];
		this.catImageElem = document.getElementsByClassName('cat-image')[0];

		this.catImageElem.addEventListener('click',function(event){
			controller.incrementCounter();
		});

		this.render();
	},

	render: function(){
		var currentCat = controller.getCurrentCat();
		this.catNameElem.innerText = currentCat.name;
		this.catCountElem.innerText = currentCat.clickCount;
		this.catImageElem.src = currentCat.src;
	}
};

var catListView = {
	init: function(){
		this.catListElem = document.getElementsByClassName('cat-list')[0];

		this.render();
	},

	render: function(){
		var cats = controller.getCats();
		this.catListElem.innerHTML = '';

		for(var i=0;i<cats.length;i++){

			 var cat = cats[i];
			 var elem = document.createElement('li');
			 elem.innerText = cat.name;

			 elem.addEventListener('click',function(catCopy){
			 	return function(){
			 		controller.setCurrentCat(catCopy);
			 		catView.render();
			 	}
			 }(cat));

			 this.catListElem.appendChild(elem);
		}
	}
};

controller.init();