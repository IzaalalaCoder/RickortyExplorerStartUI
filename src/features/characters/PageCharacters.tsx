import React from 'react';

import { Button, Divider, Heading, Stack, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { N } from 'vitest/dist/chunks/reporters.nr4dxCkA.js';
import { z } from 'zod';

import { ErrorPage } from '@/components/ErrorPage';
import { LoaderFull } from '@/components/LoaderFull';

import { AppLayoutPage } from '../app/AppLayoutPage';
import CardCharacter from './CardCharacter';

export default function PageCharacters() {
  const characterSchema = z.object({
    info: z.object({
      count: z.number(),
      pages: z.number(),
      next: z.string(),
      prev: z.string(),
    }),
    results: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        status: z.string(),
        species: z.string(),
        type: z.string(),
        gender: z.string(),
        origin: z.object({
          name: z.string(),
          url: z.string(),
        }),
        location: z.object({
          name: z.string(),
          url: z.string(),
        }),
        image: z.string(),
        episode: z.array(z.string()),
        url: z.string(),
        created: z.string(),
      })
    ),
  });

  type CharacterAPI = z.infer<typeof characterSchema>;

  const [url, setUrl] = React.useState(
    'https://rickandmortyapi.com/api/character'
  );

  const { data, isLoading, isError } = useQuery<CharacterAPI>(
    ['searchAllCharacters', url],
    async () => {
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 404) {
          return {
            info: {
              count: 0,
              pages: 0,
              next: null,
              prev: null,
            },
            results: [],
          };
        } else {
          throw new Error(response.statusText);
        }
      }
      return response.json();
    }
  );

  const prev = () => {
    if (data && data.info.prev !== null) {
      setUrl(data.info.prev);
    }
  };

  const next = () => {
    if (data && data.info.next !== null) {
      setUrl(data.info.next);
    }
  };

  return (
    <AppLayoutPage>
      <Stack flex={1} spacing={4}>
        <Heading size="md">Liste de personnages</Heading>
        {isLoading && <LoaderFull />}
        {isError && <ErrorPage />}
        {data?.results.length === 0 && (
          <Text>Aucun personnage n'a été trouvé</Text>
        )}
        {!isError && !isLoading && (
          <Stack>
            <Stack spacing={15}>
              {data?.results.map((character) => (
                <CardCharacter
                  key={character.id}
                  character={character}
                ></CardCharacter>
              ))}
            </Stack>
            <Divider />
            <Stack
              marginBottom={5}
              justifyContent="space-around"
              direction="row"
              spacing={4}
              align="center"
            >
              <Button
                isDisabled={data?.info.prev === null}
                onClick={prev}
                colorScheme="teal"
                variant="ghost"
              >
                Previous
              </Button>
              <Button
                isDisabled={data?.info.next === null}
                onClick={next}
                colorScheme="teal"
                variant="ghost"
              >
                Next
              </Button>
            </Stack>
          </Stack>
        )}
      </Stack>
    </AppLayoutPage>
  );
}
