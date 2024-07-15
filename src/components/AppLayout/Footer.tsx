import IMAGES from '@/assets/images';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import IMAGES from '~/assets/images';

const Footer = () => {
  const footerLinks = [
    {
      heading: 'Quick Links',
      nestedLinks: [
        { title: 'Looks', path: '#' },
        { title: 'Stylists', path: '#' },
        { title: 'Salons', path: '#' },
        { title: 'Beauty Schools', path: '#' },
        { title: 'Products', path: '#' },
        { title: 'Offers', path: '#' },
        { title: 'About Us', path: '#' },
        { title: 'Contact', path: '#' },
      ],
    },
    {
      heading: 'For Business',
      nestedLinks: [
        { title: 'Login', path: '#' },
        { title: 'Sign Up', path: '#' },
        { title: 'List your Business', path: '#' },
        { title: 'Advertise', path: '#' },
        { title: 'Business Success Stories', path: '#' },
        { title: 'Business Blog', path: '#' },
      ],
    },
    {
      heading: 'Categories',
      nestedLinks: [
        { title: 'Haircolor', path: '#' },
        { title: 'Haircuts', path: '#' },
        { title: 'Special Event', path: '#' },
        { title: 'Textured Hair/ Braids', path: '#' },
        { title: 'Make-up', path: '#' },
        { title: 'Straightening', path: '#' },
        { title: 'Nails', path: '#' },
        { title: 'Hair Extensions', path: '#' },
        { title: 'Eyelashes', path: '#' },
        { title: 'Men’s', path: '#' },
      ],
    },
    {
      heading: 'Legal Policies',
      nestedLinks: [
        { title: 'Privacy Policy', path: '#' },
        { title: 'Terms & Conditions', path: '#' },
        { title: 'Listing Policy ', path: '#' },
        { title: 'Sitemap', path: '#' },
      ],
    },
  ];

  const socialIcons = [
    { icon: IMAGES.FACEBOOK_ICON },
    { icon: IMAGES.TWITTER_ICON },
    { icon: IMAGES.INSTAGRAM_ICON },
    { icon: IMAGES.YOUTUBE_ICON },
  ];

  return (
    <footer className="bg-black">
      <div className="sm:w-10/12 w-11/12 mx-auto">
        <div className="md:py-20 sm:py-10 py-4">
          <Grid container spacing={4} alignItems="start" className="">
            {footerLinks.map((item, index) => (
              <Grid key={index} item lg={2} md={3} sm={6} xs={12}>
                <Typography className="font-[800] relative footer-heading text-[17px] pb-1.5" variant="h6">
                  {item.heading}
                </Typography>
                <div className="sm:mt-10 mt-6 flex flex-col sm:gap-3.5 gap-2.5">
                  {item.nestedLinks.map((link, index) => (
                    <Link
                      key={index}
                      className="font-[600] text-[14px] hover:text-[#A47E1B] text-white duration-200"
                      href={link.path}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </Grid>
            ))}

            <Grid item xs={12} lg={4} sm={7} className="">
              <div>
                <Typography className="font-[800] sm:text-[30px] text-xl mb-3" variant="h3">
                  Subscribe for Newsletter
                </Typography>
                <Typography className="font-[400] text-[17px] text-[#A7A7A7] leading-normal" variant="h3">
                  Lorem ipsum dolor sit amet consectetur. Eget massa eget faucibus bibendum diam mi.
                </Typography>
                <input
                  className="bg-[#262626] h-[50px] w-full rounded-md mt-8 px-3 focus:outline-none"
                  type="text"
                  placeholder="Enter your email"
                />

                <Button className="bg-gradient mt-6 font-[600] text-[17px] text-[#1A1A1A] h-[56px] sm:w-[162px] w-full rounded-md ">
                  Subscribe
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>

        {/* Copyrights */}
        <div className="border-t border-[#555555] text-white flex justify-between items-center md:flex-row flex-col sm:py-6 py-3 gap-4">
          <div>
            <Select>
              <SelectTrigger className="w-[180px] border-0">
                <SelectValue placeholder="English (UK)" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1A1A] w-auto min-w-44">
                <SelectItem value="light">English (UK)</SelectItem>
                <SelectItem value="dark">English (US)</SelectItem>
                <SelectItem value="system">French</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Typography className="font-[400] text-[14px]" variant="body2">
            Copyright © {new Date().getFullYear()}
            <Link href="#"> whodoesyourhair.com</Link>
          </Typography>

          <div className="flex items-center gap-5 mt-2">
            {socialIcons.map((item, index) => (
              <Link key={index} href="">
                <Image width={20} height={20} src={item.icon} alt="social-icon" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
