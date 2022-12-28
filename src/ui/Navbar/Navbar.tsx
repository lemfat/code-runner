"use client"

import { Box, Burger, clsx, Header, Navbar, NavLink, Overlay, Text, useMantineTheme } from '@mantine/core';
import { ReactNode, useState } from 'react';


export function MyNavbar({ children }: { children: ReactNode }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Header height="3rem" p="md">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
          <Text>Application header</Text>
        </div>
      </Header>

      <div className="flex h-full max-h-[100vh-3rem]">
        <Navbar
          className={clsx(
            opened ? "translate-x-0 opacity-100 max-w-[15rem]" : "-translate-x-full opacity-0 w-0",
            "transition-transform ease-in-out duration-300",
            "max-h-[100vh-3rem] overflow-auto",
            "z-10 absolute h-[calc(100%-3rem)] sm:z-0 sm:relative"
          )}>
          <Navbar.Section grow mt="md">
            <Box sx={{ width: 240 }}>
              <NavLink
                label="First parent link"
                childrenOffset={28}
                defaultOpened
              >
                <NavLink label="First child link" />
                <NavLink label="Second child link" />
              </NavLink>

              <NavLink
                label="Second parent link"
                childrenOffset={28}
                defaultOpened
              >
                <NavLink label="First child link" />
                <NavLink label="Second child link" />
                <NavLink label="Third child link" />
              </NavLink>
            </Box>
          </Navbar.Section>
        </Navbar>
        <div className={clsx(
          "transition-[width] ease-in-out duration-300 flex-grow",
        )}>
          {opened && <Overlay opacity={0.6} color="#000" zIndex={5} className="sm:hidden" />}
          {children}
        </div>
      </div>
    </div>
  );
}