import React from 'react'
import { BarChartIcon, CircleIcon, ClockIcon, CogIcon, CreditCardIcon, DotIcon, FolderIcon, ReceiptIcon, UsersIcon } from 'lucide-react';
import Sidebar from './_components/sidebar/sidebar';
import Navbar from './_components/navbar';

const DashboardLayout = ({
  children
}: React.PropsWithChildren) => {
  return (
    <main className='flex h-screen'>
      <Sidebar />
      <div className="flex-1  dark:bg-gray-800 overflow-auto">
        <Navbar />
          {children}
      </div>
    </main>
  )
}

export default DashboardLayout