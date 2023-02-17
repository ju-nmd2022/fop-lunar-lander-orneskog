const x = 200;
const y = 500;
const scale = 1;

function decorPorch(x, y, scale) {
  line(x - 100 * scale, y - 60 * scale, x - 0 * scale, y - 60 * scale);
  line(x - 100 * scale, y - 52 * scale, x - 0 * scale, y - 52 * scale);

  line(x - 93 * scale, y - 60 * scale, x - 93 * scale, y - 52 * scale);
  line(x - 87 * scale, y - 60 * scale, x - 87 * scale, y - 52 * scale);
  line(x - 81 * scale, y - 60 * scale, x - 81 * scale, y - 52 * scale);
  line(x - 75 * scale, y - 60 * scale, x - 75 * scale, y - 52 * scale);
  line(x - 69 * scale, y - 60 * scale, x - 69 * scale, y - 52 * scale);
  line(x - 63 * scale, y - 60 * scale, x - 63 * scale, y - 52 * scale);

  line(x - 52 * scale, y - 60 * scale, x - 52 * scale, y - 52 * scale);
  line(x - 46 * scale, y - 60 * scale, x - 46 * scale, y - 52 * scale);
  line(x - 40 * scale, y - 60 * scale, x - 40 * scale, y - 52 * scale);
  line(x - 34 * scale, y - 60 * scale, x - 34 * scale, y - 52 * scale);
  line(x - 28 * scale, y - 60 * scale, x - 28 * scale, y - 52 * scale);
  line(x - 22 * scale, y - 60 * scale, x - 22 * scale, y - 52 * scale);
  line(x - 16 * scale, y - 60 * scale, x - 16 * scale, y - 52 * scale);
  line(x - 10 * scale, y - 60 * scale, x - 10 * scale, y - 52 * scale);
  line(x - 4 * scale, y - 60 * scale, x - 4 * scale, y - 52 * scale);
}

