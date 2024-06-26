import { BarbellLoad } from '~/types/weight';
import { calculateTotalPlateWeight } from '~/utils/calculators';

type WarmupSetBarbellLoadModalProps = {
  barbellLoad: BarbellLoad | null;
};

function WarmupSetBarbellLoadModal({
  barbellLoad,
}: WarmupSetBarbellLoadModalProps) {
  // To open
  // const openModal = () =>
  //   (
  //     document.getElementById(
  //       'warmup-set-barbell-load-modal'
  //     ) as HTMLDialogElement
  //   ).showModal();

  const totalPlateWeight = barbellLoad
    ? calculateTotalPlateWeight(barbellLoad)
    : null;
  return (
    <dialog
      id="warmup-set-barbell-load-modal"
      className="modal"
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">Barbell Load</h3>
        {barbellLoad !== null ? (
          <>
            <div className="flex flex-col">
              {barbellLoad.map((entry) => {
                if (entry.perSide === 0) return;

                const totalWeight = entry.plate * (entry.perSide * 2);

                return (
                  <div
                    key={entry.plate}
                    className=""
                  >
                    <div>{`${entry.plate} lbs x ${entry.perSide * 2} (${
                      entry.perSide
                    } per side) = ${totalWeight} lbs`}</div>
                  </div>
                );
              })}
            </div>
            <div className="font-bold mt-6">{`45lbs(Bar) + ${totalPlateWeight}lbs(Plates) = ${
              45 + totalPlateWeight!
            } lbs`}</div>
          </>
        ) : (
          <span className="text-prose">
            Not enough weight to calculate load
          </span>
        )}
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default WarmupSetBarbellLoadModal;
