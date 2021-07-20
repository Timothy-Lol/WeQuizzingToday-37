class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Name...");
    this.input2 = createInput("Answer...");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
//What starts and ends with the letter ‘E’, but has only one letter?
//1: Everyone 2: Envelope 3: Estimate 4: Example
    this.question.html("Question:- how much would one teaspoon of neutron star weights? 4andTons " );
    this.question.position(150, 80);
    this.option1.html("1: 5 million kg " );
    this.option1.position(150, 100);
    this.option2.html("2: 4 billion tons" );
    this.option2.position(150, 120);
    this.option3.html("3: 7 million tons " );
    this.option3.position(150, 140);
    this.option4.html("4: 10 billion kg" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
