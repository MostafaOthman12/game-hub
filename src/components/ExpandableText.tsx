import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

export const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const summry = expanded ? children : children.slice(0, limit) + ".......";

  if (!children) return null;
  return (
    <Box>
      <Text>
        {summry}{" "}
        <Button onClick={() => toggleExpanded()}>
          {!expanded ? "Show More" : "Show Less"}
        </Button>
      </Text>
    </Box>
  );
};
