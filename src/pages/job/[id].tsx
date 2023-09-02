import { AuthenticationContext } from '@/context/AuthenticationContext';
import { Anchor, Button, Image, Grid, Paper, Divider, Stack, Text, Container } from '@mantine/core';
import { modals } from '@mantine/modals';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { JobRepository } from '@//repository/job';
import { IconArrowBack } from '@tabler/icons-react';



export default function JobDetail() {
  const { query, back } = useRouter();
  const { id: idRouter } = query;

  const { data, error, mutate } = JobRepository.hooks.useDetailJob(idRouter);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="min-h-screen">
        <Stack>
          <div className="fixed top-0 left-0 w-full h-20 shadow-md bg-blue-500">
            <div className="flex items-center justify-center w-full h-full text-4xl text-white">
              <b>Github </b>Jobs
            </div>
          </div>
        </Stack>
        <Container size={'xl'} mt={50} className="rounded-lg py-10">
          <Button className='text-[#427fbe]' onClick={back} leftIcon={<IconArrowBack />} variant="default">
            Kembali
          </Button>
          <Paper withBorder shadow="md" p={30} mt={5}  radius="md">
            <Text className='text-[#97aab6] inline-block'>{data?.data.type} / {data?.data.location}</Text>
            <Text className='text-3xl font-bold'>{data?.data.title}</Text>
            <Divider my="sm" mt={20} />
            <Grid>
              <Grid.Col span={8} dangerouslySetInnerHTML={{ __html: data?.data.description }}>
              </Grid.Col>
              <Grid.Col span={4}>
                <Paper withBorder shadow="xs" p="md">
                  <Text className='font-bold'>{data?.data.company}</Text>
                  <Divider my="sm" mt={20} />
                  <Image maw={240} mx="auto" radius="md" src={data?.data.company_logo} alt="Random image" />
                  <Divider my="sm" mt={20} />
                  <a href={data?.data.company_url}>{data?.data.company_url}</a>
                </Paper>
                <Paper withBorder shadow="xs" mt={30} p="md">
                  <Text className='font-bold'>How To Apply</Text>
                    <Divider my="sm" mt={20} />
                  <Text dangerouslySetInnerHTML={{ __html: data?.data.how_to_apply }}>
                  </Text>
                </Paper>
              </Grid.Col>
            </Grid>
          </Paper>
        </Container>
      </div>
    </>
  );
}
