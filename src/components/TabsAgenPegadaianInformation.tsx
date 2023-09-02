import { Card, Tabs, Stack } from '@mantine/core';
import { IconUser, IconBuilding, IconCards, IconQuestionMark } from '@tabler/icons-react';
import InputSpan from './InputSpan';
import { ReactNode } from 'react';

type ExtendTab = {
  tab: ReactNode;
  panel: ReactNode;
};
type TabsAgenPegadaianInformationProps = {
  withSurvey?: boolean;
  extendTab?: ExtendTab[];
};
function TabsAgenPegadaianInformation({ withSurvey = true, extendTab = [] }: TabsAgenPegadaianInformationProps) {
  return (
    <Card withBorder>
      <Tabs defaultValue="identitas">
        <Tabs.List grow>
          <Tabs.Tab value="identitas" icon={<IconUser size="0.8rem" />}>
            DATA IDENTITAS
          </Tabs.Tab>
          <Tabs.Tab value="usaha" icon={<IconBuilding size="0.8rem" />}>
            DATA USAHA
          </Tabs.Tab>
          <Tabs.Tab value="rekening" icon={<IconCards size="0.8rem" />}>
            DATA REKENING
          </Tabs.Tab>
          {withSurvey && (
            <Tabs.Tab value="survey" icon={<IconQuestionMark size="0.8rem" />}>
              DATA SURVEY
            </Tabs.Tab>
          )}

          {extendTab.map((item) => item.tab)}
        </Tabs.List>

        <Tabs.Panel value="identitas" pt="xs">
          <Stack spacing={'sm'}>
            <InputSpan label="Kode Agen" content="" />
            <InputSpan label="Jenis" content="" />
            <InputSpan label="No.KTP" content="" />
            <InputSpan label="Nama" content="" />
            <InputSpan label="Handphone" content="" />
            <InputSpan label="Email" content="" />
            <InputSpan label="Alamat" content="" />
            <InputSpan label="Foto KTP" content="" />
            <InputSpan label="Outlet" content="" />
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel value="usaha" pt="xs">
          <InputSpan label="Jenis / Bid.Usaha" content="" />
          <InputSpan label="Nama Usaha" content="" />
          <InputSpan label="Foto Usaha" content="" />
          <InputSpan label="Alamat Usaha" content="" />
          <InputSpan label="Provinsi" content="" />
          <InputSpan label="Kabupaten" content="" />
          <InputSpan label="Kecamatan" content="" />
          <InputSpan label="Kelurahan" content="" />
          <InputSpan label="Outlet Extension" content="" />
        </Tabs.Panel>
        <Tabs.Panel value="rekening" pt="xs">
          <InputSpan label="Bank" content="" />
          <InputSpan label="Kode Bank" content="" />
          <InputSpan label="Nomor Rekening" content="" />
          <InputSpan label="Atas Nama" content="" />
        </Tabs.Panel>
        {withSurvey && (
          <Tabs.Panel value="survey" pt="xs">
            <InputSpan label="Tanggal Survey" content="" />
            <InputSpan label="Petugas Survey" content="" />
            <InputSpan label="Referral" content="" />
            <InputSpan label="CIF" content="" />
            <InputSpan label="Klasifikasi Agen" content="" />
            <InputSpan label="Nomor NPWP" content="" />
            <InputSpan label="Kewarganegaraan" content="" />
            <InputSpan label="Tempat Lahir" content="" />
            <InputSpan label="Tanggal Lahir" content="" />
            <InputSpan label="Jenis Kelamin" content="" />
            <InputSpan label="Status Kawin" content="" />
            <InputSpan label="Nama Ibu Kandung" content="" />
            <InputSpan label="Provinsi" content="" />
            <InputSpan label="Kabupaten" content="" />
            <InputSpan label="Kecamatan" content="" />
            <InputSpan label="Kelurahan" content="" />
            <InputSpan label="Latitude" content="" />
            <InputSpan label="Longitude" content="" />
            <InputSpan label="Outlet Extension" content="" />
          </Tabs.Panel>
        )}

        {extendTab.map((item) => item.panel)}
      </Tabs>
    </Card>
  );
}

export default TabsAgenPegadaianInformation;
