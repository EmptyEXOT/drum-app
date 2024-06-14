import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Shine} from "@/shared/ui/Shine/Shine";

const meta: Meta<typeof Shine> = {
    title: 'Shared/Shine',
    component: Shine,
} satisfies Meta<typeof Shine>

export default meta;

type Story = StoryObj<typeof Shine>

export const Default: Story = {
    args: {

    }
}