function factorielle(){
    let i = 1
    let nb = prompt("rentrez un nombre:")
    let result = 1
    while (i <= nb){
        result = result * i
        i += 1
    }
    console.log("script2")
    console.log(result)
}

factorielle()