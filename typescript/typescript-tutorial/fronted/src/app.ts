import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { ListTemplate } from './classes/ListTemplate.js'
import { HasFormatter } from './interfaces/HasFormatter.js'


const form = document.querySelector('.new-item-form') as HTMLFormElement

// const type = document.querySelector('#type') as HTMLSelectElement
const type = <HTMLSelectElement>document.querySelector('#type')
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const tofrom = <HTMLInputElement>document.querySelector('#tofrom')
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

const ul = document.querySelector('ul') as HTMLUListElement
const list = new ListTemplate(ul)

form.addEventListener('submit',(e: Event)=>{
	e.preventDefault()

	let doc: HasFormatter
	if(type.value === 'invoice'){
		doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
	}else if(type.value === 'payment'){
		doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
	} else {
		doc = {format:()=>'Not format provided.'}
	}

  list.render(doc,type.value,'end')
})
