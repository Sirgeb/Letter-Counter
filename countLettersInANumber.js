/* If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there  
are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.  
Write a program that takes in an integer and finds out how many letters were used  between that integer and 1 */

const countLettersInANumber = (integer) => {
const oneToNine = {"1": 3, "2": 3, "3": 5, "4": 4, "5": 4, "6": 3, "7": 5, "8": 5, "9": 4};
const tenToNineteen = {"10": 3, "11": 6, "12": 6, "13":8, "14": 8, "15": 7, "16": 7, "17": 9, "18": 8,"19": 8};
const others = {"10": 3, "20": 6, "30": 6, "40": 5, "50": 5, "60": 5, "70": 7, "80": 6, "90": 6};
  
  let string = String(integer);
    if (string.length == 1) {

      for (let key in oneToNine) {
        if (string == key) {
          return oneToNine[string];
        }
      }

    } else if (string.length == 2) {
        let str1 = string[0];
        let str2 = string[1];

        let firstNumber = 0;
        let secondNumber = 0;
        let multipleNo = 0;

        if (str1 >= 1 && str2 == 0) {

          for (let key in others) {
            if (str1 + "0" == key) {
              firstNumber = others[key];
            }
          }

          return firstNumber;
        }

        if (str1 == 1 && str2 != 0) {

          for (let key in tenToNineteen) {
            if (str1 + str2 == key) {
              multipleNo = tenToNineteen[key];
            }
          }

          return multipleNo;
        }

        if (str1 >= 1 && str2 != 0) {

          for (let key in others) {
            if (str1 + "0" == key) {
              firstNumber = others[key];
            }
          }

          for (let key2 in oneToNine) {
            if (str2 == key2) {
            secondNumber = oneToNine[key2];
            }
          }

          return firstNumber + secondNumber;
        }

    } else if (string.length == 3) {
      let str1 = string[0];
      let str2 = string[1];
      let str3 = string[2];

      let firstNo = 0;
      let secondNo = 0;
      let thirdNo = 0;
      const hundred = 7;
      const and = 3;
      let elevenToNineteen = 0;
      let multiplesOfTen = 0;

    
      for (let key in oneToNine) {
        if (str1 == key) {
          firstNo = oneToNine[str1];
        }
      }

      if (str2 == "0" && str3 =="0") {
        return firstNo + hundred;

      } else if (str2 == "0" && str3 != "0") {

        for (let key in oneToNine) {
          if (str1 == key) {
            firstNo = oneToNine[str1];
          }

          if (str3 == key) {
            thirdNo = oneToNine[str3];
          }
        }

        return firstNo + hundred + and + thirdNo;

      } else if (str2 == "1" && str3 != "0") {

          for (let key in oneToNine) {
            if (str1 == key) {
            firstNo = oneToNine[key];
            }
          }

          for (let key2 in tenToNineteen) {
            if (str2 + str3 == key2) {
              elevenToNineteen = tenToNineteen[key2];
            }
          }

          return firstNo + hundred + and + elevenToNineteen;

        } else if (str2 >= 1 && str3 == 0) {

          for (let key in oneToNine) {
            if (str1 == key) {
              firstNo = oneToNine[key];
            }
          }

          for (let key2 in others) {
            if (str2 + str3 == key2) {
              multiplesOfTen = others[key2];
            }
          }

          return firstNo + hundred + and + multiplesOfTen;

        } else if (str2 >= 1 && str3 >= 1) {
          
          for (let key in oneToNine) {
            if (str1 == key) {
              firstNo = oneToNine[key];
            }

            if (str3 == key) {
              thirdNo = oneToNine[key];
            }
          }

          for (let key2 in others) {
            if (str2 + "0" == key2) {
              multiplesOfTen = others[key2];
            }
          }

          return firstNo + hundred + and + multiplesOfTen + thirdNo;
        }

    }
}

export default countLettersInANumber;