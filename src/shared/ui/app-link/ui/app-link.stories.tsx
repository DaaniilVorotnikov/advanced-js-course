import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import { AppLink, AppLinkTheme } from './app-link';

export default {
    title: 'shared/app-link',
    component: AppLink,
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Red = Template.bind({});

Red.args = {
    children: 'Text',
    theme: AppLinkTheme.RED,
};

export const RedDark = Template.bind({});

RedDark.args = {
    children: 'Text',
    theme: AppLinkTheme.RED,
};

RedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Primary = Template.bind({});

Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});

Secondary.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};

export const SecondaryDark = Template.bind({});

SecondaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
