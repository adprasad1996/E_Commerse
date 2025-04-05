import Navbar from "./components/Navbar/Navbar"
import {render, screen} from '@testing-library/react'



test("Should load Navbar componenet", ()=> {
  render(<Navbar/>);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
})