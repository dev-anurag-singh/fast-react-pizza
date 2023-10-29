import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-layout ">
      {isLoading && <Loader />}
      <Header />

      <div className="no-scrollbar overflow-scroll">
        <main className="mx-auto max-w-3xl ">{<Outlet />}</main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
