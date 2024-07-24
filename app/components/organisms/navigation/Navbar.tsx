import { Link } from '@remix-run/react';
import HamburgerIcon from '../../atoms/icons/HamburgerIcon';
import { navLinks } from '~/constants/navLinks';

// import { useState } from 'react';

function Navbar() {
  // const navLinks = [
  //   {
  //     name: 'Calculators',
  //     links: [
  //       {
  //         name: 'One Rep Max',
  //         url: '/calculators/one-rep-max',
  //       },
  //       {
  //         name: 'Barbell Load ',
  //         url: '/calculators/barbell-load',
  //       },
  //     ],
  //   },
  // ];
  // const [isDarkMode, setIsDarkMode] = useState(true);

  // const handleThemeToggleClick = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  const handleHamburgerMenuButtonClick = () => {
    const modal = document.getElementById(
      'hamburger_menu-modal'
    ) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    } else {
      console.error("Element with ID 'my_modal_1' not found.");
    }
  };

  return (
    <>
      <div className="flex justify-between max-w-lg mx-auto bg-base-100 navbar">
        <div className="flex items-center flex-1">
          <Link
            to="/"
            className="text-xl font-semibold"
          >
            Weightlifting Calc
          </Link>
        </div>
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost"
            onClick={handleHamburgerMenuButtonClick}
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog
        id="hamburger_menu-modal"
        className="modal"
      >
        <div className="w-screen h-screen bg-base-100 ">
          <div className="max-w-sm px-10 py-20 mx-auto">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                ✕
              </button>
            </form>
            <div className="space-y-4">
              <Link
                to={'/'}
                className="text-xl font-bold"
              >
                Home
              </Link>
              {/* Sections */}
              {navLinks.map((section) => (
                <div
                  key={section.name}
                  className=""
                >
                  <h3 className="text-xl font-bold">{section.name}</h3>
                  <div className="flex flex-col gap-2">
                    {section.links.map((link) => (
                      <a
                        href={link.url}
                        key={link.name}
                        className="ml-4"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              {/* <div className="">
                <h3 className="text-xl font-bold">Settings</h3>
                <div className="mb-2 form-control">
                  <label className="flex items-center justify-between ml-4 cursor-pointer">
                    <div className="">Light/Dark</div>
                    <input
                      type="checkbox"
                      className="toggle toggle-sm"
                      onChange={handleThemeToggleClick}
                      checked={isDarkMode}
                    />
                  </label>
                </div>
                <div className="form-control"></div>
              </div> */}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Navbar;
