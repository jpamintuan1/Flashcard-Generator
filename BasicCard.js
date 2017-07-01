// constructor which can be used to create objects with the ".front", ".back",
// and ".BasicCard" properties
function ClozeCard(front, back) {
  this.front = front;
  this.back = back;
  this.pickCard = function() {
    if (this.back === true) {
      console.log(this.back);
    }
  };
}

module.exports = ClozeCard;



