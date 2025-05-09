import { classNames } from 'shared/lib/classNames/classNames';
import cls from './login-modal.module.scss'
import LoginForm from '../login-form/login-form';
import { Modal } from 'shared/ui/modal/modal';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose  }: LoginModalProps) => {

return (
        <Modal 
            className={classNames(cls.loginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy={true}
        >
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;