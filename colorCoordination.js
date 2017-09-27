function main(redA,greenA,blueA,width,redB,greenB,blueB,myParagraph){
  var borderColor = "rgb(" + redA;
  borderColor = borderColor + "," + greenA;
  borderColor = borderColor + "," + blueA;
  borderColor = borderColor + ")";
  var backgroundColor = "rgb(" + redB;
  backgroundColor = backgroundColor + "," + greenB;
  backgroundColor = backgroundColor + "," + blueB;
  backgroundColor = backgroundColor + ")";
  myParagraph.style.backgroundColor = backgroundColor;
  myParagraph.style.borderLeftColor = borderColor;
  myParagraph.style.borderRightColor = borderColor;
  myParagraph.style.borderBottomColor = borderColor;
  myParagraph.style.borderTopColor = borderColor;
  myParagraph.style.borderLeftWidth = width;
  myParagraph.style.borderRightWidth = width;
  myParagraph.style.borderTopWidth = width;
  myParagraph.style.borderBottomWidth = width;
}
