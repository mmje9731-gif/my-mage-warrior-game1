const GUIDE_HIDE_STORAGE_KEY = "eng_rpg_hide_guide_v1";

function openGuideModal() {
  const modal = document.getElementById("guide-modal");
  const checkbox = document.getElementById("guide-hide-checkbox");
  if (!modal) return;

  if (checkbox) {
    checkbox.checked = localStorage.getItem(GUIDE_HIDE_STORAGE_KEY) === "true";
  }

  resetGuideDemo();
  modal.style.display = "flex";
}

function closeGuideModal() {
  const modal = document.getElementById("guide-modal");
  const checkbox = document.getElementById("guide-hide-checkbox");

  if (checkbox) {
    localStorage.setItem(GUIDE_HIDE_STORAGE_KEY, checkbox.checked ? "true" : "false");
  }

  if (modal) {
    modal.style.display = "none";
  }
}

function handleGuideBackdropClick(event) {
  if (event.target && event.target.id === "guide-modal") {
    closeGuideModal();
  }
}

function resetGuideDemo() {
  const resultEl = document.getElementById("guide-demo-result");
  const buttons = document.querySelectorAll(".mini-choice-btn");

  buttons.forEach((btn) => {
    btn.classList.remove("is-correct", "is-wrong");
  });

  if (resultEl) {
    resultEl.textContent = "정답을 맞히면 이렇게 공격 스킬이 나가요!";
    resultEl.style.color = "#5c3c00";
  }
}

function checkGuideDemo(clickedBtn, isCorrect) {
  const resultEl = document.getElementById("guide-demo-result");
  const buttons = document.querySelectorAll(".mini-choice-btn");

  buttons.forEach((btn) => {
    btn.classList.remove("is-correct", "is-wrong");
  });

  if (isCorrect) {
    clickedBtn.classList.add("is-correct");
    if (resultEl) {
      resultEl.textContent = '🎉 정답! "apple"은 사과예요. 몬스터에게 25 데미지 공격!';
      resultEl.style.color = "#1b5e20";
    }
  } else {
    clickedBtn.classList.add("is-wrong");
    if (resultEl) {
      resultEl.textContent = '💪 아쉽지만 괜찮아요! "apple"의 뜻을 다시 눌러 볼까요?';
      resultEl.style.color = "#9b2226";
    }
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const modal = document.getElementById("guide-modal");
    if (modal && modal.style.display === "flex") {
      closeGuideModal();
    }
  }
});

window.addEventListener("DOMContentLoaded", function () {
  const hideGuide = localStorage.getItem(GUIDE_HIDE_STORAGE_KEY) === "true";
  if (!hideGuide) {
    openGuideModal();
  }
});
