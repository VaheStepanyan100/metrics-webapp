export default (IS) => {
  if (!IS) {
    return {};
  }

  const {
    reportedCurrency,
    revenue,
    costOfRevenue,
    grossProfit,
    grossProfitRatio,
    researchAndDevelopmentExpenses,
    generalAndAdministrativeExpenses,
    sellingAndMarketingExpenses,
    sellingGeneralAndAdministrativeExpenses,
    operatingExpenses,
    costAndExpenses,
    interestIncome,
    interestExpense,
    operatingIncome,
    operatingIncomeRatio,
    totalOtherIncomeExpensesNet,
    incomeBeforeTax,
    incomeBeforeTaxRatio,
    incomeTaxExpense,
    netIncome,
    netIncomeRatio,
  } = IS;

  const filteredObj = {
    reportedCurrency,
    revenue,
    costOfRevenue,
    grossProfit,
    grossProfitRatio,
    researchAndDevelopmentExpenses,
    generalAndAdministrativeExpenses,
    sellingAndMarketingExpenses,
    sellingGeneralAndAdministrativeExpenses,
    operatingExpenses,
    costAndExpenses,
    interestIncome,
    interestExpense,
    operatingIncome,
    operatingIncomeRatio,
    totalOtherIncomeExpensesNet,
    incomeBeforeTax,
    incomeBeforeTaxRatio,
    incomeTaxExpense,
    netIncome,
    netIncomeRatio,
  };

  const modifiedObj = {};

  Object.keys(filteredObj).forEach((key) => {
    const modifiedKey = key.replace(/([A-Z])/g, ' $1');
    const capitalizedKey = modifiedKey.charAt(0).toUpperCase() + modifiedKey.slice(1);
    modifiedObj[capitalizedKey] = filteredObj[key];
  });
  return modifiedObj;
};
