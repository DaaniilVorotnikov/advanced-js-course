import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import cls from './error-page.module.scss';

interface ErrorPageProps {className?:string;}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.errorPage, {}, [])}>
            <p>{t('Произошла неопределенная ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Перезагрузить страницу')}
            </Button>
        </div>
    );
};

export default ErrorPage;
