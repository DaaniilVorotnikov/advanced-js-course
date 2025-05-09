import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoginForm } from './login-form';

export default {
    title: 'features/input',
    component: LoginForm,
    argTypes: {
        backgroundColor: { color: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
