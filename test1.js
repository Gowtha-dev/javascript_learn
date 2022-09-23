const check = (arr) =>
  new Promise(function (resolve, reject) {
    if (arr.length > 0) {
      var min = arr[0],
        max = arr[0];
      arr.forEach((element) => {
        if (element.length % 2 == 0) {
          if (element.length > max.length) max = element;
        } else {
          if (element.length < min.length) min = element;
        }
      });
      setTimeout(() => {
        resolve(min + " " + max);
      }, 100);
    } else {
      reject("please define the value in array");
    }
  });
check(["abcedd", "abcde", "ab", "abcd"]).then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);
//'abc', 'abcde', 'ab', 'abcd'
