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
    const newEmployee = req.body;
    let lowestDiff = null;
    let bestMatch = null;

    //loop through each employee record
    employees.forEach(employee => {
          let totalDiff = 0;

          //loop through the score for that employee record
          employee.scores.forEach((score, i )=> {
              let diff = score - newEmployee.scores[i];
              totalDiff += Math.abs(diff);
          })

          //compare the scores and save the lowestdiff
          if(totalDiff < lowestDiff || lowestDiff == null ){
              lowestDiff = totalDiff;
              bestMatch = employee;
          }
      
    });
    
    employees.push(req.body);
   
    res.send(bestMatch);
    

  });


}
