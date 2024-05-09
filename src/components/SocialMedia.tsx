'use client';

import { IListSocialMedia } from '@/lib/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FaXTwitter } from 'react-icons/fa6';

const socialMediaList: IListSocialMedia[] = [
  {
    icon: <Github className="text-white" />,
    link: 'https://github.com/bharath2408',
    text: 'Github',
    color: 'black dark:text-white',
    borderColor: 'border-black dark:border-white',
    shadow: 'shadow-black',
  },
  {
    icon: <Linkedin />,
    link: 'https://www.linkedin.com/in',
    text: 'Linkedin',
    color: 'pallet-blue-4',
    borderColor: 'border-pallet-blue-3',
    shadow: 'shadow-blue-700',
  },
  {
    icon: <Mail />,
    link: 'mailto:bharatha24kumar@gmail.com',
    text: 'Email',
    color: 'pallet-purple-1',
    borderColor: 'border-pallet-purple-1',
    shadow: 'shadow-purple-500',
  },
];

const SocialMedia = () => {
  const [listItem, setListItem] = useState<IListSocialMedia[]>(socialMediaList);

  useEffect(() => {
    setListItem(socialMediaList);
  }, []);

  return (
    <div className="flex h-full w-full items-center">
      <ul className="w-full space-y-3">
        {listItem.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.2 }}
          >
            <button
              type="button"
              className={cn(
                'w-full cursor-pointer rounded-md border bg-white px-2 py-1.5 transition-all hover:bg-transparent hover:shadow-[4px_4px_0px_0px] hover:shadow-gray-800 dark:bg-card dark:hover:bg-accent dark:hover:shadow-[4px_4px_0px_0px] dark:hover:shadow-accent',
                item.borderColor,
              )}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full cursor-pointer items-center justify-start"
              >
                <div
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-[10px] p-2 text-white',
                    `bg-${item.color}`,
                    {
                      'bg-black': i === 0,
                    },
                  )}
                >
                  {item.icon}
                </div>
                <span className={cn('ml-2', `text-${item.color}`)}>
                  {item.text}
                </span>
              </a>
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
