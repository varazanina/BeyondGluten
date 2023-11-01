import { Blueberry } from "./Buttons/Blueberry"
import { Wine } from "./Buttons/Wine"
import { Mustard } from "./Buttons/Mustard"
import { Ketchup } from "./Buttons/Ketchup"
import { Spinach } from "./Buttons/Spinach"
import "./themes.css"

export const Themes = () => {
  return (
    <div id="themes">
        <Wine/>
        <Ketchup/>
        <Mustard/>
        <Spinach/>
        <Blueberry/>
    </div>
  )
}
