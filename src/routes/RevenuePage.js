import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getCompanyUrl from '../utils/getCompanyUrl';
import { selectApple } from '../redux/store';
import fetchIS from '../redux/thunk';
import LoadingScreen from '../components/LoadingScreen';
import Graph from '../components/Graph';
import RevenueGraph from '../components/RevenueGraph';

const Revenue = () => {
  const location = useLocation();
  const { pathname } = location;
  const companyName = pathname.substring(1);
  const companyURL = getCompanyUrl(companyName);
  const {
    appleIS, isLoading, error, errMsg,
  } = useSelector(selectApple);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIS({ url: companyURL }));
  }, [dispatch, companyURL]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div>
        <p>
          Oops! An error occurred! Please try again
          <br />
          {errMsg}
        </p>
      </div>
    );
  }
  return (
    <>
      <Graph company={appleIS} />
      <RevenueGraph company={appleIS} />
    </>
  );
};

export default Revenue;
