let students = [["Alexandre", 10, 10, 10], ["Osvaldo", 8, 5, 3], ["Vitoria", 7 ,6, 10], ["Camila", 4, 1, 10]]
const approved = 7

for(let slist = 0; slist < students.length; slist ++){
    let media = 0
    let sum = 0
    for(let pList = 1; pList < students[slist].length; pList++){
        sum += students[slist][pList]

        if(pList == (students[slist].length) -1){
            media = sum / (students[slist].length - 1)
            if(media > approved){
                alert(`A media do(a) aluno(a) ${students[slist][0]} é: ${media.toFixed(1)} \n Parabéns ${students[slist][0]} você foi aprovado(a) no concurso`)
            }else{
                alert(`A media do(a) aluno(a) ${students[slist][0]} é: ${media.toFixed(1)}\n Não foi dessa vez, ${students[slist][0]}! Tente novamente`)
            }
        }

    }
}