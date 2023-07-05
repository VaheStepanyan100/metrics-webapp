import { useLocation, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const pathNameSplit = pathname.split('/');
  const newPath = pathNameSplit[pathNameSplit.length - 2];
  return (
    <Section className="bg-navbarBg border border-white">
      <ul className="flex items-center justify-between p-4 text-white">
        <NavLink to={`${newPath}`}>
          <ion-icon name="arrow-back-outline" />
        </NavLink>
        <li className="text-center text-lg text-white">
          Financial Landscape of the Company
        </li>
        <li className="flex gap-1 md:gap-6">
          <span>
            <ion-icon name="mic-outline" />
          </span>
          <span>
            <ion-icon name="settings-outline" />
          </span>
        </li>
      </ul>
    </Section>
  );
};

export default Navbar;

const Section = styled.header`
  z-index: 999;
  ion-icon {
    color: white;
  }
`;
