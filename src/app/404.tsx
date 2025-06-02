import Link from "next/link";
import "../styles/index.scss";

function NotFoundPage() {
  return (
    <div className="notfound">
      <div className="notfound-banner">
        <div className="notfound-banner-text">
          <h3 className="notfound-banner-text__title">
            Упс, неправильный путь!
          </h3>
          <p className="notfound-banner-text__caption">
            Страница, которую вы ищете, не найдена.
          </p>
        </div>
      </div>
      <div className="notfound-links">
        <div className="notfound-link notfound-link__tocatalog">
          <Link href="/">
            <p className="notfound-link-caption notfound-link-caption__tocatalog">
              В каталог
            </p>
          </Link>
        </div>
        <div className="notfound-link notfound-link__tofaq">
          <a href="/about-us/#about-faq">
            <p className="notfound-link-caption notfound-link-caption__tofaq">
              Часто задаваемые вопросы
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
