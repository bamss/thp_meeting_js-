function mario(){
    let nb = prompt("rentrez un nombre:")
    i = 0
    while (i < nb){
        i += 1
        console.log("#".repeat(i) + "")
    }
}


mario()