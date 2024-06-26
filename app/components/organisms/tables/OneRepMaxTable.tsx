import Card from '~/components/atoms/Card';
import Table from '~/components/atoms/Table';
import { OneRepMaxTableEntry } from '~/types/data';

type OneRepMaxTableProps = {
  data: OneRepMaxTableEntry[];
};

function OneRepMaxTable({ data }: OneRepMaxTableProps) {
  const oneRepMax = data[0]['Weight'];
  return (
    <Card className="text-center p-4">
      <h3 className="text-2xl mb-4 font-semibold">Your 1RM is {oneRepMax} </h3>
      <Table data={data} />
    </Card>
  );
}

export default OneRepMaxTable;
