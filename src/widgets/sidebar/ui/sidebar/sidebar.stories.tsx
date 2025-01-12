import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Sidebar } from './sidebar'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator'
import { Theme } from 'app/providers/theme-provider'

export default {
    title: 'widget/sidebar',
    component: Sidebar,
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({})

Light.args = {}

export const Dark = Template.bind({})

Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]