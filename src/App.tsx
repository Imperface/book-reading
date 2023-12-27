import { Layout } from './components/Layout/Layout.tsx';
import { AppWrapper } from './App.styled.ts';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login.tsx';
import Training from './pages/Training.tsx';
import Library from './pages/Library.tsx';
import Register from './pages/Register.tsx';
import NotFound from './pages/NotFound.tsx';

const App = () => (
  <AppWrapper>
    {/* Згодом коли будемо робити закриті маршрути допишу як ментор розповідав */}
    <Layout>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/library" element={<Library />} />
      <Route path="/training" element={<Training />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
      </Layout>
  </AppWrapper>
);

export default App;
