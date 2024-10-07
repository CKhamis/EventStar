import TopBar from "../../components/TopBar";
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card";
import { Label } from "@radix-ui/react-dropdown-menu";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link"
import Image from "next/image";

export default function Home() {
  return (
      <>
        <TopBar/>
        <div className="mt-10 flex justify-center items-center">
          <Card className="w-full max-w-sm rounded-none gradient">
            <CardHeader className="flex flex-row gap-3 justify-start items-center">
              <Image src={`/icons/COW Logo.svg`} alt={`Costi Online Logo`} width={40} height={40} className="hover-minimize"/>
              <div className="mt-0">
                <CardTitle className="text-2xl">Sign In</CardTitle>
                <CardDescription>
                  Enter your Costi Online Credentials.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required/>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required/>
              </div>
              <div className="grid gap-2">
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </div>

              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="https://costionline.com/SignUp" className="underline">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
  );
}
