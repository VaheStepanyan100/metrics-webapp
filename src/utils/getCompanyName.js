import companiesArr from './companiesArr';

export default (company) => {
  if (!company) {
    return null;
  }

  const matchingSimbol = companiesArr.find(([, symbol]) => symbol === company);
  return matchingSimbol ? matchingSimbol[0] : '';
};
