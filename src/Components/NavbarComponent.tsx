
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle, Dropdown } from "flowbite-react";

function NavbarComponent() {
  return (
    <>
<div className="flex justify-between bg-gray-400">

<h1>Weather</h1>

<input type="text" />



<Dropdown className="p-0 m-0" label="Dropdown button" dismissOnClick={false}>
      {/* <Dropdown.Item className="w-screen">Dashboard</Dropdown.Item> */}
      
      <h1 className="bg-red-300 w-screen h-20 p-0 m-0">this is a drop down</h1>
      
      </Dropdown>
</div>



    
    
    </>
  );
}

export default NavbarComponent