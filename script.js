let ultask = $('#ultask')
let btnadd = $('#btnadd')
let btnsort = $('#btnsort')
let btnclean = $('#btnclean')
let btnreset = $('#btnreset')


let inNewTask = $('#inpNewTask')


function addItem() {
  let listItem=$('<li>',{
    'class':'list-group-item',
    text:inNewTask.val()
  })
  listItem.click(()=>{ 
    listItem.toggleClass('done')
  })
  ultask.append(listItem)
  inNewTask.val('')
}
function cleardone()
{
 $('#ultask .done').remove()
}
function sorttask(){
  $("#ultask. done").appendTo("#ultask");
}

inNewTask.keypress((e)=>{
  if(e.which==13) addItem()
})

btnadd.click(addItem)
btnreset.click(()=>  inNewTask.val(''))       

btnclean.click(cleardone)

btnsort.click(console.log('njnjjfndfdf'))

 
