import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import Modal from '../components/Modal';
import { useEffect } from 'react';
import { useAppStore } from '../stores/useAppStore';

export const Layout = () => {
  const loadFromStorage = useAppStore((state) => state.loadFromStorage);

  useEffect(() => {
    loadFromStorage();
  }, []);

  return (
    <>
      <Header></Header>
      <main className='container mx-auto py-16'>
        <Outlet />
      </main>
      <Modal></Modal>
    </>
  );
};
