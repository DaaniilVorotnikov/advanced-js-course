import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import { Loader } from './loader';

export default {
    title: 'shared/loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Light = Template.bind({});

Light.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
