import { classNames } from "helpers/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/app-link";
import { ThemeSwitcher } from "shared/ui/theme-switcher";
import cls from './navbar.module.scss';

interface NavbarProps {
    className?:string;
}

export const Navbar = ({className}: NavbarProps) => {

    return(
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
           <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                Главная
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                О сайте
            </AppLink>
            </div>
        </div>
    )
}

export default Navbar;

