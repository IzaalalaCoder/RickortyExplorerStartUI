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

import { EpisodeAPI } from './EpisodeZod';

export default function CardEpisode({ episode }: { episode: EpisodeAPI }) {
  return (
    <Card overflow="hidden" variant="outline">
      <CardHeader>
        <Heading size="md">{episode.name}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Date de sortie
            </Heading>
            <Text pt="2" fontSize="sm">
              {episode.air_date}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Code de l'épisode
            </Heading>
            <Text pt="2" fontSize="sm">
              {episode.episode}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Date de création
            </Heading>
            <Text pt="2" fontSize="sm">
              {episode.created}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
