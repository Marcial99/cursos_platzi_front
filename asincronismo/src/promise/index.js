const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("hey!");
    } else {
      reject("Ops!");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      return setTimeout(() => {
        resolve("true!");
      }, 3000);
    } else {
      const error = new Error("ops");
      reject(error);
    }
  });
};
