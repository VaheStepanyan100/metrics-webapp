export default (ISs) => {
  const revenuArr = [];
  ISs.forEach((IS) => {
    revenuArr.push(IS.revenue);
  });

  return revenuArr.map((number) => (number.toString()).slice(0, -6));
};
