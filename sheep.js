'use strict';

function Pen(){
  this.capacity = [];
}

function Sheep(name){
  this.name = name;
}

Pen.prototype = {

    load: function(sheep){
    this.capacity.push(sheep);
    },

    namesInPen: function(){
      for(var i = 0; i < this.capacity.length; i++){
        console.log(this.capacity[i].name);
      };
    }
};

var pen1 = new Pen();

var sheep1 = new Sheep('Betty');
var sheep2 = new Sheep('Larry');
var sheep3 = new Sheep('Daisy');

pen1.load(sheep1);
pen1.load(sheep2);
pen1.load(sheep3);

console.log(pen1.capacity);

pen1.namesInPen();
// console.log(sheep1.name);
