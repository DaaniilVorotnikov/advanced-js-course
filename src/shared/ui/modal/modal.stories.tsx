import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import { Modal } from './modal';

export default {
    title: 'shared/modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: `Проясню по теме встречи, у нас есть задачи которые касаются адаптера теми или иными углами нам надо определиться с судьбой этих задач.  
    У нас в общем-то по аналитике практически всё готово.`,
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: `Проясню по теме встречи, у нас есть задачи которые касаются адаптера теми или иными углами нам надо определиться с судьбой этих задач.  
    У нас в общем-то по аналитике практически всё готово.`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
