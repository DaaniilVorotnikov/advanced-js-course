import { classNames } from 'shared/lib/classNames/classNames';
import Loader from 'shared/ui/loader';
import cls from './page-loader.module.scss';

interface PageLoaderProps {className?:string;}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.pageLoader, {}, [])}>
        <Loader />
    </div>
);

export default PageLoader;
