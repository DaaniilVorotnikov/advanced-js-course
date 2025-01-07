// import { classNames } from 'helpers/classNames/classNames';
import { Button } from 'shared/ui/button';
import { useEffect, useState } from 'react';

interface BugButtonProps {className?:string;}

export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrowError = () => setError(true);

    const handleError = () => {
        // Логика обработки ошибки

        throw new Error();
        // Также можно сбросить ошибку:
    };

    useEffect(() => {
        if (error) {
            // Например, можно вызвать функцию для обработки ошибки:
            handleError();
        }
    }, [error]);

    return (
        <Button onClick={onThrowError}> throw error </Button>
    );
};
