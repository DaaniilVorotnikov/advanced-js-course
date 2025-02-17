import { ComponentMeta, ComponentStory } from '@storybook/react'
import MainPage from './main-page'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator'
import { Theme } from 'app/providers/theme-provider'

export default {
    title: 'pages/main-page',
    component: MainPage,
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = (args:any) => <MainPage {...args} />;

export const Light = Template.bind({})

Light.args = {}

export const Dark = Template.bind({})

Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]