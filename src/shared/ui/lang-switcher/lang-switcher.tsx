import { classNames } from 'helpers/classNames/classNames';
import cls from './lang-switcher.module.scss'
import { useTranslation } from 'react-i18next';
import { Button } from '../button';
import { ThemeButton } from '../button/ui/button';

interface LangSwitcherProps {className?:string;}

export const LangSwitcher = ({className}: LangSwitcherProps) => {

    const {t, i18n} =useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

return(
        <Button
            className={classNames(cls.langSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
)
}
