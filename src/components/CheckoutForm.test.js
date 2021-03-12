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
    const lastname= screen.getByLabelText(/last name:/i)
    userEvent.type(lastname, "Zwissler")
    //find the address, type in it
    const address= screen.getByLabelText(/address:/i)
    userEvent.type(address, "1234 Way Way")

    //find the city, type in it
    const city= screen.getByLabelText(/city:/i)
    userEvent.type(city, "San Diego")

    //find the state, type in it
    const state= screen.getByLabelText(/state:/i)
    userEvent.type(state, "California")
    //find the zipcode, type in it
    const zip= screen.getByLabelText(/zip:/i)
    userEvent.type(zip, "92101")

    //find the button, click it
    const button = screen.getByRole("button")
    userEvent.click(button)

    //find the success message
    const successMsg = screen.getByTestId("successMessage")

    //Assert: confirm the success message is on the page with the details that I entered.
    expect(successMsg).toBeInTheDocument();
    const fnText = screen.queryByText(/monica/i)
    const lnText = screen.queryByText(/zwissler/i)
    const addText = screen.queryByText(/1234 way way/i)
    const cityText = screen.queryByText(/san diego/i)
    const stateText = screen.queryByText(/california/i)
    const zipText = screen.queryByText(/92101/i)

    expect(fnText).toBeInTheDocument();
    expect(lnText).toBeInTheDocument();
    expect(addText).toBeInTheDocument();
    expect(cityText).toBeInTheDocument();
    expect(stateText).toBeInTheDocument();
    expect(zipText).toBeInTheDocument();


});
