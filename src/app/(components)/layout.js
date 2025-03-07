import "./globals.css";
import Menu from "@/app/(components)/menu/page";
export const metadata = {
  title: "App tracker",
  description: "Generated by create next app",
};

export default function MainpagesLayout({ children }) {
  return (
    <div
      className="flex gap-4"
    > <Menu></Menu>
      {children}
    </div>
  );
}
