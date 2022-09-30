const uuidv4 = require('uuid/v4');

module.exports = app => {
    const customerHamburgerDB = app.data.customerHamburger;
    const controller = {};

    const {
        customerHamburger: customerHamburgerMock,
    } = customerHamburgerDB;
  
    controller.listCustomerHambuger= (req, res) => res.status(200).json(customerHamburgerDB);
  
    controller.saveCustomerHamburger = (req, res) => {
        customerHamburgerMock.data.push({
            id: uuidv4(),
            photo: uuidv4(),
            description: uuidv4(),
            price: uuidv4(),
        });
        res.status(201).json(customerHamburgerMock);
    }
    return controller;
  }