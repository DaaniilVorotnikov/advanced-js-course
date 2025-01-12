import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button, ThemeButton } from './button'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator'
import { Theme } from 'app/providers/theme-provider'

export default {
    title: 'shared/button',
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>

export const Clear = Template.bind({})

Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR
}

export const Outline = Template.bind({})

Outline.args = {
    children: 'Text',
    theme: ThemeButton.Outline
}

export const OutlineDark = Template.bind({})

OutlineDark.args = {
    children: 'Text',
    theme: ThemeButton.Outline
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]