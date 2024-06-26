document.addEventListener('DOMContentLoaded', () => {
    const formCalculator= document.querySelector('#formCalculator')

    const form=document.createElement('form')
    form.innerHTML=`
    <label for='firstnum'> Enter first number: </label>
    <input type='number' id='firstnum' placeholder='Enter first number..' required />
    <label for='operators'> Choose operator: </label>
    <select id='operators' name='operators'>
         <option value='+'>+</option>
         <option value='-'>-</option>
         <option value='/'>/</option>
         <option value='*'>*</option>
    </select>
    <label for='secondnum'> Enter second number: </label>
    <input type='number' id='secondnum' placeholder='Enter second number..' required />
    <input type='submit' id='calculateBtn' value='Calculate' />
    `

    formcalculator.appendChild(form);
    //const calculateBtn = document.querySelector('#calculateBtn');

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        handleCalculation();
        form.reset()
    })


    function handleCalculation(){

        let answer
        const firstNum = parseInt(document.querySelector('#firstnum').value)
        const secondNum = parseInt(document.querySelector('#secondnum').value)

        const operator = document.querySelector('#operators').value


        if (operator == '+'){

            answer = firstNum + secondNum

            console.log(`${answer}`)
            
        }else if(operator == '-'){

            answer = firstNum - secondNum

            console.log(`${answer}`)

        }else if(operator == '/'){

            answer = firstNum / secondNum

            console.log(`${answer}`)
        }else if(operator == '*'){

            answer = firstNum * secondNum

            console.log(`${answer}`)
        } else{
            return 'Invalid Operation'

        }


        const answerContainer = document.querySelector('#answer')
        answerContainer.removeChild(answerContainer.firstChild)
        const divContainer = document.createElement('div')
        divContainer.innerHTML=`
        <h2 style="text-align: center;">The result is: ${answer}</h2>
        `
        answerContainer.appendChild(divContainer)


        console.log('Here are the values', `${firstNum}, ${secondNum}, ${operator}`)

        
    }


})