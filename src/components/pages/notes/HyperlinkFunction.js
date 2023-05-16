import globalHyperLinks from './GlobalLinkData.js';
import { Link } from 'react-router-dom';

const renderWithLinks = (words, localLinks) => {
  let separator = ", ";
  if (typeof words == "string") {
    words = words.split(" ");
    separator = " ";
  }
  const returnValue = [];
  let currentPhrase = "";
  for (let i = 0; i < words.length; i++) {

    if ( i === words.length - 1) separator = "";

    let currWord = words[i];

    if (currWord.startsWith("~")) {
      // If the currrent word starts with a ~ symbol, we know its the beginning of the link
      currentPhrase += `${currWord.slice(1)} `;
      // We want to add the first word of the link to the current phrase using slice to exclude the ~
      continue;
    }

    if (currWord.lastIndexOf("~") > 0) {
      // If the current word has a ~ symbol in it, and its not the first letter
      const lastIndex = currWord.lastIndexOf("~");

      // This is a formatted phrase, and what is actually rendered to the user
      // it takes the current phrase, and adds the current word to the end, slicing out the ~ symbol
      const formattedPhrase =
        currentPhrase +
        currWord.slice(0, lastIndex) +
        currWord.slice(lastIndex + 1);

      currentPhrase += currWord.slice(0, lastIndex);
      returnValue.push(
        // The href on the link first checks if there is a local instance of the link specified
        // if there isnt, this will be falsey so it will default to the global link
        <>
          <Link
            to={localLinks[currentPhrase] || globalHyperLinks[currentPhrase]}
          >
            {formattedPhrase}
          </Link>{separator}
        </>
      );
      // reset the current phrase to an empty string for the next link
      currentPhrase = "";
      continue;
    }

    if (currentPhrase.length) {
      // If the current phrase has length at this point, we know that we are in the middle of the phrase
      // so we dont want to push the word just yet
      currentPhrase += `${currWord} `;
      continue;
    }

    // checks if word is immediately followed by punctuation. remove punctuation in check
    let lastChar = currWord[currWord.length - 1];
    let hasPunc = false;
    let formattedWord = currWord;
    if (lastChar && lastChar.match(/[^0-9a-z]/i)) {
      hasPunc = true;
      formattedWord = currWord.slice(0, -1);
    }

    // check for possessive
    let possessiveIndex = currWord.lastIndexOf("'s");
    if (possessiveIndex >= 0 ) {
      formattedWord = formattedWord.slice(0, possessiveIndex);
    }

    if (localLinks[formattedWord] || globalHyperLinks[formattedWord]) {


      // The href on the link first checks if there is a local instance of the link specified
      // if there isnt, this will be falsey so it will default to the global link
      returnValue.push(
        <>
          <Link to={localLinks[formattedWord] || globalHyperLinks[formattedWord]}>
            {possessiveIndex >= 0 ? formattedWord + "'s" : formattedWord }
          </Link>{hasPunc ? lastChar + separator : separator}
        </>
      );

    } else {
      returnValue.push(currWord + separator);
    }
  }

  return returnValue;
};

export default renderWithLinks;