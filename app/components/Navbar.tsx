import { Link } from '@remix-run/react';
import HamburgerIcon from './icons/HamburgerIcon';

// import { useState } from 'react';

function Navbar() {
  const navLinks = [
    {
      name: 'Calculators',
      links: [
        {
          name: 'One Rep Max',
          url: '/calculators/one-rep-max',
        },
        {
          name: 'Barbell Load ',
          url: '/calculators/barbell-load',
        },
      ],
    },
  ];
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
      <div className="flex justify-between bg-base-100 max-w-lg mx-auto">
        <div className="flex-1 flex items-center">
          <Link
            to="/"
            className="font-semibold text-xl"
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
        <div className="bg-base-100 w-screen h-screen ">
          <div className="py-20 px-10 max-w-sm mx-auto">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
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
                <h3 className="font-bold text-xl">Settings</h3>
                <div className="form-control mb-2">
                  <label className="ml-4 cursor-pointer flex items-center justify-between">
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
