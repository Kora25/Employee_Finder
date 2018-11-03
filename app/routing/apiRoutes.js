// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/employees`. This will be used to display a JSON of all possible employees.
//    * A POST routes `/api/employees`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
// ===============================================================================



let employees = require('../data/employee.js');


module.exports = function (app) {

  /**
   * GET the employees
   */
  app.get('/api/employees', function (req, res) {
    res.json(employees);
  });


  /**
   * Add new employee survey
   * 
   */
  app.post('/api/employees', function (req, res) {
    
    employees.push(req.body);
   
    res.end();
    

  });


}
