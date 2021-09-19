import { useTranslation } from "react-i18next";
import i18n from "../../utilies/i18n";
import English from "../../assets/english.svg";
import Persian from "../../assets/persian.svg";
import chooselanguage from "../../assets/chooselanguage.svg";
import { Menu, Dropdown, Button } from "antd";
import "antd/dist/antd.css";
import "./lang.css";
function Lang() {
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // change direrction persian -> rtl / english -> ltr
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <li onClick={() => changeLanguage("en")}>
          <img src={English} alt="English" />
          {t("lang.english")}
        </li>
      </Menu.Item>
      <Menu.Item key="2">
        <li onClick={() => changeLanguage("fa")}>
          <img src={Persian} alt="Persian" />
          {t("lang.persian")}
        </li>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Dropdown overlay={menu} placement="bottomCenter" arrow>
        <Button className="btn-lang">
          <img src={chooselanguage} alt="Choose Language" />
          {t("lang.language")}
        </Button>
      </Dropdown>
    </>
  );
}

export default Lang;
