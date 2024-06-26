import { BarbellLoadData, BarBellLoadEntry } from '~/types/weight';
import { calculateTotalPlateWeight } from '~/utils/calculators';

type BarbellLoadTableProps = {
  updateBarbellLoadEntry: (updatedBarbellLoadEntry: BarBellLoadEntry) => void;
  data: BarbellLoadData;
};

function BarbellLoadTable({
  data: { barWeight, targetWeight, load },
  updateBarbellLoadEntry,
}: BarbellLoadTableProps) {
  // Helpers
  const plateWeight = load ? calculateTotalPlateWeight(load) : 0;
  const totalWeight = plateWeight ? +plateWeight + +barWeight : barWeight;

  // Handlers
  const handleAddButtonClick = ({ plate, perSide }: BarBellLoadEntry) => {
    const updatedBarbellLoadEntry: BarBellLoadEntry = {
      plate,
      perSide: perSide + 1,
    };
    updateBarbellLoadEntry(updatedBarbellLoadEntry);
  };

  const handleSubtractButtonClick = ({ plate, perSide }: BarBellLoadEntry) => {
    const updatedBarbellLoadEntry: BarBellLoadEntry = {
      plate,
      perSide: perSide - 1,
    };
    updateBarbellLoadEntry(updatedBarbellLoadEntry);
  };

  return (
    <div className="py-10 bg-base-300 p-2 rounded-xl text-center mt-6">
      <div className="grid grid-cols-2 mb-2">
        <div>
          <div className="grid grid-cols-2 gap-2">
            <span className="justify-self-end">Target:</span>
            <span className="justify-self-start">{targetWeight}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <span className="justify-self-end">Actual:</span>
            <span className="justify-self-start">{totalWeight}</span>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-2">
            <span className="justify-self-end">Bar:</span>
            <span className="justify-self-start">{barWeight}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <span className="justify-self-end">Plates:</span>
            <span className="justify-self-start">{plateWeight}</span>
          </div>
        </div>
      </div>

      {load ? (
        <table className="table">
          <thead>
            <tr>
              <th>Plate</th>
              <th>Edit</th>
              <th>Per Side</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {load.map((row, index) => (
              <tr key={index}>
                <td>{row.plate}</td>
                <td>
                  <div className="join">
                    <button
                      className="btn btn-sm join-item"
                      disabled={row.perSide === 0}
                      onClick={() => {
                        handleSubtractButtonClick(row);
                      }}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-sm join-item"
                      onClick={() => {
                        handleAddButtonClick(row);
                      }}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>{row.perSide}</td>
                <td>{row.perSide * 2 * row.plate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="py-6 font-semibold">
          Cannot calculate load.
          <br />
          Target less than bar weight.
        </div>
      )}
    </div>
  );
}

export default BarbellLoadTable;
