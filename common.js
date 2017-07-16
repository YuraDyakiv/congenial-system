let mas = [0, 1, 2, 3, 4];
mas.forEach(function(v, i, m){m[i] = v + 1;});
console.log(`For Each = ${mas}`);

let mapMasuv;
mapMasuv = mas.map(function(v, m, i){return m[i] = v + 2;});
console.log(`Map = ${mapMasuv}`);

let filter;
filter = mas.filter(function(v){return v < 2;});
console.log(`Fillter = ${filter}`);

let every;
every = mas.every(function(v){return v < 5;});
console.log(`Every = ${every}`);

let some;
some = mas.some(function(v){return v == 1;});
console.log(`Some = ${some}`);

mas.splice(1, 0, 'text');
console.log(mas);

delete mas[1];
console.log(mas);
mas = mas.filter(function(){return true});
// mas = mas.filter(function(v){return v != undefined || v != null;});
console.log(mas);


let obj = {
	name: 'Yura',

	get get_name(){return this.name;},
	set set_name(value){this.name = value;}
}

console.log(`name = ${obj.name}`);
console.log(`get name fun = ${obj.get_name}`);
obj.set_name = 'Any onther name';
console.log(`new name with set name = ${obj.name}`);

console.log(Object.getOwnPropertyDescriptor(obj, 'name'))

Object.defineProperty(obj, 'name', {
 	value: 'descriptor name',
 	writable: false
});
console.log(`descriptor value with obj name = ${obj.name}`);

Object.defineProperties(obj, {
	'name': {
		value: 'new descriptor value'
	},

	'dog': {
		get: function(){return console.log(`value name = ${obj.name}`);}
	}
});

obj.dog;





let new_obj = {
	type: 'dog',
	masa: 31,
	name: 'Stiv',
	color: 'brown',

	eat: function(){return `${this.type} with name ${this.name} eat`;}
}

console.log(new_obj.eat());


let dog = {
	type: 'dog',
	masa: 31,
	name: 'Stiv',
	color: 'brown',
}

let cat = {
	type: 'cat',
	masa: 9,
	name: 'Flafi',
	color: 'yellow',
}

function eat(){
	return `${this.type} with name ${this.name} eat`;
}

dog.f = eat;
cat.f = eat;
console.log(dog.f());
console.log(cat.f());

function Animal(type, name, masa){
	this.type = type;
	this.name = name;
	this.masa = masa;
}

Animal.prototype.eat = function(){
	return `${this.type} with name ${this.name} and masa ${this.masa} eat a porchin of corm`;
}

let dog_const = new Animal('dog', 'Stiv', 20);
let cat_const = new Animal('cat', 'Flafi', 8);

console.log(`	
	${dog_const.eat()}
	${cat_const.eat()}
	`);





function clousers(type, name){
	x = 0;
	return function(){
		if(x > 3) throw new Error ('x ne moche bytu bilche 3');
		else {
			console.log(`${type} with name ${name} eat ${x} porchin corm`);
			x++;
		}
	}
}

var corm_dog = clousers('dog', 'Stiv');

try {
	corm_dog();
	corm_dog();
	corm_dog();
	corm_dog();
	corm_dog();
}
catch(e){
	console.log(e);
}
finally{
	corm_dog = clousers('dog', 'Omega');
}

corm_dog();
corm_dog();



let new_obj_for_in = {
	type: 'dog',
	masa: 31,
	name: 'Stiv',
	color: 'brown',

	eat: function(){return `${this.type} with name ${this.name} eat`;}
}
let for_naslid = new_obj_for_in;

console.log('all obj = ')
for(b in new_obj_for_in){
	console.log(b);
}

console.log('without function = ')
for(b in new_obj_for_in){
	if(typeof new_obj_for_in[b] !== 'function') console.log(b);
	else continue;
}

console.log('for nasliduvanna = ')
for(b in for_naslid){
	if(b.for_naslid) console.log(b);
}





let maps = new Map([
	[1, 'txt'],
	['1', 'txt1'],
	[2, 'stx']
	]);

console.log('maps ["1"] = ', maps.get('1'));




// let creatorObj = Object.create(null);
// creatorObj = Object.create(Object.prototype);
let creatorObj = Object.create({x:1});
console.log(creatorObj);


var array = [1,2,3,4,5]; //15

var sum = array.reduce(function(x, y){return x * y;}, 3);
console.log(`reduce array to sum = ${sum}`);
let max = array.reduce(function(x, y){return (x > y) ? x : y;});
console.log(`max element = ${max}`);

console.log(Array.isArray(array));
console.log(array instanceof Array);
console.log(array instanceof Object);




var obj_extencible = {
	name: 'Kini'
}

console.log(`is extensible = ${Object.isExtensible(obj_extencible)}`);

var prev_ex_obj = {
	name: 'Stivi',
	type: 'dog',

	get get_func(){return this.name;},
	set set_func(value){this.name = value;}
}
// 'use strict'
// Object.preventExtensions(prev_ex_obj);

// console.log(prev_ex_obj.color = 'brown');
// prev_ex_obj.name = 'new Stivi';
// console.log(`prev_obj =`, prev_ex_obj);

Object.freeze(prev_ex_obj);
console.log(prev_ex_obj);
prev_ex_obj.set_func = 'new Stiv';
console.log(prev_ex_obj.name);