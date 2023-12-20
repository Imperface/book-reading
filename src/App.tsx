import { Layout } from 'components';
import { AppWrapper } from './App.styled.ts';
const App = () => (
  <AppWrapper>
    <Layout>
      {
        // тут буде суспенс, в нього треба вкласти Routes, і зробити шляхи, як показував ментор
        // тобто, створити масив з об'єктів, в якому будуть назви шляхів(path, element)
        // перебрати їх мепом
        //   ({appRoutes.map(({ path, element }) => (
        //      <Route key={path} path={path} element={element} />
        //   ))})
        // також використати RestrictedRoute, PrivateRoute
        // додати сторінку нот фаунд
      }
      <>Main</>
    </Layout>
  </AppWrapper>
);

export default App;
