import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from '@mantine/form';
import Logo from '@images/logo.png';
import { Anchor, Button, Checkbox, Flex, Group, Paper, PasswordInput, Stack, TextInput } from '@mantine/core';
import { AuthenticationRepository } from '@//repository/authentication';
import { AxiosError } from 'axios';
import { useContext, useState } from 'react';
import { AuthenticationContext } from '@/context/AuthenticationContext';

export default function Page() {
  const { push } = useRouter();
  const { setToken } = useContext(AuthenticationContext);

  const onSubmit = async (values: any) => {
    const dataLogin: any = {
      username: values.username,
      password: values.password,
    };

    try {
      const {
        data
      } = await AuthenticationRepository.api.login(dataLogin);

      const {
        token
      } = data;

      // Set Cookie
      setToken(token);

      push('/job');
    } catch (e: any) {

      if (e instanceof AxiosError) {
        // Handle error
        const data = e.response?.data;
        const {
          message = 'Terjadi kesalahan',
        } = data;

        alert(message);

      } else {
        alert('Terjadi kesalahan');
      }

    }
  };

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: {
      username: (value: string) => {
        if (!value) {
          return 'Username harus diisi';
        }
        return null;
      },
      password: (value: string) => {
        if (!value) {
          return 'Password harus diisi';
        }
        return null;
      },
    },
  });

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login" />
      </Head>
      <Stack>
        <div className="fixed h-20 w-full shadow-md">
          <div className="flex items-center w-full h-full text-4xl text-white" style={{
            background:"#427fbe"
          }}>
            <b>Github </b>Jobs
          </div>
        </div>
        <div className="max-w-full px-5 mx-auto lg:px-0 lg:max-w-[100vw]">
          <Flex direction={'column'} justify={'center'} className="h-screen">
            <form onSubmit={form.onSubmit(onSubmit)}>
              <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Username" placeholder="username" required {...form.getInputProps('username')} />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" {...form.getInputProps('password')} />
                <Stack spacing={'md'} mt={'lg'}>
                  <Button type="submit">Sign in</Button>
                </Stack>
              </Paper>
            </form>
          </Flex>
        </div>
      </Stack>
    </>
  );
}
