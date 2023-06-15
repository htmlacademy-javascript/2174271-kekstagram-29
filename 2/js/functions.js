const checkStringLength = (string, length) => string.length <= length;

const checkStringIsPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  return string === string.split('').reverse().join('');
};

const extractNumbers = (string) => {
  string = String(string).replace(/\D/g, '');
  return parseInt(string, 10);
};

const createNewString = (string, length, extension) => {
  while (string.length < length) {
    string = extension.slice(0, length - string.length) + string;
  }
  return string;
};
