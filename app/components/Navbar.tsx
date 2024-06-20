import { Link } from '@remix-run/react';
import HamburgerIcon from './icons/HamburgerIcon';
import { useState } from 'react';
import { links } from '~/constants/links';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isKg, setIsKg] = useState(false);

  const handleThemeToggleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLbsToggleClick = () => {
    setIsKg(!isKg);
  };

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
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost text-xl"
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
          <div className="py-20 px-10">
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
              {links.map((section) => (
                <div
                  key={section.name}
                  className=""
                >
                  <h3 className="text-xl font-bold">{section.name}</h3>
                  <div className="flex flex-col gap-2">
                    {section.links.map((link) => (
                      <Link
                        to={link.url}
                        key={link.name}
                        className="ml-4"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="">
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
                <div className="form-control">
                  <label className="ml-4 cursor-pointer flex items-center justify-between">
                    <div className="">Pounds / Kilograms</div>
                    <input
                      type="checkbox"
                      className="toggle toggle-sm"
                      onChange={handleLbsToggleClick}
                      checked={isKg}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Navbar;
