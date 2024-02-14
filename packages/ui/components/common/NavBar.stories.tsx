import { Box } from "@chakra-ui/react";
import type { Meta, StoryFn } from "@storybook/react";

import NavBar from "./NavBar";

export default {
  title: "Common/Nav Bar",
  component: NavBar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box width="360px" backgroundColor="blue.500">
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: StoryFn = (args) => <NavBar {...args} />;

export const StoryOne = Template.bind({});
StoryOne.args = {};
