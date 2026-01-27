const STORAGE_KEY = "ai_trade_learning_progress";

const BADGE_RULES = [
  {
    id: "rsi_master",
    name: "RSI Master",
    xpRequired: 50,
  },
  {
    id: "strategy_starter",
    name: "Strategy Starter",
    xpRequired: 100,
  },
  {
    id: "market_scholar",
    name: "Market Scholar",
    xpRequired: 150,
  },
];

export function getProgress() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return {
      completedLessons: [],
      xp: 0,
      badges: [],
    };
  }

  return JSON.parse(raw);
}

export function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function unlockBadges(progress) {
  BADGE_RULES.forEach((badge) => {
    if (
      progress.xp >= badge.xpRequired &&
      !progress.badges.includes(badge.name)
    ) {
      progress.badges.push(badge.name);
    }
  });
}

export function completeLesson(lessonId) {
  const progress = getProgress();

  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    progress.xp += 50;
  }

  unlockBadges(progress);
  saveProgress(progress);

  return progress;
}
