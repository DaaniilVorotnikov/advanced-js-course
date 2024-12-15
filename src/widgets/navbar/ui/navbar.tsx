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


import React from 'react';

interface UiComponentProps {
  label:string;
  onClick:() => void;
}

interface IContext {
    context:string
}

const translate = (str:string, obj?:IContext):string => {return str}
const createClassNames = (...args:string[]):string => {return ``}

// Объект с методами для поддержки переводов в сервисе
const localeUtils = {
    gettext: (str: string): string => translate(str),
    pgettext: (context: string, str: string): string => translate(str,{context}),
  };
  
  // Объект с методом для получения строки классов
  const classNameUtils = {
    cx: (...args: string[]): string => createClassNames(...args),
  };

export class UiComponent<P = {}> extends React.Component<P & UiComponentProps> {
  gettext = (str: string): string => {
    return localeUtils.gettext(str);
  };

  pgettext = (context: string, str: string): string => {
    return localeUtils.pgettext(context, str);
  };

  cx = (...args: string[]): string => {
    return classNameUtils.cx(...args);
  };
}



export class Button extends UiComponent {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { label, onClick } = this.props;

    return (
      <button
        onClick={onClick}
        className={this.cx('Button')}
      >
        {label || this.gettext('Кнопка')}
      </button>
    );
  }
}

