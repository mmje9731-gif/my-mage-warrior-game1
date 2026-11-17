let mage = { hp: 100, maxHp: 100, mp: 100, maxMp: 100 };
let warrior = { hp: 130, maxHp: 130, rage: 0, maxRage: 100 };
let isGameOver = false;

function updateUI() {
  document.getElementById('mage-hp-text').innerText = mage.hp;
  document.getElementById('mage-hp-bar').style.width = (mage.hp / mage.maxHp * 100) + '%';
  document.getElementById('mage-mp-text').innerText = mage.mp;
  document.getElementById('mage-mp-bar').style.width = (mage.mp / mage.maxMp * 100) + '%';

  document.getElementById('warrior-hp-text').innerText = warrior.hp;
  document.getElementById('warrior-hp-bar').style.width = (warrior.hp / warrior.maxHp * 100) + '%';
  document.getElementById('warrior-rage-text').innerText = warrior.rage;
  document.getElementById('warrior-rage-bar').style.width = (warrior.rage / warrior.maxRage * 100) + '%';
}

function log(message) {
  const logBox = document.getElementById('battle-log');
  logBox.innerHTML = `<div>${message}</div>` + logBox.innerHTML;
}

function playerAction(skill) {
  if (isGameOver) return;

  if (skill === 'fireball') {
    if (mage.mp < 20) return alert('마나가 부족합니다!');
    mage.mp -= 20;
    const dmg = Math.floor(Math.random() * 15) + 18;
    warrior.hp = Math.max(0, warrior.hp - dmg);
    warrior.rage = Math.min(100, warrior.rage + 25);
    log(`🔥 마법사가 파이어볼을 날려 전사에게 <b>${dmg}</b>의 피해를 입혔습니다!`);
  } else if (skill === 'thunder') {
    if (mage.mp < 30) return alert('마나가 부족합니다!');
    mage.mp -= 30;
    const dmg = Math.floor(Math.random() * 20) + 25;
    warrior.hp = Math.max(0, warrior.hp - dmg);
    warrior.rage = Math.min(100, warrior.rage + 35);
    log(`⚡ 썬더 스트라이크 적중! 전사에게 <b>${dmg}</b>의 강력한 피해!`);
  } else if (skill === 'heal') {
    if (mage.mp < 25) return alert('마나가 부족합니다!');
    mage.mp -= 25;
    const heal = 30;
    mage.hp = Math.min(mage.maxHp, mage.hp + heal);
    log(`💚 마법사가 치유 마법으로 체력을 <b>${heal}</b> 회복했습니다.`);
  } else if (skill === 'meditate') {
    mage.mp = Math.min(mage.maxMp, mage.mp + 35);
    log(`✨ 명상을 통해 마나를 <b>35</b> 회복했습니다.`);
  }

  updateUI();
  if (checkWinner()) return;

  // 0.6초 뒤 전사 반격
  setTimeout(warriorTurn, 600);
}

function warriorTurn() {
  if (isGameOver) return;

  if (warrior.rage >= 100) {
    warrior.rage = 0;
    const dmg = 40;
    mage.hp = Math.max(0, mage.hp - dmg);
    log(`💥 전사의 분노 폭발! 파워 스트라이크로 마법사에게 <b>${dmg}</b>의 치명타!`);
  } else {
    const dmg = Math.floor(Math.random() * 12) + 12;
    mage.hp = Math.max(0, mage.hp - dmg);
    warrior.rage = Math.min(100, warrior.rage + 20);
    log(`⚔️ 전사가 검을 휘둘러 마법사에게 <b>${dmg}</b>의 피해를 입혔습니다.`);
  }

  updateUI();
  checkWinner();
}

function checkWinner() {
  if (warrior.hp <= 0) {
    log(`🎉 <b>승리! 마법사가 전사를 쓰러뜨렸습니다!</b>`);
    endGame();
    return true;
  }
  if (mage.hp <= 0) {
    log(`💀 <b>패배... 전사에게 쓰러졌습니다.</b>`);
    endGame();
    return true;
  }
  return false;
}

function endGame() {
  isGameOver = true;
  document.getElementById('controls').style.display = 'none';
  document.getElementById('restart-btn').style.display = 'inline-block';
}

function resetGame() {
  mage = { hp: 100, maxHp: 100, mp: 100, maxMp: 100 };
  warrior = { hp: 130, maxHp: 130, rage: 0, maxRage: 100 };
  isGameOver = false;
  document.getElementById('battle-log').innerHTML = '';
  document.getElementById('controls').style.display = 'block';
  document.getElementById('restart-btn').style.display = 'none';
  updateUI();
  log('⚔️ 새로운 전투가 시작되었습니다! 스킬을 선택하세요.');
}

resetGame();
