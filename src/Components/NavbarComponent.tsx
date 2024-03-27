import { Button, List } from "flowbite-react";
import sun from "../assets/sun.png";
import { useState } from "react";

function NavbarComponent() {
  const [openFav, setOpenFav] = useState<boolean>(false);

  return (
    <>
      <div className=" bg-gray-400 absolute w-screen">
        <div className="grid grid-cols-3 items-center">
          <div className="flex items-center gap-3">
            <img src={sun} alt="" />
            <h1>Weather</h1>
          </div>

          <div className="">
            <input
              className="w-full"
              type="text"
              placeholder="Search for a City"
            />
          </div>

          <div className="justify-end flex">
            <Button onClick={()=>setOpenFav(!openFav)} className=" max-w-20 ">Default</Button>
          </div>
        </div>
        {openFav ? (
          <div className="grid grid-cols-3 items-center">
            {/* do not remove empty div below! */}
            <div></div>

            <div className="grid grid-rows-2">
              <h1 className="solid-line text-center ">Favorites</h1>

              <div>
                <List className=" text-black">
                  <List.Item>Manteca</List.Item>
                </List>
              </div>
            </div>
            {/* do not remove empty div below! */}
            <div></div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default NavbarComponent;
