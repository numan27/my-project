'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Grid, Typography } from '@mui/material';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import IMAGES from '~/assets/images';

const LoginProAccount = () => {
  const SOCIAL_LOGIN = [
    { id: 1, icon: IMAGES.BEHANCE_ICON, path: '' },
    { id: 2, icon: IMAGES.APPLE_ICON, path: '' },
    { id: 3, icon: IMAGES.GOOGLE_ICON, path: '' },
  ];
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-start flex-col pt-28">
      <Grid container spacing={4} alignItems="start" justifyContent="center" className="px-4">
        <Grid item lg={4} md={6} sm={8} xs={12}>
          <Typography className="font-[800] lg:text-[41px] md:text-[30px] text-[22px] leading-tight text-white">
            Login to Your Pro Account
          </Typography>

          <section className="mt-4">
            <Input
              className="h-[56px] bg-transparent border border-[#555555]"
              type="email"
              placeholder="Email address*"
            />
            <div className="relative">
              <Input
                className="h-[56px] bg-transparent border border-[#555555] mt-8"
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
            <span className="flex justify-end mt-5">
              <Link className="" href="">
                Forgot Password?
              </Link>
            </span>

            <Button className="bg-gradient mt-8 font-[600] text-[17px] text-[#1A1A1A] h-[56px] w-full rounded-md ">
              Login
            </Button>
          </section>

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
                Don’t have a Pro account?
              </Typography>
              <Link className="font-[700] text-[14px]" href="/register">
                Create
              </Link>
            </div>

            <Button className="bg-transparent outlined-btn mt-10 font-[600] text-[17px] text-white border border-[#555555] h-[56px] w-full rounded-md ">
              Login to Your Customer Account
            </Button>
          </section>
        </Grid>
      </Grid>
      <div className="w-3/12"></div>
    </div>
  );
};

export default LoginProAccount;
