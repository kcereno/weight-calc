import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { links } from '~/constants/links';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <main className="p-6 space-y-4 bg-base-200 min-h-screen">
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
    </main>
  );
}
