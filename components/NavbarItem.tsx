
interface NavbarItemProps {
    lable:string
}

const NavbarItem = ({lable}:NavbarItemProps) => {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
        {lable}
    </div>
  )
}


export default NavbarItem