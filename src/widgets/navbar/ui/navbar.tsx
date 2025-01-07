import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import React from 'react';
import cls from './navbar.module.scss';

interface NavbarProps {
    className?:string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                Главная
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                О сайте
            </AppLink>
        </div>
    </div>
);

export default Navbar;

interface UiComponentProps {
  label:string;
  onClick:() => void;
}

interface IContext {
    context:string
}

const translate = (str:string, obj?:IContext):string => str;
const createClassNames = (...args:string[]):string => '';

// Объект с методами для поддержки переводов в сервисе
const localeUtils = {
    gettext: (str: string): string => translate(str),
    pgettext: (context: string, str: string): string => translate(str, { context }),
};

// Объект с методом для получения строки классов
const classNameUtils = {
    cx: (...args: string[]): string => createClassNames(...args),
};

export class UiComponent<P = {}> extends React.Component<P & UiComponentProps> {
    gettext = (str: string): string => localeUtils.gettext(str);

    pgettext = (context: string, str: string): string => localeUtils.pgettext(context, str);

    cx = (...args: string[]): string => classNameUtils.cx(...args);
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
