import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "../ui/button";
import { Menu } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const routeList = [
  {
    href: "#About",
    label: "About",
  },
  {
    href: "#Skills",
    label: "Skills",
  },
  {
    href: "#Projects",
    label: "Projects",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed border-b-[1px] border-[#002029] top-0 z-40 w-full bg-[#001115]">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between items-center text-[#e5e9f0] relative">
          <NavigationMenuItem className="font-bold flex">
            <a href="/" className="ml-2 font-bold text-xl flex items-center text-[#d5d5d5]">
            R<span className="text-[#00607a]">C.</span>
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex md:hidden h-5 w-5" />
              </SheetTrigger>

              <SheetContent side={"left"} className="bg-[#001115] text-[#d5d5d5]">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl text-[#848484]">
                  R<span className="text-[#00607a]">C.</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({
                        variant: "custom",
                      })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    href="https://github.com/ridhwancahyadi"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "custom2",
                    })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    Github
                  </a>
                  <a
              href="https://github.com/ridhwancahyadi"
              target="_blank"
              className={`border ${buttonVariants({ variant: "custom2" })}`}
            >
              <LinkedInLogoIcon className="mr-2 w-5 h-5" />
              Linkedin
            </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            {routeList.map((route, i) => (
              <a
                
                href={route.href}
                key={i}
                className={`text-[17px] mx-2 ${buttonVariants({
                  variant: "custom",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <a
              href="https://github.com/ridhwancahyadi"
              target="_blank"
              className={`border ${buttonVariants({ variant: "custom2" })}`}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5 " />
              Github
            </a>
            <a
              href="https://github.com/ridhwancahyadi"
              target="_blank"
              className={`border ${buttonVariants({ variant: "custom2" })}`}
            >
              <LinkedInLogoIcon className="mr-2 w-5 h-5" />
              Linkedin
            </a>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
