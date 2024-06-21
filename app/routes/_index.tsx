import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Weighlifting Calc' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export const links = [
  {
    name: 'Calculators',
    links: [
      {
        name: 'One Rep Max',
        url: '/calculators/one-rep-max',
      },
      // {
      //   name: 'Powerlifting Level',
      //   url: '/',
      // },
      {
        name: 'Barbell Load ',
        url: '/calculators/barbell-load',
      },
      // {
      //   name: 'Macro',
      //   url: '/',
      // },
      // {
      //   name: 'RPE',
      //   url: '/',
      // },
    ],
  },
  // {
  //   name: 'Docs',
  //   links: [
  //     {
  //       name: 'Powerlifting Standards',
  //       url: '/',
  //     },
  //     {
  //       name: 'Prelipins Table',
  //       url: '/',
  //     },
  //   ],
  // },
];

export default function Index() {
  return (
    <main className="p-6 space-y-4 bg-base-200 min-h-screen">
      <div className="max-w-lg mx-auto">
        {links.map((section) => (
          <div key={section.name}>
            <h3 className="text-2xl font-bold">{section.name}</h3>
            <div className="flex flex-col">
              {section.links.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  className="ml-4 text-xl"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
