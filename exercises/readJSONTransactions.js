import fs from 'fs/promises'
const path = new URL("../data/Transactions2013.json", import.meta.url)
export async function readJSONTransactions() {
  // Read the Transactions2013.json file
  // Use JSON.parse to convert the string into an array of objects
  // and return it
 const data = await fs.readFile (path)
 const obj = JSON.parse(data)
 await fs.writeFile(path, JSON.stringify(obj))
return obj
console.log(obj)

}
export default readJSONTransactions