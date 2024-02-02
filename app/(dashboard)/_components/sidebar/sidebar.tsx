import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { BarChartIcon, CircleIcon, ClockIcon, CogIcon, CreditCardIcon, DotIcon, FolderIcon, ReceiptIcon, UserRound, UsersIcon, UsersRoundIcon, Warehouse } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  const sidebarItems = [
    { icon:  Warehouse, text: 'Dashboard' , href: "/admin"},
    { icon: BarChartIcon, text: 'Analytics' , href: "/analytics"},
    { icon: ClockIcon, text: 'Time' , href: "/track"},
    { icon: FolderIcon, text: 'Projects' , href: "/project"},
    { icon: CreditCardIcon, text: 'Expenses' , href: "/expenses"},
    { icon: UsersIcon, text: 'Team' , href: "/team"},
    { icon: ReceiptIcon, text: 'Invoices' , href: "/invoices"},
    { icon: UsersRoundIcon, text: 'Clients' , href: "/clients"},
  ];

  // const pinnedItems = [
  //   { icon: MicroscopeIcon, text: 'Research' },
  //   { icon: PencilIcon, text: 'Design' },
  //   { icon: SquareIcon, text: 'Prototype' },
  //   { icon: FlaskRoundIcon, text: 'Testing' },
  // ];

  return (
    <aside className="w-64 px-4 py-6 bg-white dark:bg-gray-800 border-r dark:border-gray-700">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold text-gray-800 dark:text-gray-200">PomoTracker</span>
        <DotIcon className="h-6 w-6 text-gray-400 dark:text-gray-500" />
      </div>
      <div className='flex flex-col justify-between gap-5'>

      <div className="mt-8 flex-1">
        <ul className="space-y-2 ">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Link className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-500" href={item.href}>
                {<item.icon className="h-5 w-5" />}
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 md:min-h-[9rem]">
          <h4 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">Pinned</h4>
          <ul className="mt-2 space-y-2">
            
          </ul>
        </div>
      </div>
      <div className="mt-auto flex-1">
        <div className="flex items-center space-x-2">
          <Switch id="dark-mode" />
          <Label htmlFor="dark-mode">Dark mode</Label>
        </div>
        <Link className="mt-4 flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-500" href="/settings">
          <CogIcon className="h-5 w-5" />
          <span>Settings</span>
        </Link>
        <a className="mt-2 flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-500" href="#">
          <CircleIcon className="h-5 w-5" />
          <span>Help center</span>
        </a>
      </div>
      </div>


    </aside >
  );
};

export default Sidebar;
