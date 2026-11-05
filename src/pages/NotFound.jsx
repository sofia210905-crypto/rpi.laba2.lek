import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <div className="not-found">
      <div className="not-found-code">404</div>
      <h1 className="page-title">Страница не найдена</h1>
      <p className="page-subtitle">
        По адресу <code>{pathname}</code> ничего нет. Возможно, ссылка
        устарела или в ней опечатка.
      </p>
      <Link className="link-arrow" to="/">
        ← На главную
      </Link>
    </div>
  );
}
