function updateStyle() {
  const elem = document.querySelectorAll('.paraClass')

  elem[1].style.color = 'red'
  
  console.log(elem[2])
}

document.getElementById('buttonid').addEventListener('click' ,updateStyle )


const ele = document.getElementById('inputid');

const btn = document.getElementById('buttonid1');

btn.addEventListener('click', function(event){
    const inputvalue = document.getElementById('inputid').value;

    const outmessage = inputvalue ? `Hi ${inputvalue}` : 'type something';
    
    const newParagraph = document.createElement('p');
    newParagraph.textContent = outmessage;

    document.getElementById('output').appendChild(newParagraph);

    document.getElementById('inputid').value = '';
})