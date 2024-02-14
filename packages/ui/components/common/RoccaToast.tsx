import { CloseIcon } from "@chakra-ui/icons";
import {
  createStandaloneToast,
  Heading,
  Text,
  IconButton,
  HStack,
  Flex,
} from "@chakra-ui/react";

const { toast } = createStandaloneToast();

const RoccaToast = ({
  type,
  message,
}: {
  type: "success" | "error";
  message: string;
}) => {
  const toastInstance = toast({
    render: () => (
      <Flex
        flexDirection="column"
        bgColor={type === "error" ? "red.500" : "green.500"}
        padding="20px"
        borderRadius="md"
      >
        <HStack
          flexDirection="row"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="black">{type.toUpperCase()}!</Heading>
          <IconButton
            color="black"
            variant="icon"
            icon={<CloseIcon />}
            aria-label="toast-close"
            onClick={() => toast.close(toastInstance)}
          />
        </HStack>

        <Text color="black" textAlign="left" width="100%">
          {message}
        </Text>
      </Flex>
    ),
  });
  return toastInstance;
};

export default RoccaToast;
