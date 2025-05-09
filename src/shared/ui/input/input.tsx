import { classNames } from 'shared/lib/classNames/classNames';
import cls from './input.module.scss'
import { useTranslation } from 'react-i18next';
import { InputHTMLAttributes, memo, useEffect, useState } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps { 
    className?:string; 
    value?:string;
    autofocus?: boolean;
    onChange?: (value:string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = ' text',
        placeholder,
        autofocus,
        ...otherProps
    } = props 

    const [ isFocused, setFocuse ] = useState(false)
    const [ caretPosition, setCaretPosition ] = useState(0)

    useEffect( () => {
        if(autofocus){
            setFocuse(true);
        }
    }, [autofocus])

    const onBlur = () => {
        setFocuse(false)
    }

    const onFocus = () => {
        setFocuse(true)
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCaretPosition(e.target.value.length)
    }

    const onSelect = (e:any) => {
        setCaretPosition(e?.target?.selectionStart || 0)
    }

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            {placeholder && 
            (<div className={cls.placeholder}>
                {`${placeholder}`}
            </div>)
            }
            <div className={cls.caretWrapper}>
                <input 
                type={type}
                onChange={onChangeHandler}
                value={value}
                className={cls.input}
                onFocus={onFocus}
                onBlur={onBlur}
                onSelect={onSelect}
                {...otherProps}
                />
              {isFocused && (
                <span 
                    className={cls.caret}
                    style={{left: `${caretPosition * 9}px`}} 
                />
              )} 
            </div>
        </div>
    )
})
