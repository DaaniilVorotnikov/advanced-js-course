import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/store-provider';

export const StoreDecorator = (StoryComponent:Story) => (
    <StoreProvider>
        <StoryComponent />
    </StoreProvider>
);
