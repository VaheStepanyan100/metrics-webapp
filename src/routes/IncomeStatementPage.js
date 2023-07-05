import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getCompanyUrl from '../utils/getCompanyUrl';
import { selectApple } from '../redux/store';
import fetchIS from '../redux/thunk';
import LoadingScreen from '../components/LoadingScreen';
import IncomeStatement from '../components/IncomeStatement';

const IncomeStatementPage = () => {
  const location = useLocation();
  const { pathname } = location;
  const companyName = pathname.split('/')[1];
  const companyUrl = getCompanyUrl(companyName);
  const {
    appleIS, isLoading, error, errMsg,
  } = useSelector(selectApple);
  const dispatch = useDispatch();
  useEffect(() => {
    if (appleIS.length < 1) {
      dispatch(fetchIS({ url: companyUrl }));
    }
  }, [dispatch, appleIS.length, companyUrl]);

  if (isLoading) {
    return <LoadingScreen />;
  }
  if (error) {
    return (
      <div className="w-full flex justify-center">
        <p className="p-6">
          Oops! an error occurred. Please try again.
          <br />
          <br />
          {errMsg}
        </p>
      </div>
    );
  }
  return <IncomeStatement company={appleIS} />;
};

export default IncomeStatementPage;
