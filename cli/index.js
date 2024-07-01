import { program } from 'commander'
import transactionController from './transaction.js'
import billController from './bill.js'
import spendingChecker from './spendingChecker.js'

program.version('0.1.0').description('Support Bank')

program.addCommand(transactionController)

program.addCommand(billController)

program.addCommand(spendingChecker)

program.parse(process.argv)


