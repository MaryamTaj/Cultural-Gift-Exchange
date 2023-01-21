
class Member{
    constructor(name,assigned_person){
        this.name= '';
        this.assigned_person= '';
    }
}
var names=[]
var assigningPeople=[]
for(let i=1;i<=4;i++){
   var member = Member(document.getElementById('name'+{i}).value)
   names.push(member)
   assigningPeople.push(member)
}

names.forEach(function(member){
   member.assigned_person= assigningPeople[Math.floor(Math.random()*assigningPeople.length)]

   assigningPeople.indexOf(member.assigned_person)
})


export default names;