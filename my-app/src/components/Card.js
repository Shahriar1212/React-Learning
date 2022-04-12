let name = "Shahriar Hasan Chowdhury";
const todoTitle = "this is a todo app.";
const todoDesc = "my name is shahriar hasan chowdhury. i am learning react";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();


function Card(props){

  const {titleText, descText} = props;
  return <div className='card'>
          <h3 className='cardTitle'>{titleText}</h3>
          <p className='cardDesc'>{descText}</p>
          <p className='cardFooter'>{dateName + "/" + monthName + "/" + yearName}</p>
        </div>
}

export default Card;