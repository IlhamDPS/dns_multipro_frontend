import { AuthenticationContext } from '@/context/AuthenticationContext';
import { Anchor, Button, Checkbox, Grid, Paper, Divider, Stack, TextInput, Container } from '@mantine/core';
import { modals } from '@mantine/modals';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from 'react';
import { useForm } from '@mantine/form';
import { JobRepository } from '@//repository/job';
import { formatDistanceToNow } from 'date-fns';

interface PageComponentProps {
  index: number;
  location: string;
  description: string;
  isFullTime: boolean;
} 

function Page ({index, location, description, isFullTime}:PageComponentProps) {
  const { data } = JobRepository.hooks.useListJob(index, location, description, isFullTime);
  const { push, replace } = useRouter();
 
  return data && data?.data.map((item: any, index: number) => (
    item && (
      <div key={index}>
        <Divider my="sm" mt={20} />
        <Grid gutter={5} className='border-t-8'>
          <Grid.Col span={9} className='font-bold text-xl text-[#427fbe] cursor-pointer' onClick={() => {
            push('job/'+item.id)
          }}>
            {item?.title}
          </Grid.Col>
          <Grid.Col span={3} className='flex items-end justify-end'>
            {item?.location}
          </Grid.Col>
          <Grid.Col span={9}>
            <div className='text-[#97aab6] inline-block'>{item?.company}</div> -{' '}
            <div className={item?.type === "Full Time" ? 'inline-block font-bold text-green-500' : 'inline-block '}>
              {item?.type}
            </div>
          </Grid.Col>
          <Grid.Col span={3} className='flex items-end justify-end'>
            <div className='text-[#97aab6] inline-block'>{formatDistanceToNow(new Date(item.created_at ?? null), { addSuffix: true })}</div>
          </Grid.Col>
        </Grid>
      </div>
    )
  ))
}

export default function Home() {
  const { push, replace } = useRouter();
  const [activePagination, setPagination] = useState(1);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isFullTime, setIsFullTime] = useState(false);
  
  const pages = [];
  for (let i = activePagination; i > 0; i--) {
    pages.push(
      <Page key={i} index={i} location={location} description={description} isFullTime={isFullTime} />
    );
  }


  console.log(pages, "ini dia")

  const submitFilter = (value: any) => {
    setLocation(value.location)
    setDescription(value.jobDescription)
    setIsFullTime(value.isFullTime)
    setPagination(1);
  } 

  const form = useForm({
    initialValues: {
      location: '',
      jobDescription: '',
      isFullTime: false,
    },
  });

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
        <Container size={'xl'} className="rounded-lg py-10">
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
              <form onSubmit={form.onSubmit(submitFilter)}>
                <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
                  <Grid.Col span={4}>
                    <TextInput label="Job Description" placeholder="Job Description" {...form.getInputProps('jobDescription')} />
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <TextInput label="Location" placeholder="Location" {...form.getInputProps('location')} />
                  </Grid.Col>
                  <Grid.Col span={2} className='flex items-center justify-center'>
                    <Checkbox
                      label="Full Time Only"
                      {...form.getInputProps('isFullTime', { type: 'checkbox' })}
                    />
                  </Grid.Col>
                  <Grid.Col span={2} className='flex items-center justify-center'>
                    <Button type="submit">Search</Button>
                  </Grid.Col>
                </Grid>
              </form>
            </Paper>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <p className='text-3xl font-bold'>Job List</p>
            {pages}
            <Button fullWidth mt={30} className='bg-blue-500' onClick={() => setPagination(activePagination+1)}>
              Load More
            </Button>
          </Paper>
        </Container>
      </div>
    </>
  );
}
