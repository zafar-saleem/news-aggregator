import { IsActiveLink } from "./components/IsActiveLink";
import { NavLinks } from "./data";

export const NavBar = () => {
  return (
    <nav className="p-6 sticky z-10 top-0 shadow-md bg-white">
      <ul className="flex gap-12 align-center justify-center font-semibold">
        {
          NavLinks.map(link => (
            <li key={link.label}>
              <IsActiveLink {...link} />
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
