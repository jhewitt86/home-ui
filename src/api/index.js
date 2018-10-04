/*
const Sentiment = require("sentiment");
const lda = require("lda");

class Analyze {
  static Sentiment = text => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);
    return result;
  };
  static Topics = text => {
    const documents = text.match(/[^\.!\?]+[\.!\?]+/g);
    const result = lda(documents, 1, 5);
    return result;
  };
}

export default Analyze;
*/
