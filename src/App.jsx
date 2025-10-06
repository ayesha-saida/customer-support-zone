import Navbar from './assets/Navbar';
import IssueManagement from './assets/IssueManagement';
import Footer from './assets/Footer';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

const loadOrders = fetch('/data.json').then(res => res.json());

function App() {
  const supportPromise = loadOrders;
  //console.log(supportPromise);

  return (
    <>
      <header className="py-4">
        <Navbar> </Navbar>
      </header>
      <Suspense>
        <IssueManagement promise={supportPromise}></IssueManagement>
      </Suspense>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
