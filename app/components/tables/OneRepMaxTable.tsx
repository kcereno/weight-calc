import { OneRepMaxTableEntry } from '~/types/data';
import Table from '../icons/ui/Table';

type OneRepMaxTableProps = {
  data: OneRepMaxTableEntry[];
};

function OneRepMaxTable({ data }: OneRepMaxTableProps) {
  const oneRepMax = data[0]['Weight'];
  return (
    <div className="py-10 bg-base-300 p-2 rounded-xl text-center">
      <h3 className="text-2xl mb-4">Your 1RM {oneRepMax} </h3>
      <Table data={data} />
    </div>
  );
}

export default OneRepMaxTable;
