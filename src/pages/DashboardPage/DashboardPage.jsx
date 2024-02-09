
import { useLocation } from 'react-router-dom';

import NotFound from '../../components/NotFound/NotFound';
import Header from '../../components/Dashboard/Header/Header';
import SideMenu from '../../components/Dashboard/SideMenu/SideMenu';
import Customers from '../../components/Dashboard/Customers/Customers';

import classes from './styles.module.scss';

export default function DashboardPage() {
  const location = useLocation();

  const { pathname } = location;

  const renderPage = () => {
    switch (pathname) {
      case '/customers':
        return <Customers />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className={classes.DashboardPage}>
      <SideMenu />
      <div className={classes.container}>
        <Header />
        {renderPage()}
      </div>
    </div>
  );
}
