'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Grid, Typography } from '@mui/material';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
// import IMAGES from '~/assets/images';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import IMAGES from '@/assets/images';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const SOCIAL_LOGIN = [
    { id: 2, icon: IMAGES.APPLE_ICON, path: '' },
    { id: 3, icon: IMAGES.GOOGLE_ICON, path: '' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-start flex-col pt-28 pb-20">
      <Grid container spacing={4} alignItems="start" justifyContent="center" className="px-4">
        <Grid item lg={4} md={6} sm={8} xs={12}>
          <Typography className="font-[800] lg:text-[41px] md:text-[30px] text-[22px] leading-tight text-white">
            Create Your Customer Account
          </Typography>

          <Grid container spacing={2} alignItems="start" justifyContent="start" className="mt-4">
            <Grid item md={6} xs={12}>
              <Input
                className="h-[56px] bg-transparent border border-[#555555]"
                type="text"
                placeholder="First name*"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Input className="h-[56px] bg-transparent border border-[#555555]" type="text" placeholder="Last name*" />
            </Grid>
            <Grid item xs={12}>
              <Input
                className="h-[56px] bg-transparent border border-[#555555]"
                type="email"
                placeholder="Email address*"
              />
            </Grid>
            <Grid item xs={12}>
              <div className="relative">
                <Input
                  className="h-[56px] bg-transparent border border-[#555555]"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password*"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ right: '15px', top: '22px' }}
                  className="absolute cursor-pointer"
                >
                  <Image src={IMAGES.EYE_ICON} alt="icon"></Image>
                </span>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="relative">
                <Input
                  className="h-[56px] bg-transparent border border-[#555555]"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password*"
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{ right: '15px', top: '22px' }}
                  className="absolute cursor-pointer"
                >
                  <Image src={IMAGES.EYE_ICON} alt="icon"></Image>
                </span>
              </div>
            </Grid>
            <Grid item sm={4} xs={6}>
              <Select>
                <SelectTrigger className="border-[#555555] h-[56px]">
                  <SelectValue placeholder="+1" />
                </SelectTrigger>
                <SelectContent className="bg-[#1A1A1A] w-auto min-w-44">
                  <SelectItem value="light">+1</SelectItem>
                  <SelectItem value="dark">+2</SelectItem>
                  <SelectItem value="system">+3</SelectItem>
                </SelectContent>
              </Select>
            </Grid>
            <Grid item sm={8} xs={12}>
              <Input
                className="h-[56px] bg-transparent border border-[#555555]"
                type="text"
                placeholder="Phone number*"
              />
            </Grid>

            <Grid item xs={12}>
              <div className="flex items-center justify-start flex-wrap mt-4">
                <Typography className="font-[400] mr-2 text-[14px] mb-0 text-[#A7A7A7]">
                  By continuing you are agree to our
                </Typography>
                <Link className="font-[700] text-[14px]" href="">
                  Terms of Service
                </Link>
                <Typography className="font-[400] mx-2 text-[14px] mb-0 text-[#A7A7A7]">and</Typography>
                <Link className="font-[700] text-[14px]" href="">
                  Privacy Policy.
                </Link>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Button className="bg-gradient mt-4 font-[600] text-[17px] text-[#1A1A1A] h-[56px] w-full rounded-md ">
                Create
              </Button>
            </Grid>
          </Grid>
          {/* Social Login */}
          <section>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-[#555555]"></div>
              <Typography className="font-[400] mx-3 text-[14px] text-[#A7A7A7]">or continue with</Typography>
              <div className="flex-grow border-t border-[#555555]"></div>
            </div>

            <div className="flex items-center gap-3 justify-center mt-3">
              {SOCIAL_LOGIN.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#333333] rounded-full h-[56px] w-[56px] flex items-center justify-center"
                >
                  <Link href={item.path}>
                    <Image src={item.icon} alt="icon"></Image>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex items-center mt-5 justify-center">
              <Typography className="font-[400] mx-3 text-[14px] mb-0 text-[#A7A7A7]">
                Already have an account?
              </Typography>
              <Link className="font-[700] text-[14px]" href="/">
                Log In
              </Link>
            </div>

            <Button className="bg-transparent outlined-btn mt-10 font-[600] text-[17px] text-white border border-[#555555] h-[56px] w-full rounded-md ">
              Create Your Pro Account
            </Button>
          </section>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
