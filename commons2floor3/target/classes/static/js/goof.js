function chat() {
  let name = prompt("Hi, my name is Jonah, im glad you chose to have a conversation with me, What is your name?");
  let q2 = prompt(`Hi ${name}, what is your starbucks order?`);
  let q3 = prompt(`Haha I don't even drink coffee but ${q2}'s are pretty cool. If you could have any celebrity play you in a movie, who would it be`);
  let q4 = prompt(`Hmmm maybe ${q3} would be a good choice. Who is the best Disney Princess?`);
  
  if (q4 === 'Mulan' || q4 === 'mulan') {
    prompt(`Wow I also said Mulan. Last question, What are you most excited for this semester?`);
} else {
  let q5 = prompt(`Good choice, ${q4} is respectable but it's not Mulan lol. Last question, What are you most excited for this semester?`);
}

//add a pop up window ("modal") to notify the user 
document.querySelector('.convo-message').innerHTML = (`<h1 style="color: black;">Thanks so much ${name} for having this conversation with me, unfortunately I was not actually here for this conversation but you were speaking to the bot I programmed, pretty cool right. Anyways I'm glad you're taking the time to check out this site and I just want to let you know that I am praying for you and I am super exicted to get to work with you this semester, God Bless</h1>`);

  
}

 

