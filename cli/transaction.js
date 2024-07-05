import { Command } from 'commander'
import fs from "fs/promises"

const file = await fs.readFile ("./data/Transactions2013.json", "utf-8")

const fileTwo= await fs.readFile ("./data/Trans")
const fileTransactions = JSON.parse(file)

const fileLines = file.split("\r\n")

//import ile
//split by row

const transactionController = new Command('transaction')

transactionController
  .command('log <from> <to> <amount>')
  .description('Log transaction data to the console')
  .action((from, to, amount) => {
    Transactions.makeLog(from, to, amount)
 
  })
  //class 

  //function
  class Transaction {
    constructor(date, from, to, narrative, amount) {
      this.date = date
      this.from = from
      this.to = to
      this.narrative = narrative
      this.amount = amount
    }
  }
  
  function readTransactionFromLine(line) {
    const lineSplit = line.split(",")
    return new Transaction(
      lineSplit[0],
      lineSplit[1],
      lineSplit[2],
      lineSplit[3],
      parseFloat(lineSplit[4])
    )
  }
  

  transactionController
  .command ("summarise all")
  .description ('log the name and how much money they should recieve')
  .action (() => {
   
    const names = {}

    for (let  thing of allButFirstLine) {
      const transaction = readTransactionFromLine(line)

      if (transaction.from in names) {
        names[transaction.from] -= transaction.amount
      } else {
        names[transaction.from] = -transaction.amount
      }

      if (transaction.to in names) {
        names[transaction.to] += transaction.amount
      } else {
        names[transaction.to] = transaction.amount
      }
    }

    for (let accountName in names) {
      console.log(`${accountName}: £${names[accountName].toFixed(2)}`)
    }
  })

  transactionController
  .command ("summary")
  .description ('log the name and how much money they should recieve')
  .action (() => {
  

      

      class transactionTwo {
        constructor(date, fromAccount, toAccount, narrative, amount) {
          this.date = date
          this.fromAccount = fromAccount
          this.toAccount = toAccount
          this.narrative = narrative
          this.amount = amount
        }
      }
      
        
      })
      //function to split 
      function readTransactionFromLine(line) {
        const lineSplit = line.split(",")
        return new Transaction(
          lineSplit[0],
          lineSplit[1],
          lineSplit[2],
          lineSplit[3],
          parseFloat(lineSplit[4])
        )
      }
      
     const listTransactions = transaction
      const names = {}
    

      for (let transaction of transactions) {
        const transactionTwo = new TransactionTwo(
          transaction.date,
          transaction.fromAccount,
          transaction.toAccount,
          transaction.narrative,
          parseFloat(transaction.amount)
        )
      for (let transactionTwo of transactions) { 
        if (transactionTwo.fromAccount in names) {
          names[transactionTwo.fromAccount] -= transactionTwo.amount
        } else {
          names[transactionTwo.fromAccount] = -transactionTwo.amount
        }
      
        if (transactionTwo.toAccount in names) {
          names[transactionTwo.toAccount] += transactionTwo.amount
        } else {
          names[transactionTwo.toAccount] = transactionTwo.amount
        }
      }
  
      for (let accountName in names) {
        console.log(`${accountName}: £${names[accountName].toFixed(2)}`)
      }
    }

      


 
   export default transactionController

  