let gamestate = 0;
let board = [
  [0, 0, 0, 0, 0, 0],
  [100, 100, 100, 100, 100, 100],
  [200, 200, 200, 200, 200, 200],
  [300, 300, 300, 300, 300, 300],
  [400, 400, 400, 400, 400, 400],
  [500, 500, 500, 500, 500, 500]
];
//Question Set
let questions1 = [
    "This iconic tracking device, also known as a snack.",
    "blank",
    "blank",
    "blank",
    "blank",
    "blank"
];
let questions2 = [
    "skibidi",
    "blank",
    "skibidi",
    "blank",
    "blank",
    "blank"
];
let questions3 = [
    "toilet",
    "blank",
    "toilet",
    "blank",
    "blank",
    "blank"
];
let questions4 = [
    "blank",
    "blank",
    "blank",
    "blank",
    "blank",
    "blank"
];
let questions5 = [
    "blank",
    "blank",
    "blank",
    "blank",
    "blank",
    "blank"
];

const questions = [questions1, questions2, questions3, questions4, questions5];

let ex = 0
let ey = 0

let qvalue = 0
let pressed = 0
let who = 1;
let question = 0;

let player1 = 0;
let player2 = 0;
let player3 = 0;
let player4 = 0;
let gone1 = 0;
let gone2 = 0;
let gone3 = 0;
let gone4 = 0;

function preload(){
    img1=loadImage("https://www.immaculata.edu/wp-content/uploads/2025/03/jeopardy.jpg.webp");
  }

function setup() {
  const SCALED_HEIGHT = 900;
    //Once you create this canvas, you can access the width and height
    //the width is twice the height
    //         width            height
    new Canvas(1600, SCALED_HEIGHT);
    colorMode(RGB);
  }

