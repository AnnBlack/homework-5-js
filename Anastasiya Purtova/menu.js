function Menu(item) {
  this.title = item.title;
  this.size = item.size;
  this.type = item.type;
}
Menu.prototype.getSize = function() {
  return this.size;
}
Menu.prototype.getType = function() {
  return this.type;
}
