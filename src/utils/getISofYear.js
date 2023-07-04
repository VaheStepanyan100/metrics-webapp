export default (company, year) => {
  if (!company) {
    return null;
  }

  const matchingYear = company.find((item) => item.date.substring(0, 4) === year);
  const ISobj = matchingYear || null;
  return ISobj;
};
