import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './routes/HomePage';
import RevenuePage from './routes/RevenuePage';
import IncomeStatementPage from './routes/IncomeStatementPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/:companyName" element={<RevenuePage />} />
        <Route path="/:companyName/:year" element={<IncomeStatementPage />} />
      </Route>
    </Routes>
  );
}

export default App;
