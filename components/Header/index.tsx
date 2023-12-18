import { NextPage } from "next";
import Link from "next/link";
import style from "./header.module.scss"
import { navList } from "./navlist"
import { useRouter } from "next/router";
import { Button } from "antd";
const Header: NextPage = () => { 
  const { pathname} = useRouter();

  return (
    <div className={ style.navBar }>
      <div className={ style.logo }>
        BLOG-C
      </div>
      <div className={ style.navList }>
        {
          navList.map(item =>
            <Link className={`${style.item } ${pathname === item.value ? style.active : ""}`}
                  key={ item.label } href={ item.value } >
                  { item.label }
            </Link>)
        }
      </div>
      <div className={style.navLeft}>
        <Button>写文章</Button>
        <Button type="primary">登录</Button>
      </div>
    </div>
  )
}

export default Header;