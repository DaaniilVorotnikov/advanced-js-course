import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './input';

export default {
    title: 'shared/input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type text',
    value: '112233',
};
