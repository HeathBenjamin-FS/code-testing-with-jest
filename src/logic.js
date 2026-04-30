// Sum of the values in an Array function:

const sumOfArray = (arr) => {
  if (!Array.isArray(arr)) return 0;

  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (typeof num === "number" && !isNaN(num)) {
      total += num;
    }
  }
  return total;
};

// Reverse the string function:

const reverseStr = (str) => {
  if (typeof str !== "string") {
    const strAnyways = String(str);

    return strAnyways.split("").reverse().join("");
  }

  str = String(str);

  return str.split("").reverse().join("");
};

// Capitalize Words function:

const capitalizeWords = (str) => {
  if (typeof str !== "string") {
    const strAnyways = String(str);

    return strAnyways.charAt(0).toUpperCase() + strAnyways.slice(1).toLowerCase();
  }

  //   if (typeof str === "number") {
  //     const numberToStr = Number(str);
  //     return numberToStr;
  //   }

  const words = str.split(" ");

  const capWords = words.map((word) => {
    if (word.length === 0) {
      return "";
    }

    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return capWords.join(" ");
};

// Remove duplicates function:

const purgeDuplicates = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }

  const removeDupes = new Set(arr);

  return [...removeDupes];
};

//export all functions for use with Jest

module.exports = {
  sumOfArray,
  reverseStr,
  capitalizeWords,
  purgeDuplicates,
};
