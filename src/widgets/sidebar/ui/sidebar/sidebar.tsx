import { classNames } from 'helpers/classNames/classNames';
import cls from './sidebar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import { LangSwitcher } from 'shared/ui/lang-switcher/lang-switcher';

interface SidebarProps {className?:string;}

export const Sidebar = ({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

return(
<div className={classNames(cls.sidebar, {[cls.collapsed]:collapsed}, [className])}>
    <button onClick={onToggle}>
        toggle
    </button>
    <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.lang}/>
    </div>
</div>
)
}