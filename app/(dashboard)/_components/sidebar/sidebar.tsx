import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { BarChartIcon, CircleIcon, ClockIcon, CogIcon, CreditCardIcon, DotIcon, FolderIcon, ReceiptIcon, UsersIcon } from 'lucide-react';
import React from 'react';

const Sidebar = () => {
  const sidebarItems = [
    { icon: ClockIcon, text: 'Time' },
    { icon: CreditCardIcon, text: 'Expenses' },
    { icon: FolderIcon, text: 'Projects' },
    { icon: UsersIcon, text: 'Team' },
    { icon: BarChartIcon, text: 'Reports' },
    { icon: ReceiptIcon, text: 'Invoices' },
    { icon: CogIcon, text: 'Manage' },
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
              <a className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-500" href="#">
                {<item.icon className="h-5 w-5" />}
                <span>{item.text}</span>
              </a>
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
        <a className="mt-4 flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-500" href="#">
          <CogIcon className="h-5 w-5" />
          <span>Settings</span>
        </a>
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
