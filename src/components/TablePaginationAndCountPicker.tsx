import React from 'react';
import { Flex, SegmentedControl, Pagination } from '@mantine/core';
import { generateStringPagination } from '@/interface/global'

interface PaginationComponentProps {
  activePagination: number;
  onChangePagination: (page: number) => void;
  paginationSize: string;
  onChangePaginationSize: (size: string) => void;
  total: number;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  activePagination,
  onChangePagination,
  paginationSize,
  onChangePaginationSize,
  total,
}) => {
  return (
    <Flex direction={'row'} justify={'space-between'} align={'center'}>
      <SegmentedControl
        value={paginationSize}
        onChange={onChangePaginationSize}
        data={[
          { label: '10', value: '10' },
          { label: '25', value: '25' },
          { label: '50', value: '50' },
          { label: '100', value: '100' },
        ]}
      />
      <div className="text-sm">{generateStringPagination(activePagination, Number(paginationSize), total)}</div>
      <Pagination value={activePagination} onChange={onChangePagination} total={Math.ceil(total / 10)} />
    </Flex>
  );
};

export default PaginationComponent;
