import React, { Component } from "react";
import Link from "next/link";

import { slide as Menu } from "react-burger-menu";
import {
  Accordion,
  AccordionItem,     
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

class MobileMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="header-logo-right">      
        <div className="container--">
          <div className="col-md-10--">
            <div className="dropdown mobilemenu-new">
              <Menu>
                <Accordion allowZeroExpanded>
                 {/* <AccordionItem>
                    <Link href="/">
                      <AccordionItemHeading>
                        <AccordionItemButton>Resources</AccordionItemButton>
                      </AccordionItemHeading>
                    </Link>
                  </AccordionItem>
                    <AccordionItem>
                    <Link href="/">
                      <AccordionItemHeading>
                        <AccordionItemButton>Customised Solutions</AccordionItemButton>
                      </AccordionItemHeading>
                    </Link>
                  </AccordionItem>
                  
                  
                  <AccordionItem>
                  <Link href="/">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                        Partner                        </AccordionItemButton>
                      </AccordionItemHeading>
                    </Link>
                  </AccordionItem>

                  */}

                  <AccordionItem>
                  <Link href="/">
                      <AccordionItemHeading>
                        <AccordionItemButton>About Us</AccordionItemButton>
                      </AccordionItemHeading>
                      </Link>
                  </AccordionItem>
              {/*   <AccordionItem>
                  <Link href="/">
                      <AccordionItemHeading>
                        <AccordionItemButton>Contact Us</AccordionItemButton>
                      </AccordionItemHeading>
                      </Link>
                  </AccordionItem>
                  
                  <AccordionItem>
                  <Link href="/">
                      <AccordionItemHeading>
                        <AccordionItemButton>Login</AccordionItemButton>
                      </AccordionItemHeading>
                      </Link>
                  </AccordionItem>*/}
                </Accordion>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
