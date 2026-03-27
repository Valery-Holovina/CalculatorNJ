const {Router} = require('express')

const router = Router();

router.get('/', (req, res) =>{
    res.render('index', {
        result: '',
        error : ''
    })
});


router.post('/calculate', (req,res) =>{

    const number1 = req.body.number1;
    const number2 = req.body.number2;
    const operation = req.body.operation;

    if(!number1 || !number2 || !operation) {
        return res.render('index', {
            result: '',
            error : 'Empty inputs!!!'
        })
    }

    const num1 = parseFloat(number1)
    const num2 = parseFloat(number2)

    if (isNaN(num1) || isNaN(num2)){
        return res.render('index', {
            result: '',
            error : 'Not valid numbers!!!'
        })
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2
            break;
         case 'sub':
            result = num1 - num2
            break;
         case 'mul':
            result = num1 * num2
            break;
         case 'div':
            if(num2 === 0){
                return res.render('index', {
                      result: '',
                      error : 'Error dividing by zero!!!'
                })
            }else{
                result = num1 / num2
            }
            break;
         case 'mod':
              if(num2 === 0){
                return res.render('index', {
                      result: '',
                      error : 'Error mod zero!!!'
                })
            }else{
                result = num1 % num2
            }
            break;

    
        default:
           return res.render('index', {
                      result: '',
                      error : 'Error (operation)!!!'
                })
    }

    res.render('index', {
        result: result,
        error : '',
        number1: num1,
        number2: num2
    })


})

module.exports = router;