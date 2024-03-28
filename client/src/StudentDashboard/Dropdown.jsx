import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import CalendarApp from '../components/Calender'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          Calendar
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition-transform ease-out duration-4000"
        enterFrom="opacity-0 translate-y-[-10%]"
        enterTo="opacity-100 translate-y-0"
        leave="transition-transform ease-in duration-4000"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-[-10%]"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <CalendarApp />
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
