import { Blueberry } from "./Components/Buttons/Blueberry"
import { Wine } from "./Components/Buttons/Wine"
import { Mustard } from "./Components/Buttons/Mustard"
import { Ketchup } from "./Components/Buttons/Ketchup"
import { Spinach } from "./Components/Buttons/Spinach"
import { Navigation } from "./Components/Navigation"

export const HomePage = () => {
  return (
    <div>
      <Navigation/>
      <Wine/>
      <Ketchup/>
      <Mustard/>
      <Spinach/>
      <Blueberry/>
      <h1>HomePage</h1>
    </div>
  )
}
