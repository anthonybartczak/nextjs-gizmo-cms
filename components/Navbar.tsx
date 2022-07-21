import { Disclosure } from '@headlessui/react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'O NAS', href: '/#about-us', current: false },
  { name: 'NASZE USŁUGI', href: '/#our-services', current: false },
  { name: 'JAK DOJECHAĆ?', href: '/#destination', current: false },
  { name: 'KONTAKT', href: 'contact', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  })

  return (
    <Disclosure as="nav" className={navbar ? 'bg-gray-50 shadow-lg sticky top-0 z-50 transition-duration-400' : '' }>
      {({ open }) => (
      <>
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button
                className="inline-flex items-center justify-center p-2 rounded text-gray-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                <AiOutlineClose className="block h-6 w-6" aria-hidden="true" />
                ) : (
                <AiOutlineMenu className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                  <a key={item.name} href={item.href} className={classNames( item.current ? 'bg-indigo-600 text-white'
                    : 'hover:bg-indigo-600 hover:text-white'
                    , 'px-3 py-2 rounded text-sm font-medium hover:no-underline underline underline-offset-8 decoration-3 decoration-indigo-600' )}
                    aria-current={item.current ? 'page' : undefined}>
                    {item.name}
                  </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
            <Disclosure.Button key={item.name} as="a" href={item.href} className={classNames( item.current
              ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-600 hover:text-white'
              , 'block px-3 py-2 rounded text-base font-medium' )} aria-current={item.current ? 'page' : undefined}>
              {item.name}
            </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
      )}
    </Disclosure>
  )
}
