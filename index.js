document.querySelectorAll('.ques').forEach((quest, index) =>{
    var ansId = 'ans-' + (index + 1)
    var iconId = 'icon-' + (index + 1)
    quest.addEventListener('click', function(){
        revealAns(ansId, iconId)
    })
})
function revealAns(ansId, iconId){
    var answers = document.getElementById(ansId)
    var icon = document.getElementById(iconId)
    if (answers.style.display === 'block'){
        answers.style.display = 'none'
        icon.style.transform = 'rotate(0deg)'
        icon.style.transition = 'all ease 0.8s'
    }
    else{
        answers.style.display = 'block'
        icon.style.transform = 'rotate(45deg)'
        icon.style.transition = 'all ease 0.8s'
    }
}
let input = document.querySelector('form>input').addEventListener('click',()=>{
   input.style.border = 'none'
})