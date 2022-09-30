module.exports = app => {
    const controller = app.controllers.customerHamburger;

    app.route('/api/v1/customer-hamburger')
        .get(controller.listCustomerHambuger)
        .post(controller.saveCustomerHamburger);
}