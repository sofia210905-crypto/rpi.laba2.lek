import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="footer-logo">УчПлатформа</div>
          <p className="footer-text">
            Платформа, которая соединяет компании, образовательные учреждения
            и НКО с профессиональными лекторами.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Навигация</h4>
          <ul className="footer-list">
            <li>
              <Link className="footer-link" to="/">
                Главная
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/partners">
                Партнёры
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/about">
                О нас
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/lecturers">
                Лекторы
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Контакты</h4>
          <ul className="footer-list">
            <li className="footer-text">info@eduplatform.ru</li>
            <li className="footer-text">+7 (495) 000-00-00</li>
            <li className="footer-text">Москва, ул. Примерная, 1</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {year} УчПлатформа. Все права защищены.
      </div>
    </footer>
  );
}