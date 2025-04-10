import React from 'react';

import { Badge, Card, CardBody, Heading, Image, Stack } from '@chakra-ui/react';

import { CharacterAPI } from './CharacterZod';

export default function CardCharacter({
  character,
}: {
  character: CharacterAPI;
}) {
  const genderColor =
    character.gender === 'unknown'
      ? null
      : character.gender === 'Genderless'
        ? 'purple'
        : character.gender === 'Male'
          ? 'blue'
          : 'pink';

  const statusColor =
    character.status === 'unknown'
      ? null
      : character.status === 'Alive'
        ? 'green'
        : 'red';

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={character.image}
        alt={character.name}
        title={character.name}
      />

      <CardBody>
        <Heading size="md">{character.name}</Heading>

        <Stack direction="row" wrap="wrap">
          {statusColor && (
            <Badge fontWeight="bold" colorScheme={statusColor}>
              {character.status}
            </Badge>
          )}
          {genderColor && (
            <Badge fontWeight="bold" colorScheme={genderColor}>
              {character.gender}
            </Badge>
          )}
          <Badge fontWeight="bold" colorScheme="blackAlpha">
            {character.species}
          </Badge>
          {character.type !== '' && (
            <Badge fontWeight="bold" colorScheme="teal">
              {character.type}
            </Badge>
          )}
          {character.origin.name !== 'unknown' && (
            <Badge fontWeight="bold" colorScheme="cyan">
              {character.origin.name}
            </Badge>
          )}
          {character.location.name !== 'unknown' && (
            <Badge fontWeight="bold" colorScheme="yellow">
              {character.location.name}
            </Badge>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
}
