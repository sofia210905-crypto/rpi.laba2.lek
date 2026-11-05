import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import RequestModal from "./RequestModal";

const navItems = [
  { to: "/", label: "Главная", end: true },
  { to: "/partners", label: "Партнёры" },
  { to: "/about", label: "О нас" },
  { to: "/lecturers", label: "Лекторы" },
];

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="logo">
            Уч<span className="logo-accent">Платформа</span>
          </Link>

          <nav className="nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " nav-link--active" : "")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="btn-request"
              onClick={() => setModalOpen(true)}
            >
              Оставить заявку
            </button>
            <button
              className="btn-login"
              onClick={() => alert("Форма входа в разработке")}
            >
              Войти
            </button>
          </div>
        </div>
      </header>

      {modalOpen && <RequestModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
