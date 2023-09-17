import NavbarLeft from "./NavbarItem/NavbarLeft"
import NavbarRight from "./NavbarItem/NavbarRight"


const Navbar = () => {
  return (
    <div className="flex justify-between my-4">
      <NavbarLeft />
      <NavbarRight />
    </div>
  )
}

export default Navbar
