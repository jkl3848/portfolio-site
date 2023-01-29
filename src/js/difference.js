/*eslint-disable*/
import diffMatchPatch from "diff-match-patch";
import { v4 as uuidv4 } from "uuid";
const dmp = new diffMatchPatch();
dmp.Diff_EditCost = 10;

export const diffFuncs = () => {
  function compareText(texta, textb) {
    var diffObj = {};
    console.log(texta + "\n" + textb);

    if (texta != null && textb != null) {
      let compText = diffLineMode(texta, textb);

      function diffLineMode(text1, text2) {
        //Runs linesToWords to split at the word level not char
        var a = diffLinesToWords(text1, text2);
        var lineText1 = a.chars1;
        var lineText2 = a.chars2;
        var lineArray = a.lineArray;
        var diffs = dmp.diff_main(lineText1, lineText2, false);
        dmp.diff_charsToLines_(diffs, lineArray);
        return diffs;
      }

      function diffLinesToWords(text1, text2) {
        var lineArray = [];
        var lineHash = {};

        lineArray[0] = "";

        function diffLinesToCharsMunge_(text) {
          var chars = "";
          // Walk the text, pulling out a substring for each line.
          var lineStart = 0;
          var lineEnd = -1;
          var re = /[\s\n—]/;
          var lineArrayLength = lineArray.length;
          while (lineEnd < text.length - 1) {
            lineEnd = regexIndexOf(text, re, lineStart);

            function regexIndexOf(text, re, i) {
              var indexInSuffix = text.slice(i).search(re);
              return indexInSuffix < 0 ? indexInSuffix : indexInSuffix + i;
            }

            if (lineEnd == -1) {
              lineEnd = text.length - 1;
            }

            var line = text.substring(lineStart, lineEnd + 1);

            if (
              lineHash.hasOwnProperty
                ? lineHash.hasOwnProperty(line)
                : lineHash[line] !== undefined
            ) {
              chars += String.fromCharCode(lineHash[line]);
            } else {
              if (lineArrayLength == maxLines) {
                // Bail out at 65535 because
                // String.fromCharCode(65536) == String.fromCharCode(0)
                line = text.substring(lineStart);
                lineEnd = text.length;
              }
              chars += String.fromCharCode(lineArrayLength);
              lineHash[line] = lineArrayLength;
              lineArray[lineArrayLength++] = line;
            }
            lineStart = lineEnd + 1;
          }
          return chars;
        }
        // Allocate 2/3rds of the space for text1, the rest for text2.
        var maxLines = 40000;
        var chars1 = diffLinesToCharsMunge_(text1);
        maxLines = 65535;
        var chars2 = diffLinesToCharsMunge_(text2);
        return { chars1: chars1, chars2: chars2, lineArray: lineArray };
      }

      console.log(compText);
      diffObj = convertToDiffObj(compText);
      addUUID(diffObj);
      recordMatches(diffObj);

      console.log(structuredClone(diffObj));

      return diffObj;
    } else {
      return null;
    }
  }
  function convertToDiffObj(textArr) {
    return textArr.map((item) => {
      return {
        action: item[0],
        text: item[1],
      };
    });
  }
  function addUUID(inputObj) {
    for (var i = 0; i < inputObj.length; i++) {
      let currentDiff = inputObj[i];
      currentDiff.UUID = uuidv4();
    }
  }
  function recordMatches(inputObj) {
    let availableMatchID = 0;

    for (var i = 0; i < inputObj.length; i++) {
      let currentDiff = inputObj[i];
      var matchingDiff;
      var otherAction = 0;

      if (!currentDiff.hasOwnProperty("matchID")) {
        if (currentDiff.action === 1) {
          otherAction = -1;
        } else if (currentDiff.action === -1) {
          otherAction = 1;
        } else if (currentDiff.action === 2) {
          otherAction = -2;
        } else if (currentDiff.action === -2) {
          otherAction = 2;
        }

        if (otherAction != 0) {
          for (let j = i + 1; j < inputObj.length; j++) {
            if (inputObj[j].action === 0) {
              break;
            }
            if (inputObj[j].action === otherAction) {
              matchingDiff = inputObj[j];
              break;
            }
          }
        }

        if (matchingDiff != undefined) {
          currentDiff.matchID = availableMatchID;
          if (!matchingDiff.hasOwnProperty("matchID")) {
            matchingDiff.matchID = availableMatchID;
          }
        } else {
          currentDiff.matchID = availableMatchID;
        }
        availableMatchID++;
      }
    }
  }

  return {
    compareText,
  };
};

export default diffFuncs;
