import { Box } from "@chakra-ui/react";
import type { Meta, StoryFn } from "@storybook/react";

import NavMenu from "./NavMenu";

export default {
  title: "Common/Nav Menu",
  component: NavMenu,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box width="360px" backgroundColor="blue.500">
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: StoryFn = (args) => <NavMenu {...args} />;

export const StoryOne = Template.bind({});
StoryOne.args = {};