function lunarLander(x, y, scale) {
  // Wooden blue wall
  fill(100, 200, 255);
  noStroke();
  rect(x - 100 * scale, y - 100 * scale, 110 * scale, 40 * scale);

  stroke(110, 150, 200);
  strokeWeight(1 * scale);
  line(x - 100 * scale, y - 69 * scale, x + 10 * scale, y - 69 * scale);
  line(x - 100 * scale, y - 80 * scale, x + 10 * scale, y - 80 * scale);
  line(x - 100 * scale, y - 91 * scale, x + 10 * scale, y - 91 * scale);

  // Wooden pink wall
  fill(225, 150, 160);
  noStroke();
  rect(x - 100 * scale, y - 60 * scale, 100 * scale, 70 * scale);
  stroke(205, 120, 140);
  strokeWeight(1 * scale);
  line(x - 100 * scale, y - 51 * scale, x + 0 * scale, y - 51 * scale);
  line(x - 100 * scale, y - 41 * scale, x + 0 * scale, y - 41 * scale);
  line(x - 100 * scale, y - 31 * scale, x + 0 * scale, y - 31 * scale);
  line(x - 100 * scale, y - 21 * scale, x + 0 * scale, y - 21 * scale);
  line(x - 100 * scale, y - 11 * scale, x + 0 * scale, y - 11 * scale);
  line(x - 100 * scale, y - 1 * scale, x + 0 * scale, y - 1 * scale);

  noStroke();
  fill(190, 190, 170);
  rect(x - 100 * scale, y - 60 * scale, 4 * scale, 70 * scale);

  // door
  fill(210, 210, 190);
  stroke(180, 180, 170);
  strokeWeight(1 * scale);
  rect(x - 50 * scale, y - 47 * scale, 40 * scale, 57 * scale);
  rect(x - 52 * scale, y - 49 * scale, 44 * scale, 7 * scale);

  fill(65, 54, 38);
  stroke(55, 50, 33);
  rect(x - 45 * scale, y - 42 * scale, 30 * scale, 52 * scale);
  rect(x - 41 * scale, y - 38 * scale, 22 * scale, 22 * scale);
  rect(x - 36 * scale, y - 33 * scale, 12 * scale, 12 * scale);
  rect(x - 41 * scale, y - 13 * scale, 10 * scale, 7 * scale);
  rect(x - 29 * scale, y - 13 * scale, 10 * scale, 7 * scale);
  rect(x - 41 * scale, y - 3 * scale, 22 * scale, 10 * scale);

  noStroke();
  fill(220, 200, 0);
  ellipse(x - 43 * scale, y - 14.5 * scale, 2.5 * scale);
  fill(200, 190, 0);
  ellipse(x - 43 * scale, y - 14.5 * scale, 2.4 * scale);
  fill(190, 160, 0);
  ellipse(x - 43 * scale, y - 14.5 * scale, 2.2 * scale);
  fill(190, 150, 0);
  ellipse(x - 43 * scale, y - 14.5 * scale, 1.5 * scale);

  // window
  fill(210, 210, 190);
  stroke(180, 180, 170);
  strokeWeight(1 * scale);
  rect(x - 90 * scale, y - 47 * scale, 26 * scale, 36 * scale);
  noStroke();
  fill(180, 60, 180);
  rect(x - 87 * scale, y - 45 * scale, 20 * scale, 32 * scale);
  fill(180, 160, 0);
  rect(x - 85 * scale, y - 43 * scale, 16 * scale, 14 * scale);
  rect(x - 85 * scale, y - 27 * scale, 16 * scale, 8 * scale);
  fill(50, 50, 0);
  rect(x - 85 * scale, y - 21 * scale, 16 * scale, 6 * scale);
  stroke(210, 210, 210);
  strokeWeight(1 * scale);
  line(x - 77 * scale, y - 21 * scale, x - 77 * scale, y - 19 * scale);

  // shadows on pink & blue wall
  noStroke();
  fill(0, 0, 0, 30);
  rect(x - 100 * scale, y - 100 * scale, 110 * scale, 20 * scale);
  fill(0, 0, 0, 30);
  rect(x - 101 * scale, y - 60 * scale, 100 * scale, 15 * scale);
  stroke(0, 0, 0, 30);
  strokeWeight(2 * scale);
  decorPorch(x + (5 * scale) / 2, y + (32 * scale) / 2, scale);
  noStroke();
  // Porch
  fill(210, 210, 190);
  rect(x - 101 * scale, y - 100 * scale, 5 * scale, 110 * scale);
  rect(x - 60 * scale, y - 100 * scale, 5 * scale, 110 * scale);
  strokeWeight(2 * scale);
  stroke(210, 210, 190);
  // Rail on porch
  line(x - 97 * scale, y - 8 * scale, x - 60 * scale, y - 8 * scale);
  line(x - 97 * scale, y + 6 * scale, x - 60 * scale, y + 6 * scale);

  line(x - 93 * scale, y - 8 * scale, x - 93 * scale, y + 6 * scale);
  line(x - 87 * scale, y - 8 * scale, x - 87 * scale, y + 6 * scale);
  line(x - 81 * scale, y - 8 * scale, x - 81 * scale, y + 6 * scale);
  line(x - 75 * scale, y - 8 * scale, x - 75 * scale, y + 6 * scale);
  line(x - 69 * scale, y - 8 * scale, x - 69 * scale, y + 6 * scale);
  line(x - 63 * scale, y - 8 * scale, x - 63 * scale, y + 6 * scale);
  // Decor above porch
  decorPorch(x, y, scale);

  // Floor on porch
  strokeWeight(2 * scale);
  stroke(200, 110, 200);
  fill(65, 54, 38);
  rect(x - 100 * scale, y + 10 * scale, 100 * scale, 10 * scale);
  strokeWeight(1 * scale);
  stroke(55, 50, 33);
  line(x - 90 * scale, y + 11.5 * scale, x - 94 * scale, y + 18.5 * scale);
  line(x - 80 * scale, y + 11.5 * scale, x - 84 * scale, y + 18.5 * scale);
  line(x - 70 * scale, y + 11.5 * scale, x - 74 * scale, y + 18.5 * scale);
  line(x - 60 * scale, y + 11.5 * scale, x - 64 * scale, y + 18.5 * scale);
  line(x - 50 * scale, y + 11.5 * scale, x - 54 * scale, y + 18.5 * scale);
  line(x - 40 * scale, y + 11.5 * scale, x - 44 * scale, y + 18.5 * scale);
  line(x - 30 * scale, y + 11.5 * scale, x - 34 * scale, y + 18.5 * scale);
  line(x - 20 * scale, y + 11.5 * scale, x - 24 * scale, y + 18.5 * scale);
  line(x - 10 * scale, y + 11.5 * scale, x - 14 * scale, y + 18.5 * scale);

  // Stairs
  fill(210, 210, 190);
  noStroke();
  rect(x - 101 * scale, y + 8 * scale, 101 * scale, 2 * scale);
  rect(x - 7 * scale, y + 10 * scale, 4 * scale, 16 * scale);
  rect(x - 52 * scale, y + 10 * scale, 4 * scale, 16 * scale);
  rect(x - 55 * scale, y + 12 * scale, 54 * scale, 3 * scale);
  rect(x - 55 * scale, y + 20 * scale, 54 * scale, 3 * scale);

  // green wood walls
  fill(180, 210, 90);
  rect(x + 30 * scale, y - 60 * scale, 55 * scale, 90 * scale);
  stroke(160, 190, 70);
  strokeWeight(1 * scale);
  line(x + 30 * scale, y - 50 * scale, x + 85 * scale, y - 50 * scale);
  line(x + 30 * scale, y - 35 * scale, x + 85 * scale, y - 35 * scale);
  line(x + 30 * scale, y - 20 * scale, x + 85 * scale, y - 20 * scale);
  line(x + 30 * scale, y - 5 * scale, x + 85 * scale, y - 5 * scale);
  line(x + 30 * scale, y + 10 * scale, x + 85 * scale, y + 10 * scale);
  fill(160, 190, 70);
  noStroke();
  beginShape();
  vertex(x + 30 * scale, y + 30 * scale);
  vertex(x + 0 * scale, y + 22 * scale);
  vertex(x + 0 * scale, y - 68 * scale);
  vertex(x + 30 * scale, y - 60 * scale);
  endShape();
  beginShape();
  vertex(x + 85 * scale, y + 30 * scale);
  vertex(x + 115 * scale, y + 22 * scale);
  vertex(x + 115 * scale, y - 68 * scale);
  vertex(x + 85 * scale, y - 60 * scale);
  endShape();

  stroke(140, 170, 50);
  strokeWeight(1 * scale);
  line(x + 30 * scale, y - 50 * scale, x + 0 * scale, y - 58 * scale);
  line(x + 30 * scale, y - 35 * scale, x + 0 * scale, y - 43 * scale);
  line(x + 30 * scale, y - 20 * scale, x + 0 * scale, y - 28 * scale);
  line(x + 30 * scale, y - 5 * scale, x + 0 * scale, y - 13 * scale);
  line(x + 30 * scale, y + 10 * scale, x + 0 * scale, y + 2 * scale);

  line(x + 85 * scale, y - 50 * scale, x + 115 * scale, y - 58 * scale);
  line(x + 85 * scale, y - 35 * scale, x + 115 * scale, y - 43 * scale);
  line(x + 85 * scale, y - 20 * scale, x + 115 * scale, y - 28 * scale);
  line(x + 85 * scale, y - 5 * scale, x + 115 * scale, y - 13 * scale);
  line(x + 85 * scale, y + 10 * scale, x + 115 * scale, y + 2 * scale);

  // windows on green facade
  // middle window
  fill(210, 210, 190);
  stroke(180, 180, 170);
  strokeWeight(1 * scale);
  rect(x + 45 * scale, y - 47 * scale, 26 * scale, 36 * scale);
  noStroke();
  fill(180, 60, 180);
  rect(x + 48 * scale, y - 45 * scale, 20 * scale, 32 * scale);
  fill(180, 160, 0);
  rect(x + 50 * scale, y - 43 * scale, 16 * scale, 14 * scale);
  fill(50, 50, 0);
  rect(x + 50 * scale, y - 27 * scale, 16 * scale, 12 * scale);
  stroke(210, 210, 210);
  strokeWeight(1 * scale);
  line(x + 58 * scale, y - 26.5 * scale, x + 58 * scale, y - 24.5 * scale);
  // left window
  fill(190, 190, 170);
  stroke(180, 180, 170);
  strokeWeight(1 * scale);
  beginShape();
  vertex(x + 22 * scale, y - 14 * scale);
  vertex(x + 22 * scale, y - 50 * scale);
  vertex(x + 7 * scale, y - 54 * scale);
  vertex(x + 7 * scale, y - 18 * scale);
  vertex(x + 22 * scale, y - 14 * scale);
  endShape();
  noStroke();
  fill(170, 50, 170);
  beginShape();
  vertex(x + 20 * scale, y - 17 * scale);
  vertex(x + 20 * scale, y - 48 * scale);
  vertex(x + 9 * scale, y - 51 * scale);
  vertex(x + 9 * scale, y - 20 * scale);
  vertex(x + 20 * scale, y - 17 * scale);
  endShape();
  fill(160, 140, 0);
  beginShape();
  vertex(x + 18.5 * scale, y - 32.5 * scale);
  vertex(x + 18.5 * scale, y - 46.5 * scale);
  vertex(x + 10.5 * scale, y - 48.6 * scale);
  vertex(x + 10.5 * scale, y - 34.5 * scale);
  vertex(x + 18.5 * scale, y - 32.5 * scale);
  endShape();
  fill(50, 50, 0);
  beginShape();
  vertex(x + 18.5 * scale, y - 19.5 * scale);
  vertex(x + 18.5 * scale, y - 30.5 * scale);
  vertex(x + 10.5 * scale, y - 32.6 * scale);
  vertex(x + 10.5 * scale, y - 21.8 * scale);
  vertex(x + 18.5 * scale, y - 19.5 * scale);
  endShape();
  stroke(210, 210, 210);
  strokeWeight(1 * scale);
  line(x + 14 * scale, y - 30 * scale, x + 14 * scale, y - 31.3 * scale);
  // right window
  fill(190, 190, 170);
  stroke(180, 180, 170);
  strokeWeight(1 * scale);
  beginShape();
  vertex(x + 109 * scale, y - 18 * scale);
  vertex(x + 109 * scale, y - 54 * scale);
  vertex(x + 94 * scale, y - 50.5 * scale);
  vertex(x + 94 * scale, y - 14 * scale);
  vertex(x + 109 * scale, y - 18 * scale);
  endShape();
  noStroke();
  fill(170, 50, 170);
  beginShape();
  vertex(x + 107 * scale, y - 20 * scale);
  vertex(x + 107 * scale, y - 51 * scale);
  vertex(x + 96 * scale, y - 48.5 * scale);
  vertex(x + 96 * scale, y - 17 * scale);
  vertex(x + 107 * scale, y - 20 * scale);
  endShape();
  fill(160, 140, 0);
  beginShape();
  vertex(x + 105.5 * scale, y - 34.5 * scale);
  vertex(x + 105.5 * scale, y - 48.6 * scale);
  vertex(x + 97.5 * scale, y - 46.8 * scale);
  vertex(x + 97.5 * scale, y - 32.5 * scale);
  vertex(x + 105.5 * scale, y - 34.5 * scale);
  endShape();
  fill(50, 50, 0);
  beginShape();
  vertex(x + 105.5 * scale, y - 21.5 * scale);
  vertex(x + 105.5 * scale, y - 32.5 * scale);
  vertex(x + 97.5 * scale, y - 30.6 * scale);
  vertex(x + 97.5 * scale, y - 19.5 * scale);
  vertex(x + 105.5 * scale, y - 21.5 * scale);
  endShape();
  stroke(210, 210, 210);
  strokeWeight(1 * scale);
  line(x + 101.1 * scale, y - 29.5 * scale, x + 101.1 * scale, y - 31 * scale);

  // white decor on green farcade
  noStroke();
  fill(210, 210, 190);
  rect(x + 30 * scale, y - 10 * scale, 55 * scale, 6 * scale);
  rect(x + 30 * scale, y + 10 * scale, 55 * scale, 4 * scale);

  fill(190, 190, 170);
  beginShape();
  vertex(x + 30 * scale, y - 10 * scale);
  vertex(x + 0 * scale, y - 18 * scale);
  vertex(x + 0 * scale, y - 12 * scale);
  vertex(x + 30 * scale, y - 4 * scale);
  endShape();
  beginShape();
  vertex(x + 85 * scale, y - 10 * scale);
  vertex(x + 115 * scale, y - 18 * scale);
  vertex(x + 115 * scale, y - 12 * scale);
  vertex(x + 85 * scale, y - 4 * scale);
  endShape();
  beginShape();
  vertex(x + 30 * scale, y + 14 * scale);
  vertex(x + 0 * scale, y + 6 * scale);
  vertex(x + 0 * scale, y + 2 * scale);
  vertex(x + 30 * scale, y + 10 * scale);
  endShape();
  beginShape();
  vertex(x + 85 * scale, y + 14 * scale);
  vertex(x + 115 * scale, y + 6 * scale);
  vertex(x + 115 * scale, y + 2 * scale);
  vertex(x + 85 * scale, y + 10 * scale);
  endShape();
  // Brown wooden detail in bottom of green walls
  stroke(55, 50, 33);
  fill(65, 54, 38);
  rect(x + 35 * scale, y + 18 * scale, 45 * scale, 9 * scale);
  beginShape();
  vertex(x + 25 * scale, y + 26 * scale);
  vertex(x + 25 * scale, y + 17 * scale);
  vertex(x + 4 * scale, y + 11 * scale);
  vertex(x + 4 * scale, y + 20 * scale);
  vertex(x + 25 * scale, y + 26 * scale);
  endShape();
  beginShape();
  vertex(x + 90 * scale, y + 26 * scale);
  vertex(x + 90 * scale, y + 17 * scale);
  vertex(x + 111 * scale, y + 11 * scale);
  vertex(x + 111 * scale, y + 20 * scale);
  vertex(x + 90 * scale, y + 26 * scale);
  endShape();

  // Shadow on green wall
  fill(0, 0, 0, 30);
  noStroke();
  beginShape();
  vertex(x + 0 * scale, y - 56 * scale);
  vertex(x + 30 * scale, y - 48 * scale);
  vertex(x + 85 * scale, y - 48 * scale);
  vertex(x + 115.5 * scale, y - 56 * scale);
  vertex(x + 115 * scale, y - 68 * scale);
  vertex(x + 0 * scale, y - 67 * scale);
  endShape();

  // Roof
  fill(40, 40, 40);
  strokeWeight(1 * scale);
  stroke(25, 25, 25);
  beginShape();
  vertex(x - 115 * scale, y - 85 * scale);
  vertex(x - 100 * scale, y - 160 * scale);
  vertex(x + 40 * scale, y - 162 * scale);
  vertex(x + 40 * scale, y - 177 * scale);
  vertex(x + 115 * scale, y - 187 * scale);
  vertex(x + 120 * scale, y - 110 * scale);
  vertex(x + 105 * scale, y - 110 * scale);
  vertex(x + 10 * scale, y - 105 * scale);
  vertex(x + 0 * scale, y - 85 * scale);
  endShape();

  // little yellow window "hut"
  fill(230, 210, 130);
  noStroke();
  beginShape();
  vertex(x - 82 * scale, y - 100 * scale);
  vertex(x - 82 * scale, y - 136 * scale);
  vertex(x - 57 * scale, y - 170 * scale);
  vertex(x - 32 * scale, y - 136 * scale);
  vertex(x - 32 * scale, y - 100 * scale);
  endShape();
  stroke(210, 190, 110);
  strokeWeight(1 * scale);
  line(x - 62 * scale, y - 162 * scale, x - 52 * scale, y - 162 * scale);
  line(x - 68 * scale, y - 154 * scale, x - 46 * scale, y - 154 * scale);
  line(x - 74 * scale, y - 146 * scale, x - 40 * scale, y - 146 * scale);
  line(x - 80 * scale, y - 138 * scale, x - 34 * scale, y - 138 * scale);
  line(x - 82 * scale, y - 130 * scale, x - 32 * scale, y - 130 * scale);
  line(x - 82 * scale, y - 122 * scale, x - 32 * scale, y - 122 * scale);
  line(x - 82 * scale, y - 114 * scale, x - 32 * scale, y - 114 * scale);
  line(x - 82 * scale, y - 106 * scale, x - 32 * scale, y - 106 * scale);

  // Shadow from "hut" roof
  fill(0, 0, 0, 30);
  noStroke();
  beginShape();
  vertex(x - 80 * scale, y - 130 * scale);
  vertex(x - 88 * scale, y - 130 * scale);
  vertex(x - 57 * scale, y - 175 * scale);
  vertex(x - 57 * scale, y - 165 * scale);
  endShape();
  beginShape();
  vertex(x - 34 * scale, y - 130 * scale);
  vertex(x - 26 * scale, y - 130 * scale);
  vertex(x - 57 * scale, y - 175 * scale);
  vertex(x - 57 * scale, y - 165 * scale);
  endShape();

  // roof on little yellow "hut"
  fill(100, 200, 255);
  noStroke();
  beginShape();
  vertex(x - 80 * scale, y - 135 * scale);
  vertex(x - 88 * scale, y - 135 * scale);
  vertex(x - 57 * scale, y - 180 * scale);
  vertex(x - 57 * scale, y - 170 * scale);
  endShape();
  beginShape();
  vertex(x - 34 * scale, y - 135 * scale);
  vertex(x - 26 * scale, y - 135 * scale);
  vertex(x - 57 * scale, y - 180 * scale);
  vertex(x - 57 * scale, y - 170 * scale);
  endShape();

  // window on small yellow wall

  fill(210, 210, 190);
  stroke(180, 180, 170);
  strokeWeight(1 * scale);
  rect(x - 70 * scale, y - 145 * scale, 26 * scale, 36 * scale);
  noStroke();
  fill(180, 60, 180);
  rect(x - 67 * scale, y - 143 * scale, 20 * scale, 32 * scale);
  fill(180, 160, 0);
  rect(x - 65 * scale, y - 141 * scale, 16 * scale, 14 * scale);
  rect(x - 65 * scale, y - 125 * scale, 16 * scale, 8 * scale);
  fill(50, 50, 0);
  rect(x - 65 * scale, y - 119 * scale, 16 * scale, 6 * scale);
  stroke(210, 210, 210);
  strokeWeight(1 * scale);
  line(x - 57 * scale, y - 119 * scale, x - 57 * scale, y - 117 * scale);

  // Bigger yellow farcade above green walls
  noStroke();
  fill(155, 125, 45);
  beginShape();
  vertex(x - 4 * scale, y - 60 * scale);
  vertex(x + 120 * scale, y - 60 * scale);
  vertex(x + 124 * scale, y - 70 * scale);
  vertex(x - 8 * scale, y - 70 * scale);
  endShape();
  fill(230, 210, 130);
  beginShape();
  vertex(x - 8 * scale, y - 70 * scale);
  vertex(x + 0 * scale, y - 72 * scale);
  vertex(x + 3 * scale, y - 76 * scale);
  vertex(x + 7 * scale, y - 82 * scale);

  vertex(x + 9 * scale, y - 90 * scale);
  vertex(x + 10 * scale, y - 95 * scale);
  vertex(x + 10 * scale, y - 110 * scale);

  vertex(x + 56 * scale, y - 225 * scale);

  vertex(x + 102 * scale, y - 110 * scale);
  vertex(x + 102 * scale, y - 95 * scale);

  vertex(x + 103 * scale, y - 90 * scale);
  vertex(x + 105 * scale, y - 82 * scale);
  vertex(x + 109 * scale, y - 76 * scale);
  vertex(x + 114 * scale, y - 72 * scale);
  vertex(x + 124 * scale, y - 70 * scale);
  endShape();
  stroke(210, 190, 110);
  strokeWeight(1 * scale);
  line(x - 8 * scale, y - 70 * scale, x + 124 * scale, y - 70 * scale);
  line(x + 0 * scale, y - 72 * scale, x + 114 * scale, y - 72 * scale);
  line(x + 3 * scale, y - 76 * scale, x + 109 * scale, y - 76 * scale);
  line(x + 7 * scale, y - 82 * scale, x + 105 * scale, y - 82 * scale);
  line(x + 9 * scale, y - 90 * scale, x + 103 * scale, y - 90 * scale);
  line(x + 10 * scale, y - 100 * scale, x + 102 * scale, y - 100 * scale);
  line(x + 10 * scale, y - 110 * scale, x + 102 * scale, y - 110 * scale);
  line(x + 14 * scale, y - 120 * scale, x + 98 * scale, y - 120 * scale);
  line(x + 18 * scale, y - 130 * scale, x + 94 * scale, y - 130 * scale);
  line(x + 22 * scale, y - 140 * scale, x + 90 * scale, y - 140 * scale);
  line(x + 26 * scale, y - 150 * scale, x + 86 * scale, y - 150 * scale);
  line(x + 30 * scale, y - 160 * scale, x + 82 * scale, y - 160 * scale);
  line(x + 34 * scale, y - 170 * scale, x + 78 * scale, y - 170 * scale);
  line(x + 38 * scale, y - 180 * scale, x + 74 * scale, y - 180 * scale);
  line(x + 42 * scale, y - 190 * scale, x + 70 * scale, y - 190 * scale);
  line(x + 46 * scale, y - 200 * scale, x + 66 * scale, y - 200 * scale);
  line(x + 50 * scale, y - 210 * scale, x + 62 * scale, y - 210 * scale);
  line(x + 55 * scale, y - 220 * scale, x + 58 * scale, y - 220 * scale);

  // Window on bigger yellow farcade
  fill(210, 210, 190);
  stroke(180, 180, 170);
  strokeWeight(1 * scale);
  rect(x + 41 * scale, y - 145 * scale, 30 * scale, 42 * scale);
  noStroke();
  fill(180, 60, 180);
  rect(x + 44 * scale, y - 143 * scale, 24 * scale, 38 * scale);
  fill(180, 160, 0);
  rect(x + 46 * scale, y - 141 * scale, 20 * scale, 14 * scale);
  rect(x + 46 * scale, y - 125 * scale, 20 * scale, 9 * scale);
  fill(50, 50, 0);
  rect(x + 46 * scale, y - 116 * scale, 20 * scale, 8 * scale);
  stroke(210, 210, 210);
  strokeWeight(1 * scale);
  line(x + 56 * scale, y - 116 * scale, x + 56 * scale, y - 114 * scale);

  // shadow from roof
  fill(0, 0, 0, 30);
  noStroke();
  beginShape();
  vertex(x + 102 * scale, y - 78 * scale);
  vertex(x + 114 * scale, y - 75 * scale);
  vertex(x + 56 * scale, y - 228 * scale);
  vertex(x + 56 * scale, y - 205 * scale);
  endShape();
  beginShape();
  vertex(x + 9 * scale, y - 78 * scale);
  vertex(x - 2 * scale, y - 75 * scale);
  vertex(x + 56 * scale, y - 228 * scale);
  vertex(x + 56 * scale, y - 205 * scale);
  endShape();

  // roof on big yellow "hut"
  fill(100, 200, 255);
  noStroke();
  beginShape();
  vertex(x + 105 * scale, y - 82 * scale);
  vertex(x + 114 * scale, y - 82 * scale);
  vertex(x + 56 * scale, y - 235 * scale);
  vertex(x + 56 * scale, y - 215 * scale);
  endShape();
  beginShape();
  vertex(x + 7 * scale, y - 82 * scale);
  vertex(x - 2 * scale, y - 82 * scale);
  vertex(x + 56 * scale, y - 235 * scale);
  vertex(x + 56 * scale, y - 215 * scale);
  endShape();

  // Chimney
  fill(70, 55, 40);
  stroke(55, 50, 35);
  strokeWeight(1 * scale);
  rect(x - 5 * scale, y - 195 * scale, 18 * scale, 40 * scale);
  fill(50, 45, 30);
  stroke(45, 40, 25);
  rect(x - 7 * scale, y - 195 * scale, 22 * scale, 5 * scale);
  stroke(55, 50, 35);
  fill(70, 55, 40);
  rect(x - 5 * scale, y - 164 * scale, 9 * scale, 4 * scale);
  rect(x + 4 * scale, y - 172 * scale, 9 * scale, 4 * scale);
  rect(x - 5 * scale, y - 180 * scale, 9 * scale, 4 * scale);
  rect(x + 0 * scale, y - 188 * scale, 9 * scale, 4 * scale);
  fill(100, 100, 100);
  stroke(80, 80, 80);
  rect(x - 6 * scale, y - 156 * scale, 20 * scale, 2 * scale);

  // strings to balloons
  stroke(140, 140, 140);
  strokeWeight(0.5 * scale);
  line(x + 2 * scale, y - 196 * scale, x - 5 * scale, y - 320 * scale);
  line(x + 2 * scale, y - 196 * scale, x + 7 * scale, y - 340 * scale);
  line(x + 2 * scale, y - 196 * scale, x - 1 * scale, y - 320 * scale);
  line(x + 2 * scale, y - 196 * scale, x + 2 * scale, y - 340 * scale);
  line(x + 2 * scale, y - 196 * scale, x - 5 * scale, y - 340 * scale);
  line(x + 2 * scale, y - 196 * scale, x + 10 * scale, y - 340 * scale);
  line(x + 2 * scale, y - 196 * scale, x - 8 * scale, y - 320 * scale);
  line(x + 2 * scale, y - 196 * scale, x + 14 * scale, y - 340 * scale);
  // balloons
  noStroke();
  fill(205, 50, 255, 220);
  ellipse(x + 0 * scale, y - 300 * scale, 80 * scale);
  ellipse(x - 50 * scale, y - 400 * scale, 70 * scale);
  ellipse(x + 50 * scale, y - 420 * scale, 50 * scale);
  fill(205, 255, 50, 220);
  ellipse(x + 0 * scale, y - 420 * scale, 60 * scale);
  ellipse(x + 50 * scale, y - 320 * scale, 40 * scale);
  ellipse(x - 40 * scale, y - 340 * scale, 90 * scale);
  fill(50, 205, 50, 220);
  ellipse(x + 20 * scale, y - 370 * scale, 80 * scale);
  ellipse(x - 50 * scale, y - 450 * scale, 60 * scale);
  ellipse(x - 40 * scale, y - 280 * scale, 50 * scale);
  fill(50, 50, 205, 220);
  ellipse(x + 70 * scale, y - 370 * scale, 60 * scale);
  ellipse(x - 80 * scale, y - 430 * scale, 50 * scale);
  ellipse(x - 70 * scale, y - 300 * scale, 40 * scale);
  fill(250, 50, 70, 220);
  ellipse(x + 0 * scale, y - 470 * scale, 60 * scale);
  ellipse(x - 80 * scale, y - 380 * scale, 70 * scale);
  ellipse(x + 40 * scale, y - 290 * scale, 30 * scale);
  ellipse(x - 10 * scale, y - 390 * scale, 30 * scale);
  fill(200, 120, 0, 220);
  ellipse(x + 30 * scale, y - 450 * scale, 40 * scale);
  ellipse(x - 80 * scale, y - 470 * scale, 30 * scale);
  ellipse(x - 90 * scale, y - 340 * scale, 30 * scale);
  ellipse(x + 80 * scale, y - 390 * scale, 30 * scale);
}

lunarLander(200, 400, 0.7);