function draw(){
  //Home Menu
  if (gamestate === 0){
    clear();
    trigger = 2
    background(135, 206, 235);
    image(img1,0,0,1600,900);
    fill(255,255,0);
    rect(700, 700, 300, 100);
    fill(0,0,0);
    textSize(40)
    text("Play", 800, 770);
    //Button Interaction
    if (mouseX > 700 && mouseX < 1000 && mouseY > 700  && mouseY < 800){
      if (mouse.pressed()){
        gamestate = 1;
      }
    }
  } else if (gamestate === 1) {
    gone1 = 0;
    gone2 = 0;
    gone3 = 0;
    gone4 = 0;
    pressed = 0;
    let spotsx = [271, 271+150*1, 271+150*2, 271+150*3, 271+150*4, 271+150*5
];
    let spotsy = [80, 180, 280, 380, 480, 580];
    let topic = [
        "Tracking Methods",
        "Encryption",
        "VPN",
        "Browsers",
        "Dark Web",
        "Usage of Analytics"
    ]
    clear();
    background(0, 0, 139)
    fill(135,206,250);
    rect(200, 80, 1050, 650);
    rect(1400, 750, 150, 100);
    fill(255, 215, 0);
    text("JEPOARDY!", 600, 50)
    fill(255, 255, 255);
    textSize(20);
    text("End Game", 1425, 800);
    let filled = 0
    for (let i = 0; i < 6; i++){
      for(let j = 0; j < 6; j++){
        if (board[j][i] === 0){
          fill(255, 255, 255);
          filled++
        } else {
          fill(255, 255, 255);
        }
        if (j === 0){
            rect(spotsx[i], spotsy[j]+25, 150, 100);
            fill(0, 0, 0);
            textSize(15);
            text(topic[i], spotsx[i]+10, spotsy[j]+60);
        } else {
            rect(spotsx[i], spotsy[j], 150, 100);
            fill(255, 215, 0);
            textSize(40);
            if(board[j][i]===1){
              fill(0, 0, 0);
              text("X", spotsx[i]+25, spotsy[j]+60);
            } else {
            text(`$${spotsy[j]-80}`,spotsx[i]+25, spotsy[j]+60);
            }
        }
        if (filled === 42){
          gamestate = 2;
        }
      }
    }
    //Player Score Display
    let playerss = {
      p1: player1,
      p2: player2,
      p3: player3,
      p4: player4
    };
    
    let pIndex = 1;
    for (let i = 150; i < 1400; i += 350) {
      fill(255);
      rect(i, 800, 150, 100);
      fill(0);
    
      let key = `p${pIndex}`;
      text(`$${playerss[key]}`, i + 25, 850);
    
      pIndex++;
    }

    let oIndex = 1;
    for (let i = 150; i < 1400; i += 350) {
      fill(255);
      text(`Player ${oIndex}`, i, 775);
      oIndex++;
    }
  } else if (gamestate === 2){
    clear();
    image(img1,0,0,1600,900);
    textSize(50);
    fill(255, 255, 255)
    text("Game Over!", 200, 200);
    //Win Logic
    const scores = [
      { name: "player1", score: player1 },
      { name: "player2", score: player2 },
      { name: "player3", score: player3 },
      { name: "player4", score: player4 }
    ];    
    scores.sort((a, b) => b.score - a.score);
    const highestScore = scores[0].score;
    const winners = scores.filter(player => player.score === highestScore);
    if (winners.length === 1) {
      text(`${winners[0].name} wins with ${highestScore} points.`, 100, 700);
    } else {
      const names = winners.map(p => p.name).join(' and ');
      text(`It's a tie between ${names} with ${highestScore} points.`, 100, 700);
    }
    } else if (gamestate === 3){
    clear();
    const question = questions[ex][ey];
    fill(0, 0, 0);
    text(`${question}`, 200, 100);
    if (kb.presses("1")&&gone1<300){
      pressed = 1;
      console.log(pressed)
    }
    if (kb.presses("2")&&gone2<300){
      pressed = 2;
      console.log(pressed)
    }
    if (kb.presses("3")&&gone3<300){
      pressed = 3;
      console.log(pressed)
    }
    if (kb.presses("4")&&gone4<300){
      pressed = 4;
      console.log(pressed)
    }
    if (pressed === 1){
      gone1++
      text(`${5-floor(gone1/60)} seconds left!`, 500, 500)
      if (gone1 === 299){
        player1 -= qvalue
        pressed = 0;
        gone1++
      }
      if (gone1 < 299 && kb.presses("y")){
        player1 += qvalue
        gamestate = 1
        return
      }
    } else if (pressed === 2){
      gone2++
      text(`${5-floor(gone2/60)} seconds left!`, 500, 500)
      if (gone2 === 299){
        player2 -= qvalue
        pressed = 0;
        gone2++
      }
      if (gone2 < 299 && kb.presses("y")){
        player2 += qvalue
        gamestate = 1
        return
      }
    } else if (pressed === 3){
      gone3++
      text(`${5-floor(gone3/60)} seconds left!`, 500, 500)
      if (gone3 === 299){
        player3 -= qvalue
        pressed = 0;
        gone3++
      }
      if (gone3 < 299 && kb.presses("y")){
        player3 += qvalue
        gamestate = 1
        return
      }
    } else if (pressed === 4){
      gone4++
      text(`${5-floor(gone4/60)} seconds left!`, 500, 500)
      if (gone4 === 299){
        player4 -= qvalue
        pressed = 0;
        gone4++
      }
      if (gone4 < 299 && kb.presses("y")){
        player4 += qvalue
        gamestate = 1
        return
      }
    }
      //Player Score Display
      let playerss = {
        p1: player1,
        p2: player2,
        p3: player3,
        p4: player4
      };
      
      let pIndex = 1;
      for (let i = 150; i < 1400; i += 350) {
        fill(128);
        rect(i, 800, 150, 100);
        fill(0);
      
        let key = `p${pIndex}`;
        text(`$${playerss[key]}`, i + 25, 850);
      
        pIndex++;
      }
  
      let oIndex = 1;
      for (let i = 150; i < 1400; i += 350) {
        fill(0);
        text(`Player ${oIndex}`, i, 775);
        oIndex++;
      }
  }
}

function mousePressed() {
  if (gamestate === 1){
    let spotsx = [271, 271+150*1, 271+150*2, 271+150*3, 271+150*4, 271+150*5];
    let spotsy = [80, 180, 280, 380, 480, 580];
    if (mouseX > 1400 && mouseX < 1550 && mouseY > 750 && mouseY < 850){
        gamestate = 2
        return;
    }
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          let x = spotsx[i];
          let y = spotsy[j];
          let w = 150;
          let h = 100;

          if (
            mouseX >= x &&
            mouseX <= x + w &&
            mouseY >= y &&
            mouseY <= y + h &&
            board[j][i] != 1
          ) {
            qvalue = board[j][i]
            board[j][i] = 1;
            gamestate = 3;
            ey = j - 1
            ex = i
            return
          }
        }
    }
  }
}
