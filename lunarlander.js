const x = 300;
const y = 400;
const scale = 1;

// Wooden blue wall
fill(100, 200, 255);
noStroke();
rect(x - 100 * scale, y - 100 * scale, 110 * scale, 40 * scale);
fill(80, 180, 230);
rect(x - 100 * scale, y - 100 * scale, 110 * scale, 5 * scale);
stroke(110, 150, 200);
strokeWeight(1 * scale);
line(x - 100 * scale, y - 69 * scale, x + 10 * scale, y - 69 * scale);
line(x - 100 * scale, y - 80 * scale, x + 10 * scale, y - 80 * scale);
line(x - 100 * scale, y - 91 * scale, x + 10 * scale, y - 91 * scale);

// Wooden pink wall
fill(225, 150, 160);
noStroke();
rect(x - 100 * scale, y - 60 * scale, 100 * scale, 70 * scale);
fill(205, 140, 145);
rect(x - 100 * scale, y - 60 * scale, 100 * scale, 15 * scale);
stroke(205, 120, 140);
strokeWeight(1 * scale);
line(x - 100 * scale, y - 51 * scale, x + 0 * scale, y - 51 * scale);
line(x - 100 * scale, y - 41 * scale, x + 0 * scale, y - 41 * scale);
line(x - 100 * scale, y - 31 * scale, x + 0 * scale, y - 31 * scale);
line(x - 100 * scale, y - 21 * scale, x + 0 * scale, y - 21 * scale);
line(x - 100 * scale, y - 11 * scale, x + 0 * scale, y - 11 * scale);
line(x - 100 * scale, y - 1 * scale, x + 0 * scale, y - 1 * scale);

// door

noStroke();
fill(210, 210, 190);
stroke(180, 180, 170);
strokeWeight(1 * scale);
rect(x - 50 * scale, y - 47 * scale, 40 * scale, 57 * scale);
rect(x - 52 * scale, y - 49 * scale, 44 * scale, 10 * scale);
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
