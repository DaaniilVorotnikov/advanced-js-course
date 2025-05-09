import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input/input';
import cls from './login-form.module.scss';

interface LoginFormProps {className?:string;}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginForm, {}, [])}>
            <Input type="text" placeholder="login" autofocus className={cls.input} />
            <Input type="text" placeholder="password" className={cls.input} />
            <Button className={cls.loginBtn}>
                { t('Войти') }
            </Button>
        </div>
    );
};

export default LoginForm;
