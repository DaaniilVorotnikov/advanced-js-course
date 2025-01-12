import { ComponentMeta, ComponentStory } from '@storybook/react'
import AboutPage from './about-page'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator'
import { Theme } from 'app/providers/theme-provider'

export default {
    title: 'pages/about-page',
    component: AboutPage,
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = (args:any) => <AboutPage {...args} />;

export const Light = Template.bind({})

Light.args = {}

export const Dark = Template.bind({})

Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]