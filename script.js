//your JS code here. If required.
() => {
  // Check Facebook logo and description
  cy.get(".left img").should("have.attr", "alt", "Facebook logo");
  cy.get(".left p").should("have.text", "Facebook helps you connect and share with the people in your life.");

  // Check form elements
  cy.get("#email").should("have.attr", "placeholder", "Email address or phone number");
  cy.get("#password").should("have.attr", "placeholder", "Password");
  cy.get('button[type="submit"]').should("have.text", "Log in");
  cy.get("a").should("have.text", "Forgotten account?");

  // Check signup button
  cy.get(".signup").should("have.text", "Create new account");

  // Check styling
  cy.get("form")
    .should("have.css", "border-radius", "5px")
    .should("have.css", "box-shadow", "rgba(204, 204, 204, 0.5) 0px 0px 10px 0px");
  
  cy.get("input")
    .should("have.css", "border", "1px solid rgb(204, 204, 204)")
    .should("have.css", "border-radius", "5px")
    .should("have.css", "padding", "10px");

  cy.get('button[type="submit"]').should("have.css", "background-color", "rgb(24, 119, 242)");
  cy.get("a").should("have.css", "text-decoration", "none").should("have.css", "color", "rgb(24, 119, 242)");
  cy.get(".signup").should("have.css", "background-color", "rgb(66, 183, 42)");
}
