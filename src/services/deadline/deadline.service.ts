let cachedDeadline: Date;

async function getDeadline() {
  if (cachedDeadline === undefined) {
    const data = await fetch("./data/deadline.json").then((t) => t.json());
    cachedDeadline = data.deadline;
  }

  return new Date(cachedDeadline);
}

export const deadlineService = {
  getDeadline,
};
