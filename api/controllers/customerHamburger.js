

module.exports = app => {
    const customerHamburgerDB = app.data.customerHamburger;
    const controller = {};

    const {
        customerHamburger: customerHamburgerMock,
    } = customerHamburgerDB;
  
    controller.listCustomerHambuger= (req, res) => res.status(200).json(customerHamburgerDB);
  
    controller.saveCustomerHamburger = (req, res) => {
        customerHamburgerMock.data.push({
            id: req.body.id,
            photo: req.body.photo,
            description: req.body.description,
            price: req.body.price,
        });
        res.status(201).json(customerHamburgerMock);
    }
    return controller;
  }