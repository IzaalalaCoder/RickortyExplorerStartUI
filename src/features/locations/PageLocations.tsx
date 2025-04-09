import React from 'react';

import { Button, Divider, Stack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { ErrorPage } from '@/components/ErrorPage';
import { LoaderFull } from '@/components/LoaderFull';

import CardLocation from './CardLocation';

export default function PageLocations() {
  const [url, setUrl] = React.useState(
    'https://rickandmortyapi.com/api/location'
  );

  const { data, isLoading, isError } = useQuery<RootObject>(
    ['data', url],
    async () => {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    },
    {
      retry: 1,
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

  const display = () => {
    if (isLoading) {
      return <LoaderFull />;
    }

    if (isError) {
      return <ErrorPage />;
    }

    return (
      <Stack>
        <Stack spacing={15}>
          {data?.results.map((l) => <CardLocation location={l}></CardLocation>)}
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
    );
  };

  return display();
}
