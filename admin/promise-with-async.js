let liran = async () => "1";
let limiter = () => {
  return new Promise((resolve) => {
    liran().then((response) => {
      resolve(response);
    });
  });
};
var test = async () => {
  const result = await limiter();
  console.log("hi", result);
};

test();
