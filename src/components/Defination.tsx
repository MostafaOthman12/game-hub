import { Box, Heading, HStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode;
}
export const Defenation = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd> {children}</dd>
    </Box>
  );
};
