import { Command } from 'commander'

const spendingChecker = new Command('spending')

spendingChecker
  .command('check <budget> <purchase>')
  .description('how much of my budget is my purchase')
  .action((purchase,budget )=> {
    console.log(`my ${purchase} is ${purchase/budget*100}% of my budget`)


   
  })

export default spendingChecker