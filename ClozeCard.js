

function ClozeCard(text, cloze) {
  this.text = text;
  this.cloze = cloze;
  this.pickCard = function() {
    if (this.back === true) {
      console.log(this.back);
    }
  };
}







//Fulltext of Microsoft

function ClozeCard(fulltext, close) {
  this.fulltext = fulltext;
  this.close = close;
  this.pickCard = function() {
    if (this.back === true) {
      console.log(this.back);
    }
  };
}




module.exports = ClozeCard;
  