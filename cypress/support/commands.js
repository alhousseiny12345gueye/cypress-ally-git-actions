// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Mapping of severity levels to visual indicators
const severityIndicators = {
    minor: '⚪',
    moderate: '🟡',
    serious: '🟠',
    critical: '🔴',
}

// Callback function to handle any accessibility violations
function callback(violations) {
    // Loop through each violation
    violations.foreach(violation => {
        // Get all DOM nodes that have the violation
        const nodes = Cypress.$(violation.nodes.map(node => node.target).join(','))

        // Log the violation to the Cypress log
        Cypress.log({
            name: `${severityIndicators[violation.impact]} A11Y`,
            consoleProps: () => violation,
            $el: nodes,
            message: `[${violation.help}](${violation.helpUrl})`
        })

        // Loop through each node with the violation
        violation.nodes.foreach(({ target }) => {
            // Log the node to the Cypress log
            Cypress.log({
                name: '🛠️',
                consoleProps: () => violation,
                $el: Cypress.$(target.join(',')),
                message: target 
            })
        })
    })
}

// Add a new command to Cypress to check a page for accessibility issues
Cypress.Commands.add("checkPageA11y", (path) => {
    cy.visit(path);  // Visit the page
    cy.injectAxe();  // Inject the axe-core library
    cy.checkA11y(null, null, callback);  // Check the page for accessibility issues
})

// Add a new command to Cypress to get a DOM element by its data-test attribute
Cypress.Commands.add('getBySel', (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args)
})