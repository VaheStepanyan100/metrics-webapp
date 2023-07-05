import companiesArr from './companiesArr';

export default (company) => {
  if (!company) {
    return null;
  }

  const matchingSimbol = companiesArr.find(([simbol]) => simbol === company);
  const companyName = matchingSimbol ? matchingSimbol[1] : '';
  return `https://financialmodelingprep.com/api/v3/income-statement/${companyName}?limit=5&apikey=f7c2ac7e710ca538d8eed93329279697`;
};
