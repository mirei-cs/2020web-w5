const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '気温は華氏94度で外は寒かった。 :insertx: は散歩に出かけた。 :insertz: 。体重300ポンドの :insertx: は驚いたが、梅子は驚かなかった。 :inserty:ではよくあることだった。';
let insertX = ['もぐらコロッケ','自分ツッコミくま','ちいかわ','はちわれ'];
let insertY = ['フエラムネが湧き出てくる場所','朝市場','大きなゼリーが食べられる場所'];
let insertZ = ['雪が降ってきた','モモンガが飛び出してきた','インパラの大群が駆け寄ってきた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('梅子',name);
  }

  if(document.getElementById("ja").checked) {
    const weight = Math.round(300/2.205) + ' kg';
    const temperature ='摂氏'+Math.round((94-32) * 5 / 9);
    newStory = newStory.replace('華氏94',temperature);
    newStory = newStory.replace('300ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
