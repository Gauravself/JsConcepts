const start = (src) => {
  return new Promise((resolve, reject) => {
    compute(src, (err, script) => {
      if (err) reject(err);
      resolve(script);
    });
  });
};
