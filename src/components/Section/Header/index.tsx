import { Link } from "react-router-dom"
import { CodeBracketIcon, QueueListIcon } from '@heroicons/react/24/outline'
import { routes } from "../../../routes";
import { useState } from "react";

interface IHeader {
  mainTitle: string;
}

const Header = ({ mainTitle }: IHeader) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  return (
    <header className="sm:flex bg-slate-800 text-white justify-between items-center p-8">
      <Link to="/" className="flex flex-col items-center bg-teal-500 p-8 mb-8">
        <CodeBracketIcon className="w-12 h-12 text-slate-800" />
        <p className="text-slate-800">Minha marca</p>
      </Link>
      <h1 className="sr-only">{mainTitle}</h1>
      <a href="#main-content" className="sr-only focus:not-sr-only">Pular para o conteúdo</a>
      <nav>
        <h2 className="sr-only">Menu Superior</h2>
        <button
          type="button"
          className="sm:hidden"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          aria-label={isOpenMenu ? 'Fechar Menu' : 'Abrir Menu'}
          aria-expanded={isOpenMenu}
          aria-controls="menu"
        >
          <QueueListIcon className="w-6 h-6" />
        </button>
        <ul id="menu" className={`${!isOpenMenu ? 'hidden' : 'flex'} flex-col sm:flex sm:flex-row`}>
          {routes.map((route) => (
            <li key={route.path} className="flex">
              <Link to={route.path} className="hover:bg-teal-900 active:bg-teal-900 p-4 rounded-md">
                {route.title}
              </Link>
              {route.subRoutes && route?.subRoutes?.length > 0 && (
                <ul>
                  {route.subRoutes.map((subRoute) => (
                    <li key={subRoute.path}>
                      <Link to={subRoute.path}>{subRoute.title}</Link>
                    </li>
                  ))}
                </ul>
              )
              }
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
