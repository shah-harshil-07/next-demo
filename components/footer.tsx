import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import footerStyle from "../styles/Footer.module.css";

const Footer = (props: any) => {
  const [cookiesName, setCookiesName] = useState<string>("");
  const [localVariable, setLocalVariable] = useState<string>("");

  useEffect(() => {
    if (window) {
      const name = Cookies.get("cookie");
      const _localVariable = localStorage.getItem("localVariable");
      setCookiesName(name as string);
      setLocalVariable(_localVariable as string);
    }
  }, []);

  const removeCookie = () => {
    Cookies.remove("cookie");
    setCookiesName("");
  };

  const removeLocalStorageItem = () => {
    localStorage.removeItem("localVariable");
    setLocalVariable("");
  };

  return (
    <div className={footerStyle["body"]}>
      <p className="text-center">
        <i>{props?.quoteData?.quote}</i>&nbsp;
        {` ~${props?.quoteData?.author}`}
      </p>
      <p>Local Variable: {process.env.NEXT_PUBLIC_PAGE_LIMIT}</p>
      <p>Staging Variable: {process.env.NEXT_PUBLIC_PAGE_LIMIT}</p>
      <p>
        Production variable: {process.env.NEXT_PUBLIC_PRODUCTION_PAGE_LIMIT}
      </p>
      <p>
        Cookie: {cookiesName}&nbsp;&nbsp;&nbsp;
        {cookiesName && (
          <button
            className="btn btn-outline-danger"
            onClick={() => removeCookie()}
          >
            Remove Cookie
          </button>
        )}
      </p>
      <p>
        Local Storage Variable: {localVariable}&nbsp;&nbsp;&nbsp;
        {localVariable && (
          <button
            className="btn btn-outline-danger"
            onClick={() => removeLocalStorageItem()}
          >
            Remove Local Storage Item
          </button>
        )}
      </p>
    </div>
  );
};

export default Footer;
