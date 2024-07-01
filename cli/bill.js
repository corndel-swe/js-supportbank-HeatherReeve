import { Command } from 'commander'

const billController = new Command('bill')

billController
  .command('split <amount> <persons>')
  .description('Split the bill between the people')
  .action((amount,persons )=> {
    console.log(`each person owes £${amount/persons}`)


   
  })

export default billController