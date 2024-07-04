import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Products from "../pages/Products";
// import Principles from "../pages/Products/Principles";

interface IRoute {
  path: string;
  element: React.ReactElement;
  title: string;
  icon?: React.ReactElement;
  subRoutes?: {
    path: string;
    element: React.ReactElement;
    title: string;
    icon?: React.ReactElement;
  }[]
}

export const routes: IRoute[] = [
  { path: "/", element: <Home title="Página inicial" />, title: 'Página inicial' },
  { path: "/sobre", element: <About title="Sobre a empresa" />, title: 'Sobre a empresa' },
  {
    path: "/servicos", element: <Products title="Produtos" />, title: 'Produtos',
    // subRoutes: [{ path: "/servicos/principios", element: <Principles />, title: 'Princípios' }]
  },
  { path: "/contato", element: <Contact title="Contato" />, title: 'Contato' },
];
