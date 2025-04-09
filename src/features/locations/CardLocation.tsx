import React from 'react';

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';

export default function CardLocation({
  location,
}: {
  location: LocationInformationAPI;
}) {
  return (
    <Card overflow="hidden" variant="outline">
      <CardHeader>
        <Heading size="md">{location.name}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {location.type !== 'unknown' && (
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Type
              </Heading>
              <Text pt="2" fontSize="sm">
                {location.type}
              </Text>
            </Box>
          )}
          {location.dimension !== 'unknown' && (
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Dimension
              </Heading>
              <Text pt="2" fontSize="sm">
                {location.dimension}
              </Text>
            </Box>
          )}
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Date de création
            </Heading>
            <Text pt="2" fontSize="sm">
              {location.created}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
