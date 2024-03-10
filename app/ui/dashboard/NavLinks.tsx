'use client';
import  { useState, useEffect } from 'react';

import {
    HomeIcon,
    ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavLinks() {
    const [links, setLinks] = useState([{ name: 'Home', href: '/dashboard', icon: HomeIcon}]);
    useEffect(() => {
        fetch('http://localhost:3001/conversations')
            .then((response) => response.json())
            .then((data: any[]) => {
                const newLinks = [...links, ...data.map((conversation) => ({
                    name: conversation.title,
                    href: `/dashboard/conversation/${conversation.id}`,
                    icon: ChatBubbleOvalLeftEllipsisIcon
                }))];
                setLinks(newLinks);
            })
    }, []);

    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-gray-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-sky-100 text-gray-600': pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
