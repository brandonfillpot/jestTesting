const isAnagram = (str1, str2) => {
  const sortedStr1 = str1
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  const sortedStr2 = str2
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  if (sortedStr1 === sortedStr2) {
    return true;
  } else {
    return false;
  }
};

module.exports = isAnagram;
