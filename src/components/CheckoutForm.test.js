import React from "react";
import { screen, render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange: render checkoutForm
    render(<CheckoutForm/>)
    //Act: find the header
    const header = screen.getByText(/checkout form/i)
    //Assert: confirm that the text of the header is on the page
    expect(header).toBeInTheDocument();

});

test("form shows success message on submit with form details", () => {
    //Arrange: render checkoutForm
    render(<CheckoutForm/>)
    //Act: find the firstname, type in it
    const firstname= screen.getByLabelText(/first name:/i)
    userEvent.type(firstname, "Monica")
    //find the lastname, type in it

    //find the address, type in it

    //find the city, type in it

    //find the state, type in it

    //find the zipcode, type in it

    //find the button, click it

    //find the success message

    //Assert: confirm the success message is on the page

});
