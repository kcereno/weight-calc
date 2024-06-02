import Table from '../icons/ui/Table';

function OneRepMaxTable() {
  const test = [
    {
      'Percent of 1RM': 50,
      'Lift Weight': '112.5 kgs',
      'Repetitions of 1RM': '20+',
    },
    {
      'Percent of 1RM': 55,
      'Lift Weight': '123.8 kgs',
      'Repetitions of 1RM': '18-19',
    },
    {
      'Percent of 1RM': 60,
      'Lift Weight': '135 kgs',
      'Repetitions of 1RM': '16-17',
    },
    {
      'Percent of 1RM': 65,
      'Lift Weight': '146.3 kgs',
      'Repetitions of 1RM': '14-15',
    },
    {
      'Percent of 1RM': 70,
      'Lift Weight': '157.5 kgs',
      'Repetitions of 1RM': '12-13',
    },
    {
      'Percent of 1RM': 75,
      'Lift Weight': '168.8 kgs',
      'Repetitions of 1RM': '10-11',
    },
    {
      'Percent of 1RM': 80,
      'Lift Weight': '180 kgs',
      'Repetitions of 1RM': '8-9',
    },
    {
      'Percent of 1RM': 85,
      'Lift Weight': '191.3 kgs',
      'Repetitions of 1RM': '6-7',
    },
    {
      'Percent of 1RM': 90,
      'Lift Weight': '202.5 kgs',
      'Repetitions of 1RM': '4-5',
    },
    {
      'Percent of 1RM': 95,
      'Lift Weight': '213.8 kgs',
      'Repetitions of 1RM': '2-3',
    },
    {
      'Percent of 1RM': 100,
      'Lift Weight': '225 kgs',
      'Repetitions of 1RM': '1',
    },
  ];

  return (
    <div className="py-10 bg-base-300 p-2 rounded-xl text-center">
      <h3 className="text-2xl mb-4">Your 1RM is 335lbs</h3>
      <Table data={test} />
    </div>
  );
}

export default OneRepMaxTable;
