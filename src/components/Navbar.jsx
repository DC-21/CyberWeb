import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-[#1f2123] text-white flex w-full px-4 py-6 items-center justify-between">
      <div className="flex gap-8">
        <a href="">Tokenize</a>
        <ul className="md:flex hidden gap-8">
          <li>
            <a>What is Tokenize?</a>
          </li>
          <li>
            <a>Platform</a>
          </li>
          <li>
            <a>Solutions</a>
          </li>
          <li>
            <a>Reference</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="md:flex hidden gap-6 items-center">
        <a>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
          </svg>
        </a>
        <button>Log In</button>
      </div>
      <div className={`md:hidden ${open ? "right-3" : "right-3"} absolute`}>
        <button  onClick={handleMenu}>
          {open ? (
            <svg
              viewBox="0 0 470 1000"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path d="M452 656c12 12 18 26.333 18 43s-6 31-18 43c-12 10.667-26.333 16-43 16s-31-5.333-43-16L234 590 102 742c-12 10.667-26.333 16-43 16s-31-5.333-43-16C5.333 730 0 715.667 0 699s5.333-31 16-43l138-156L16 342C5.333 330 0 315.667 0 299s5.333-31 16-43c12-10.667 26.333-16 43-16s31 5.333 43 16l132 152 132-152c12-10.667 26.333-16 43-16s31 5.333 43 16c12 12 18 26.333 18 43s-6 31-18 43L314 500l138 156" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 700 1000"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path d="M650 450c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 513.333 0 500c0-13.333 4.667-25 14-35s21.333-15 36-15h600M50 350c-13.333 0-25-5-35-15S0 313.333 0 300c0-13.333 4.667-25 14-35s21.333-15 36-15h600c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50m600 300c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 713.333 0 700c0-13.333 4.667-25 14-35s21.333-15 36-15h600" />
            </svg>
          )}
          {open ? 
        <ul className="absolute right-0 shadow-2xl items-center z-50 top-[3.7em] w-[6em] py-2 gap-2 flex flex-col text-left h-[11em] rounded bg-[#1f2123]">
          <li>
            <a>Platform</a>
          </li>
          <li>
            <a>Solutions</a>
          </li>
          <li>
            <a>Reference</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>:null }
        </button>
      </div>
    </div>
  );
};

export default Navbar;
