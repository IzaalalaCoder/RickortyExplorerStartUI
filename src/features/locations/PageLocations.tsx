import React from 'react';

import { Button, Divider, Heading, Stack, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { ErrorPage } from '@/components/ErrorPage';
import { LoaderFull } from '@/components/LoaderFull';

import { AppLayoutPage } from '../app/AppLayoutPage';
import CardLocation from './CardLocation';

export default function PageLocations() {
  const [url, setUrl] = React.useState(
    'https://rickandmortyapi.com/api/location'
  );

  const { data, isLoading, isError, error } = useQuery<LocationGlobalAPI>(
    ['searchAllLocations', url],
    async () => {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
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
      {isLoading && <LoaderFull />}
      {isError && <ErrorPage />}
      <Stack flex={1} spacing={4}>
        <Heading size="md">Liste de lieux</Heading>
        <Stack>
          <Stack spacing={15}>
            {data?.results.map((location) => (
              <CardLocation
                key={location.id}
                location={location}
              ></CardLocation>
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
      </Stack>
    </AppLayoutPage>
  );
}
