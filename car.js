AFRAME.registerComponent('car-rotate', {
    schema: {
      speed: {type: 'number', default: 0.1} 
    },
  
    init: function () {
      this.rotationSpeed = this.data.speed; 
     
    },
  
    tick: function () {
      
      var rotation = this.el.getAttribute('rotation');
      rotation.y += this.rotationSpeed;
      this.el.setAttribute('rotation',{x:rotation.x,y:rotation.y,z:rotation.z});
    }
  });
  