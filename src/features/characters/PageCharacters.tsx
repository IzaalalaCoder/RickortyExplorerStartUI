import React from 'react';

import { Button, Divider, Heading, Stack, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { ErrorPage } from '@/components/ErrorPage';
import { LoaderFull } from '@/components/LoaderFull';

import { AppLayoutPage } from '../app/AppLayoutPage';
import CardCharacter from './CardCharacter';

export default function PageCharacters() {
  const [url, setUrl] = React.useState(
    'https://rickandmortyapi.com/api/character'
  );

  const { data, isLoading, isError, error } = useQuery<CharacterGlobalAPI>(
    ['searchAllCharacters', url],
    async () => {
      const response = await fetch(url);
      if (!response.ok) {
        const errMsg =
          response.status === 404
            ? 'There is nothing here'
            : response.statusText;
        throw new Error(errMsg);
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
        {isError &&
          error instanceof Error &&
          error.message !== 'There is nothing here' && <ErrorPage />}
        {isError &&
          error instanceof Error &&
          error.message === 'There is nothing here' && (
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
