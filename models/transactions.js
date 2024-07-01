class TransitionController { 
    constructor () {
        this.controller = new Command ('transaction')
            this.controller 
            .command ('log <from> <to> <amount>')
            .description ('long transaction data to the controller')
            .action ((from, to, amount) => {
                
 
 
            })
        
    }
}