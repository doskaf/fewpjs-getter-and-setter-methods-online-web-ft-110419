class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  get diameter() {
    return this.radius * 2;
  }
  
  set diameter(diameter) {
    this.diameter = diameter;
    this.radius = this.diameter / 2;
  }
  
  get circumference() {
    return Math.PI * this.diameter;
  }
  
  set circumference(circumference) {
    this.circumference = circumference;
    this.radius = (this.circumference / Math.PI) / 2;
  }
  
  get area() {
    return Math.PI * (this.radius ** 2);
  }
  
  set area(area) {
    this.area = area;
    this.radius = Math.sqrt(area / Math.PI);
  }
}