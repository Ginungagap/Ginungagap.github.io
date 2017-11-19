var cell = new Array(9);
for (i=0; i<9; i++) cell[i] = 0;

function checkEnd() {
   no = false;
  for (i=0; i<9; i++) if (cell[i] == 0) no = true;
  if (no == false) {
    alert("Ничья.");
    location.reload();
  }
}

function move(id, role) {
  if(cell[id]) return false;
	cell[id] = role;
	document.getElementById(id).className = 'cell ' + role;
  !checkEnd()
  console.log(cell);
  CompTurn()
 }

function ai(id, role) {
  cell[id] = role;
	document.getElementById(id).className = 'cell ' + role;
}

function CheckVictory() {
  if (cell[0] == cell[1] && cell[1] == cell[2] && cell[2] == 'ai') return true; 
  if (cell[3] == cell[4] && cell[4] == cell[5] && cell[5] == 'ai') return true;
  if (cell[6] == cell[7] && cell[7] == cell[8] && cell[8] == 'ai') return true;
  if (cell[6] == cell[3] && cell[3] == cell[0] && cell[0] == 'ai') return true;
  if (cell[7] == cell[4] && cell[4] == cell[1] && cell[1] == 'ai') return true;
  if (cell[8] == cell[5] && cell[5] == cell[2] && cell[2] == 'ai') return true;
  if (cell[6] == cell[4] && cell[4] == cell[2] && cell[2] == 'ai') return true;
  if (cell[0] == cell[4] && cell[4] == cell[8] && cell[8] == 'ai') return true;
}

function CompTurn() {
  
  for (i=0; i<9; i++) if (cell[i] == 0) PutHere = i;
  if (cell[4] == 0) PutHere = 4;
  if (cell[0] == cell[4] && cell[8] == 'player' && cell[0] == 0) PutHere = 0;
  if (cell[1] == cell[3] && cell[3] == 'player') PutHere = 0;
  if (cell[7] == cell[3] && cell[3] == 'player') PutHere = 6;
  if (cell[4] == cell[0] && cell[4] == 'player') PutHere = 6;
  if (cell[2] == cell[6] && cell[2] == 'player') PutHere = 7;
  if (cell[1] == cell[3] && cell[1] == cell[8] && cell[1] == 'player') PutHere = 7;
  if (cell[7] == cell[3] && cell[7] == cell[2] && cell[7] == 'player') PutHere = 1;
  
  if (cell[0] == cell[1] && cell[2] == 0 && cell[0] !== 0) PutHere = 2;
  if (cell[0] == cell[2] && cell[1] == 0 && cell[0] !== 0) PutHere = 1;
  if (cell[1] == cell[2] && cell[0] == 0 && cell[2] !== 0) PutHere = 0;
  if (cell[3] == cell[4] && cell[5] == 0 && cell[3] !== 0) PutHere = 5;
  if (cell[3] == cell[5] && cell[4] == 0 && cell[3] !== 0) PutHere = 4;
  if (cell[4] == cell[5] && cell[3] == 0 && cell[5] !== 0) PutHere = 3;
  if (cell[6] == cell[7] && cell[8] == 0 && cell[6] !== 0) PutHere = 8;
  if (cell[6] == cell[8] && cell[7] == 0 && cell[6] !== 0) PutHere = 7;
  if (cell[7] == cell[8] && cell[6] == 0 && cell[8] !== 0) PutHere = 6;

  if (cell[6] == cell[3] && cell[0] == 0 && cell[6] !== 0) PutHere = 0;
  if (cell[6] == cell[0] && cell[3] == 0 && cell[6] !== 0) PutHere = 3;
  if (cell[3] == cell[0] && cell[6] == 0 && cell[3] !== 0) PutHere = 6;
  if (cell[7] == cell[4] && cell[1] == 0 && cell[7] !== 0) PutHere = 1;
  if (cell[7] == cell[1] && cell[4] == 0 && cell[7] !== 0) PutHere = 4;
  if (cell[4] == cell[1] && cell[7] == 0 && cell[4] !== 0) PutHere = 7;
  if (cell[8] == cell[5] && cell[2] == 0 && cell[8] !== 0) PutHere = 2;
  if (cell[8] == cell[2] && cell[5] == 0 && cell[8] !== 0) PutHere = 5;
  if (cell[5] == cell[2] && cell[8] == 0 && cell[5] !== 0) PutHere = 8;

  if (cell[6] == cell[4] && cell[2] == 0 && cell[6] !== 0) PutHere = 2;
  if (cell[6] == cell[2] && cell[4] == 0 && cell[6] !== 0) PutHere = 4;
  if (cell[4] == cell[2] && cell[6] == 0 && cell[4] !== 0) PutHere = 6;
  if (cell[0] == cell[4] && cell[8] == 0 && cell[0] !== 0) PutHere = 8;
  if (cell[0] == cell[8] && cell[4] == 0 && cell[0] !== 0) PutHere = 4;
  if (cell[4] == cell[8] && cell[0] == 0 && cell[4] !== 0) PutHere = 0;
  
  ai(PutHere, 'ai');
  if (CheckVictory() == true) {
    alert("Выиграл JavaScript =).");
	  location.reload();
   }
}
